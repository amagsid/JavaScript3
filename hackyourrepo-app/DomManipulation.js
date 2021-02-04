function createElementAddClass(el, className) {
  const element = document.createElement(el);
  element.classList.add(className);
  return element;
}

const repo = document.getElementById('repo');

async function createHTMLEls(
  name,
  description,
  forks,
  updated_at,
  contributors,
) {
  repo.innerHTML = ``;
  const repoDetails = createElementAddClass('section', 'repo__details');
  const repoName = createElementAddClass('h3', 'repo-info');
  const repoDesc = createElementAddClass('h3', 'repo-desc');
  const forksEl = createElementAddClass('h3', 'fork');
  const updated = createElementAddClass('h3', 'updated');

  repo.appendChild(repoDetails);
  repoDetails.appendChild(repoName);
  repoDetails.appendChild(repoDesc);
  repoDetails.appendChild(forksEl);
  repoDetails.appendChild(updated);

  repoName.innerHTML = `Repo name:    <span> ${name} </span>`;
  repoDesc.innerHTML = `Description: <span> ${description} </span>`;
  forksEl.innerHTML = `Forks: <span> ${forks} </span>`;
  updated.innerHTML = `Date created: <span> ${updated_at} </span>`;

  const contributores = await fetchData(contributors);
  showContrib(contributores);
}

function showContrib(contributores) {
  console.log(contributores);
  const repoContrEl = createElementAddClass(`section`, `repo__contributors`);

  contributores.forEach(async (cont) => {
    const contrib = createElementAddClass(`div`, `repo__contributors__El`);
    const contribImage = createElementAddClass(
      `img`,
      `repo__contributors__El__img`,
    );
    const contribName = createElementAddClass(
      `h5`,
      `repo__contributors__El__name`,
    );
    const contribContributionsnumber = createElementAddClass(
      `span`,
      `repo__contributors__El__Contributionsnumber`,
    );

    const { login, avatar_url, contributions, html_url } = cont;

    contrib.appendChild(contribImage);
    contribImage.src = avatar_url;
    contribName.innerHTML = `<a target="_blank" href="${html_url}"> ${login} </a>`;
    contrib.appendChild(contribName);
    contribContributionsnumber.innerText = contributions;
    contrib.appendChild(contribContributionsnumber);
    repoContrEl.appendChild(contrib);
    repo.appendChild(repoContrEl);
  });
}

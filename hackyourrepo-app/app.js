'use strict';

const optionEl = document.getElementById('repo-select');
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

window.onload = async function main() {
  const reposInfo = await fetchData(url);
  optionEl.innerHTML = reposInfo
    .map((repo) => {
      return `<option data-id="${repo.id}"> ${repo.name} </option>`;
    })
    .join('');
  let repoData;
  repoData = await fetchData(
    `https://api.github.com/repos/HackYourFuture/${optionEl.value}`,
  );

  const { name, description, forks, updated_at, contributors_url } = repoData;

  createHTMLEls(name, description, forks, updated_at, contributors_url);

  optionEl.addEventListener('change', async () => {
    repoData = await fetchData(
      `https://api.github.com/repos/HackYourFuture/${optionEl.value}`,
    );
    const { name, description, forks, updated_at, contributors_url } = repoData;
    createHTMLEls(name, description, forks, updated_at, contributors_url);
  });
};

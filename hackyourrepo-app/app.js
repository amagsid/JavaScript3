//'use strict';
//console.log(placeholderRepos);
const optionEl = document.getElementById('repo-select');
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

window.onload = async function main() {
  const reposInfo = await fetchData(url);
  optionEl.innerHTML = reposInfo
    .map((repo) => {
      return `<option data-id="${repo.id}"> ${repo.name} </option>`;
    })
    .join('');
};

optionEl.addEventListener('change', async () => {
  console.log(optionEl.value);
  const repoData = await fetchData(
    `https://api.github.com/repos/HackYourFuture/${optionEl.value}`,
  );

  const { name, description, updated_at, forks, contributors_url } = repoData;

  console.log(name, description, updated_at, forks, contributors_url);

  appendElementsToDom(repoData);
});

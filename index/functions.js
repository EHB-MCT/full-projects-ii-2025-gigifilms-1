let pb = 'http://127.0.0.1:8090';

async function init() {
  const projectsFetch = await fetch(pb + '/api/collections/projects/records');
  const projectsData = await projectsFetch.json();
  console.log(projectsData);
}

init();
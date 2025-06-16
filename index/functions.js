let pb = 'https://gigifilms1.onrender.com';

async function init() {
  const projectsFetch = await fetch(pb + '/api/collections/projects/records');
  const projectsData = await projectsFetch.json();
  console.log(projectsData);
}

init();
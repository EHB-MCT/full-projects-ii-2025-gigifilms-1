// notification icon to be added when logged in
// <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M10.4946 9.49513V9.99487H1.49921V9.49513L2.4987 8.49564V5.49718C2.4987 3.94798 3.51318 2.58368 4.99742 2.1439V1.99898C4.99742 1.7339 5.10273 1.47967 5.29017 1.29223C5.47761 1.10479 5.73183 0.999489 5.99691 0.999489C6.262 0.999489 6.51622 1.10479 6.70366 1.29223C6.8911 1.47967 6.99641 1.7339 6.99641 1.99898V2.1439C8.48065 2.58368 9.49513 3.94798 9.49513 5.49718V8.49564L10.4946 9.49513ZM6.99641 10.4946C6.99641 10.7597 6.8911 11.0139 6.70366 11.2014C6.51622 11.3888 6.262 11.4941 5.99691 11.4941C5.73183 11.4941 5.47761 11.3888 5.29017 11.2014C5.10273 11.0139 4.99742 10.7597 4.99742 10.4946" fill="#862B26"/>
// </svg>
let pb = 'http://127.0.0.1:8090';

async function updateLanguage() {
  let newLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "en");
  }
  newLanguage = localStorage.getItem("language");
  const langFetch = await fetch(pb + "/api/collections/languages/records");
  const langDataArray = await langFetch.json();
  let langData;
  for (const i of langDataArray.items) {
    if (i.id == newLanguage) {
      langData = i;
    }
  }
  let translatable_elements = document.querySelectorAll("[aria-label]");
  for (const i of translatable_elements) {
    document.querySelector(`[aria-label="${i.getAttribute('aria-label')}"]`).element.innerHTML = langData[i.getAttribute('aria-label')];
  }
}

updateLanguage();
// notification icon to be added when logged in
// <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M10.4946 9.49513V9.99487H1.49921V9.49513L2.4987 8.49564V5.49718C2.4987 3.94798 3.51318 2.58368 4.99742 2.1439V1.99898C4.99742 1.7339 5.10273 1.47967 5.29017 1.29223C5.47761 1.10479 5.73183 0.999489 5.99691 0.999489C6.262 0.999489 6.51622 1.10479 6.70366 1.29223C6.8911 1.47967 6.99641 1.7339 6.99641 1.99898V2.1439C8.48065 2.58368 9.49513 3.94798 9.49513 5.49718V8.49564L10.4946 9.49513ZM6.99641 10.4946C6.99641 10.7597 6.8911 11.0139 6.70366 11.2014C6.51622 11.3888 6.262 11.4941 5.99691 11.4941C5.73183 11.4941 5.47761 11.3888 5.29017 11.2014C5.10273 11.0139 4.99742 10.7597 4.99742 10.4946" fill="#862B26"/>
// </svg>

let langDataArray;
let authData;

let pburl = 'http://10.2.89.246:8090';
const pb = new PocketBase(pburl);

async function init() {
  if (localStorage.getItem("userType") != "" && localStorage.getItem("email") != "" && localStorage.getItem("password") != "") {
    authData = await pb.collection(localStorage.getItem("userType")).authWithPassword(
      localStorage.getItem("email"),
      localStorage.getItem("password")
    );
    if (authData.token != '') {
      document.querySelector('[href*="login"]').innerHTML = `<span class="white_space_no center">${authData.record.name}</span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_869)"><path fill-rule="evenodd" clip-rule="evenodd"d="M8.6667 4.87498C8.6667 5.44961 8.43843 6.00071 8.0321 6.40703C7.62577 6.81336 7.07467 7.04163 6.50004 7.04163C5.9254 7.04163 5.3743 6.81336 4.96797 6.40703C4.56165 6.00071 4.33337 5.44961 4.33337 4.87498C4.33337 4.30034 4.56165 3.74925 4.96797 3.34292C5.3743 2.93659 5.9254 2.70832 6.50004 2.70832C7.07467 2.70832 7.62577 2.93659 8.0321 3.34292C8.43843 3.74925 8.6667 4.30034 8.6667 4.87498ZM7.58337 4.87498C7.58337 5.16229 7.46923 5.43784 7.26607 5.641C7.0629 5.84417 6.78735 5.9583 6.50004 5.9583C6.21272 5.9583 5.93717 5.84417 5.73401 5.641C5.53084 5.43784 5.41671 5.16229 5.41671 4.87498C5.41671 4.58766 5.53084 4.31211 5.73401 4.10895C5.93717 3.90578 6.21272 3.79165 6.50004 3.79165C6.78735 3.79165 7.0629 3.90578 7.26607 4.10895C7.46923 4.31211 7.58337 4.58766 7.58337 4.87498Z"fill="#862B26" /><path fill-rule="evenodd" clip-rule="evenodd"d="M6.50001 0.541664C3.20939 0.541664 0.541687 3.20936 0.541687 6.49996C0.541687 9.79057 3.20939 12.4583 6.50001 12.4583C9.79063 12.4583 12.4583 9.79057 12.4583 6.49996C12.4583 3.20936 9.79063 0.541664 6.50001 0.541664ZM1.62502 6.49996C1.62502 7.63204 2.01123 8.6742 2.65852 9.50186C3.11321 8.90502 3.69968 8.42132 4.37215 8.08852C5.04462 7.75571 5.7849 7.58281 6.53522 7.58329C7.27588 7.58243 8.00696 7.75072 8.6727 8.07532C9.33844 8.39993 9.92126 8.87229 10.3767 9.45636C10.846 8.84082 11.162 8.12236 11.2986 7.36044C11.4351 6.59853 11.3882 5.81505 11.1619 5.07484C10.9355 4.33463 10.5361 3.65896 9.99672 3.10375C9.45737 2.54854 8.79356 2.12975 8.06021 1.88202C7.32687 1.63429 6.54507 1.56474 5.77952 1.67914C5.01396 1.79354 4.28665 2.0886 3.65776 2.53989C3.02888 2.99118 2.5165 3.58574 2.16302 4.27437C1.80954 4.963 1.62512 5.72591 1.62502 6.49996ZM6.50001 11.3749C5.38088 11.3767 4.29551 10.9917 3.42768 10.2851C3.77695 9.78494 4.24191 9.37658 4.78297 9.09478C5.32403 8.81298 5.92517 8.66609 6.53522 8.66662C7.13764 8.66609 7.7315 8.80932 8.26746 9.08441C8.80341 9.3595 9.26598 9.7585 9.61675 10.2483C8.74222 10.9779 7.63894 11.3767 6.50001 11.3749Z"fill="#862B26" /></g><defs><clipPath id="clip0_3_869"><rect width="13" height="12.9999" fill="white" /></clipPath></defs></svg>`;
      if (document.querySelector('[href*="login"]').getAttribute('href').includes('../pages/')) {
        document.querySelector('[href*="login"]').setAttribute('href', '../pages/profile/');
      } else {
        document.querySelector('[href*="login"]').setAttribute('href', '../profile/');
      }
    }
  }
  let newLanguage;
  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "en");
  }
  newLanguage = localStorage.getItem("language");
  langDataArray = await pb.collection('languages').getFullList();
  let langData;
  let langSwitchHTML = "";
  for (const i of langDataArray) {
    if (i.id == newLanguage) {
      langData = i;
      currenLanguage.innerHTML = i.id.toUpperCase();
    }
    langSwitchHTML += `<span onclick="changeLanguage('${i.id}')">${i.id.toUpperCase()}</span>`;
  }
  document.querySelector("#languages > .span_hidden").innerHTML = langSwitchHTML;
  updateLanguage(langData);
}

function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  let langData;
  for (const i of langDataArray) {
    if (i.id == lang) {
      langData = i;
      currenLanguage.innerHTML = i.id.toUpperCase();
    }
  }
  updateLanguage(langData);
}

function updateLanguage(langData) {
  let translatable_elements = document.querySelectorAll("[aria-label]");
  for (const i of translatable_elements) {
    i.innerHTML = langData[i.getAttribute('aria-label')];
  }
}

init();
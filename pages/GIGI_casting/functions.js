let sliderObject;

async function fetchCast() {
  const records = await pb.collection('users').getFullList();
  console.log(records);
  renderCast(records);
}

function renderCast(ar) {
  let html = "";
  if (ar.length > 0) {
    for (const i of ar) {
      if (i.avatar == "") {
        html += `<div class="cast_item">
                  <img src="../../images/no_img.png" class="no-img" alt="">
                  <div class="flex">
                    <span class="center">${i.name}</span>
                  </div>
                </div>`
      } else {
        html += `<div class="cast_item">
                  <img src="${pburl}/api/files/${i.collectionId}/${i.id}/${i.avatar}" class="no-img" alt="">
                  <div class="flex">
                    <span class="center">${i.name}</span>
                  </div>
                </div>`
      }
    }
  } else {
    html = `<span class="center">Nothing to show</span>`
  }
  casting_list.innerHTML = html;
}

if (localStorage.getItem('userType') == 'admin' || localStorage.getItem('userType') == 'Regiseur') {
  if (localStorage.getItem('userType') == 'admin') {
    document.querySelector('body').classList = "flex column gap-30 admin";
    document.querySelector('body > div.flex.column.gap-30.wrapper').innerHTML = `<div class="grid text gap-20"><div><h1 aria-label="gigi_casting">GIGI Casting</h1></div><div><span aria-label="gigi_casting_text"> Gigi Casting focuses on streetcasting. Aiming for more diversity and authenticity on screen. <br /><br />GIGI Casting guides new talent before set, supports talent on set and counsels talent after set in taking the next steps towards a artistic practice.</span></div></div><div class="grid filter_parent gap-20"><div class="flex column gap-20"><h2 aria-label="project">Project</h2><div id="project_list" class="flex column gap-10"><span class="active">Overzicht</span><span>Lawaaimakers</span><span>Cabane</span></div></div><div class="grid gap-20"><h2 aria-label="ongoing_projects">Ongoing projects</h2><div id="projects" class="grid gap-20"><div class="arrow left center"><</div> <div class="flex column gap-20"><img src="" alt="" /><span>Lawaaimakers</span></div><div class="flex column gap-20"><img src="" alt="" /><span>Cabane</span></div><div class="arrow right center">></div></div></div></div><div class="grid filter_parent gap-20"><div class="flex column gap-20"><h2 aria-label="roles">Roles</h2><div id="rolls_list" class="flex column gap-10"><span>Gigi</span><span>Snokkie</span><span>Thierry</span><span>Rania</span><span>Zola</span><span>Yves 'Goe Gerief' Zijlmans</span><span>figuranten</span></div><input type="checkbox" id="criteria_popup_toggle" class="toggle" /><label for="criteria_popup_toggle"><h2 aria-label="criteria">Criteria</h2></label><div id="criteria_list" class="flex column gap-10"><div class="flex column"><label for="year_range" aria-label="year_of_birth">Age</label><div class="values"><span id="range1"> 0 </span><span> &dash; </span><span id="range2"> 100 </span></div><div class="container"><div class="slider-track"></div><input type="range" min="0" max="100" value="30" id="slider-1" oninput="slideOne()" /><input type="range" min="0" max="100" value="70" id="slider-2" oninput="slideTwo()" /></div></div><div class="flex column"><label for="region" aria-label="region">Region</label><input type="text" name="region" id="region" placeholder="Brussel" /></div><div class="flex column"><label for="gender" aria-label="gender">Gender</label><select name="gender" id="gender"><option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="x">X</option><option value="x">Other</option><option value="x">Prefer not to say</option></select></div><div class="flex column"><label for="length" aria-label="length">Length</label><input type="text" name="length" id="length" placeholder="1.5m-2m" /></div><div class="flex column"><label for="language" aria-label="language">Language</label><select name="language" id="language"><option value="">Select</option><option value="Dutch">Dutch</option><option value="English">English</option><option value="French">French</option></select></div><div class="flex column"><label for="sport" aria-label="sport">Sport</label><select name="sport" id="sport"><option value="">Select</option><option value="ballet">Ballet</option><option value="judo">Judo</option><option value="duiken">Diving</option></select></div><div class="flex column"><label for="hobbies" aria-label="hobbies">Hobbies</label><select name="hobbies" id="hobbies"><option value="">Select</option><option value="coding">Coding</option><option value="dans">Dance</option><option value="tekenen">Drawing</option></select></div><div class="flex column"><label for="roots" aria-label="roots">Roots</label><select name="roots" id="roots"><option value="">Select</option><option value="marokaans">Maroccan</option><option value="italiaans">Italian</option><option value="duits">German</option></select></div></div></div><div class="flex column gap-30"><h2>Candidates</h2><div id="casting_list" class="grid gap-20"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div></div></div></div>`
  } else {
    document.querySelector('body').classList = "flex column gap-30 regiseur";
    document.querySelector('body > div.flex.column.gap-30.wrapper').innerHTML = `<div class="flex column gap-30 wrapper"><div class="grid text gap-20"><div><h1 aria-label="gigi_casting">GIGI Casting</h1></div><div><span aria-label="gigi_casting_text"> Gigi Casting focuses on streetcasting. Aiming for more diversity and authenticity on screen. <br /><br />GIGI Casting guides new talent before set, supports talent on set and counsels talent after set in taking the next steps towards a artistic practice.</span></div></div><div class="grid filter_parent gap-20"><div class="flex column gap-20"><h2 aria-label="project">Project</h2><div id="project_list" class="flex column gap-10"><span class="active">Lawaaimakers</span><span>Cabane</span></div></div><div class="grid gap-20"><div class="flex gap-30"><h2 aria-label="ongoing_projects">Ongoing projects</h2><h2 aria-label="ongoing_projects">Completed</h2></div><div id="projects" class="grid gap-20"><div class="projects gap-10"><div class="flex column gap-30"><div class="castingCallUno flex"><div class="partUno"><h3>Coming soon</h3></div><div class="partDos flex column gap-10"><h3>Looking for a young adult male</h3><h4>Lawaaimakers</h4><span>short documentary film 2024-currently</span></div></div></div></div></div></div></div><div class="grid filter_parent gap-20"><div class="flex column gap-20"><h2 aria-label="roles">Roles</h2><div id="rolls_list" class="flex column gap-10"><span>Gigi</span><span>Snokkie</span><span>Thierry</span><span>Rania</span><span>Zola</span><span>Yves 'Goe Gerief' Zijlmans</span><span>figuranten</span></div><input type="checkbox" id="criteria_popup_toggle" class="toggle" /><label for="criteria_popup_toggle"><h2 aria-label="criteria">Criteria</h2></label><div id="criteria_list" class="flex column gap-10"><div class="flex column"><label for="year_range" aria-label="year_of_birth">Age</label><div class="values"><span id="range1"> 0 </span><span> &dash; </span><span id="range2"> 100 </span></div><div class="container"><div class="slider-track"></div><input type="range" min="0" max="100" value="30" id="slider-1" oninput="slideOne()" /><input type="range" min="0" max="100" value="70" id="slider-2" oninput="slideTwo()" /></div></div><div class="flex column"><label for="region" aria-label="region">Region</label><input type="text" name="region" id="region" placeholder="Brussel" /></div><div class="flex column"><label for="gender" aria-label="gender">Gender</label><select name="gender" id="gender"><option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="x">X</option><option value="x">Other</option><option value="x">Prefer not to say</option></select></div><div class="flex column"><label for="length" aria-label="length">Length</label><input type="text" name="length" id="length" placeholder="1.5m-2m" /></div><div class="flex column"><label for="language" aria-label="language">Language</label><select name="language" id="language"><option value="">Select</option><option value="Dutch">Dutch</option><option value="English">English</option><option value="French">French</option></select></div><div class="flex column"><label for="sport" aria-label="sport">Sport</label><select name="sport" id="sport"><option value="">Select</option><option value="ballet">Ballet</option><option value="judo">Judo</option><option value="duiken">Diving</option></select></div><div class="flex column"><label for="hobbies" aria-label="hobbies">Hobbies</label><select name="hobbies" id="hobbies"><option value="">Select</option><option value="coding">Coding</option><option value="dans">Dance</option><option value="tekenen">Drawing</option></select></div><div class="flex column"><label for="roots" aria-label="roots">Roots</label><select name="roots" id="roots"><option value="">Select</option><option value="marokaans">Maroccan</option><option value="italiaans">Italian</option><option value="duits">German</option></select></div></div></div><div class="flex column gap-30"><h2>Candidates</h2><div id="casting_list" class="grid gap-20"><img src="" alt="" /><img src="" alt="" /><img src="" alt=""/><img src="" alt=""/><img src="" alt="" /><img src="" alt="" /><img src="" alt=""/><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div></div></div>`
  }
  fetchCast();
  sliderObject = {
    sliderOne: document.getElementById("slider-1"),
    sliderTwo: document.getElementById("slider-2"),
    displayValOne: document.getElementById("range1"),
    displayValTwo: document.getElementById("range2"),
    minGap: 0,
    sliderTrack: document.querySelector(".slider-track"),
    sliderMaxValue: document.getElementById("slider-1").max,
    filterValuesArray: "",
  }
}
window.onload = function () {
  slideOne();
  slideTwo();
  // filterRead();
};

function slideOne() {
  if (parseInt(sliderObject.sliderTwo.value) - parseInt(sliderObject.sliderOne.value) <= sliderObject.minGap) {
    sliderObject.sliderOne.value = parseInt(sliderObject.sliderTwo.value) - sliderObject.minGap;
  }
  sliderObject.displayValOne.textContent = sliderObject.sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderObject.sliderTwo.value) - parseInt(sliderObject.sliderOne.value) <= sliderObject.minGap) {
    sliderObject.sliderTwo.value = parseInt(sliderObject.sliderOne.value) + sliderObject.minGap;
  }
  sliderObject.displayValTwo.textContent = sliderObject.sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderObject.sliderOne.value / sliderObject.sliderMaxValue) * 100;
  percent2 = (sliderObject.sliderTwo.value / sliderObject.sliderMaxValue) * 100;
  sliderObject.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

// function filterRead() {
//   filterValuesArray = document.querySelectorall("[name]").value;
// }

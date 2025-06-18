// API Rules > list/search rule: id = @request.auth.id || @request.auth.id = @collection.admin.id || @request.auth.id = @collection.Regiseur.id

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

if (localStorage.getItem('userID') == 'admin' || localStorage.getItem('userID') == 'Regiseur') {
  fetchCast();
}window.onload = function () {
  slideOne();
  slideTwo();
  filterRead();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
let filterValuesArray = "";

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

// function filterRead() {
//   filterValuesArray = document.querySelectorall("[name]").value;
// }

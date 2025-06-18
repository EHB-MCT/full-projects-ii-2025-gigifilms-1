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
                  <img src="${i.avatar}" class="no-img" alt="">
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

fetchCast();
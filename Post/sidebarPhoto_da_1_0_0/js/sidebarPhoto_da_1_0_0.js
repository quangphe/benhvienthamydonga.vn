const cateSlug = "#cat-mi";

const renderData = (obj, filler) => {
  let html = "";
  const newItem = obj.filter((item) => item.link === filler);
  const newImg = newItem[0].img.slice(0, 2);
  newImg.map(item => {
    html += `
      <div class="sidebarPhoto_da_1_0_0__pic">
        <img width="390" height="211" src="${item.large}" alt="">
      </div>
    `

  });
  return html;
};

document.getElementById('sidebar_data_photo').innerHTML = renderData(dataPhoto, cateSlug)

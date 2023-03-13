const renderDataCustomer = (obj) => {
  let html = "";
  const newData = obj.filter(item => {
    return item.showHome === "true";
  });

  let dataLimit = newData.slice(0, 6);

  dataLimit.map(item => {
    html += `
            <a class="customer_da_1_0_0__item">
                <div class="customer_da_1_0_0__pic">
                    <img width="365" height="240" src="${item.img[0].large}" alt="">
                </div>
                <h3 class="customer_da_1_0_0__text">${item.img[0].cateName}</h3>
            </a>
        `;
  });
  return html;
}


document.getElementById('box_data_photo').innerHTML = renderDataCustomer(dataPhoto);
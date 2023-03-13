const renderDataCateService = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
            <a href="${item.link}" class="cateService_da_1_0_0__item">
                <div class="cateService_da_1_0_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <h3 class="cateService_da_1_0_0__text">${item.name}</h3>
            </a>
        `;
    });
    return html;
}

document.getElementById('box_data_cate').innerHTML = renderDataCateService(dataService);

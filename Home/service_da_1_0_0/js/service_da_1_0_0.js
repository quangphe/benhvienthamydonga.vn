const dataShow = dataService.filter(item => {
    return item.show === "true";
});

const renderDataService = (obj) => {
    let dataLimit = obj.slice(0, 6);
    let html = "";
    dataLimit.map(item => {
        html += `
            <a href="${item.link}" class="service_da_1_0_0__item">
                <div class="service_da_1_0_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <h3 class="service_da_1_0_0__text">${item.name}</h3>
            </a>
        `;
    });
    return html;
}

document.getElementById('box_home_service').innerHTML = renderDataService(dataShow);


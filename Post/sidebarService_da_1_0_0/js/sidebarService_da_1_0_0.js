const dataShow = dataService.filter(item => {
    return item.show === "true";
});

const renderDataSidebarService = (obj) => {
    let html = "";
    let dataLimit = obj.slice(0, 6);
    dataLimit.map(item => {
        html += `
            <a href="${item.link}" class="sidebarService_da_1_0_0__content">
                <div class="sidebarService_da_1_0_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <h3 class="sidebarService_da_1_0_0__des">${item.name}</h3>
            </a>
        `;
    });
    return html;
}

document.getElementById('data_service_sidebar').innerHTML = renderDataSidebarService(dataShow);
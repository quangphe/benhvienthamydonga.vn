const dataLimit = dataService.slice(0, 6);

const renderDataSidebar = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
            <a href="${item.link}" class="sidebar_da_1_1_0__content">
                <div class="sidebar_da_1_1_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <div class="sidebar_da_1_1_0__des">${item.name}</div>
            </a>
        `;
    });
    return html;
}

document.getElementById('data_service_sidebar').innerHTML = renderDataSidebar(dataLimit);
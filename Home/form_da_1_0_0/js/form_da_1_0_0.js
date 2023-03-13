const renderDataAddress = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
        <div class="form_da_1_0_0__item">
            <p>${item.name}</p>
            <span>${item.address}</span>
            <div class="form_da_1_0_0__des">
                <div class="form_da_1_0_0__map">
                    <a href="${item.map}" class="form_da_1_0_0__map--link"> <div class="form_da_1_0_0__map--img"></div> Chỉ đường</a>
                </div>
                <button class="form_da_1_0_0__call">
                    <div class="form_da_1_0_0__call--img"></div>Gọi ngay
                </button>
            </div>
        </div>
        `;
    });
    return html;
}

document.getElementById('overflowTest').innerHTML = renderDataAddress(dataAddress);


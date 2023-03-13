let price_da_1_0_0_title = '' //Tiêu đề menuphoto_da_1_1_0
let price_da_1_0_0_isOpenMenu = true // trạng thái mob menu


// Xử lý đóng/mở mob menu
const price_da_1_0_0_handleOpenMenu = () => {
    if (window.innerWidth > 767) {
        price_da_1_0_0_isOpenMenu = true
        return
    }
    if (price_da_1_0_0_isOpenMenu === true) {
        price_da_1_0_0_isOpenMenu = false
    } else {
        price_da_1_0_0_isOpenMenu = true
    }
    document.getElementById('price_da_1_0_0__root').innerHTML = price_da_1_0_0_main(price_da_1_0_0_menu)
    return
}

// Xử lý chuyển tab
const price_da_1_0_0_handleChangeTab = (name, link) => {
    window.location.hash = link
    price_da_1_0_0_title = name
    price_da_1_0_0_handleOpenMenu()
    document.getElementById('price_da_1_0_0__root').innerHTML = price_da_1_0_0_main(price_da_1_0_0_menu)
}

// component MenuItem
const price_da_1_0_0_MenuItem = (item, active) => {
    return `<li onclick="price_da_1_0_0_handleChangeTab('${item.name}','${item.link}')" class="${active?'active':''}"><h2 class="sidebar_da_1_1_0__titleTab"><a href="${item.link}" >${item.name}</a></h2></li>`
}

// giao diện chính
const price_da_1_0_0_main = (data) => {
        let tab = ''
        let content = ''
        data.forEach(item => {
            tab += price_da_1_0_0_MenuItem(item, window.location.hash === item.link ? true : false)
            if (window.location.hash === item.link) {
                content = item.content
            }
        })
        return `<div class="container">
            <div class="price_1_0_0">
                <div class="price_1_0_0__sidebar">
                    <div class="sidebar_da_1_1_0">
                        <div class="sidebar_da_1_1_0__title">
                            <h2 class="sidebar_da_1_1_0__titleHead">${price_da_1_0_0_title}</h2>
                            <button onclick="price_da_1_0_0_handleOpenMenu()">Chọn dịch vụ khác</button>
                        </div>
                        ${price_da_1_0_0_isOpenMenu ?`<ul class='slideIn'>${tab}</ul>`:``}
                       
                    </div>
                </div>
                <div class="price_1_0_0__content">${content}</div>
               ${price_da_1_0_0_isOpenMenu ?`<div class="price_1_0_0__bg" onclick="price_da_1_0_0_handleOpenMenu()"></div>`:''}
            </div>
        </div>`
    }


    if(window.location.hash === '')window.location.hash=price_da_1_0_0_menu[0].link
    price_da_1_0_0_menu.forEach(item=>{
        if( window.location.hash===item.link) price_da_1_0_0_handleChangeTab(item.name,item.link)
    })

    // click outSide
    window.onclick=(e)=>{
       if(window.innerWidth < 767 && e.target === document.querySelector('.sidebar_da_1_1_0')){
        price_da_1_0_0_handleOpenMenu()
       }
       if( e.target === document.querySelector('.modalprice_da_1_0_0')){
        price_da_1_0_0_handleCloseModal()
       }
    }
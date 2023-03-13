let photo_da_1_1_0_title = '' //Tiêu đề menu
let photo_da_1_1_0_indexViewMore = 4 // số hình ảnh được hiện
let photo_da_1_1_0_isOpenMenu = true // trạng thái mob menu

// vị trí của hình ảnh trong modal
const photo_da_1_1_0_indexDetail = {
    index: 0,
    setIndex: function(idx) {
        this.index = idx
    }
}

// Xử lý đóng/mở mob menu
const photo_da_1_1_0_handleOpenMenu = () => {
    if (window.innerWidth > 767) {
        photo_da_1_1_0_isOpenMenu = true
        return
    }
    if (photo_da_1_1_0_isOpenMenu === true) {
        photo_da_1_1_0_isOpenMenu = false
    } else {
        photo_da_1_1_0_isOpenMenu = true
    }
    document.getElementById('photo_da_1_1_0__root').innerHTML = photo_da_1_1_0_main(photo_da_1_1_0_menu)
    return
}

// Xử lý chuyển tab
const photo_da_1_1_0_handleChangeTab = (name, link) => {
    window.location.hash = link
    photo_da_1_1_0_title = name
    photo_da_1_1_0_indexViewMore = 4
    photo_da_1_1_0_handleOpenMenu()
    document.getElementById('photo_da_1_1_0__root').innerHTML = photo_da_1_1_0_main(photo_da_1_1_0_menu)
}

// nút next modal
const photo_da_1_1_0_nextPage = () => {
    photo_da_1_1_0_indexDetail.setIndex(photo_da_1_1_0_indexDetail.index + 1)
    photo_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            if (photo_da_1_1_0_indexDetail.index >= item.img.length) {
                photo_da_1_1_0_indexDetail.setIndex(0)
            }
            document.querySelector('#modalPhoto').src = item.img[photo_da_1_1_0_indexDetail.index].large
        }
    })
}

//nut pre modal
const photo_da_1_1_0_prePage = () => {
    photo_da_1_1_0_indexDetail.setIndex(photo_da_1_1_0_indexDetail.index - 1)
    photo_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            if (photo_da_1_1_0_indexDetail.index <= 0) {
                photo_da_1_1_0_indexDetail.setIndex(item.img.length - 1)
            }
            document.querySelector('#modalPhoto').src = item.img[photo_da_1_1_0_indexDetail.index].large
        }
    })
}

// Xử lý xem thêm
const photo_da_1_1_0_handleViewMore = (length) => {
    photo_da_1_1_0_indexViewMore = length >= 4 ? length : 4
    document.getElementById('photo_da_1_1_0__root').innerHTML = photo_da_1_1_0_main(photo_da_1_1_0_menu)
}

// Xử lý mở modal
const photo_da_1_1_0_handleOpenModal = (smallImg, i) => {
    let img = []
    photo_da_1_1_0_indexDetail.setIndex(i)
    photo_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            img = item.img.filter(img => img.small === smallImg)
        }
    })
    document.getElementById('photo_da_1_1_0__root').insertAdjacentHTML("beforeend", photo_da_1_1_0_PicModal(img[0].large))
}

// Xử lý đóng modal
const photo_da_1_1_0_handleCloseModal = () => {
    document.querySelector('.modalPhoto_da_1_1_0').remove()
}

// component MenuItem
const photo_da_1_1_0_MenuItem = (item, active) => {
    return `<li onclick="photo_da_1_1_0_handleChangeTab('${item.name}','${item.link}')" class="${active?'active':''}"><h2 class="sidebar_da_1_1_0__titleTab"><a href="${item.link}" >${item.name}</a></h2></li>`
}

// component PicItem
const photo_da_1_1_0_PicItem = (item, i) => {
    return `<h3 onclick="photo_da_1_1_0_handleOpenModal('${item}',${i})" class="photo_da_1_1_0__item">
            <img width="390" height="211" src="${item}" alt="">
        </h3>`
}

// component PicModal
const photo_da_1_1_0_PicModal = (img) => {
    return ` <div class="modalPhoto_da_1_1_0">
    <div class="modalPhoto_da_1_1_0__box">
        <div class="modalPhoto_da_1_1_0__close" onclick="photo_da_1_1_0_handleCloseModal()">×</div>
        <img id="modalPhoto" src="${img}" alt="">
        <div class="modalPhoto_da_1_1_0__control">
            <button class="modalPhoto_da_1_1_0__prev" onClick="photo_da_1_1_0_prePage()"><img width="32" height="32" src="${photo_da_1_1_0_url}/images/arrow-icon.svg" alt=""></button>
            <button class="modalPhoto_da_1_1_0__next"onclick="photo_da_1_1_0_nextPage()"><img width="32" height="32" src="${photo_da_1_1_0_url}/images/arrow-icon.svg" alt=""></button>
        </div>
    </div>
</div>`
}

// giao diện chính
const photo_da_1_1_0_main = (data) => {
        let tab = ''
        let picItem = ''
        let length = 0
        data.forEach(item => {
            if (window.location.hash === item.link) {
                length = item.img.length
            }
            tab += photo_da_1_1_0_MenuItem(item, window.location.hash === item.link ? true : false, length)
            for (let i = 0; i < photo_da_1_1_0_indexViewMore; i++) {
                if (window.location.hash === item.link) {
                    item.img.length >= photo_da_1_1_0_indexViewMore ?
                        picItem += photo_da_1_1_0_PicItem(item.img[i].small, i) : ''
                }
            }
        })
        return `<div class="container">
            <div class="photo_1_1_0">
                <div class="photo_1_1_0__sidebar">
                    <div class="sidebar_da_1_1_0">
                        <div class="sidebar_da_1_1_0__title">
                            <h2 class="sidebar_da_1_1_0__titleHead">${photo_da_1_1_0_title}</h2>
                            <button onclick="photo_da_1_1_0_handleOpenMenu()">Chọn dịch vụ khác</button>
                        </div>
                        ${photo_da_1_1_0_isOpenMenu ?`<ul class='slideIn'>${tab}</ul>`:``}
                       
                    </div>
                </div>
                <div class="photo_1_1_0__content">
                    <div class="photo_da_1_1_0">
                        <h1 class="photo_da_1_1_0__title">Hình ảnh trước - sau</h1>
                        <div class="photo_da_1_1_0__box">
                            ${picItem}
                        </div>
                           ${length ===photo_da_1_1_0_indexViewMore  ?'':`<div class="photo_da_1_1_0__btn"><button onClick="photo_da_1_1_0_handleViewMore(${length})">Xem thêm</button></div>`} 
                    </div>
                </div>
               ${photo_da_1_1_0_isOpenMenu ?`<div class="photo_1_1_0__bg" onclick="photo_da_1_1_0_handleOpenMenu()"></div>`:''}
            </div>
        </div>`
    }


    if(window.location.hash === '')window.location.hash=photo_da_1_1_0_menu[0].link
    photo_da_1_1_0_menu.forEach(item=>{
        if( window.location.hash===item.link) photo_da_1_1_0_handleChangeTab(item.name,item.link)
    })

    // click outSide
    window.onclick=(e)=>{
       if(window.innerWidth < 767 && e.target === document.querySelector('.sidebar_da_1_1_0')){
        photo_da_1_1_0_handleOpenMenu()
       }
       if( e.target === document.querySelector('.modalPhoto_da_1_1_0')){
        photo_da_1_1_0_handleCloseModal()
       }
    }
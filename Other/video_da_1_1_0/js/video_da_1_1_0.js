let video_da_1_1_0_title = '' //Tiêu đề menu
let video_da_1_1_0_indexViewMore = 4 // số hình ảnh được hiện
let video_da_1_1_0_isOpenMenu = true // trạng thái mob menu

// vị trí của hình ảnh trong modal
const video_da_1_1_0_indexDetail = {
    index: 0,
    setIndex(idx) {
        this.index = idx
    }
}

// Xử lý đóng/mở mob menu
const video_da_1_1_0_handleOpenMenu = () => {
    if (window.innerWidth > 767) {
        video_da_1_1_0_isOpenMenu = true
        return
    }
    if (video_da_1_1_0_isOpenMenu === true) {
        video_da_1_1_0_isOpenMenu = false
    } else {
        video_da_1_1_0_isOpenMenu = true
    }
    document.getElementById('video_da_1_1_0__root').innerHTML = video_da_1_1_0_main(video_da_1_1_0_menu)
    return
}

// Xử lý chuyển tab
const video_da_1_1_0_handleChangeTab = (name, link) => {
    window.location.hash = link
    video_da_1_1_0_title = name
    video_da_1_1_0_indexViewMore = 4
    video_da_1_1_0_handleOpenMenu()
    document.getElementById('video_da_1_1_0__root').innerHTML = video_da_1_1_0_main(video_da_1_1_0_menu)
}

// nút next modal
const video_da_1_1_0_nextPage = () => {
    video_da_1_1_0_indexDetail.setIndex(video_da_1_1_0_indexDetail.index + 1)
    video_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            if (video_da_1_1_0_indexDetail.index >= item.img.length) {
                video_da_1_1_0_indexDetail.setIndex(0)
            }
            document.querySelector('.modalVideo_da_1_0_0 iframe').src = `https://www.youtube.com/embed/${item.img[video_da_1_1_0_indexDetail.index].src}?autoplay=1&mute=1`
        }
    })
}

//nut pre modal
const video_da_1_1_0_prePage = () => {
    video_da_1_1_0_indexDetail.setIndex(video_da_1_1_0_indexDetail.index - 1)
    video_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            if (video_da_1_1_0_indexDetail.index <= 0) {
                video_da_1_1_0_indexDetail.setIndex(item.img.length - 1)
            }
            document.querySelector('.modalVideo_da_1_0_0 iframe').src = `https://www.youtube.com/embed/${item.img[video_da_1_1_0_indexDetail.index].src}?autoplay=1&mute=1`
        }
    })
}

// Xử lý xem thêm
const video_da_1_1_0_handleViewMore = (length) => {
    video_da_1_1_0_indexViewMore = length >= 4 ? length : 4
    document.getElementById('video_da_1_1_0__root').innerHTML = video_da_1_1_0_main(video_da_1_1_0_menu)
}

// Xử lý mở modal
const video_da_1_1_0_handleOpenModal = (smallImg, i) => {
    let img = []
    video_da_1_1_0_indexDetail.setIndex(i)
    video_da_1_1_0_menu.forEach(item => {
        if (item.link === window.location.hash) {
            img = item.img.filter(img => img.small === smallImg)
        }
    })
    document.querySelector('body').insertAdjacentHTML("beforeend", video_da_1_1_0_PicModal(img[0].src))
}

// Xử lý đóng modal
const video_da_1_1_0_handleCloseModal = () => {
    document.querySelector('.modalVideo_da_1_0_0').remove()
}

// component MenuItem
const video_da_1_1_0_MenuItem = (item, active) => {
    return `<li onclick="video_da_1_1_0_handleChangeTab('${item.name}','${item.link}')" class="${active ? 'active' : ''}"><h2 class="sidebar_da_1_0_0__titleTab"><a href="${item.link}" >${item.name}</a></h2></li>`
}

// component PicItem
const video_da_1_1_0_PicItem = ({ smallImg, desc, idx }) => {
    return ` <div onclick="video_da_1_1_0_handleOpenModal('${smallImg}',${idx})" class="video_da_1_1_0__item">
    <img width="390" height="211" src="${smallImg}" alt="">
    <div class="video_da_1_1_0__play">
        <img width="50" height="50" src="${video_da_1_1_0_url}/images/play-icon.svg" alt="">
    </div>
    <h3 class="video_da_1_1_0__desc">${desc}</h3>
</div>`
}

// component PicModal
const video_da_1_1_0_PicModal = (src) => {
    return `<div class="modalVideo_da_1_0_0">
    <div class="modalVideo_da_1_0_0__box">
        <div class="modalVideo_da_1_0_0__close" onclick="video_da_1_1_0_handleCloseModal()">×</div>
        <div class="modalVideo_da_1_0_0__wrapper">
        <iframe src="https://www.youtube.com/embed/${src}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="modalVideo_da_1_0_0__control">
            <button class="modalVideo_da_1_0_0__prev" onClick="video_da_1_1_0_prePage()"><img width="32" height="32" src="${video_da_1_1_0_url}/images/arrow-icon.svg" alt=""></button>
            <button class="modalVideo_da_1_0_0__next" onclick="video_da_1_1_0_nextPage()"><img width="32" height="32" src="${video_da_1_1_0_url}/images/arrow-icon.svg" alt=""></button>
        </div>
    </div>
</div>`
}

// giao diện chính
const video_da_1_1_0_main = (data) => {
    let tab = ''
    let picItem = ''
    let length = 0
    data.forEach(item => {
        if (window.location.hash === item.link) {
            length = item.img.length
        }
        tab += video_da_1_1_0_MenuItem(item, window.location.hash === item.link ? true : false, length)
        for (let i = 0; i < video_da_1_1_0_indexViewMore; i++) {
            if (window.location.hash === item.link) {
                picItem += video_da_1_1_0_PicItem({
                    smallImg: item.img[i].small,
                    desc: item.img[i].desc,
                    idx: i
                })
            }
        }
    })
    return `<div class="container">
            <div class="video_1_0_0">
                <div class="video_1_0_0__sidebar">
                    <div class="sidebar_da_1_0_0">
                        <div class="sidebar_da_1_0_0__title">
                            <h2 class="sidebar_da_1_0_0__titleHead">${video_da_1_1_0_title}</h2>
                            <button onclick="video_da_1_1_0_handleOpenMenu()">Chọn dịch vụ khác</button>
                        </div>
                        ${video_da_1_1_0_isOpenMenu ? `<ul class="slideIn">${tab}</ul>` : ``}
                       
                    </div>
                </div>
                <div class="video_1_0_0__content">
                    <div class="video_da_1_1_0">
                        <h1 class="video_da_1_1_0__title">Hình ảnh trước - sau</h1>
                        <div class="video_da_1_1_0__box">
                            ${picItem}
                        </div>
                           ${length === video_da_1_1_0_indexViewMore ? '' : `<div class="video_da_1_1_0__btn"><button onClick="video_da_1_1_0_handleViewMore(${length})">Xem thêm</button></div>`} 
                    </div>
                </div>
               ${video_da_1_1_0_isOpenMenu ? `<div class="video_1_0_0__bg" onclick="video_da_1_1_0_handleOpenMenu()"></div>` : ''}
            </div>
        </div>`
}


if (window.location.hash === '') window.location.hash = video_da_1_1_0_menu[0].link
video_da_1_1_0_menu.forEach(item => {
    if (window.location.hash === item.link) video_da_1_1_0_handleChangeTab(item.name, item.link)
})

// click outSide
window.onclick = (e) => {
    if (window.innerWidth < 767 && e.target === document.querySelector('.sidebar_da_1_0_0')) {
        video_da_1_1_0_handleOpenMenu()
    }
    if (e.target === document.querySelector('.modalVideo_da_1_0_0')) {
        video_da_1_1_0_handleCloseModal()
    }
}
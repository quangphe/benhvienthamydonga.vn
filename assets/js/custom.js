function imgTheme(path, tag) {
    let x = document.querySelectorAll(tag);
    for (let item of x) {
        let src = item.getAttribute('src');
        src = path + src;
        item.setAttribute('src', src);
    }
}
function sourceTheme(path, tag) {
    let x = document.querySelectorAll(tag);
    for (let item of x) {
        let srcset = item.getAttribute('srcset');
        srcset = path + srcset;
        item.setAttribute('srcset', srcset);
    }
}

document.addEventListener("scroll", function () {
    myLazy('img.lazy', 'src');
    myLazy('source.lazy', 'srcset');
    myLazy('.lazy-bg', 'img-bg');
    myLazy('.load', 'loaded');
    myLazy('.slide_run', 'slide');
    onScroll('.header_1_1_0__list a', 'section', 'active');
});
LazyShowScreen('img.lazy', 'src')

scrollClick('.header_1_1_0__list a, a[href="#pageReg"]');

function myLazy(sec, attr) {
    const section_loads = document.querySelectorAll(sec);
    let winTop = window.innerHeight;

    for (let i = 0; i < section_loads.length; i++) {
        let pos_top = section_loads[i].getBoundingClientRect().top;
        let pos_bottom = section_loads[i].getBoundingClientRect().bottom;
        if (pos_top <= winTop && pos_bottom >= 0) {
            switch (attr) {
                case 'src':
                    section_loads[i].src = section_loads[i].dataset.src;
                    section_loads[i].classList.remove('lazy');
                    break;
                case 'srcset':
                    section_loads[i].srcset = section_loads[i].dataset.srcset;
                    section_loads[i].classList.remove('lazy');
                    break;
                case 'img-bg':
                    section_loads[i].classList.remove('lazy-bg');
                    section_loads[i].classList.add('img-bg');
                    break;
                case 'loaded':
                    section_loads[i].classList.remove('load');
                    section_loads[i].classList.add('loaded');
                    break;
                case 'slide':
                    section_loads[i].classList.add('slide');
                    break;
                default:
                    console.log(`Sorry, we are out of ${attr}.`);
            }

        }
    }
}
function LazyShowScreen(sec, attr) {
    const section_loads = document.querySelectorAll(sec);
    let win_height = screen.height;

    for (let i = 0; i < section_loads.length; i++) {
        if (section_loads[i].getBoundingClientRect().top < win_height) {
            switch (attr) {
                case 'loaded':
                    section_loads[i].classList.add('loaded');
                    break;
                case 'src':
                    section_loads[i].src = section_loads[i].dataset.src;
                    section_loads[i].classList.remove('lazy');
                    break;
                case 'srcset':
                    section_loads[i].srcset = section_loads[i].dataset.srcset;
                    section_loads[i].classList.remove('lazy');
                    break;
                case 'img-bg':
                    section_loads[i].classList.remove('lazy-bg');
                    section_loads[i].classList.add('img-bg');
                    break;
                case 'slide':
                    section_loads[i].classList.remove('slide');
                    section_loads[i].classList.add('slide');
                    break;
                default:
                    console.log(`Sorry, we are out of ${attr}.`);
            }
        }
    }
}

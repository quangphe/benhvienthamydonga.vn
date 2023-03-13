const slideCard = (data) => {
    return `
        <a href="${data.link}" target="_blank" class="slider_da_1_0_0_item" rel="nofollow">
            <picture>
                <source media="(min-width:465px)" srcset="${data.imgPc}">
                <img src="${data.imgMb}" alt="${data.title}" >
            </picture>
        </a>
    `
}

const slideBuild = (data) => {
    document.querySelector(".slider_da_1_0_0").innerHTML = slideCard(data);
}

const slideNext = (data) => {
    let count = 1
    setInterval(() => {
        if (count < data.length) {
            slideBuild(data[count])
            count++;
        } else {
            count = 0;
        }

    }, 9000);
}

slideBuild(slider_da_1_0_0__data[0])
slideNext(slider_da_1_0_0__data);

// Fix height slider
const scrollTo = (activeEl) => {
    const e = document.querySelector(activeEl);
    const height = e.offsetHeight;
    e.style.height = `${height}px`;
};
setTimeout(() => {
    scrollTo('.slider_da_1_0_0');
}, 1000);
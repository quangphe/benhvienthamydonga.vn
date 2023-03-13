const loadmore = document.querySelector('#loadmore');
let currentItems = 6;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.news_15_0_0__item')];
    for (let i = currentItems; i < currentItems + 2; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 2;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        event.target.style.display = 'none';
    }
})
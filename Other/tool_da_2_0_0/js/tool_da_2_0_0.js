let tools = document.querySelectorAll('a');
tools.forEach(a => {
    a.addEventListener('click', function () {
        tools.forEach(tool => tool.classList.remove('active'));
        this.classList.add('active');
    });
});

const isActive = (id) => {
    document.getElementById(id).classList.add('active');
}

const cateSlug = 'toolVideo';
switch (cateSlug) {
    case 'toolHome':
        isActive(cateSlug);
        break;
    case 'toolVideo':
        isActive(cateSlug);
        break;
    case 'toolImage':
        isActive(cateSlug);
        break;
    case 'toolPrice':
        isActive(cateSlug);
        break;
    case 'toolGift':
        isActive(cateSlug);
        break;
    default:
        isActive('toolHome');
}
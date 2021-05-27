/**-------Preloader-------------**/

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});


/**-------Toggle button-------------**/
let body = document.querySelector('body');
let toggler = document.querySelector('.navbar-toggler');
let scrollToTop = document.querySelector('.scroll_top');


toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    body.classList.toggle('locked');
});



/**-------Scroll To Top-------------**/
/**-------Fixed Navbar-------------**/
/**-------Navigation-------------**/

let header = document.querySelector('.header_main');
let navbar = document.querySelector('.navbar');
if(window.innerWidth <= 991){

    let navbarHeight = header.querySelector('.container-fluid').clientHeight;

    window.onscroll = function(){
        if(window.pageYOffset >= header.clientHeight - navbarHeight){
            header.classList.add('active');
            scrollToTop.classList.add('active');
        }
        else{
            header.classList.remove('active');
            scrollToTop.classList.remove('active');
        }
    };
}

window.onscroll = function(){
    if(window.pageYOffset >= header.clientHeight){
        scrollToTop.classList.add('active');
        navbar.classList.add('fixed');
    }
    else{
        scrollToTop.classList.remove('active');
        navbar.classList.remove('fixed');
    }
};

scrollToTop.onclick = function(){
    window.scrollTo(0, 0);
};


/*Nav*/
const navLinks = document.querySelectorAll('.nav-link[data-goto]');
if(navLinks.length > 0){
    navLinks.forEach( function(item){
        item.addEventListener('click', onNavLink);
    });

    function onNavLink(e){
        const navLink = e.target;
        /*Поверяем существует ли дата-атрибут и есть ли в нём ссылка*/
        if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            e.preventDefault();
            const goToBlock = document.querySelector(navLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: goToBlockValue,
                behavior: 'smooth'
            });
        }
    }
}

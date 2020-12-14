function toggleMenu() {
    let iconBars = document.querySelector('.bars-icon i')
    let menuList = document.querySelector('.menu__list')
    let itemShowTabletMobile = document.querySelector('.show-sub-menu-on-tablet');
    let headerMenu = document.querySelector('.header__menu')
    
    let countClickIcon = 0;
    iconBars.addEventListener('click', () => {
        countClickIcon++;
        if(countClickIcon % 2 !== 0){
            iconBars.classList.value = 'fas fa-times';
            headerMenu.style.minHeight = 'calc(var(--height-header-menu) + 180px)';
            itemShowTabletMobile.style.display = 'none';
           
        }
        else{
            iconBars.classList.value = 'fas fa-bars';
            headerMenu.style.minHeight = 'var(--height-header-menu)'          
        }
        menuList.classList.toggle('show-menu-on-tablet')
    })
    toggleSubMenu();
}

function toggleSubMenu() {
    let itemHasSubMenu = document.querySelector('.menu__item-has-menu-sub');
    let itemShowTabletMobile = document.querySelector('.show-sub-menu-on-tablet');
    let headerMenu = document.querySelector('.header__menu')
    let click = 0;
    itemHasSubMenu.addEventListener('click', () => {
        click++;
        console.log(click)
        itemShowTabletMobile.classList.toggle('menu__item-show-tablet-mobile-toggle')
        if(click % 2 !== 0){
            headerMenu.style.minHeight = 'calc(var(--height-header-menu) + 180px + 160px)';
            itemShowTabletMobile.style.display = 'block';          
        }
        else{
            headerMenu.style.minHeight = 'calc(var(--height-header-menu) + 180px)';
            itemShowTabletMobile.style.display = 'none';
        }

    })
}
toggleMenu()

function load(element, classEffect){
    window.addEventListener('load', () => {
        element.classList.add(classEffect)
    })
}
function scrollItems(element, classEffect) {
    let positionElement = element.offsetTop;
    if(window.pageYOffset === 0 && (window.innerHeight) > (element.getBoundingClientRect().top)){
        load(element, classEffect);
        // console.log(window.outHeight)
        // console.log(element.offsetTop)
    }   
    else{
        window.addEventListener('scroll', () => {
            // if(window.scrollY > positionElement){
            //     console.log(element.offsetTop)
            //     element.classList.add(classEffect)
            // }
            if(window.innerHeight > element.getBoundingClientRect().top){
                element.classList.add(classEffect)
            }
        })
    }
}
function animationSectionOne(){
    let bannerLeft = document.querySelector('.banner-left')
    let bannerImg = document.querySelector('.banner-img')
    let post = document.querySelector('.post')
    load(bannerLeft, 'go-to-up')
    load(bannerImg, 'go-to-left')
    // load(post, 'go-to-left-delay')
    scrollItems(post, 'go-to-left-delay')
}
animationSectionOne();
function animationSectionTwo(){
    let bannerTwoLeftImg = document.querySelector('.banner-two-left-img');
    let bannerTwoRightTitle = document.querySelector('.banner-two-right-text__title')
    let bannerTwoRightDesc = document.querySelector('.banner-two-right-text__desc p');
    scrollItems(bannerTwoLeftImg, 'go-to-left')
    scrollItems(bannerTwoRightTitle, 'go-to-right')
    scrollItems(bannerTwoRightDesc, 'go-to-right-delay')
}
animationSectionTwo()
function animationSectionThree() {
    let bannerThreeDesc = document.querySelector('.banner-three__desc')
    let bannerThreeThumbnail = document.querySelectorAll('.banner-three__thumbnail')
    scrollItems(bannerThreeDesc, 'go-to-up-delay')
    for(let i = 0; i < bannerThreeThumbnail.length; i++) {
        scrollItems(bannerThreeThumbnail[i],'go-to-up')
    }
}
animationSectionThree()
function animationSectionFour(){
    let sectionFourHeading = document.querySelector('.section-four__heading');
    let sectionFourTitle = document.querySelector('.section-four__title');
    let box = document.querySelectorAll('.box')
    scrollItems(sectionFourHeading, 'go-to-up')
    scrollItems(sectionFourTitle, 'go-to-down')
    for(let i=0;i<box.length;i++){
        scrollItems(box[i], 'go-to-left')
    }
}
animationSectionFour()

function animationSectionFive() {
    let widgetItems = document.querySelectorAll('.widget__item')
    let sectionFiveHeading = document.querySelector('.section-five__heading');
    let sectionFiveTitle = document.querySelector('.section-five__title');

    scrollItems(sectionFiveHeading, 'go-to-up')
    scrollItems(sectionFiveTitle, 'go-to-down')
    for(let i = 0; i < widgetItems.length; i++){     
        scrollItems(widgetItems[i], 'go-to-up')
    }
}
animationSectionFive()

function animationSectionSix() {
    let sectionFourHeading = document.querySelector('.section-six .section-five__heading');
    let sectionFourTitle = document.querySelector('.section-six .section-five__title');
    scrollItems(sectionFourHeading, 'go-to-up')
    scrollItems(sectionFourTitle, 'go-to-down')
    let widgetItems = document.querySelectorAll('.section-six .widget__item-img')
    for(let i = 0; i < widgetItems.length; i++){
        scrollItems(widgetItems[i], 'go-to-left')
    }
}
animationSectionSix()

function slideInLeft(){
    let sectionSeven = document.querySelector('.section-seven')
    let btnCircles = document.querySelectorAll('.btn-circle-slide')
    for(let i = 0; i < btnCircles.length; i++){
        btnCircles[i].addEventListener('click', () => {
            clearInterval(autoSlide)
            for(let j = 0; j < btnCircles.length; j++){            
                btnCircles[j].classList.remove('btn-circle-slide--active');
            }           
            btnCircles[i].classList.add('btn-circle-slide--active');
            sectionSeven.style.transform = 'translateX(' + -25*(i) + '%)';
        })
    }
}
slideInLeft()
var i = 0;
let autoSlide = setInterval(() => {
    let sectionSeven = document.querySelector('.section-seven')
    let btnCircles = document.querySelectorAll('.btn-circle-slide')   
    for(let i = 0; i < btnCircles.length; i++) {
        btnCircles[i].classList.remove('btn-circle-slide--active')
    }
    if( i < btnCircles.length - 1)
        i++
    else
        i = 0;
    btnCircles[i].classList.add('btn-circle-slide--active')
    sectionSeven.style.transform = 'translateX(' + -25*(i) + '%)';
}, 3000)
// function slider(){
//     let slides = document.querySelectorAll('.section-seven .col')
//     let btnCircles = document.querySelectorAll('.btn-circle-slide')
//     for(let i = 0; i < slides.length; i++)
//         slides[i].style.display = 'none';       
//             slides[0].style.display ='block';
//             slides[1].style.display ='block';
    
//     for(let i = 0; i < btnCircles.length; i++){
//         btnCircles[i].addEventListener('click', () => {
//             for(let j = 0; j < btnCircles.length; j++){            
//                 btnCircles[j].classList.remove('btn-circle-slide--active');
//             }
//             btnCircles[i].classList.add('btn-circle-slide--active');
//             for( let j = 0; j< slides.length; j++){
//                 slides[j].style.display = "none";              
//                 slides[j].classList.remove('left-active')
//                 slides[j].classList.remove('right-active')
//             }
//             if( i == 0){
//                 slides[0].classList.add('left-active')
//                 slides[1].classList.add('right-active')
//                 slides[0].style.display = "block";
//                 slides[1].style.display = "block";               
//             }
//             else if( i == 1){
//                 slides[2].classList.add('left-active')
//                 slides[3].classList.add('right-active')
//                 slides[2].style.display = "block";
//                 slides[3].style.display = "block";              
//             }
//             else if( i == 2){
//                 slides[4].classList.add('left-active')
//                 slides[5].classList.add('right-active')
//                 slides[4].style.display = "block";
//                 slides[5].style.display = "block";               
//             }
//             else if( i == 3){
//                 slides[6].classList.add('left-active')
//                 slides[7].classList.add('right-active')
//                 slides[6].style.display = "block";
//                 slides[7].style.display = "block";             
//             }
//         })
//     }
// }
// slider()
function animationSectionSeven(){
    let sectionSevenHeading = document.querySelector('.section-seven__heading')
    let sectionSevenTitle = document.querySelector('.section-seven__title')
    let sectionSevenSlider = document.querySelector('.section-seven__slider')
    let btnSlide = document.querySelector('.btn-slide')
    scrollItems(sectionSevenHeading, 'go-to-up')
    scrollItems(sectionSevenSlider, 'go-to-up')
    scrollItems(btnSlide, 'go-to-up')
    scrollItems(sectionSevenTitle, 'go-to-down')
}
animationSectionSeven()

function animationSectionEight() {
    let sectionEightLeftTitle = document.querySelector('.section-eight__left-title')
    let sectionEightLeftDesc = document.querySelector('.section-eight__left-desc')
    let sectionEightLeftImages = document.querySelectorAll('.section-eight__left-img')
    let sectionEightRightImg = document.querySelector('.section-eight__right img')
    console.log(sectionEightRightImg)
    let sectionEightRightBtns = document.querySelector('.section-eight__right-btn-list')
    scrollItems(sectionEightLeftTitle, 'go-to-right')
    scrollItems(sectionEightLeftDesc, 'go-to-right')
    scrollItems(sectionEightLeftImages[0], 'go-to-up')
    scrollItems(sectionEightLeftImages[1], 'go-to-up')
    scrollItems(sectionEightRightImg, 'go-to-left')
    scrollItems(sectionEightRightBtns, 'go-to-left')
}
animationSectionEight()

function animationSectionLast() {
    let sectionLastContact = document.querySelector('.section-last__contact')
    let sectionFooter = document.querySelector('.footer')
    scrollItems(sectionLastContact, 'go-to-up')
    scrollItems(sectionFooter, 'go-to-up-delay')
}
animationSectionLast()
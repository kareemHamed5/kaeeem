
let bars = document.getElementById('bars');
let boxes = document.getElementById('boxes');
let header = document.getElementById('header');
let box_one = document.getElementById('boxs_one');
let scrolling = document.getElementById('scrolling');
// let arr_left = document.getElementById('arr_left');
// let arr_right  = document.getElementById('arr_right');
console.log(box_one)



bars.onclick = _ => {
    document.querySelector('ul').classList.toggle('rspon_ul')
}

//////////scrolling///////////////

window.onscroll = _ => {
    if (scrollY >= 60) {
        header.style.backgroundColor= '#355d9a'
    } else {
        header.style.backgroundColor='transparent'
    }
    if (scrollY >= 400) {
        scrolling.style.display='block'
    } else {
        scrolling.style.display='none'
    }
    if (scrollY >= boxes.scrollTop) {
        boxes.style.cssText="transform: translateX(0); opacity: 1; "
    }
    

}


// if (window.localStorage.getItem('color')) {
//     document.documentElement.style.setProperty('--main-color', window.localStorage.getItem('color'))
// }
// if (window.localStorage.getItem('back')) {
//     img_up.setAttribute('src',window.localStorage.getItem('back'))
// }


img.forEach(ele => {
    ele.onclick = _ => {
        
    }
})



// i.forEach((ele) => {
//     ele.onclick = function () {
//         document.querySelector('.point').classList.remove('point')
//         this.classList.add('point')
//     }
// }); 

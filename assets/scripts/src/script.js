// const links = document.querySelectorAll('a[href^="#"]');

// links.forEach(e => {
//     e.addEventListener('click', function(event) {
//         event.preventDefault();
//         document.querySelector('#menu a.active').classList.remove('active');

//         const element = document.querySelector(`${e.getAttribute('href')}`);

//         if(element) {
//             window.scrollTo({
//                 top: element.getBoundingClientRect().top,
//                 behavior: 'smooth',
//             })
//         }

//         this.classList.add('active');
//     });
// })

// Slider

$(function(){
    $('.carousel').slick();
})
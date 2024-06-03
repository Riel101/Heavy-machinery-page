const pageBody = document.getElementById('body');
const navMenu = document.getElementById('nav-menu');
const menuBtn = document.getElementById('menu-btn');
const links = document.getElementsByClassName('link');
// console.log(body, navMenu, menuBtn, links)

menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('hidden');
    console.log(menuBtn.classList);
})

for (const link of links) {
    link.addEventListener('click', function(){
        navMenu.classList.add('hidden');
        // console.log(link);
    })
}

function toggleNav(e){
    document.querySelector('header .mobile').classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
}
for (const trigger of document.querySelectorAll('.menu-toggle')) {
    trigger. addEventListener('click',toggleNav)
}


for (const item of document.querySelectorAll('.drop')) {
    item.addEventListener('click',(e)=>{
        item.classList.toggle('active')
    })
}
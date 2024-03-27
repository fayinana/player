const toUp = document.querySelector('.to-up');
const container = document.querySelector('.container')
const customization = document.querySelector('.customization')
const exit = document.querySelector('.exit')
const menu = document.querySelector('.menu')
const navBar = document.querySelector('.nav-bar')
const fev = document.querySelector('.menu-list')
const favoriteContainer = document.querySelector('.favorite-container')
const feautherList = document.querySelectorAll('.feauther-list')
const feautherInfo = document.querySelectorAll('.feauther-info')
const fevList = document.querySelectorAll('.fev-list')
const fevInfo = document.querySelectorAll('.fev-info')

feautherList.forEach(list =>{
    list.addEventListener('click',()=>{
        const feautherInfo = list.querySelector('.feauther-info')
        isp = document.createElement('div')
        isp.classList.add('is-playing')
        isp.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        `
        feautherInfo.append(isp)
        isp.style.display = 'flex';
    })
})


fevList.forEach(list =>{
    list.addEventListener('click',()=>{
        const fevInfo = list.querySelector('.fev-info')
        isp = document.createElement('div')
        isp.classList.add('is-playing')
        isp.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        `
        fevInfo.append(isp)
        isp.style.display = 'flex';
    })
})


fev.addEventListener('click',()=>{
favoriteContainer.style.display = 'flex'
container.style.display = 'none'
navBar.style.display = 'none';
menu.style.display = 'flex';

removeFromFev()
})


menu.addEventListener('click',()=>{
menu.style.display = 'none';
navBar.style.display = 'flex';
})


exit.addEventListener('click',()=>{
navBar.style.display = 'none';
menu.style.display = 'flex';
})

toUp.addEventListener('click',()=>{


    if(container.classList.contains('container')){
container.classList.remove('container');
container.classList.add('container2');
toUp.innerHTML = '<i class="fas fa-chevron-down"></i>'

}
else{
    container.classList.remove('container2');
container.classList.add('container');
toUp.innerHTML = '<i class="fas fa-chevron-up"></i>'

}

})










// a function to add a spicer in the playing mezmur


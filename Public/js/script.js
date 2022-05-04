const menuToggle = document.querySelector('.menuToggle')
const navigation= document.querySelector('.navigation')
const list = document.querySelectorAll('.list')
const body = document.body
body.addEventListener(`onload`,activelink())



menuToggle.onclick=()=>{
        navigation.classList.toggle('open')
}


function activelink(){
    list.forEach((item)=>{      
       if(window.location.pathname==item.getElementsByTagName('a')[0].getAttribute(`href`)) item.classList.add(`active`)
    })
    
}









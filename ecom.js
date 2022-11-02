const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const hero = document.getElementById('hero');


if(bar){
    bar.addEventListener('click',()=>{  
    nav.classList.add('active');
    
    })
}
if(hero){
hero.addEventListener('click',()=>{

nav.classList.remove('active');

})
}
if(close){
    close.addEventListener('click',()=>{
    
    nav.classList.remove('active');
    
    })
    }
    const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
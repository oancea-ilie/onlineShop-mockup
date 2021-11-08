
let toggleSection = document.querySelector('.toggle-section');
let toggleBtn = document.querySelector('.toggle-btn');
let bars = document.querySelector('.fa-bars');
toggleBtn.addEventListener("click",handleToggleBtn);


let favorite = document.querySelectorAll('.main-card-categorie i');
favorite.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.classList.remove('far');
        e.classList.remove('fa-heart');

        e.classList.add('fas');
        e.classList.add('fa-heart');
    });

    e.addEventListener('mouseout',()=>{
        e.classList.remove('fas');
        e.classList.remove('fa-heart');

        e.classList.add('far');
        e.classList.add('fa-heart');
    });
})


let onOf = 0;

function handleToggleBtn(){
    if(onOf ==0){
        toggleSection.style.transform = 'translateX(0%)';
        onOf = 1;
        bars.classList.remove('fa-bars');
        bars.classList.add('fa-times');
    }else{
        toggleSection.style.transform = 'translateX(-100%)';
        onOf = 0;
        bars.classList.remove('fa-times');
        bars.classList.add('fa-bars');
    }
    
}
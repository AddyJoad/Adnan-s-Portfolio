let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


const clickx= document.getElementById('lines');

clickx.addEventListener('click', function(){
  clickx.classList.toggle('Animate');
});


window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 70) nav.className = ''; else nav.className = 'scroll';
  };
  
  
const txts=document.querySelector(".animate-text").children,
        txtsLen=txts.length;
    let index=0;    
function animateText() {
    for(let i=0; i<txtsLen; i++){
        txts[i].classList.remove("text-in");
    }

    txts[index].classList.add("text-in"); 
    if(index == txtsLen-1){
        index=0;
    }
    else{
        index++;
    }

    setTimeout(animateText,3000)
    
}        

window.onload=animateText;



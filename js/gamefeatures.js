const nav1 =  document.getElementById('nav-1');
const nav2 =  document.getElementById('nav-2');
const nav3 =  document.getElementById('nav-3');
const nav4 =  document.getElementById('nav-4');
const nav5 =  document.getElementById('nav-5');
const nav6 =  document.getElementById('nav-6');
const nav7 =  document.getElementById('nav-7');
const nav8 =  document.getElementById('nav-8');

const radio1 =  document.getElementById('radio1');
const radio2 =  document.getElementById('radio2');
const radio3 =  document.getElementById('radio3');
const radio4 =  document.getElementById('radio4');
const radio5 =  document.getElementById('radio5');
const radio6 =  document.getElementById('radio6');
const radio7 =  document.getElementById('radio7');
const radio8 =  document.getElementById('radio8');
const radioChecked1 = radio1.checked;
const radioChecked2 = radio2.checked;
const radioChecked3 = radio3.checked;
const radioChecked4 = radio4.checked;
const radioChecked5 = radio5.checked;
const radioChecked6 = radio6.checked;
const radioChecked7 = radio7.checked;
const radioChecked8 = radio8.checked;

const gamevideo= document.getElementById('slide-1');
const gamess= document.getElementById('slide-2');

const next = document.getElementById('next-car');
const prev =  document.getElementById('prev-car');
const next1 = document.getElementById('next-car1');
const prev1 =  document.getElementById('prev-car1');

// nav1.style.backgroundColor = "snow";
if(radioChecked1) nav1.style.backgroundColor = "snow";
if(radioChecked2) nav2.style.backgroundColor = "snow";
if(radioChecked3) nav3.style.backgroundColor = "snow";
if(radioChecked4) nav4.style.backgroundColor = "snow";

let count1 = 0;
let count2 = 0;

next.addEventListener("click",()=>{
    if(count1 == 0){
        navcarousel2();
    }else if(count1 == 1){
        navcarousel3();
    }else if(count1 == 2){
        navcarousel4();
    }
    if(count1<3){
        count1++;
    }
})

prev.addEventListener("click",()=>{
    if(count1 == 3){
        navcarousel3();
    }else if(count1 == 2){
        navcarousel2();
    }else if(count1 == 1){
        navcarousel1();
    }
    if(count1>0){
        count1--;
    }
})

next1.addEventListener("click",()=>{
    if(count2 == 0){
        navcarousel6();
    }else if(count2 == 1){
        navcarousel7();
    }else if(count2 == 2){
        navcarousel8();
    }
    if(count2<3){
        count2++;
    }
})

prev1.addEventListener("click",()=>{
    if(count2 == 3){
        navcarousel7();
    }else if(count2 == 2){
        navcarousel6();
    }else if(count2 == 1){
        navcarousel5();
    }
    if(count2>0){
        count2--;
    }
})

function navcarousel1 (){
    gamevideo.style.marginLeft = "0%";
    nav1.style.backgroundColor = "snow";
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel2 (){
    gamevideo.style.marginLeft = "-25%";
    nav2.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel3(){
    gamevideo.style.marginLeft = "-50%";
    nav3.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel4(){
    gamevideo.style.marginLeft = "-75%";
    nav4.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel5 (){
    gamess.style.marginLeft = "0%";
    nav5.style.backgroundColor = "snow";
    nav6.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav7.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav8.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel6 (){
    gamess.style.marginLeft = "-25%";
    nav6.style.backgroundColor = "snow";
    nav5.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav7.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav8.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel7(){
    gamess.style.marginLeft = "-50%";
    nav7.style.backgroundColor = "snow";
    nav5.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav6.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav8.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
function navcarousel8(){
    gamess.style.marginLeft = "-75%";
    nav8.style.backgroundColor = "snow";
    nav5.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav6.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav7.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}


nav1.addEventListener("click",()=>{
    count1 = 0;
    navcarousel1();
})
nav2.addEventListener("click",()=>{
    count1 = 1;
    navcarousel2();
})
nav3.addEventListener("click",()=>{
    count1 = 2;
    navcarousel3();
})
nav4.addEventListener("click",()=>{
    count1 = 3;
    navcarousel4();
})
nav5.addEventListener("click",()=>{
    count2 = 0;
    navcarousel5();
})
nav6.addEventListener("click",()=>{
    count2 = 1;
    navcarousel6();
})
nav7.addEventListener("click",()=>{
    count2 = 2;
    navcarousel7();
})
nav8.addEventListener("click",()=>{
    count2 = 3;
    navcarousel8();
})

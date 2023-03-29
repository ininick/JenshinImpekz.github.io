const nav1 = document.getElementById('bar-1');
const nav2 = document.getElementById('bar-2');
const nav3 = document.getElementById('bar-3');
const nav4 = document.getElementById('bar-4');

function nav1show(){
    nav1.style.backgroundColor = "snow";
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
}
nav1show();
nav1.addEventListener("click",()=>{
    nav1show();
})
nav2.addEventListener("click",()=>{
    nav2.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
})
nav3.addEventListener("click",()=>{
    nav3.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav4.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
})
nav4.addEventListener("click",()=>{
    nav4.style.backgroundColor = "snow";
    nav1.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav2.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    nav3.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
})

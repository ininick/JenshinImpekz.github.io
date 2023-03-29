const popup = document.querySelector('.download-popup');
function showDownload() {
  popup.classList.add('open');
}
function hideDownload() {
  popup.classList.remove('open');
}

const navmenu = document.getElementById('navmenu');
const hamb = document.getElementById('hamb');

hamb.addEventListener("click",()=>{
  navmenu.style.display = "flex";
})

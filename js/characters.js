const jean = document.getElementById('jean');
const eula = document.getElementById('eula');
const diluc = document.getElementById('diluc');
const venti = document.getElementById('venti');

const xiao = document.getElementById('xiao');
const hutao = document.getElementById('hutao');
const zhongli = document.getElementById('zhongli');
const shenhe = document.getElementById('shenhe');

const raiden = document.getElementById('raiden');
const ayato = document.getElementById('ayato');
const yoimiya = document.getElementById('yoimiya');
const yae = document.getElementById('yae');

const nahida = document.getElementById('nahida');
const tighnari = document.getElementById('tighnari');
const alhaitham = document.getElementById('alhaitham');
const wanderer = document.getElementById('wanderer');


const jeanbtn = document.getElementById('mondstadt-1');
const eulabtn = document.getElementById('mondstadt-2');
const dilucbtn = document.getElementById('mondstadt-3');
const ventibtn = document.getElementById('mondstadt-4');

const xiaobtn = document.getElementById('liyue-1');
const hutaobtn = document.getElementById('liyue-2');
const zhonglibtn = document.getElementById('liyue-3');
const shenhebtn = document.getElementById('liyue-4');

const raidenbtn = document.getElementById('inazuma-1');
const ayatobtn = document.getElementById('inazuma-2');
const yoimiyabtn = document.getElementById('inazuma-3');
const yaebtn = document.getElementById('inazuma-4');

const nahidabtn = document.getElementById('sumeru-1');
const tighnaribtn = document.getElementById('sumeru-2');
const alhaithambtn = document.getElementById('sumeru-3');
const wandererbtn = document.getElementById('sumeru-4');

const mondstadt = document.getElementById("village-1");
const liyue = document.getElementById("village-2");
const inazuma = document.getElementById("village-3");
const sumeru = document.getElementById("village-4");

function char_transition(temp){
    temp.style.transition = '2s ease-in 1s ease-out';
}
/*village clicked*/
mondstadt.addEventListener("click",()=>{
    eula.style.visibility = "hidden";
    diluc.style.visibility = "hidden";
    venti.style.visibility = "hidden";
    jean.style.visibility = "visible";
    char_transition(jean);
})
liyue.addEventListener("click",()=>{
    hutao.style.visibility = "hidden";
    zhongli.style.visibility = "hidden";
    shenhe.style.visibility = "hidden";
    xiao.style.visibility = "visible";
    char_transition(xiao);
})
inazuma.addEventListener("click",()=>{
    ayato.style.visibility = "hidden";
    yoimiya.style.visibility = "hidden";
    yae.style.visibility = "hidden";
    raiden.style.visibility = "visible";
    char_transition(raiden);
})
sumeru.addEventListener("click",()=>{
    tighnari.style.visibility = "hidden";
    alhaitham.style.visibility = "hidden";
    wanderer.style.visibility = "hidden";
    nahida.style.visibility = "visible";
    char_transition(nahida);
})

/*Mondstadt Characters*/
jeanbtn.addEventListener("click",(jevent)=>{
    eula.style.visibility = "hidden";
    diluc.style.visibility = "hidden";
    venti.style.visibility = "hidden";
    jean.style.visibility = "visible";
    char_transition(jean);
})
eulabtn.addEventListener("click",(jevent)=>{
    jean.style.visibility = "hidden";
    diluc.style.visibility = "hidden";
    venti.style.visibility = "hidden";
    eula.style.visibility = "visible";
    char_transition(eula);
})
dilucbtn.addEventListener("click",(jevent)=>{
    eula.style.visibility = "hidden";
    jean.style.visibility = "hidden";
    venti.style.visibility = "hidden";
    diluc.style.visibility = "visible";
    char_transition(diluc);
})
ventibtn.addEventListener("click",(jevent)=>{
    diluc.style.visibility = "hidden";
    eula.style.visibility = "hidden";
    jean.style.visibility = "hidden";
    venti.style.visibility = "visible";
    char_transition(venti);
})

/*Liyue Characters*/
xiaobtn.addEventListener("click",(jevent)=>{
    hutao.style.visibility = "hidden";
    zhongli.style.visibility = "hidden";
    shenhe.style.visibility = "hidden";
    xiao.style.visibility = "visible";
    char_transition(xiao);
})
hutaobtn.addEventListener("click",(jevent)=>{
    xiao.style.visibility = "hidden";
    zhongli.style.visibility = "hidden";
    shenhe.style.visibility = "hidden";
    hutao.style.visibility = "visible";
    char_transition(hutao);
})
zhonglibtn.addEventListener("click",(jevent)=>{
    hutao.style.visibility = "hidden";
    xiao.style.visibility = "hidden";
    shenhe.style.visibility = "hidden";
    zhongli.style.visibility = "visible";
    char_transition(zhongli);
})
shenhebtn.addEventListener("click",(jevent)=>{
    zhongli.style.visibility = "hidden";
    hutao.style.visibility = "hidden";
    xiao.style.visibility = "hidden";
    shenhe.style.visibility = "visible";
    char_transition(shenhe);
})

/*Inazuma Characters*/
raidenbtn.addEventListener("click",(jevent)=>{
    ayato.style.visibility = "hidden";
    yoimiya.style.visibility = "hidden";
    yae.style.visibility = "hidden";
    raiden.style.visibility = "visible";
    char_transition(raiden);
})
ayatobtn.addEventListener("click",(jevent)=>{
    raiden.style.visibility = "hidden";
    yoimiya.style.visibility = "hidden";
    yae.style.visibility = "hidden";
    ayato.style.visibility = "visible";
    char_transition(ayato);
})
yoimiyabtn.addEventListener("click",(jevent)=>{
    ayato.style.visibility = "hidden";
    raiden.style.visibility = "hidden";
    yae.style.visibility = "hidden";
    yoimiya.style.visibility = "visible";
    char_transition(yoimiya);
})
yaebtn.addEventListener("click",(jevent)=>{
    yoimiya.style.visibility = "hidden";
    ayato.style.visibility = "hidden";
    raiden.style.visibility = "hidden";
    yae.style.visibility = "visible";
    char_transition(yae);
})

/*Sumeru Characters*/
nahidabtn.addEventListener("click",(jevent)=>{
    tighnari.style.visibility = "hidden";
    alhaitham.style.visibility = "hidden";
    wanderer.style.visibility = "hidden";
    nahida.style.visibility = "visible";
    char_transition(nahida);
})
tighnaribtn.addEventListener("click",(jevent)=>{
    nahida.style.visibility = "hidden";
    alhaitham.style.visibility = "hidden";
    wanderer.style.visibility = "hidden";
    tighnari.style.visibility = "visible";
    char_transition(tighnari);
})
alhaithambtn.addEventListener("click",(jevent)=>{
    tighnari.style.visibility = "hidden";
    nahida.style.visibility = "hidden";
    wanderer.style.visibility = "hidden";
    alhaitham.style.visibility = "visible";
    char_transition(alhaitham);
})
wandererbtn.addEventListener("click",(jevent)=>{
    alhaitham.style.visibility = "hidden";
    tighnari.style.visibility = "hidden";
    nahida.style.visibility = "hidden";
    wanderer.style.visibility = "visible";
    char_transition(wanderer);
})

//responsive mobile change village

const prev =  document.getElementById('prevvillage');
const next =  document.getElementById('nextvillage');
const village = document.getElementById('village-cont');

let count = 0;
function displayjean(){
    eula.style.visibility = "hidden";
    diluc.style.visibility = "hidden";
    venti.style.visibility = "hidden";
    jean.style.visibility = "visible";
}
function displayxiao(){
    hutao.style.visibility = "hidden";
    zhongli.style.visibility = "hidden";
    shenhe.style.visibility = "hidden";
    xiao.style.visibility = "visible";
}
function displayraiden(){
    ayato.style.visibility = "hidden";
    yoimiya.style.visibility = "hidden";
    yae.style.visibility = "hidden";
    raiden.style.visibility = "visible";
}
function dipslaynahida(){
    tighnari.style.visibility = "hidden";
    alhaitham.style.visibility = "hidden";
    wanderer.style.visibility = "hidden";
    nahida.style.visibility = "visible";
}

next.addEventListener("click",()=>{
    if(count==0){
        village.style.marginLeft = "-100%";
        displayxiao();
        count=1;
    }
    else if(count==1){
        village.style.marginLeft = "-200%";
        displayraiden();
        count=2;
    }
    else if(count==2){
        village.style.marginLeft = "-300%";
        dipslaynahida();
        count=3;
    }
})

prev.addEventListener("click",()=>{
    if(count==3){
        village.style.marginLeft = "-200%";
        displayraiden();
        count=2;
    }
    else if(count==2){
        village.style.marginLeft = "-100%";
        displayxiao();
        count=1;
    }
    else if(count==1){
        village.style.marginLeft = "0%";
        displayjean();
        count=0;
    }
})
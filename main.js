let blueBG=Array.from(document.getElementsByClassName("bg-primary"))
let blueText=Array.from(document.getElementsByClassName("text-primary"))
let blueBTNs=Array.from(document.querySelectorAll(".main-btn"))
let lightMood=document.querySelector(".light")
let lightText=Array.from(document.querySelectorAll(".text-light"))
let lColors=Array.from(document.querySelectorAll(".light-colors span"))
let darkColors=document.querySelector(".dark-colors")
let dColors=Array.from(document.querySelectorAll(".dark-colors span"))
let lightColors=document.querySelector(".light-colors")
let darkMood=document.querySelector(".dark")
let gearIcon=document.querySelector(".gear-icon")
let sets=document.querySelector(".sets")
let home=document.getElementById("home")
let about=document.getElementById("about")
let works=document.getElementById("works")
let contact=document.getElementById("contact")
let aboutSection=document.querySelector(".about")
let worksSection=document.querySelector(".works")
let contactSection=document.querySelector(".footer")
let bullets=Array.from(document.querySelectorAll(".bullets span"))
let htmlBar=document.querySelector(".progress-bar.html")
let cssBar=document.querySelector(".progress-bar.css")
let jsBar=document.querySelector(".progress-bar.js")
let bootBar=document.querySelector(".progress-bar.boot")
let btns=Array.from(document.querySelectorAll(".buttons div"))
let css=Array.from(document.querySelectorAll("#css .box img"))
let js=Array.from(document.querySelectorAll("#js .box img"))
let boot=Array.from(document.querySelectorAll("#boot .box img"))
let mainCSS=document.querySelector("#css")
let mainJS=document.querySelector("#js")
let mainBoot=document.querySelector("#boot")
let show=document.querySelector(".show")
let hide=document.querySelector(".hide")
let bulsContainer=document.querySelector(".bullets")
let firstIMG=document.querySelector(".first-image")
let secondIMG=document.querySelector(".second-image")
let navIcon=document.querySelector("#nav-icon")
document.querySelector(".reset-btn").onclick=function(){
    localStorage.clear()
    location.reload()
}



for(let j=0;j<dColors.length;j++){
    dColors[0].onclick=blue
    dColors[1].onclick=yellow
    dColors[2].onclick=bamby
    dColors[3].onclick=white
    dColors[4].onclick=aqua
}
for(let j=0;j<lColors.length;j++){
    lColors[0].onclick=blue
    lColors[1].onclick=orange
    lColors[2].onclick=nabety
    lColors[3].onclick=black
    lColors[4].onclick=green
}

function blue(){
    document.documentElement.style.setProperty("--main-color","#007bff")
    htmlBar.style.background="#007bff"
    cssBar.style.background="#007bff"
    jsBar.style.background="#007bff"
    bootBar.style.background="#007bff"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","blue")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="#007bff"
}
function yellow(){
    document.documentElement.style.setProperty("--main-color","#ffd700")
    htmlBar.style.background="#ffd700"
    cssBar.style.background="#ffd700"
    jsBar.style.background="#ffd700"
    bootBar.style.background="#ffd700"
    htmlBar.style.color="#000"
    cssBar.style.color="#000"
    jsBar.style.color="#000"
    bootBar.style.color="#000"
    localStorage.setItem("color","yellow")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.remove("text-light")
        blueBTNs[i].style.color="#000"
    }
    navIcon.style.color="#ffd700"
}
function bamby(){
    document.documentElement.style.setProperty("--main-color","#ff004f")
    htmlBar.style.background="#ff004f"
    cssBar.style.background="#ff004f"
    jsBar.style.background="#ff004f"
    bootBar.style.background="#ff004f"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","bamby")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="#ff004f"
}
function white(){
    document.documentElement.style.setProperty("--main-color","#fff")
        for(let i=0;i<blueBTNs.length;i++){
            blueBTNs[i].classList.remove("text-light")
            blueBTNs[i].style.color="#000"
        }
        htmlBar.style.background="#222"
        cssBar.style.background="#222"
        jsBar.style.background="#222"
        bootBar.style.background="#222"
        htmlBar.style.color="#fff"
        cssBar.style.color="#fff"
        jsBar.style.color="#fff"
        bootBar.style.color="#fff"
        localStorage.setItem("color","white")
        navIcon.style.color="#fff"
}
function aqua(){
    document.documentElement.style.setProperty("--main-color","aqua")
    htmlBar.style.background="aqua"
    cssBar.style.background="aqua"
    jsBar.style.background="aqua"
    bootBar.style.background="aqua"
    htmlBar.style.color="#000"
    cssBar.style.color="#000"
    jsBar.style.color="#000"
    bootBar.style.color="#000"
    localStorage.setItem("color","aqua")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.remove("text-light")
        blueBTNs[i].style.color="#000"
    }
    navIcon.style.color="aqua"
}
function orange(){
    document.documentElement.style.setProperty("--main-color","orange")
    htmlBar.style.background="orange"
    cssBar.style.background="orange"
    jsBar.style.background="orange"
    bootBar.style.background="orange"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","orange")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="orange"
}
function nabety(){
    document.documentElement.style.setProperty("--main-color","#5c0d26")
    htmlBar.style.background="#5c0d26"
    cssBar.style.background="#5c0d26"
    jsBar.style.background="#5c0d26"
    bootBar.style.background="#5c0d26"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","nabety")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="#5c0d26"
}
function black(){
    document.documentElement.style.setProperty("--main-color","#000")
    htmlBar.style.background="#000"
    cssBar.style.background="#000"
    jsBar.style.background="#000"
    bootBar.style.background="#000"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","black")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="#000"
}
function green(){
    document.documentElement.style.setProperty("--main-color","green")
    htmlBar.style.background="green"
    cssBar.style.background="green"
    jsBar.style.background="green"
    bootBar.style.background="green"
    htmlBar.style.color="#fff"
    cssBar.style.color="#fff"
    jsBar.style.color="#fff"
    bootBar.style.color="#fff"
    localStorage.setItem("color","green")
    for(let i=0;i<blueBTNs.length;i++){
        blueBTNs[i].classList.add("text-light")
        blueBTNs[i].style.color="#fff"
    }
    navIcon.style.color="green"
}

// for(let i=0;i<blueText.length;i++){
//     blueText[i].classList.add("yellow-text")
//     blueText[i].classList.remove("text-primary")
// }
// document.documentElement.style.setProperty("--main-color","#ffd700")
// for(let i=0;i<blueBG.length;i++){
//     blueBG[i].classList.add("yellow-bg")
//     blueBG[i].classList.remove("bg-primary")
// }
// for(let i=0;i<blueBTNs.length;i++){
//     blueBTNs[i].classList.add("btn-warning")
//     blueBTNs[i].classList.remove("btn-primary")
// }


show.onclick=showBulls
function showBulls(){
    bulsContainer.style.display="block"
    hide.classList.remove("on")
    show.classList.add("on")
    localStorage.setItem("bulls","yes")
}
hide.onclick=hideBulls
function hideBulls(){
    bulsContainer.style.display="none"
    show.classList.remove("on")
    hide.classList.add("on")
    localStorage.setItem("bulls","no")
}


window.onload=function(){
    if(localStorage.getItem("mood")=="light"){
        lightFun()
    }
    else{
        darkFun()
    }
    if(localStorage.getItem("color")=="aqua"){
        aqua()
    }
    else if(localStorage.getItem("color")=="white"){
        white()
    }
    else if(localStorage.getItem("color")=="yellow"){
        yellow()
    }
    else if(localStorage.getItem("color")=="bamby"){
        bamby()
    }
    else if(localStorage.getItem("color")=="blue"){
        blue()
    }
    else if(localStorage.getItem("color")=="nabety"){
        nabety()
    }
    else if(localStorage.getItem("color")=="orange"){
        orange()
    }
    else if(localStorage.getItem("color")=="black"){
        black()
    }
    else if(localStorage.getItem("color")=="green"){
        green()
    }
    if(localStorage.getItem("bulls")=="yes"){
        showBulls()
    }
    else if(localStorage.getItem("bulls")=="no"){
        hideBulls()
    }
}




lightMood.onclick=function(){
    blue()
    lightFun()
} 
function lightFun(){
    firstIMG.setAttribute("src","./images/3M6A0468 copy.jpg")
    secondIMG.setAttribute("src","./images/1234567890.png")
    document.body.style.background="#fff"
    for(let i=0;i<lightText.length;i++){
        lightText[i].classList.remove("text-light")
    }
    darkColors.style.display="none"
    lightColors.style.display="block"
    localStorage.setItem("mood","light")
    darkMood.classList.remove("on")
    lightMood.classList.add("on")
}

darkMood.onclick=function(){
    blue()
    darkFun()
} 
function darkFun(){
    firstIMG.setAttribute("src","./images/firstblack.jpg")
    secondIMG.setAttribute("src","./images/secondblack.jpg")
    document.body.style.background="linear-gradient(#0B0B0B ,#070707)"
    for(let i=0;i<lightText.length;i++){
        lightText[i].classList.add("text-light")
    }
    lightColors.style.display="none"
    darkColors.style.display="block"
    localStorage.setItem("mood","dark")
    lightMood.classList.remove("on")
    darkMood.classList.add("on")
}


gearIcon.onclick=function(){
    if(gearIcon.classList.contains("fa-spin")){
        gearIcon.classList.remove("fa-spin")
        sets.style.left="-200px"
        gearIcon.style.left=0
    }
    else{
        gearIcon.classList.add("fa-spin")
        gearIcon.style.left="200px"
        sets.style.left=0
    }
}




for(let i=0;i<bullets.length;i++){
    bullets[0].onclick=function(){
        scroll({
            top:0,
            behavior:"smooth"
        })
    }
    bullets[1].onclick=function(){
        aboutFun()
    }
    bullets[2].onclick=function(){
        worksFun()
    }
    bullets[3].onclick=function(){
        contactFun()
    }
}



about.onclick=aboutFun
function aboutFun(){
    scroll({
        top:aboutSection.offsetTop +10,
        behavior:"smooth"
    })
}
works.onclick=worksFun
function worksFun(){
    scroll({
        top:worksSection.offsetTop,
        behavior:"smooth"
    })
}
contact.onclick=contactFun
function contactFun(){
    scroll({
        top:contactSection.offsetTop-300,
        behavior:"smooth"
    })
}



window.onscroll=function(){
    bulls()
    if(window.scrollY>aboutSection.offsetTop && window.scrollY<worksSection.offsetTop){
        htmlBar.style.width="90%"
        cssBar.style.width="85%"
        jsBar.style.width="70%"
        bootBar.style.width="90%"
    }
    else{
        htmlBar.style.width="0%"
        cssBar.style.width="0%"
        jsBar.style.width="0%"
        bootBar.style.width="0%"
    }
}





btns.forEach((btn)=>{
    btn.onclick=function(){
        if(btn.innerHTML=="All"){
            mainCSS.style.display="flex" 
            mainJS.style.display="flex" 
            mainBoot.style.display="flex" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("cs")){
            mainCSS.style.display="flex" 
            mainJS.style.display="none" 
            mainBoot.style.display="none" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("j")){
            mainCSS.style.display="none" 
            mainJS.style.display="flex" 
            mainBoot.style.display="none" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.innerHTML=="BOOTSTRAP"){
            mainCSS.style.display="none" 
            mainJS.style.display="none" 
            mainBoot.style.display="flex" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
    }

})


function bulls(){
    if(window.scrollY>=aboutSection.offsetTop && window.scrollY<worksSection.offsetTop){
        for(let i=0;i<bullets.length;i++){
            bullets[i].classList.remove("main-btn")
            bullets[1].classList.add("main-btn")
        }
    }
    else if(window.scrollY>=worksSection.offsetTop && window.scrollY<contactSection.offsetTop-500){
        for(let i=0;i<bullets.length;i++){
            bullets[i].classList.remove("main-btn")
            bullets[2].classList.add("main-btn")
        }
    }
    else if(window.scrollY>contactSection.offsetTop-500){
        for(let i=0;i<bullets.length;i++){
            bullets[i].classList.remove("main-btn")
            bullets[3].classList.add("main-btn")
        }
    }
    else{
        for(let i=0;i<bullets.length;i++){
            bullets[i].classList.remove("main-btn")
            bullets[0].classList.add("main-btn")
        }
    }
}




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
let reactBar=document.querySelector(".progress-bar.react")
let javaBar=document.querySelector(".progress-bar.java")
let sqlBar=document.querySelector(".progress-bar.sql")
let laravelBar=document.querySelector(".progress-bar.laravel")
let apiBar=document.querySelector(".progress-bar.api")
let dartBar=document.querySelector(".progress-bar.dart")
let flatterBar=document.querySelector(".progress-bar.flatter")
let googleBar=document.querySelector(".progress-bar.google")
let tubeBar=document.querySelector(".progress-bar.tube")
let twitterBar=document.querySelector(".progress-bar.twitter")
let instgramBar=document.querySelector(".progress-bar.instgram")
let faceBar=document.querySelector(".progress-bar.face")
let indesignBar=document.querySelector(".progress-bar.indesign")
let photoshopBar=document.querySelector(".progress-bar.photoshop")
let xdBar=document.querySelector(".progress-bar.xd")
let illistrationBar=document.querySelector(".progress-bar.illistration")
let figmaBar=document.querySelector(".progress-bar.figma")
let illistrationUBar=document.querySelector(".progress-bar.illistration-u")
let xdUBar=document.querySelector(".progress-bar.xd-u")
let figmaUBar=document.querySelector(".progress-bar.figma-u")
let btns=Array.from(document.querySelectorAll(".buttons div"))
let web=Array.from(document.querySelectorAll("#web .box img"))
let app=Array.from(document.querySelectorAll("#app .box img"))
let graphic=Array.from(document.querySelectorAll("#graphic .box img"))
let social=Array.from(document.querySelectorAll("#social .box img"))
let ui=Array.from(document.querySelectorAll("#ui .box img"))
let mainWeb=document.querySelector("#web")
let mainApp=document.querySelector("#app")
let mainGraphic=document.querySelector("#graphic")
let mainSocial=document.querySelector("#social")
let mainUi=document.querySelector("#ui")
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

let skills=Array.from(document.querySelectorAll(".skills"))
let webSkills=document.querySelector(".web-skills")
let appSkills=document.querySelector(".app-skills")
let graphicSkills=document.querySelector(".graphic-skills")
let uiSkills=document.querySelector(".ui-skills")
let socialSkills=document.querySelector(".social-skills")

function skil(){
    skills.forEach((skill)=>{
        skill.onclick=function(){
            for(let i=0;i<skills.length;i++){
                skills[i].classList.remove("active")
                skill.classList.add("active")
                if(skills[1].classList.contains("active")){
                    webSkills.style.display="none"
                    appSkills.style.display="block"
                    graphicSkills.style.display="none"
                    socialSkills.style.display="none"
                    uiSkills.style.display="none"
                }
                else if(skills[0].classList.contains("active")){
                    webSkills.style.display="block"
                    appSkills.style.display="none"
                    graphicSkills.style.display="none"
                    socialSkills.style.display="none"
                    uiSkills.style.display="none"
                }
                else if(skills[2].classList.contains("active")){
                        webSkills.style.display="none"
                        appSkills.style.display="none"
                        graphicSkills.style.display="block"
                        socialSkills.style.display="none"
                        uiSkills.style.display="none"
                    }
                else if(skills[3].classList.contains("active")){
                        webSkills.style.display="none"
                        appSkills.style.display="none"
                        graphicSkills.style.display="none"
                        socialSkills.style.display="block"
                        uiSkills.style.display="none"
                    }
                    else if(skills[4].classList.contains("active")){
                            webSkills.style.display="none"
                            appSkills.style.display="none"
                            graphicSkills.style.display="none"
                            socialSkills.style.display="none"
                            uiSkills.style.display="block"
                        }    
            }
            // if(skill.innerHTML=="apps"){
            //     webSkills.style.display="none"
            //     appSkills.style.display="block"
            //     graphicSkills.style.display="none"
            //     socialSkills.style.display="none"
            //     uiSkills.style.display="none"
            // }
            // else if(skill.innerHTML=="web"){
            //     webSkills.style.display="block"
            //     appSkills.style.display="none"
            //     graphicSkills.style.display="none"
            //     socialSkills.style.display="none"
            //     uiSkills.style.display="none"
            // }
            // else if(skill.innerHTML=="graphic"){
            //     webSkills.style.display="none"
            //     appSkills.style.display="none"
            //     graphicSkills.style.display="block"
            //     socialSkills.style.display="none"
            //     uiSkills.style.display="none"
            // }
            // else if(skill.innerHTML=="social"){
            //     webSkills.style.display="none"
            //     appSkills.style.display="none"
            //     graphicSkills.style.display="none"
            //     socialSkills.style.display="block"
            //     uiSkills.style.display="none"
            // }
            // else if(skill.innerHTML=="UI/UX"){
            //     webSkills.style.display="none"
            //     appSkills.style.display="none"
            //     graphicSkills.style.display="none"
            //     socialSkills.style.display="none"
            //     uiSkills.style.display="block"
            // }
        }
    })
}

window.onscroll=scrol
function scrol(){
    skil()
    bulls()
    if(window.scrollY>aboutSection.offsetTop && window.scrollY<worksSection.offsetTop){
        htmlBar.style.width="90%"
        cssBar.style.width="85%"
        jsBar.style.width="70%"
        bootBar.style.width="90%"
        javaBar.style.width="65%"
        reactBar.style.width="70%"
        sqlBar.style.width="70%"
        apiBar.style.width="90%"
        laravelBar.style.width="95%"
        dartBar.style.width="90%"
        flatterBar.style.width="80%"
        googleBar.style.width="95%"
        tubeBar.style.width="80%"
        twitterBar.style.width="80%"
        instgramBar.style.width="100%"
        faceBar.style.width="100%"
        indesignBar.style.width="95%"
        photoshopBar.style.width="90%"
        xdBar.style.width="85%"
        illistrationBar.style.width="90%"
        figmaBar.style.width="80%"
        xdUBar.style.width="90%"
        illistrationUBar.style.width="85%"
        figmaUBar.style.width="90%"
        
    }
    else{
        htmlBar.style.width="0%"
        cssBar.style.width="0%"
        jsBar.style.width="0%"
        bootBar.style.width="0%"
        reactBar.style.width="0%"
        javaBar.style.width="0%"
        sqlBar.style.width="0%"
        apiBar.style.width="0%"
        laravelBar.style.width="0%"
        dartBar.style.width="0%"
        flatterBar.style.width="0%"
        googleBar.style.width="0%"
        tubeBar.style.width="0%"
        twitterBar.style.width="0%"
        instgramBar.style.width="0%"
        faceBar.style.width="0%"
        indesignBar.style.width="0%"
        photoshopBar.style.width="0%"
        xdBar.style.width="0%"
        illistrationBar.style.width="0%"
        figmaBar.style.width="0%"
        xdUBar.style.width="0%"
        illistrationUBar.style.width="0%"
        figmaUBar.style.width="0%"
    }
}





btns.forEach((btn)=>{
    btn.onclick=function(){
        if(btn.innerHTML=="All"){
            mainWeb.style.display="flex" 
            mainApp.style.display="flex"  
            mainGraphic.style.display="flex" 
            mainSocial.style.display="flex" 
            mainUi.style.display="flex" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("web")){
            mainWeb.style.display="flex" 
            mainApp.style.display="none"  
            mainGraphic.style.display="none" 
            mainSocial.style.display="none" 
            mainUi.style.display="none" 
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("app")){
            mainWeb.style.display="none" 
            mainApp.style.display="flex"  
            mainGraphic.style.display="none" 
            mainSocial.style.display="none" 
            mainUi.style.display="none"
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("graphic")){
            mainWeb.style.display="none" 
            mainApp.style.display="none"  
            mainGraphic.style.display="flex" 
            mainSocial.style.display="none" 
            mainUi.style.display="none"
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("social")){
            mainWeb.style.display="none" 
            mainApp.style.display="none"  
            mainGraphic.style.display="none" 
            mainSocial.style.display="flex" 
            mainUi.style.display="none"
            let active=btns.find((e)=>e.classList.contains("active"))
            active.classList.remove("active")
            btn.classList.add("active")
        }
        else if(btn.classList.contains("ui")){
            mainWeb.style.display="none" 
            mainApp.style.display="none"  
            mainGraphic.style.display="none" 
            mainSocial.style.display="none" 
            mainUi.style.display="flex"
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

function showImg(num){
   let div= document.createElement("div")
   div.classList.add("over")
   let img=document.createElement("img")
   img.setAttribute("src",`./images/app/app${num}.jpeg`)
   let text=document.createElement("div")
   text.classList.add("text")
   let texttext=document.createTextNode("X")
   text.appendChild(texttext)
   div.appendChild(text)
   div.appendChild(img)
   document.body.appendChild(div)
    text.onclick=function(){
        div.remove()
    }
}
function showgraphic(num){
   let div= document.createElement("div")
   div.classList.add("over")
   let img=document.createElement("img")
   img.setAttribute("src",`./images/graphic/${num}.jpeg`)
   let text=document.createElement("div")
   text.classList.add("text")
   let texttext=document.createTextNode("X")
   text.appendChild(texttext)
   div.appendChild(text)
   div.appendChild(img)
   document.body.appendChild(div)
    text.onclick=function(){
        div.remove()
    }
}
function showsocial(num){
   let div= document.createElement("div")
   div.classList.add("over")
   let img=document.createElement("img")
   img.setAttribute("src",`./images/social/${num}.jpeg`)
   let text=document.createElement("div")
   text.classList.add("text")
   let texttext=document.createTextNode("X")
   text.appendChild(texttext)
   div.appendChild(text)
   div.appendChild(img)
   document.body.appendChild(div)
    text.onclick=function(){
        div.remove()
    }
}
function showui(num){
   let div= document.createElement("div")
   div.classList.add("over")
   let img=document.createElement("img")
   img.setAttribute("src",`./images/ui/${num}.jpeg`)
   let text=document.createElement("div")
   text.classList.add("text")
   let texttext=document.createTextNode("X")
   text.appendChild(texttext)
   div.appendChild(text)
   div.appendChild(img)
   document.body.appendChild(div)
    text.onclick=function(){
        div.remove()
    }
}


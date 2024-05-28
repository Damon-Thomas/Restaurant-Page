import './styles.css';
import {landingPage} from './landing-page.js'
import {homePage} from './home-page.js'
import { aboutPage } from './about-page.js';
import { menuPage } from './menu-page.js';

let mainContentDiv = document.getElementById("content")
landingPage()


function pageReset() {
    mainContentDiv.innerHTML = ''
}

function homeHandler(){
    pageReset()
    homePage()
}

function menuHandler(){
    pageReset()
    menuPage()
}

function aboutHandler(){
    pageReset()
    aboutPage()
}


const homeButton = document.querySelector('.home')
homeButton.addEventListener("click", homeHandler)
const menuButton = document.querySelector('.menu')
menuButton.addEventListener('click', menuHandler)
const aboutButton = document.querySelector('.about')
aboutButton.addEventListener('click', aboutHandler)


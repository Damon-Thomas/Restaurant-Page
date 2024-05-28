function homePage(){

const mainContent = document.getElementById("content")
const homeContent = document.createElement('div')
homeContent.classList.add('text-box')
mainContent.appendChild(homeContent)

// Title
const homeTitle = document.createElement('h1')
homeTitle.classList.add('title')
homeTitle.textContent = "Home"
homeContent.appendChild(homeTitle)

// Location
const divLoc = document.createElement('div')
homeContent.appendChild(divLoc)
divLoc.classList.add('body-text')
const locationTitle = document.createElement('h1')
locationTitle.classList.add('sub-title')
locationTitle.textContent = 'Location'
divLoc.appendChild(locationTitle)
const location = document.createElement('h3')
location.textContent = 'Come visit us at:'
divLoc.appendChild(location)
const locationpara = document.createElement('p')
locationpara.textContent = '5579 Fakington Ave. New York, NY'
divLoc.appendChild(locationpara)

// Contact Us
const divCon = document.createElement('div')
homeContent.appendChild(divCon)
divCon.classList.add('body-text')
const contactTitle = document.createElement('h1')
contactTitle.classList.add('sub-title')
contactTitle.textContent = 'Contact Us'
divCon.appendChild(contactTitle)
const contactUs = document.createElement('h3')
contactUs.textContent = 'You can reach us at:'
divCon.appendChild(contactUs)
const contactpara = document.createElement('p')
contactpara.textContent = '1-905-555-5959'
divCon.appendChild(contactpara)







}

export {homePage}
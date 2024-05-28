
function landingPage() {
    const textDiv = document.createElement('div')
    textDiv.classList.add("text-box")
    const mainContent = document.getElementById("content")
    mainContent.appendChild(textDiv)
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.textContent = 'Relax & Chill PUB'
    restaurantTitle.classList.add("text")
    const tagLine = document.createElement('h2')
    tagLine.textContent = 'Food. Friends. Atmosphere. Everything you need right here.'
    tagLine.classList.add("text")
    textDiv.appendChild(restaurantTitle)
    textDiv.appendChild(tagLine)}

export {landingPage}

function aboutPage(){

    const mainContent = document.getElementById("content")
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('text-box')
    mainContent.appendChild(aboutContent)

    // Title
    const aboutTitle = document.createElement('h1')
    aboutTitle.classList.add('title')
    aboutTitle.textContent = "About"
    aboutContent.appendChild(aboutTitle)


    // Our Chefs
    const divChefs = document.createElement('div')
    aboutContent.appendChild(divChefs)
    divChefs.classList.add('body-text')
    const chefsTitle = document.createElement('h1')
    chefsTitle.classList.add('sub-title')
    chefsTitle.textContent = 'Our Chefs'
    divChefs.appendChild(chefsTitle)
    const chefs = document.createElement('h3')
    chefs.textContent = "Chef Gulio and Chef Patricia"
    divChefs.appendChild(chefs)
    const chefspara = document.createElement('p')
    chefspara.textContent = "Our rich history of eating food since birth has created a strong foundation that we've reinforced with inspirations taken from the finest chefs from France, Italy, and Antarctica. You're sure to have an experience you won't soon forget."
    divChefs.appendChild(chefspara)
    
    // Our History
    const divHistory = document.createElement('div')
    aboutContent.appendChild(divHistory)
    divHistory.classList.add('body-text')
    const historyTitle = document.createElement('h1')
    historyTitle.classList.add('sub-title')
    historyTitle.textContent = 'Our History'
    divHistory.appendChild(historyTitle)
    const history = document.createElement('h3')
    history.textContent = "Established in 1952"
    divHistory.appendChild(history)
    const historypara = document.createElement('p')
    historypara.textContent = "Founded by two friends (Boris Butkitler and Jack Harpmistle) born on different sides of the world. R&C Pub was created to be a safe haven from war, work, and responsibilities. They were frequent patrons of the pub until they both passed away only 5 days apart back in 1997. "
    divHistory.appendChild(historypara)
    
    
    
    
    
    
    
    }
    
    export {aboutPage}
function menuPage(){

    const mainContent = document.getElementById("content")
    const menuContent = document.createElement('div')
    menuContent.classList.add('text-box')
    mainContent.appendChild(menuContent)

    // Title
    const menuTitle = document.createElement('h1')
    menuTitle.classList.add('title')
    menuTitle.textContent = "Menu"
    menuContent.appendChild(menuTitle)


    // Menu Items Box
    const divMenu = document.createElement('div')
    menuContent.appendChild(divMenu)
    divMenu.classList.add('menu-items')

    // food item 1
    const food1 = document.createElement('div')
    food1.classList.add('food')
    divMenu.appendChild(food1)
    const food1title = document.createElement('h2')
    food1title.textContent = 'Chicken Strips'
    food1.appendChild(food1title)
    const food1para = document.createElement('p')
    food1para.textContent = "Moist chicken tenders coated in our delicious batter. Comes with a sauce bar with your choice of 5 sauces."
    food1.appendChild(food1para)
    
    // food item 2
    const food2 = document.createElement('div')
    food2.classList.add('food')
    divMenu.appendChild(food2)
    const food2title = document.createElement('h2')
    food2title.textContent = 'Chicken Wings'
    food2.appendChild(food2title)
    const food2para = document.createElement('p')
    food2para.textContent = "Saucy wings with your choice of batter and sauce. A true classic."
    food2.appendChild(food2para)
    
    // food item 3
    const food3 = document.createElement('div')
    food3.classList.add('food')
    divMenu.appendChild(food3)
    const food3title = document.createElement('h2')
    food3title.textContent = 'Mozzarella Sticks'
    food3.appendChild(food3title)
    const food3para = document.createElement('p')
    food3para.textContent = "Ooeey Gooeey Goodness. Sure to melt in your mouth. Made from only the finest hand selected cheeses from the Netherlands."
    food3.appendChild(food3para)

    // food item 4
    const food4 = document.createElement('div')
    food4.classList.add('food')
    divMenu.appendChild(food4)
    const food4title = document.createElement('h2')
    food4title.textContent = 'Tacos'
    food4.appendChild(food4title)
    const food4para = document.createElement('p')
    food4para.textContent = "Sometimes tacos are exactly what you need. Make them yourself from our selection of fresh ingredients."
    food4.appendChild(food4para)

    // food item 5
    const food5 = document.createElement('div')
    food5.classList.add('food')
    divMenu.appendChild(food5)
    const food5title = document.createElement('h2')
    food5title.textContent = 'Pizza'
    food5.appendChild(food5title)
    const food5para = document.createElement('p')
    food5para.textContent = "The finest Deep Dish Pizza North of the Mississipi. You just have to try it. Words won't do it justice."
    food5.appendChild(food5para)

    // food item 6
    const food6 = document.createElement('div')
    food6.classList.add('food')
    divMenu.appendChild(food6)
    const food6title = document.createElement('h2')
    food6title.textContent = 'Burger'
    food6.appendChild(food6title)
    const food6para = document.createElement('p')
    food6para.textContent = "Have it your way. Choose from our lists of 57 toppings. It's a staple dish for a reason, and ours is top tier."
    food6.appendChild(food6para)
    
    
    
    
    
    }
    
    export {menuPage}
let message1 = 
"This is a website to hold all of the Houssian family favorite recipes. \
 \
This will make it super simple to record and share all of the favorite recipes with anyone, friends, family, and anyone who wants to eat the good food! You can email me at tylerhoussian@gmail.com with a recipe and I will add it to the list! \
 \
        Format for recipes: \
 \
        -Picture \
        -Name \
 \
        -Ingredient \
        -Ingredient \
        -Ingredient \
        -... \
 \
        Instruction \
        Instruction \
        Instruction \
        ...;"

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message1').textContent = message1;

document.querySelector('#img').class = "main-left-img";
document.querySelector('#img').src = "https://cdn.glitch.com/1aa04ded-998b-4538-b768-7448e1428131%2Ffeed.jpg?v=1605073943750";
document.querySelector('#img').alt = "If You Feed Them IMG";

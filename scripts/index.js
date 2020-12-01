let message1 = 
"This is a website to hold all of the Houssian family favorite recipes. \
 \
This will make it super simple to record and share all of the favorite recipes with anyone, friends, family, and anyone who wants to eat the good food! You can email me at tylerhoussian@gmail.com with a recipe and I will add it to the list!"

let message2 = "Format for recipes:\n \
\
Picture\n \
\
Name\n \
\
-Ingredient\n \
-Ingredient\n \
-Ingredient\n \
...\n \
\
-Instruction\n \
-Instruction\n \
-Instruction\n \
..."

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message1').textContent = message1;
document.querySelector('#message2').textContent = message2;

document.querySelector('#img').class = "main-left-img";
document.querySelector('#img').src = "https://www.creativefabrica.com/wp-content/uploads/2018/07/If-you-feed-them-they-will-come-580x386.jpg";
document.querySelector('#img').alt = "If You Feed Them IMG";

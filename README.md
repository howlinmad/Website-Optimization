# Website-Optimization <br />
Udacity Project 4 <br />

Optimize PageSpeed Insights score for index.html <br />
1) added media="print" to the css/print.css link.<br /> 
2) delayed loading of non-essential scripts by making them asynchronous.<br /> 
3) Used Grunt to automate image opitimization and remove render blocking CSS.<br /> 
  -Grunt plug-in critical moved critical above the fold CSS to inline. <br />
  -Grunt plug-in imagemin compressed images and saved 98.79KB.<br />
4) Used image editing software to create new optimized thumbnail for pizzeria.jpg<br />
5) Commented changes in index.html file.<br />

PageSpeed Insight score: Mobile: 94, Desktop: 95<br />

Optimize Frames per Second in pizza.html<br />
1) Used Google Web Development tools to identify problems<br />
2) Changed to document.getElementById instead of document.querySelector for windowwidth in determinDx function<br />
3) Moved variables out of loop for changePizzaSizes function, changed querySelectorAll to getElementByClassName, 
    and changed number of loop iterations. <br />
4) Moved var pizzaDiv = document.getElementById("randomPizzas") out of for loop<br />
5) Reduced the number of pizzas that appear in the background by using window.innerHeight and window.innerWidth<br />
6) Commmented changes in main.js<br />

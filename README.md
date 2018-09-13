# Friend-Finder

1. The user is first taken to the home page where they will see a description of the app and a button for them to begin the quiz. 
2. Once the user clicks the button it will take them to the quiz, where they will have to enter their name, an image address and answer the questions. 
3. Once the user has provided all the information, and hits the submit button, their responses will be used to compare against the answers of the characters. 
4. The absolute difference will be taken between the user's answers and the characters. 
5. The result will then be the character with the lowest total difference between their answers and the user's.
6. A modal will then be displayed. 
7. This will have the name of their movie character best friend as well as their picture. 
8. The form will also reset. 


**Technologies used**

Html
CSS
Bootstrap
jQuery
Javascript
Express
Node

**File Structure**

├── app

│   ├── data

│   │   └──friends.js

│   ├── public

│   │   └──home.html

│   │   └──survey.html

│   │   └──reset.css

│   │   └──style.css

│   │   └──olivia.jpg

│   │   └──background.jpg

│   ├── routing

│   │   └──apiRoutes.js

│   │   └──htmlRoutes.js

└── package-lock.json

└── package.json

└── README.md

└── server.js

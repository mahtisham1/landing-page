/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


const navBar = document.getElementById('navbar__list');

        let listArray = [];
        for(let i=1; i<=3; i++){
            for(let j=1; j<=3; j++){
                let list = '<li><a class="menu__link" href="">Section</a></li>';
                listArray.push(list);
                navBar.innerHTML = listArray;
            }
                    var listText = document.querySelector('.menu__link');
                    var innerContent = listText.textContent;
                    innerContent = innerContent + i;
                    // textArray.push(innerContent);
        }

    // for(let i= 1; i<= 3; i++){
    //     var listText = document.querySelector('.menu__link');
    //     var innerText = listText.textContent;

    //     var num = innerText + i;
    //     list.innerHTML = num;


    //     console.log(num);
    // }








// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active



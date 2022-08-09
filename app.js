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
                let list = `<li><a class="menu__link" href="">Section ${i}</a></li>`;
                listArray.push(list);
                navBar.innerHTML = listArray;
        };


// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll('section');
const activeState = document.querySelector('.your-active-class');
function addRemoveClass(){
        for(let i=1; i<=sections.length; i++){
                const rect = sections.getBoundingClientRect();

                if(sections <= rect){
                        sections.classList.add(activeState);
                }

                else{
                        sections.classList.remove(activeState);
                }
        }
}

addRemoveClass();


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active



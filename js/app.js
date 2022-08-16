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


// Define Global Variables

const sections = document.querySelectorAll('section'); //accessing sections from DOM


// build the nav

const navBar = document.getElementById('navbar__list'); // accessing ul list from DOM

        let menuHtml = ''; // lets make a varibale with empty string
        for(let i=1; i<=sections.length; i++){ // iterating newly created list as per the number of sections
                menuHtml += `<li><a class="menu__link" href="#section${i}">Section ${i}</a></li>`; //creating and adding list html in empty string
        };
        navBar.innerHTML = menuHtml; // now adding iterated lists into ul


// Add class 'active' to section when near top of viewport

const activeState = 'your-active-class'; //creating a variable with a string same as active class

document.addEventListener('scroll', addRemoveClass); // adding event scroll on document with a function to add/remove active class

function addRemoveClass(){
        const maxY = window.innerHeight * 0.2; //taking 20% window innerHieght for conditional statement for adding active class
        const minY = 0 - (window.innerHeight * 0.8); //taking 80% window innerHieght subtracting it from 0 axix for conditional statement for removing active class
        sections.forEach(element => { //looping each section with element parameter
                let elementPosition = element.getBoundingClientRect(); //lets take coordinates of the element in selected section

                if(elementPosition.y <= maxY && elementPosition.y >= minY){ //conditonal statements with element y-axix
                        element.classList.add(activeState); //add class if first statement is true
                }
                else {
                        element.classList.remove(activeState); // remove class if second statement is true
                }
        });
}


// Scroll to anchor ID using scrollTO event
const menuLinks = document.querySelectorAll('.menu__link'); //accessing anchors from li

const scroll = y_position => {  //function expression as a variable with an argument which will be invoked with y argument
        window.scrollTo({
                top: y_position,
                behavior: "smooth"
              });
}

menuLinks.forEach(element =>{ //looping each anchor with element parameter
        element.addEventListener('click', scrollSmooth); //adding event to trigger on click with a function
})

function scrollSmooth(e){ //function with a parameter
        e.preventDefault(); //lets prevent the browser for default event if occurring
        const Id = e.currentTarget.getAttribute('href'); //access current href on click event
        const y = document.querySelector(Id).getBoundingClientRect().top + window.scrollY; //getting y_positon on event occuring
        scroll(y); //invoking scroll function with y argument
}



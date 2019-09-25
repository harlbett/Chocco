// hamburger menu

const hamburger_menu_link = document.querySelector('.hamburger-menu-link');

hamburger_menu_link.addEventListener('click', function(event) {
    event.preventDefault();
    
    const hamburger_menu = document.querySelector('.hamburger-menu');
    hamburger_menu.style.display = 'block';

    const close_menu = document.querySelector('.hamburger-menu__close');
    close_menu.addEventListener('click', function(evt) {
        evt.preventDefault();

        hamburger_menu.style.display = 'none';
    });
});

// slider

const left = document.querySelector('.slider__arrow--left');
const right = document.querySelector('.slider__arrow--right');
const slides = document.querySelector('.slider__list');
const slide = document.querySelector('.slide');
/*
const min_right = 0;
const max_right = slide.offsetWidth;
const step = slide.offsetWidth;
let current_right = 0;

slides.style.right = current_right;
*/

const min_right = 0;
let current_right = 0;
slides.style.right = current_right;

left.addEventListener('click', function(event) {
    event.preventDefault();
    const max_right = slide.offsetWidth;
    const step = max_right;
    
    if (current_right > min_right) {
        current_right -= step;
        slides.style.right = current_right + "px";
    }
    else {
        current_right = max_right;
        slides.style.right = current_right + "px";
    }
});

right.addEventListener('click', function(event) {
    event.preventDefault();
    const max_right = slide.offsetWidth;
    const step = max_right;

    if (current_right < max_right) {
        current_right += step;
        slides.style.right = current_right + "px";
    }
    else {
        current_right = min_right;
        slides.style.right = current_right + "px";
    }
});

// slider ingredients

function addEventListenerList(list, event, fn) {
    for (let i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

const ingredients_links = document.querySelectorAll('.ingredients__link');
addEventListenerList(ingredients_links, 'click', function(event) {
    event.preventDefault();
    
    const ingredients_lists = document.querySelectorAll('.ingredients__list');
    
    for (let i = 0, len = ingredients_lists.length; i < len; i++) {
        
        let ingredients_list = ingredients_lists[i];
        let display_status = ingredients_list.style.display;

        if (display_status == 'none') {
            ingredients_list.style.display = 'block';
        }
        else {
            ingredients_list.style.display = 'none';
        }
    }
});

// vertical accordeon
const v_accordeon = document.querySelector(".menu-accordeon");
createAccordeon(v_accordeon);

// horizontal accordeon
const h_accordeon = document.querySelector(".team-accordeon");
createAccordeon(h_accordeon);


function createAccordeon(element) {
    let last_active;

    element.addEventListener("click", function(event) {
        event.preventDefault();
        let user_target;

        if (element.className == "menu-accordeon") {
            user_target = event.target.parentNode;
        }
        else {
            user_target = event.target;
        }

        if (user_target.classList.contains(element.className + "__trigger")) {

            if (last_active) {
                last_active.classList.remove(element.className+ "__item--active");
            }
      
            last_active = user_target.parentNode;
            last_active.classList.add(element.className + "__item--active");
          }
    });
}

// order form

const form_elem = document.querySelector('.form__elem');
const form_button = document.querySelector('.form__button');

form_button.addEventListener('click', function(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(new FormData(form_elem)));

    xhr.addEventListener('load', function() {
        console.log(xhr.response);
    });

//    const data = {
//        name: form_elem.elements.name.value,
//        phone: form_elem.elements.phone.value,
//        comment: form_elem.elements.comment.value
//    }

//    console.log(data);

//    const xhr = new XMLHttpRequest();

//    xhr.responseType = 'json';
//    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//    xhr.send(JSON.stringify(data));
//    xhr.addEventListener('load', function() {
//        console.log(xhr.response);
//    });
});

/*
form_button.addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm(form_elem)) {
        console.log('ok');
    }
});

function validateForm(form) {
    let valid = true;
    
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
*/

// reviews slideshow

const reviews = document.querySelector(".reviews");
let first_active_review = document.getElementById("alyona-review");
switchReview(reviews);


function switchReview(element) {
    let last_active;
    let last_active_review = first_active_review;

    element.addEventListener("click", function(event) {
        event.preventDefault();
        let user_target = event.target.parentNode;

        if (user_target.classList.contains(element.className + "__link")) {
            if (last_active_review) {
                last_active_review.classList.remove(element.className + "__item--active");
            }
            
            if (last_active) {
                last_active.classList.remove(element.className + "__switch-item--active");
            }
      
            last_active = user_target.parentNode;
            last_active.classList.add(element.className + "__switch-item--active");

            last_active_review = document.getElementById(last_active.id + "-review");
            last_active_review.classList.add(element.className + "__item--active");
          }
    });
}
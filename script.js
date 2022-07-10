const selectTown = document.getElementById('town');
const town = document.getElementById('townP');
const input = document.getElementById('search');
const body = document.querySelector('body');
const menuToggle = document.querySelector('#menu__toggle');
const menuSearch = document.getElementById('menuSearch');
let isClicked = false;

selectTown.addEventListener('change', () => {
    let currentIndex = selectTown.options.selectedIndex;
    let text = selectTown.options[currentIndex].innerText;
    if (text == 'сменить') {
        town.innerText = 'Москва';
    } else {
        town.innerText = text;
    }
});

input.onfocus = function() {
    isClicked = true;
    console.log(666)
    input.classList.add('input-search');
};

input.addEventListener('click', (e) => {
    isClicked = true;
    console.log(667776)
});

input.addEventListener("focusout", function() {
    isClicked = false;
    console.log(111111)
});

body.addEventListener('click', () => {
    if (!isClicked) {
        input.blur();
        input.classList.remove('input-search');
    }
});

document.addEventListener('click', function(e) {
  
    if((e.target.id != 'menu__toggle') && (e.target.id != 'menuSearch')) {
        menuToggle.checked = false;
    }
});
const selectTown = document.getElementById('town');
const town = document.getElementById('townP');

selectTown.addEventListener('change', () => {
    let currentIndex = selectTown.options.selectedIndex;
    let text = selectTown.options[currentIndex].innerText;
    if (text == 'сменить') {
        town.innerText = 'Москва';
    } else {
        town.innerText = text;
    }
})
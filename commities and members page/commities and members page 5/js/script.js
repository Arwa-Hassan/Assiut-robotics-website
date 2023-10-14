//global variables
const board = document.querySelectorAll('.circle');
const members = document.querySelectorAll('.circle2');
const info = document.querySelector('.col-4');
const border = document.querySelector('.vline');

//clicking event for board members
board.forEach(e => {
    e.addEventListener("click", () => {
        if (info.style.display === 'none') {
            info.style.display = 'block';
            border.style.display = 'block';
        } else {
            info.style.display = 'none';
            border.style.display = 'none';
        }
    })
})

//clicking event for team members
members.forEach(e => {
    e.addEventListener("click", () => {
        if (info.style.display === 'none') {
            info.style.display = 'block';
            border.style.display = 'block';
        } else {
            info.style.display = 'none';
            border.style.display = 'none';
        }
    })
})
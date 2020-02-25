
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg  = document.querySelector('body');

const colors = ['yellow', 'red', 'blue', '#fb3389', '#4563ae'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}



let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter(){
    count ++;
    counter.innerHTML = count;
    color(count);

   
}

function decrementCounter(){
    count --;
    counter.innerHTML = count;
    color(count);
}

function color(count){
    if(count > 0){
        counter.style.color = '#4caff0';
    } else if(count < 0){
        counter.style.color = 'red';
    }else{
        counter.style.color = '#000';
    }

    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}],
    {duration:1000,fill:'forwards'});

}

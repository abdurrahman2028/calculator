
let display = document.getElementById('display');
let btn = document.getElementsByClassName('btn');

let clear = document.getElementById('clear');
let c = document.getElementById('c');

let equal = document.getElementById('equal');



for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        display.value = display.value + btn[i].innerHTML;
    })
}

equal.addEventListener('click', function(){
    display.value = eval(display.value);
})

clear.addEventListener('click', function(){
    display.value = '';
})
c.addEventListener('click', function(){
    display.value = display.value.slice(0, -1);
})











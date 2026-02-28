var num = 0;
var inc = document.querySelector('#increment');
var dec = document.querySelector('#decrement');
var h1 = document.querySelector('h1');

inc.addEventListener('click', function(){
    num++;
    h1.innerHTML = num;
});

dec.addEventListener('click', function(){
    num--;
    h1.innerHTML = num;   
})


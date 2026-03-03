var btn = document.querySelector('.btn');
var reset = document.querySelector('.reset');
var h3 = document.querySelector('h2')
var count = 0;
var interval;
var time;
var inner = document.querySelector('.inner-bar');
var txt = document.querySelector('.completed-txt');

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none';

    time = 50 + Math.floor(Math.random()*30);
    
    interval = setInterval(() => {
        count++;
        h3.innerHTML = count+"%";
        inner.style.width = `${count}`+'%';
    }, time);

    
    setTimeout(() => {
        clearInterval(interval);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 0.5;
        txt.innerHTML = `The file downloaded in ${time/10} seconds.`;
    }, time*100);
});

reset.addEventListener('click', function(){
    clearInterval(interval);
    h3.innerHTML = "0%";
    inner.style.width = "";
    btn.innerHTML = "Download";
    btn.style.opacity = 1;
    txt.innerHTML = "";
    btn.style.pointerEvents = 'all';
    count = 0;
    time = 0;
})
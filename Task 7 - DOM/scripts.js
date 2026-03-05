alert("Welcome to Virtual Piano. You can play notes by clicking the on-screen keys or by using your physical keyboard.");

var body = document.querySelector('body');
var piano = document.querySelector('.piano');

var aud = function(key) {
    new Audio(`./Sounds/${key}.mp3`).play(); 
}

var clickedId = "";
var pressedKey = "";

piano.addEventListener("click", function(event) {
    clickedId = event.target.id;
    checkMatch();
});

body.addEventListener("keydown", function(dets) {
    pressedKey = dets.key; 
    checkMatch();

    var keyEffect = document.getElementById(pressedKey);
        if (keyEffect) {
            keyEffect.style.transform = "scale(0.95)";
        }
    document.addEventListener('keyup', function(){
        if (keyEffect) {
            keyEffect.style.transform = "scale(1)"; 
        }
    });
});


function checkMatch() {
    switch (true) {
        case (clickedId === "y" || pressedKey === "y"):
            aud(28);
            break;
    
        case (clickedId === "u" || pressedKey === "u"):
            aud(29);
            break;
        
        case (clickedId === "i" || pressedKey === "i"):
            aud(30);
            break;

        case (clickedId === "o" || pressedKey === "o"):
            aud(31);
            break;

        case (clickedId === "p" || pressedKey === "p"):
            aud(32);
            break;

        case (clickedId === "a" || pressedKey === "a"):
            aud(33);
            break;

        case (clickedId === "s" || pressedKey === "s"):
            aud(34);
            break;

        case (clickedId === "d" || pressedKey === "d"):
            aud(35);
            break;

        case (clickedId === "f" || pressedKey === "f"):
            aud(36);
            break;

        case (clickedId === "g" || pressedKey === "g"):
            aud(37);
            break;

        case (clickedId === "h" || pressedKey === "h"):
            aud(38);
            break;
            
        case (clickedId === "j" || pressedKey === "j"):
            aud(39);
            break;

        case (clickedId === "k" || pressedKey === "k"):
            aud(40);
            break;

        case (clickedId === "l" || pressedKey === "l"):
            aud(41);
            break;

        case (clickedId === "z" || pressedKey === "z"):
            aud(42);
            break;

        case (clickedId === "x" || pressedKey === "x"):
            aud(43);
            break;

        case (clickedId === "c" || pressedKey === "c"):
            aud(44);
            break;

        case (clickedId === "v" || pressedKey === "v"):
            aud(45);
            break;
        
        case (clickedId === "b" || pressedKey === "b"):
            aud(46);
            break;
            
        case (clickedId === "n" || pressedKey === "n"):
            aud(47);
            break;
            
        case (clickedId === "m" || pressedKey === "m"):
            aud(48);
            break;

        case (clickedId === "1" || pressedKey === "1"):
            aud(49);
            break;
            
        case (clickedId === "2" || pressedKey === "2"):
            aud(50);
            break;
            
        case (clickedId === "3" || pressedKey === "3"):
            aud(51);
            break;
            
        case (clickedId === "4" || pressedKey === "4"):
            aud(52);
            break;

        case (clickedId === "5" || pressedKey === "5"):
            aud(53);
            break;

        case (clickedId === "6" || pressedKey === "6"):
            aud(54);
            break;

        case (clickedId === "7" || pressedKey === "7"):
            aud(55);
            break;

        case (clickedId === "8" || pressedKey === "8"):
            aud(56);
            break;

        case (clickedId === "9" || pressedKey === "9"):
            aud(57);
            break;

        case (clickedId === "0" || pressedKey === "0"):
            aud(58);
            break;

        case (clickedId === "q" || pressedKey === "q"):
            aud(59);
            break;

        case (clickedId === "w" || pressedKey === "w"):
            aud(60);
            break;

        case (clickedId === "e" || pressedKey === "e"):
            aud(61);
            break;

        case (clickedId === "r" || pressedKey === "r"):
            aud(62);
            break;

        case (clickedId === "t" || pressedKey === "t"):
            aud(63);
            break;
        default:
            break;
    }
}


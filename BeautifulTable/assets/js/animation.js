

if(typeof $window == "undefined"){
    elements = document.getElementsByClassName("readyAnimation");
    opacityLength = elements.length;
    for(let i = 0; i<opacityLength; i++){
        elements[i].addEventListener('animationend', () => {
            // do something
            elements[i].style.opacity = "1"
        });
    }
} else {
    
$window.on('load', function() {
    elements = document.getElementsByClassName("readyAnimation");
    opacityLength = elements.length;
    for(let i = 0; i<opacityLength; i++){
        elements[i].addEventListener('animationend', () => {
            // do something
            elements[i].style.opacity = "1"
        });
    }
})
}


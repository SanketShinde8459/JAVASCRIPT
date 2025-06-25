
let ex = document.querySelector("button");


ex.onclick = function(){
    console.log("Button clicked");
}

ex.addEventListener("mouseenter", function(){
    console.log("Mouse entered the button");
})
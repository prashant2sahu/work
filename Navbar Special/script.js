var icons=document.querySelectorAll(".icon");
var shadows=document.querySelector("#image");

icons.forEach(function(va, index){
    va.addEventListener('click',function() {
        shadows.style.transform =`translateX(${index*125}px)`;
        console.log(index)
        
    });
});
window.onload=function(){
    //add element
    let els=document.querySelectorAll(".forum");
    for(let e of els)
    e.classList.add("wow")
    
    let evenEles=document.querySelectorAll (".forum:nth-child(even)");
    for(let e of evenEles)
    e.classList.add("animate_ba")
}
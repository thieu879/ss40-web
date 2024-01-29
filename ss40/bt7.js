let add_btn=document.getElementById("add");
let del_btn=document.getElementById("del");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

add_btn.addEventListener("click",function () {
    ul.innerHTML+=`<li>${input.value}</li>`;
    localStorage.setItem("user",JSON.stringify(input.value));
    input.value="";
    add_btn.style.display="none";
})
del_btn.addEventListener("click",function(){
    ul.innerHTML="";
    add_btn.style.display="";
    localStorage.removeItem("user");
})
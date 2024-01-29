let $ = document.querySelector.bind(document);
let id = 0;
let arr = [];
function click1(){
    for(let i = 1;i<1000;i++){
        if(JSON.parse(localStorage.getItem(i))==inputId){
            delete JSON.parse(localStorage.getItem(i));
        }
    }
}
for(let i = 1;i<1000;i++){
    if(JSON.parse(localStorage.getItem(i))==null){
        break;
    }
    arr.push(JSON.parse(localStorage.getItem(i)));
}
console.log(arr);
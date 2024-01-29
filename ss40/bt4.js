let $ = document.querySelector.bind(document);
let arr = [];
for(let i = 1;i<1000;i++){
    if(JSON.parse(localStorage.getItem(i))==null){
        break;
    }
    arr.push(JSON.parse(localStorage.getItem(i)));
}
console.log(arr);
let $ = document.querySelector.bind(document);
let id = 0;
let arr = [];
function input(){
    let inputPerson = $("#inputPerson").value;
    console.log(inputPerson);
    if(!inputPerson){
        alert("cam bo trong");
    }else{
        let name1 = {
            name: inputPerson,
        };
        id++;
        localStorage.setItem(id, JSON.stringify(name1));
    }
}
for(let i = 1;i<1000;i++){
    if(JSON.parse(localStorage.getItem(i))==null){
        break;
    }
    arr.push(JSON.parse(localStorage.getItem(i)));
}
console.log(arr);
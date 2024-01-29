let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let tdList=[]; 
render();
btn.addEventListener("click",function () {
    tdList=JSON.parse(localStorage.getItem(`tdList`));
    if (tdList===null) {
        tdList=[];
    }
    tdList.push(input.value);
    localStorage.setItem("tdList",JSON.stringify(tdList));
    input.value="";
    console.log(tdList);
    render();
})

function render() { 
    tdList=JSON.parse(localStorage.getItem(`tdList`));
    if (tdList===null) {
        tdList=[];
    }
    ul.innerHTML="";
    tdList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "todoItem";
        listItem.innerHTML = `
        <span>${item}</span>
        <span class="deleteButton" onclick="deleteTodo('${item}')">X</span>`;
        ul.appendChild(listItem);
    });
}
function deleteTodo(item) {
const updatedTodos = tdList.filter((t) => t !== item);
localStorage.setItem("tdList", JSON.stringify(updatedTodos));
render();
}
let $ = document.querySelector.bind(document);
let id = 0;
let arr = [];
function click1(){
    let inputTen = $("#ten").value;
    let inputMatKhau = $("#pass").value;
    if(!inputTen && !inputMatKhau){
        alert("cam bo trong");
    }else{
        let name1 = {
            ten: inputTen,
            pass: inputMatKhau,
        };
        id++;
        localStorage.setItem(id, JSON.stringify(name1));
    }
}
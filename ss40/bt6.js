let sign=document.getElementById("sign");
let register=document.getElementById("register");
let account=document.getElementById("Account");
let password=document.getElementById("Password");
let users=[];
register.addEventListener("click",function(){
    let users=JSON.parse(localStorage.getItem("listUsers"));
    if (users===null) {
        users=[];
    }
    let newUser={account: account.value,password: password.value};
    users.push(newUser);
    localStorage.setItem(`listUsers`,JSON.stringify(users));
})
sign.addEventListener("click",function () {
    let users=JSON.parse(localStorage.getItem("listUsers"));
    if (users===null) {
        users=[];
    }
    let signUser={account: account.value,password: password.value};
    for (let i = 0; i < users.length; i++) {
        if (signUser.account===users[i].account&&signUser.password===users[i].password) {
            alert("dang nhap thanh cong");
            return;
        }
    }
    alert("dang nhap ko thanh cong")
})
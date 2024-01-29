function Person(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
}
let name = prompt("Nhap ten");
let age = +prompt("Nhap tuoi");
let email = prompt("Nhap email");

let person = new Person(name,age,email); 
localStorage.setItem("person",JSON.stringify(person));
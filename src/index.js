import {addTodoDOM, showForm, closeForm} from "./dom.js";
import './style.css';


class todoList {
    constructor(name){
        this.list = [];
        this.name = name;
    }

    addEntry(name, desc){
        let newTodo = new todoEntry(name, desc);
        this.list.push();
        addTodoDOM(newTodo);
    }
}

class todoEntry {
    constructor(name, desc){
        this.name = name;
        this.desc = desc;
        this.active = true;
    }
}

function addTodo(name, desc){
    let listName = document.querySelector(".todoList").id;
    let currlist = listOfLists.find(e => e.name === listName);
    currlist.addEntry(name, desc);

    let todoentrydiv = document.getElementById(name + "div");
    let cbox = document.getElementById(name + "cbox");
    cbox.addEventListener("click", e => {
        todoentrydiv.style.transition = "opacity 1000ms ease";
        todoentrydiv.style.opacity = 0;
        setTimeout(function(){
            todoentrydiv.parentNode.removeChild(todoentrydiv);
        }, 900);
    }); 
}

function addButtons(){
    let addformbtn = document.querySelector("#addtodo");
    addformbtn.addEventListener("click", e => {
        console.log("what");
        showForm();
    });

    let submitbtn = document.querySelector("#submitform");
    submitbtn.addEventListener("click", e =>{
        let nameformtext = document.getElementById("name").value;
        let descformtext = document.getElementById("desc").value;
        addTodo(nameformtext, descformtext);
        console.log("help");
        e.preventDefault();
        closeForm();
    });
}

let listOfLists = [];
let mainList = new todoList("main");
listOfLists.push(mainList);
addTodo("change layout, sidebar, main chunk inside this rounded div", "wwahahwa");
addTodo("add details, date, priority, button to view for each task", "wahahsd");
addTodo("ability to add new lists, swap in side bar", "please");
addTodo("finish this todo app", "please");

addButtons();




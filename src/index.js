import {addTodoDOM, showForm, closeForm, removeTodo} from "./dom.js";
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
    constructor(name, desc, date){
        this.name = name;
        this.desc = desc;
        this.date = date;
    }
}

function addTodo(name, desc, date){
    //add new todo entry to current list
    let listName = document.querySelector(".todoList").id;
    let currlist = listOfLists.find(e => e.name === listName);
    currlist.addEntry(name, desc, date);

    //add even listener to checkbox that deletes entry when clicked, fades away
    let todoentrydiv = document.getElementById(name + "div");
    
    let detailbtn = document.getElementById(name + "detailbtn");
    detailbtn.addEventListener("click", () => {
        showDetails(todoentrydiv);
    });
    
    let cbox = document.getElementById(name + "cbox");
    cbox.addEventListener("click", () => {
        removeTodo(todoentrydiv);
    });
}

function addButtons(){
    let addformbtn = document.querySelector("#addtodo");
    addformbtn.addEventListener("click", () => {
        console.log("what");
        showForm();
    });

    let submitbtn = document.querySelector("#submitform");
    submitbtn.addEventListener("click", e =>{
        let nameformtext = document.getElementById("name").value;
        let descformtext = document.getElementById("desc").value;
        let dateform = document.getElementById("date").value;


        addTodo(nameformtext, descformtext, dateform);
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




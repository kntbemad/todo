import {addTodoDOM, showForm} from "./dom.js";
import './style.css';

class todoList {
    constructor(name){
        this.list = [];
        this.name = name;
    }

    addEntry(entry){
        if(entry instanceof todoEntry){
            this.list.push()
            addTodoDOM(entry);
        }
    }
}

class todoEntry {
    constructor(name){
        this.name = name;
        this.active = true;
    }
}

let mainList = new todoList("main");

let addformbtn = document.querySelector("#addtodo");
addformbtn.addEventListener("click", e => {
    showForm();
});


mainList.addEntry(new todoEntry("yuge"));
let todo = new todoEntry("make todo");
mainList.addEntry(todo);



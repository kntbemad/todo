import {addTodoDOM, showForm, closeForm, removeTodo, showDetails} from "./dom.js";
import './style.css';


class todoList {
    constructor(name){
        this.list = [];
        this.name = name;
    }

    addEntry(todo){
        this.list.push(todo);
        addTodoDOM(todo);
        console.log(todo);
    }
}

class todoEntry {
    constructor(name, desc, date){
        this.name = name;
        this.desc = desc;
        this.date = date;
    }
}

function addTodo(todo){
    //add new todo entry to current list
    currList.addEntry(todo);
    entryEventHandlers(todo);
}

function entryEventHandlers(todo){
    let name = todo.name;
    let desc = todo.desc;
    let date = todo.date;
    //add even listener to checkbox that deletes entry when clicked, fades away
    let todoentrydiv = document.getElementById(name + "div");
    
    let detailbtn = document.getElementById(name + "detailbtn");
    detailbtn.addEventListener("click", () => {
        showDetails(desc, date)
    });
    
    let cbox = document.getElementById(name + "cbox");
    cbox.addEventListener("click", () => {
        removeTodo(todoentrydiv);
        let elementindex = currList.list.map(e => e.name).indexOf(name);
        currList.list.splice(elementindex, 1);
    });
}

function addButtons(){
    let addformbtn = document.querySelector("#addtodo");
    addformbtn.addEventListener("click", () => {
        showForm();
    });

    let submitbtn = document.querySelector("#submitform");
    submitbtn.addEventListener("click", e =>{
        let nameformtext = document.getElementById("name").value;
        let descformtext = document.getElementById("desc").value;
        let dateform = document.getElementById("date").value;


        addTodo(new todoEntry(nameformtext, descformtext, dateform));
        console.log("help");
        e.preventDefault();
        closeForm();
    });

    let detailBtn = document.querySelector("#closedetailbtn");
    detailBtn.addEventListener("click", e =>{
        let detailPane = document.getElementById("detailPane");
        detailPane.style.display = "none";
    });
}

function addList(list){
    let listBtn = document.createElement("button");
    listBtn.classList.add("listbutton");
    listBtn.textContent = list.name;
    listBtn.addEventListener("click", () => {
        console.log(list);
        currList = list;
        document.getElementById("main").replaceChildren();
        list.list.forEach(element => {
            console.log("whATHATTS");
            addTodoDOM(element);
            entryEventHandlers(element.name, element.desc);
        });
    });
    document.querySelector("#sidebarlist").appendChild(listBtn);
}
let listOfLists = [];
let mainList = new todoList("main");
let testList = new todoList("test");
let currList = mainList;  
listOfLists.push(testList);
listOfLists.push(mainList);
addTodo(new todoEntry("add details, date, priority, button to view for each task", "wahahsd"));
addTodo(new todoEntry("ability to add new lists, swap in side bar", "please"));
addTodo(new todoEntry("finish this todo app", "please"))    ;

addList(mainList);
addList(testList);
addButtons();




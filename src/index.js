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
        this.id = currList.list.length;
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
    //add even listener to checkbox that deletes entry when clicked, fades away
    
    let detailbtn = document.getElementById(todo.id + "detailbtn");
    detailbtn.addEventListener("click", () => {
        showDetails(todo)
    });
    
    let cbox = document.getElementById(todo.id + "cbox");
    cbox.addEventListener("click", () => {
        removeTodo(todo);
        currList.list.splice(todo.id, 1);
        updateIDs(todo);
    });
}

//update IDs of all todoEntries and their DOM element IDs from deleted ID to last entry 
function updateIDs(todo){

        for(let i = todo.id; i < currList.list.length; i++){
            let cid = currList.list[i].id;
            document.getElementById(cid + "div").id = (cid-1) + "div";
            document.getElementById(cid + "cbox").id = (cid-1) + "cbox";
            currList.list[i].id -= 1;
        }
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

    let closedetailBtn = document.querySelector("#closedetailbtn");
    closedetailBtn.addEventListener("click", e =>{
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
            entryEventHandlers(element);
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




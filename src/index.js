import {addTodoDOM, showForm, closeForm, removeTodo, showDetails} from "./dom.js";
import './style.css';


let listOfLists = [];
let storedData = localStorage.getItem("storedData");
let currList = [];

class todoList {
    constructor(name, list = []){
        this.name = name;
        this.list = list;
    }

    addEntry(todo){
        this.list.push(todo);
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
    //console.log(currList.name + " help " + todo.name);
    currList.addEntry(todo);
    if(currList.name == document.querySelector(".todoList").id){
       addTodoDOM(todo);       
       entryEventHandlers(todo);
    }  
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
        storeList();
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

function addListeners(){
    let addformbtn = document.querySelector("#addtodo");
    addformbtn.addEventListener("click", () => {
        showForm(true);
    });

    let submitbtn = document.querySelector("#submitform");
    submitbtn.addEventListener("click", e =>{
        let nameformtext = document.getElementById("name").value;
        let descformtext = document.getElementById("desc").value;
        let dateform = document.getElementById("date").value;

        addTodo(new todoEntry(nameformtext, descformtext, dateform));
        storeList();
        e.preventDefault();
        closeForm(true);
    });

    let closedetailBtn = document.querySelector("#closedetailbtn");
    closedetailBtn.addEventListener("click", e =>{
        let detailPane = document.getElementById("detailPane");
        detailPane.style.display = "none";
    });

    let addlistbtn = document.querySelector("#addlistbtn");
    addlistbtn.addEventListener("click", e =>{
        showForm(false);
    });

    
    let submitlistbtn = document.querySelector("#submitlistform");
    submitlistbtn.addEventListener("click", e =>{
        e.preventDefault();
        let listname = document.getElementById("listname").value;
        if(listname.length > 8){
            alert("list name must be less than 8 characters");
        }
        else {
            addList(new todoList(listname));
            storeList();
            closeForm(false);
            //console.log(listOfLists);
        }
    });
}

function storeList(){
    localStorage.setItem("storedData", JSON.stringify(listOfLists));
}

function addList(list){
    listOfLists.push(list);
    addListButton(list);
}

function addListButton(list){
    let listBtn = document.createElement("button");
    let listDeleteBtn = document.createElement("button");
    let listBtnDiv = document.createElement("div");

    listBtnDiv.classList.add("listbuttondiv");
    listBtn.classList.add("listbutton");
    listDeleteBtn.classList.add("listbutton");
    listDeleteBtn.classList.add("deletebtn");

    listBtn.textContent = list.name;
    listDeleteBtn.textContent = "x";

    listDeleteBtn.addEventListener("click", () => {

        if(list.list.length > 0){
            alert("Cannot delete list with entries");
            return;
        }

        if(confirm("Do you really want to delete this?")){
            listOfLists.splice(listOfLists.indexOf(list), 1);
            document.querySelector("#sidebarlist").removeChild(listBtnDiv);
            storeList();
        } 
    });

    listBtn.addEventListener("click", () => {
        let todoListDiv = document.querySelector(".todoList");
        todoListDiv.replaceChildren();
        currList = list;
        todoListDiv.id = list.name;
        list.list.forEach(element => {
            addTodoDOM(element);
            entryEventHandlers(element);
        });
        todoListDiv.id = currList.name;
    });
    
    listBtnDiv.appendChild(listBtn);
    listBtnDiv.appendChild(listDeleteBtn);

    document.querySelector("#sidebarlist").appendChild(listBtnDiv);
}

if(storedData == null){
    localStorage.setItem("storedData", JSON.stringify(listOfLists));
    let mainList = new todoList("main");
    addList(mainList);
    storeList();
    currList = listOfLists[0];
} else {
    storedData = JSON.parse(storedData); 
    storedData.forEach((element, index) => {
        addList(new todoList(element.name));
        currList = listOfLists[index];
        element.list.forEach(todo => {
            addTodo(new todoEntry(todo.name, todo.desc, todo.date));
        });
    });
    currList = listOfLists[0];
}
addListeners();



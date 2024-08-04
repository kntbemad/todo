export function addTodoDOM(todo){
    const todoList = document.querySelector(".todoList");
    let newTodo = document.createElement("div");
    newTodo.id = todo.name + "div";
    newTodo.classList.add("todoEntry");

    newTodo.appendChild(addTodoEntry(todo));
    newTodo.appendChild(addDetailBtn(todo)); 
    todoList.appendChild(newTodo);
}
function addTodoEntry(todo){
    let todoEntryDiv = document.createElement("div"); 
    let todoText  = document.createElement("label");
    let todoCheck = document.createElement("input");

    todoCheck.type = "checkbox";
    todoCheck.id = todo.name + "cbox";
    todo.name = todo.name;
    todoText.for = todo.name;
    todoText.textContent = todo.name;
    todoEntryDiv.appendChild(todoCheck); 
    todoEntryDiv.appendChild(todoText);

    return todoEntryDiv;
}
function addDesc(todo){
    let description = document.createElement("p");
    description.textContent = todo.desc;
    return description;
}

function addDetailBtn(todo){

    let detailsbtn = document.createElement("button");
    let detaildiv = document.createElement("div");
    
    detailsbtn.textContent = "details";
    detailsbtn.classList.add("brownbutton"); 
    detailsbtn.classList.add("detailbtn"); 
    detailsbtn.id = todo.name + "detailbtn";
    detaildiv.classList.add("detaildiv");
    
    detaildiv.appendChild(detailsbtn);
    return detaildiv;
}

export function showForm(){
    document.querySelector("#addformdiv").style.display = "block";
}


export function closeForm(){
    document.getElementById("addform").reset();
    document.querySelector("#addformdiv").style.display = "none";
}

export function removeTodo(todoentrydiv){
    todoentrydiv.style.transition = "opacity 1000ms ease";
    todoentrydiv.style.opacity = 0;
    setTimeout(function(){
        todoentrydiv.parentNode.removeChild(todoentrydiv);
    }, 900);
}; 

export function showDetails(desc, date){
    //add div to html template, make this show the div;
    let details = document.getElementById("detailPane");
    let descText = document.getElementById("detailDesc");
    let dateText = document.getElementById("detailDate");
    descText.textContent = desc;
    dateText.textContent = date; 
    details.style.display = "block";
}

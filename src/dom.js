export function addTodoDOM(todo){
    const todoList = document.querySelector(".todoList");
    let newTodo = document.createElement("div");
    newTodo.id = todo.id + "div";
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
    todoCheck.id = todo.id + "cbox";
    
    todoText.for = todoCheck.id;
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
    detailsbtn.id = todo.id + "detailbtn";
    detaildiv.classList.add("detaildiv");
    
    detaildiv.appendChild(detailsbtn);
    return detaildiv;
}

export function showForm(regform){
    if(regform){
    document.querySelector("#addformdiv").style.display = "block";
    }
    else{
        document.querySelector("#addlistdiv").style.display = "block";
    }
}


export function closeForm(isreg){
    if(isreg){ 
        document.getElementById("addform").reset();
        document.querySelector("#addformdiv").style.display = "none";
    } else {
        document.getElementById("addlistform").reset();
        document.querySelector("#addlistdiv").style.display = "none";
    }
}

export function removeTodo(todo){
    let todoentrydiv = document.getElementById(todo.id + "div");
    todoentrydiv.style.transition = "opacity 1000ms ease";
    todoentrydiv.style.opacity = 0;
    setTimeout(function(){
        todoentrydiv.parentNode.removeChild(todoentrydiv);
    }, 900);
}; 

export function showDetails(todo){
    //add div to html template, make this show the div;
    let details = document.getElementById("detailPane");
    let descText = document.getElementById("detailDesc");
    let dateText = document.getElementById("detailDate");
    descText.textContent = todo.desc;
    dateText.textContent = todo.date; 
    details.style.display = "block";
}

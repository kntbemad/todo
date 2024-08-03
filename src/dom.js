export function addTodoDOM(todo){
    const todoList = document.querySelector(".todoList");
    let newTodo = document.createElement("div");
    let todoText  = document.createElement("label");
    let todoCheck = document.createElement("input");
    let detailsbtn = document.createElement("button");
    let detaildiv = document.createElement("div");

    todoCheck.type = "checkbox";
    todoCheck.id = todo.name + "cbox";
    todo.name = todo.name;
    todoText.for = todo.name;
    todoText.textContent = todo.name;
  
    detailsbtn.textContent = "details";
    detailsbtn.classList.add("brownbutton"); 
    detailsbtn.id = todo.name + "detailbtn";
    detaildiv.classList.add("detaildiv");

    newTodo.id = todo.name + "div";
    newTodo.classList.add("todoEntry");

    detaildiv.appendChild(detailsbtn);
    newTodo.appendChild(todoCheck);
    newTodo.appendChild(todoText);
    newTodo.appendChild(detaildiv); 
    todoList.appendChild(newTodo);
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

export function showDetails(div){
    //add div to html template, make this show the div;
}
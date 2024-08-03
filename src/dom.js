export function addTodoDOM(todo){
    const todoList = document.querySelector(".todoList");
    let newTodo = document.createElement("div");
    let todoText  = document.createElement("label");
    let todoCheck = document.createElement("input");

    todoCheck.type = "checkbox";
    todoCheck.id = todo.name + "cbox";
    todo.name = todo.name;
    todoText.for = todo.name;
    todoText.textContent = todo.name;
   
    newTodo.id = todo.name + "div";
    newTodo.classList.add("todoEntry");

    newTodo.appendChild(todoCheck);
    newTodo.appendChild(todoText); 
    todoList.appendChild(newTodo);
}

export function showForm(){
    document.querySelector("#addformdiv").style.display = "block";
}


export function closeForm(){
    document.getElementById("addform").reset();
    document.querySelector("#addformdiv").style.display = "none";
}

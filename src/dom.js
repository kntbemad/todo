export function addTodoDOM(todo){
    const todoList = document.querySelector(".todoList");
    let todoText  = document.createElement("p");
    todoText.textContent = todo.name;
    todoList.appendChild(todoText);
}

export function showForm(){
    document.querySelector("#addform").style.display = "block";
}
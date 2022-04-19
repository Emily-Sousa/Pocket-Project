// Seleção do DOM - DOM selection
const toDoListInput = document.querySelector(".to-do-list-input")

const toDoListButton = document.querySelector(".to-do-list-button")

const toDoList = document.querySelector(".to-do-list")


// Eventos de execução - Execution events 
document.addEventListener('DOMContentLoaded', getTodos)
toDoListButton.addEventListener('click', addTask)
toDoList.addEventListener('click', deleteAndComplete)


// Criação de tarefas - Creation tasks
function addTask(event){
    event.preventDefault()
    
    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('to-do')

    const toDoLi = document.createElement('li')
    toDoLi.classList.add('to-do-list')
    toDoLi.innerText = toDoListInput.value
    toDoListInput.value = ""
    toDoDiv.appendChild(toDoLi)

    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    completeButton.classList.add('complete-btn')
    toDoDiv.appendChild(completeButton)

    saveLocalTodos(toDoListInput.value)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteButton.classList.add('delete-btn')
    toDoDiv.appendChild(deleteButton)

    toDoList.appendChild(toDoDiv)
}
 
// Deletar e completar tarefas - Delete and complete tasks
 function deleteAndComplete(event){
    console.log(event.target)

    const item = event.target
    const todo = item.parentElement

    if(item.classList[0] === "delete-btn" ){
        todo.classList.add("fall")

        todo.addEventListener("animationend", () => {
            todo.remove()
        })

        removeLocalStorage()
    }

    if (item.classList[0] === "complete-btn"){
        todo.classList.toggle("to-do-check")
    }
 }

 //Save tasks on localStorage
 function saveLocalTodos(todo) {

    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    if (Array.isArray(todos)) {
        todos.push({todo});
    }
    localStorage.setItem('todos', JSON.stringify('todos'))
}

function getTodos() {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
        const toDoDiv = document.createElement('div')
        toDoDiv.classList.add('to-do')

        const toDoLi = document.createElement('li')
        toDoLi.classList.add('to-do-list')
        toDoLi.innerText = todo
        toDoListInput.value = ""
        toDoDiv.appendChild(toDoLi)

        const completeButton = document.createElement('button')
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        completeButton.classList.add('complete-btn')
        toDoDiv.appendChild(completeButton)


        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteButton.classList.add('delete-btn')
        toDoDiv.appendChild(deleteButton)

        toDoList.appendChild(toDoDiv)

    }) }


//Remove tasks from LocalStorage
function removeLocalStorage(todo){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify('todos'));
}



    

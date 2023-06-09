//  ------------ INPUTS ------------
const inputTask = document.querySelector('#input-task');


//  ------------ BUTTONS ------------
const btnSaveTesk = document.querySelector('#btn-add-tesk');

const btnCheckPoint = document.querySelector('.finish-todo');
const btnEditOption = document.querySelector('.todo-edit');
const btnDeleteOption = document.querySelector('.todo-delete');
const btnDoingOptin = document.querySelector('.todo-doing');

//  ------------ CARD TASK ------------
const taskSection = document.querySelector('#todo-list');

//  ------------ TASK ------------
const taskAdded = document.querySelectorAll('.todo');

//  ------------ INPUT FUNCTIONS ------------

var task = "";

inputTask.addEventListener('change', (event) => {
    task = event.target.value;
});

function implementTask(taskName){
    const task = createNewTask(taskName);

    taskSection.appendChild(task);
}

function createNewTask(taskName){
    const div = document.createElement("div");
    div.classList.add("todo");

    const p = document.createElement("p");
    p.innerHTML = taskName;
    div.appendChild(p);

    const btnFinishTodo = document.createElement("button");
    btnFinishTodo.classList.add("finish-todo");
    btnFinishTodo.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    div.appendChild(btnFinishTodo);

    const btnTodoEdit = document.createElement("button");
    btnTodoEdit.classList.add("todo-edit");
    btnTodoEdit.innerHTML = '<i class="fa-sharp fa-solid fa-pen"></i>';
    div.appendChild(btnTodoEdit);

    const btnTodoDelete = document.createElement("button");
    btnTodoDelete.classList.add("todo-delete");
    btnTodoDelete.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
    div.appendChild(btnTodoDelete);
    
    const btnTodoDoing = document.createElement("button");
    btnTodoDoing.classList.add("todo-doing");
    btnTodoDoing.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    div.appendChild(btnTodoDoing);

    return div;
}

//  ------------ SAVE TASK BUTTON ------------
btnSaveTesk.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputTask.value != ""){
        inputTask.value = "";

        implementTask(task);
    }else{
        return;
    }
});



//  ------------ tesk button check ------------
// btnCheckPoint.addEventListener('click', (event) => {
//     event.preventDefault();

//     if(taskAdded.classList.contains("done")){
//         taskAdded.classList.remove("done")
//     }
//     else{
//         taskAdded.classList.add("done");
//     }
// });
//  ------------ INPUTS ------------
const divAddTask = document.querySelector('#add-task');
const inputTask = document.querySelector('#input-task');
const btnSaveTesk = document.querySelector('#btn-add-tesk');
const todoList = document.querySelector('#todo-list');

const divEditForm = document.querySelector('#edit-task');
const inputChangeTask = document.querySelector('#edit-task-name');
const btnConfirmChange = document.querySelector('#confirm-edition');
const btnCancelEdition = document.querySelector('#btn-cancel');

const btnClearAll = document.querySelector('#btn-clear-all');


inputTask.addEventListener('keydown', (event) => {
    if(event.key == "Enter"){
        if(inputTask.value != ""){
            event.preventDefault();
            implementTask(inputTask.value);
            inputTask.value = "";
        }   
    }
});

//  ------------ SAVE TASK BUTTON ------------
btnSaveTesk.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputTask.value != ""){

        implementTask(inputTask.value);
        inputTask.value = "";
        
    }else{
        return;
    }
});

btnConfirmChange.addEventListener('click', (e) => {
    e.preventDefault();

    divEditForm.classList.add("hide");
    divAddTask.classList.remove("hide");
    todoList.classList.remove("hide");
});

function implementTask(taskName){
    const newTask = createNewTask(taskName);
    todoList.appendChild(newTask);
}

function createNewTask(taskName){
    const div = document.createElement("div");
    div.classList.add("todo");

    const p = document.createElement("p");
    p.innerHTML = taskName;
    div.appendChild(p);

    const btnDone = document.createElement("button");
    btnDone.classList.add("finish-todo");
    btnDone.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    btnDone.addEventListener("click", (e) => {
        e.preventDefault();
        const result = verifyClass(div);
        if(result < 1){
            div.classList.add("done")
        }else{
            if(div.classList.contains("done")){
                div.classList.remove("done");
            }
        }
    });
    div.appendChild(btnDone);

    const btnTodoEdit = document.createElement("button");
    btnTodoEdit.classList.add("todo-edit");
    btnTodoEdit.innerHTML = '<i class="fa-sharp fa-solid fa-pen"></i>';
    btnTodoEdit.addEventListener('click', (e) => {
        e.preventDefault();
        divEditForm.classList.remove("hide");
        divAddTask.classList.add("hide");
        todoList.classList.add("hide");

        inputChangeTask.value = p.innerHTML;
    });
    div.appendChild(btnTodoEdit);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("todo-delete");
    btnDelete.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
    btnDelete.addEventListener('click', (e) => {
        e.preventDefault();
        todoList.removeChild(div);
    });
    div.appendChild(btnDelete);
    
    const btnDoing = document.createElement("button");
    btnDoing.classList.add("todo-doing");
    btnDoing.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    btnDoing.addEventListener('click', (e) => {
        e.preventDefault();
        const result = verifyClass(div);
        if(result < 1){
            div.classList.add("doing");
        }else{
            if(div.classList.contains("doing")){
                div.classList.remove("doing");
            }
        }
    });
    div.appendChild(btnDoing);

    return div;
}

function verifyClass(element){
    if(element.classList.length > 1){
        return 1
    }
    else{
        return 0
    }
}
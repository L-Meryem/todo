const add = document.querySelector('#add_task');
add.addEventListener('click', addTask);

function addTask() {
    const task = document.querySelector('#task').value;
    const ul = document.querySelector('#task_list');
    //Create li, content
    const li = document.createElement('li');
    const content = document.createTextNode(task);
    //Style li
    li.classList.add('created_task');
    li.addEventListener('click', () => { 
        li.classList.toggle('crossed_task');
    });
    //Connect things
    li.appendChild(content);
    ul.append(li);
    //Clear the field
    document.querySelector('#task').value= "";
}

//Clearing

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll)

const clearChecked = document.querySelector('#clear_completed');
clearChecked.addEventListener('click', clearCompleted)

function clearCompleted() {
    document.querySelectorAll('.crossed_task').forEach(li => li.remove());
}

function clearAll() {
    document.querySelector('#task_list').innerHTML = "";
}

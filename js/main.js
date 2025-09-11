const add = document.querySelector('#add_task');
add.addEventListener('click', addTask);

function addTask() {
    const task = document.querySelector('#task').value;
    const ul = document.querySelector('#task_list');
    const li = document.createElement('li');
    const content = document.createTextNode(task);
    li.appendChild(content);
    ul.append(li);

    createListner();
}

function markCompleted(completed) {
    completed.style.textDecoration = 'line-through';
}

function clearCompleted() {

}

function clearAll() {

}

function createListner(){
    const complete = document.querySelectorAll('li');
    complete.forEach(completed => completed.addEventListener('click', () => markCompleted(completed)))
}


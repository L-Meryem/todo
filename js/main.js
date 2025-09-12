const add = document.querySelector('#add_task');
add.addEventListener('click', addTask);

function addTask() {
    const task = document.querySelector('#task').value;
    const ul = document.querySelector('#task_list');
    //Create li, content
    const li = document.createElement('li');
    //Style li
    li.classList.add('created_task');
    //If task empty add random quotes API lol
    if (task === "")
        quote();
    else {
        const content = document.createTextNode(task);
        li.appendChild(content);
        ul.append(li);
    }
    //Clear the field
    document.querySelector('#task').value = "";

    //Listen to li clicks
    li.addEventListener('click', () => {
        li.classList.toggle('crossed_task');
    });
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


//Quotes API
function quote() {
    fetch('http://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            document.querySelector('#task').value = data.content;
        })
}

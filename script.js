function addTask(){
    let inputValue = document.getElementById('writeTask').value;
    let task = document.createElement("p")
    task.textContent =  inputValue;
    document.querySelector('#TasksPlace').appendChild(task);
}
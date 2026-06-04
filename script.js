function addTask(){
    let inputValue = document.getElementById('writeTask').value;
    let task = document.createElement("input");
    task.type="checkbox";

    if(inputValue === ""){
        return;
    }
    // task.textContent =  inputValue; don't use for chekbox
    let labelText = document.createElement("label");
    labelText.textContent = inputValue
    

    document.querySelector('#TasksPlace').appendChild(task);
    document.querySelector('#TasksPlace').appendChild(labelText)

    // create one element for checkbox and value 
    let containerTasks = document.createElement('div');
    containerTasks.appendChild(task);
    containerTasks.appendChild(labelText)
    document.querySelector('#TasksPlace').appendChild(containerTasks)

}

// if cocher element chekbox 
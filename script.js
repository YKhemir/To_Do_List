function addTask(){
    let inputValue = document.getElementById('writeTask').value;
    

    if(inputValue === ""){
        return;
    }
    
    let task = document.createElement("input");
    task.type="checkbox";
    // task.textContent =  inputValue; don't use for chekbox
    let labelText = document.createElement("label");
    labelText.textContent = inputValue
    
    // create one element for checkbox and value 
    let containerTasks = document.createElement('div');
    containerTasks.appendChild(task);
    containerTasks.appendChild(labelText);
    document.querySelector('#TasksPlace').appendChild(containerTasks)

    task.addEventListener("change" , function() {
        if(task.checked){
            labelText.style.textDecoration = "line-through";
            labelText.style.opacity ="0.5";

            setTimeout(function() {
                 containerTasks.remove();
            }, 600);
           
        }
    });
}  
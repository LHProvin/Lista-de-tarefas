function addTask() {
    let taskInput = document.getElementById('newTask');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        let newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        
     
        newTask.onclick = function() {
            this.classList.toggle('completed');
        };


        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(removeBtn);
        taskList.appendChild(newTask);

        
        taskInput.value = '';
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}
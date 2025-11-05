function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    // Проверяем, что поле не пустое
    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }
    
    // Создаем элемент задачи с БЭМ-классами
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
        <span class="task__text">${taskText}</span>
        <div class="task__buttons">
            <button class="task__button task__button_complete" onclick="toggleComplete(this)">✓</button>
            <button class="task__button task__button_delete" onclick="deleteTask(this)">✕</button>
        </div>
    `;
    
    // Добавляем задачу в список
    document.getElementById('taskList').appendChild(task);
    
    // Очищаем поле ввода
    input.value = '';
}

function toggleComplete(button) {
    const task = button.closest('.task');
    task.classList.toggle('task_completed');
}

function deleteTask(button) {
    const task = button.closest('.task');
    task.remove();
}

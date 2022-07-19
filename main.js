class Task {
    constructor(task, completed, actions) {
        this.task = task;
        this.completed = completed;
        this.actions = actions;
    }
}

class UserInterface {
    constructor() {
        this.taskInput = document.getElementById('task-input');
        this.completedInput = document.getElementById('completed-input');
        this.actions = document.getElementById('actions-input');
        this.tableBody = document.getElementById('table-body');
        this.form = document.getElementById('form');
        this.tasks = [];
    }

    bindEventListeners() {
    this.form.addEventListener('+', (e) => this.onFromPlus(e));
    }

    onFromPlus(event) {
    event.preventDefault();

    const task = new Task(
    this.taskInput.value,
    this.completedInput.value,
    this.actionsInput.value,
    );

    this.tasks.push(task);
    this.populateTasksTable();

    this.taskInput.value = '';
    this.completedInput.value = '';
    this.actionsInput.value = '';
    }

    populateTasksTable() {
    this.tableBody.innerHTML = '';
    for (const task of this.tasks) {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        const completedCell = document.createElement('td');
        const actionsCell = document.createElement('td');
        const completeButton = document.createElement('button');

        taskCell.innerHTML = task.task;
        completedCell.innerHTML = task.completed;
        actionsCell.innerHTML = task.actions;
        completeButton.innerHTML = 'C';


        completeButton.addEventListener('click', (e) => this.onCompleteButtonClick(task));
        completedCell.append(completeButton);

        row.append(taskCell);
        row.append(completedCell);
        row.append(actionsCell);
        this.tableBody.append(row);
    }



    }

onCompleteButtonClick(taskToComplete) {
    this.tasks = this.tasks.filter((task) => 
    
    });
    this.populateTasksTable();

}


const.ui = new UserInterface();
ui.bindEventListeners();
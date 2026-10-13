function solve() {

    //section New
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let addBtn = document.getElementById('add');

    let openSection = document.querySelectorAll('section')[1].children[1];
    let inprogressSection = document.getElementById('in-progress')
    let completedSection = document.querySelectorAll('section')[3].children[1];

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        let taskValue = taskInput.value.trim();
        let desciptionValue = descriptionInput.value.trim();
        let dateValue = dateInput.value.trim();

        if (!taskValue || !desciptionValue || !dateValue) return;

        let article = createArticle(taskValue, desciptionValue, dateValue);
        openSection.appendChild(article)

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    }

    function createArticle(task, desciption, date) {
        let article = document.createElement('article');
        article.innerHTML = `
        <h3>${task}</h3>
        <p>Description: ${desciption}</p>
        <p>Due Date: ${date}</p>`;

        let actions = document.createElement('div')
        actions.className = 'flex';

        let startBtn = createButton('Start', 'green');
        let deleteBtn = createButton('Delete', 'red');

        startBtn.addEventListener('click', () => startTask(article));
        deleteBtn.addEventListener('click', () => article.remove());

        actions.appendChild(startBtn);
        actions.appendChild(deleteBtn);
        article.appendChild(actions);

        return article;
    }

    function createButton(text, className){
        let button = document.createElement('button');
        button.textContent = text;
        button.className = className;

        return button;
    }

    function startTask(article){
        let actions = article.querySelector('.flex');
        actions.innerHTML = '';

        let deleteBtn = createButton('Delete', 'red');
        let finishBtn = createButton('Finish', 'orange');

        deleteBtn.addEventListener('click', () => article.remove());
        finishBtn.addEventListener('click', () => finishTask(article));

        actions.appendChild(deleteBtn);
        actions.appendChild(finishBtn);
        inprogressSection.appendChild(article);
    }

    function finishTask(article){
        let actions = article.querySelector('.flex').remove();
        completedSection.appendChild(article);
    }

}
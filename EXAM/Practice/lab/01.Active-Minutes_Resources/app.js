window.addEventListener("load", solve);

function solve() {
  let inputs = ['type', 'intensity', 'calories', 'duration', 'date'].map(id => document.getElementById(id));
  let addBtn = document.getElementById('add-activity');
  let preview = document.getElementById('preview-activity');
  let table = document.getElementById('activities-table');

  addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let values = inputs.map(input => input.value);

    if (values.some(value => value === '')) return;

    let [type, intensity, calorues, duration, date] = values;

    let liElement = createElement('li', preview);
    let article = createElement('article', liElement);

    createElement('p', article, `Activity: ${type}`);
    createElement('p', article, `Intensity: ${intensity}`);
    createElement('p', article, `Duration: ${duration} min.`);
    createElement('p', article, `Date: ${date}`);
    createElement('p', article, `Calories: ${calorues}`);

    let buttonsDiv = createElement('div', liElement, undefined, 'btn-container');
    let editBtn = createElement('button', buttonsDiv, 'Edit', 'edit-btn');
    let nextBtn = createElement('button', buttonsDiv, 'Next', 'next-btn');

    inputs.forEach(input => input.value = '');
    addBtn.disabled = true;

    editBtn.addEventListener('click', function () {
      inputs.forEach((input, index) => input.value = values[index]);
      preview.removeChild(liElement);
      addBtn.disabled = false;
    });

    nextBtn.addEventListener('click', function () {
      let row = createElement('tr', table);

      createElement('td', row, type, 'type-cell');
      createElement('td', row, duration, 'duration-cell');
      createElement('td', row, calorues, 'calorues-cell');
      createElement('td', row, date, 'date-cell');
      createElement('td', row, intensity, 'intensity-cell');

      let buttonCell = createElement('td', row, undefined, 'btn-cell')
      let deleteBtn = createElement('button', buttonCell, 'Delete', 'delete-btn');
      preview.removeChild(liElement);
      addBtn.disabled = false;

      deleteBtn.addEventListener('click', function(){
        table.removeChild(row);
      });
    });
  });

  function createElement(tag, parent, text, className) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }
    if (className) {
      element.className = className;
    }

    parent.appendChild(element);
    return element;
  }
}
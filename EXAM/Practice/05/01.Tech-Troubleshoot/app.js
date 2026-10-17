window.addEventListener("load", solve);

function solve() {
  let employeeRef = document.getElementById('employee');
  let categoryRef = document.getElementById('category');
  let urgencyRef = document.getElementById('urgency');
  let teamRef = document.getElementById('team');
  let descriptionRef = document.getElementById('description');

  let addBtn = document.getElementById('add-btn')

  let previewList = document.querySelector('.preview-list')
  let pendingList = document.querySelector('.pending-list')
  let resolvedList = document.querySelector('.resolved-list')

  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (employeeRef.value === '' ||
      categoryRef.value === '' ||
      urgencyRef.value === '' ||
      teamRef.value === '' ||
      descriptionRef.value === '') return;

    let liPreview = document.createElement('li');
    liPreview.className = 'problem-content';

    let articlePreview = document.createElement('article');

    let employee = document.createElement('p');
    employee.textContent = `From: ${employeeRef.value}`;
    let category = document.createElement('p');
    category.textContent = `Category: ${categoryRef.value}`;
    let urgency = document.createElement('p');
    urgency.textContent = `Urgency: ${urgencyRef.value}`;
    let team = document.createElement('p');
    team.textContent = `Assigned to: ${teamRef.value}`;
    let description = document.createElement('p');
    description.textContent = `Description: ${descriptionRef.value}`;

    let editBtn = document.createElement('button');
    let continueBtn = document.createElement('button');

    editBtn.className = 'edit-btn'
    editBtn.textContent = 'Edit';
    continueBtn.className = 'continue-btn'
    continueBtn.textContent = 'Continue';

    articlePreview.appendChild(employee);
    articlePreview.appendChild(category);
    articlePreview.appendChild(urgency);
    articlePreview.appendChild(team);
    articlePreview.appendChild(description);

    liPreview.appendChild(articlePreview);
    liPreview.appendChild(editBtn);
    liPreview.appendChild(continueBtn);

    previewList.appendChild(liPreview);

    let employeeEdit = employeeRef.value;
    let categoryEdit = categoryRef.value;
    let urgencyEdit = urgencyRef.value;
    let teamEdit = teamRef.value;
    let descriptionEdit = descriptionRef.value;

    employeeRef.value = '';
    categoryRef.value = '';
    urgencyRef.value = '';
    teamRef.value = '';
    descriptionRef.value = '';

    addBtn.disabled = true;

    // Edit

    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      employeeRef.value = employeeEdit;
      categoryRef.value = categoryEdit;
      urgencyRef.value = urgencyEdit;
      teamRef.value = teamEdit;
      descriptionRef.value = descriptionEdit;

      liPreview.remove();
      addBtn.disabled = false;
    }

    // 3.	Approve posts

    continueBtn.addEventListener('click', onContinue);

    function onContinue() {
      let liPending = document.createElement('li');
      liPending.className = 'problem-content';

      let articlePending = document.createElement('article');
      articlePending = articlePreview;

      let resolveBtn = document.createElement('button');

      resolveBtn.className = 'resolve-btn'
      resolveBtn.textContent = 'Resolved';

      liPending.appendChild(articlePending);
      liPending.appendChild(resolveBtn);
      liPreview.remove();

      pendingList.appendChild(liPending);
      addBtn.disabled = false;

      resolveBtn.addEventListener('click', onResolve);

      function onResolve() {
        let liResolved = document.createElement('li');
        liResolved.className = 'problem-content';

        let articleResolved = document.createElement('article');
        articleResolved = articlePending;

        let clearBtn = document.createElement('button');
        clearBtn.className = 'clear-btn'
        clearBtn.textContent = 'Clear';

        clearBtn.addEventListener('click', onClear);

        liResolved.appendChild(articleResolved);
        liResolved.appendChild(clearBtn);
        liPending.remove();

        resolvedList.appendChild(liResolved);

        function onClear() {
          liResolved.remove();
        }
      }
    }
  }
}
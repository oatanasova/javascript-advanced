window.addEventListener('load', solve);

function solve() {
    // all the declarations
    let firstnameRef = document.getElementById('first-name');
    let lastnameRef = document.getElementById('last-name');
    let fromdateRef = document.getElementById('from-date');
    let todateRef = document.getElementById('to-date');

    let infoList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let complete = document.getElementById('status');

    let nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (firstnameRef.value === '' ||
            lastnameRef.value === '' ||
            fromdateRef.value === '' ||
            todateRef.value === '' || new Date(fromdateRef.value) >= new Date(todateRef.value)) { return; }

        let liVacation = document.createElement('li');
        liVacation.className = 'vacation-content';

        let articleVacation = document.createElement('article');

        let name = document.createElement('h3');
        name.textContent = `Name: ${firstnameRef.value} ${lastnameRef.value}`;
        let from = document.createElement('p');
        from.textContent = `From date: ${fromdateRef.value}`;
        let to = document.createElement('p');
        to.textContent = `To date: ${todateRef.value}`;

        let editBtn = document.createElement('button');
        let continueBtn = document.createElement('button');

        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit';
        continueBtn.className = 'continue-btn'
        continueBtn.textContent = 'Continue';

        articleVacation.appendChild(name);
        articleVacation.appendChild(from);
        articleVacation.appendChild(to);

        liVacation.appendChild(articleVacation);
        liVacation.appendChild(editBtn);
        liVacation.appendChild(continueBtn);

        infoList.appendChild(liVacation);

        let firstnameEdit = firstnameRef.value;
        let lastnameEdit = lastnameRef.value;
        let fromEdit = fromdateRef.value;
        let toEdit = todateRef.value;

        firstnameRef.value = '';
        lastnameRef.value = '';
        fromdateRef.value = '';
        todateRef.value = '';

        nextBtn.disabled = true;

        // Edit

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            firstnameRef.value = firstnameEdit;
            lastnameRef.value = lastnameEdit;
            fromdateRef.value = fromEdit;
            todateRef.value = toEdit;

            liVacation.remove();
            nextBtn.disabled = false;
        }

        // Continue

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            let liConfirm = document.createElement('li');
            liConfirm.className = 'vacation-content';

            
            let articleConfirm = document.createElement('article');
            articleConfirm = articleVacation;
            
            let confirmBtn = document.createElement('button');
            let cancelBtn = document.createElement('button');
            
            confirmBtn.className = 'confirm-btn'
            confirmBtn.textContent = 'Confirm';
            cancelBtn.className = 'cancel-btn'
            cancelBtn.textContent = 'Cancel';
            
            liConfirm.appendChild(articleConfirm);
            liConfirm.appendChild(confirmBtn);
            liConfirm.appendChild(cancelBtn);
            liVacation.remove();

            confirmList.appendChild(liConfirm);

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);

            function onConfirm() {
                liConfirm.remove();
                nextBtn.disabled = false;
                complete.className = 'vacation-confirmed';
                complete.textContent = 'Vacation Requested';

            }

            function onCancel() {
                liConfirm.remove();
                nextBtn.disabled = false;
                complete.className = 'vacation-cancelled';
                complete.textContent = 'Cancelled Vacation';

            }
        }
    }
    complete.addEventListener('click', () => {
        location.reload();
    });
}
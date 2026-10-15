window.addEventListener('load', solve);

function solve() {
    //form fields
    let timeRef = document.getElementById('time');
    let dateRef = document.getElementById('date');
    let placeRef = document.getElementById('place');
    let eventRef = document.getElementById('event-name');
    let emailRef = document.getElementById('email');
    let addBtn = document.getElementById('add-btn');

    //other declarations
    let lastCheck = document.getElementById('check-list');
    let upcoming = document.getElementById('upcoming-list');
    let finished = document.getElementById('finished-list');

    addBtn.addEventListener('click', onAdd);


    function onAdd(e) {
        e.preventDefault();

        if (timeRef.value === '' ||
            dateRef.value === '' ||
            placeRef.value === '' ||
            eventRef.value === '' ||
            emailRef.value === '') { return; }

        // Getting the information from the form
        let liCheck = document.createElement('li');
        liCheck.className = 'event-content';
        let articleCheck = document.createElement('article');


        let dateTime = document.createElement("p");
        dateTime.textContent = `Begins: ${dateRef.value} at: ${timeRef.value}`;
        let place = document.createElement("p");
        place.textContent = `In: ${placeRef.value}`;
        let event = document.createElement("p");
        event.textContent = `Event: ${eventRef.value}`;
        let email = document.createElement("p");
        email.textContent = `Contact: ${emailRef.value}`;
        
        let editBtn = document.createElement('button');
        let continueBtn = document.createElement('button');
        
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit';
        continueBtn.className = 'continue-btn'
        continueBtn.textContent = 'Continue';

        articleCheck.appendChild(dateTime);
        articleCheck.appendChild(place);
        articleCheck.appendChild(event);
        articleCheck.appendChild(email);

        liCheck.appendChild(articleCheck);
        liCheck.appendChild(editBtn);
        liCheck.appendChild(continueBtn);

        lastCheck.appendChild(liCheck);

        let dateEdit = dateRef.value;
        let timeEdit = timeRef.value;
        let placeEdit = placeRef.value;
        let eventEdit = eventRef.value;
        let emailEdit = emailRef.value;


        dateRef.value = '';
        timeRef.value = '';
        placeRef.value = '';
        eventRef.value = '';
        emailRef.value = '';

        addBtn.disabled = true;

        //Edit Event

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            dateRef.value = dateEdit;
            timeRef.value = timeEdit;
            placeRef.value = placeEdit;
            eventRef.value = eventEdit;
            emailRef.value = emailEdit;

            liCheck.remove();
            addBtn.disabled = false;
        }

        //Continue 

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            let liUpcoming = document.createElement('li');
            liUpcoming.className = 'event-content';

            let articleUpcoming = document.createElement('article');
            articleUpcoming = articleCheck;

            let finishBtn = document.createElement('button');
            finishBtn.className = 'finished-btn';
            finishBtn.textContent = 'Move to Finished';

            // editBtn.remove();
            // continueBtn.remove();


            liUpcoming.appendChild(articleUpcoming);
            liUpcoming.appendChild(finishBtn);
            liCheck.remove();

            upcoming.appendChild(liUpcoming);
            addBtn.disabled = false;

            finishBtn.addEventListener('click', onFinish);

            //Move to Finished

            function onFinish() {
                let liFinished = document.createElement('li');
                liFinished.className = 'event-content';

                let articleFinished = document.createElement('article');
                articleFinished = articleUpcoming;

                let clearBtn = document.getElementById('clear');
                clearBtn.addEventListener('click', onClear);

                // finishBtn.remove();

                liFinished.appendChild(articleFinished);
                liUpcoming.remove();
                
                finished.appendChild(liFinished);

                // Clear
                

                function onClear() {
                    liFinished.remove();
                    addBtn.disabled = false;
                }
            }
        }

    }
}
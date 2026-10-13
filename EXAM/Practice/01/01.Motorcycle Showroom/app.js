window.addEventListener("load", solve);

function solve() {
  let testRideBtn = document.getElementById('test-ride-btn');
  let colorRef = document.getElementById('colors');
  let motorcycleRef = document.getElementById('motorcycles');
  let datetimeRef = document.getElementById('datetime');
  let fullnameRef = document.getElementById('full-name');
  let emailRef = document.getElementById('email');

  let preview = document.getElementById('preview-list');
  let complete = document.getElementById('complete-list');
  let dataviewRef = document.querySelector('.data-view');

  testRideBtn.addEventListener('click', onAdd);

  function onAdd(event) {
    event.preventDefault();

    if (colorRef.value === '' ||
      motorcycleRef.value === '' ||
      datetimeRef.value === '' ||
      fullnameRef.value === '' ||
      emailRef.value === '') { return; }

    // Getting the information from the form

    let liPreview = document.createElement('li');
    let articlePreview = document.createElement('article');

    let color = document.createElement("p");
    color.textContent = `Color: ${colorRef.value}`;

    let motorcycle = document.createElement("p");
    motorcycle.textContent = `Model: ${motorcycleRef.value}`;

    let fullName = document.createElement("p");
    fullName.textContent = `For: ${fullnameRef.value}`;

    let email = document.createElement("p");
    email.textContent = `Contact: ${emailRef.value}`;

    let datetime = document.createElement("p");
    datetime.textContent = `Test Ride On: ${datetimeRef.value}`;

    articlePreview.appendChild(color);
    articlePreview.appendChild(motorcycle);
    articlePreview.appendChild(fullName);
    articlePreview.appendChild(email);
    articlePreview.appendChild(datetime);

    let buttonDiv = document.createElement('div');
    let editBtn = document.createElement('button');
    let nextBtn = document.createElement('button');

    buttonDiv.className = 'btn-container'
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit'
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(nextBtn);

    liPreview.appendChild(articlePreview);
    liPreview.appendChild(buttonDiv);

    preview.appendChild(liPreview);

    let editColor = colorRef.value;
    let editMotorcycle = motorcycleRef.value;
    let editName = fullnameRef.value;
    let editEmail = emailRef.value;
    let editTime = datetimeRef.value;

    colorRef.value = '';
    motorcycleRef.value = '';
    fullnameRef.value = '';
    emailRef.value = '';
    datetimeRef.value = '';

    testRideBtn.disabled = true;

    //Edit Test Ride Info

    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      colorRef.value = editColor;
      motorcycleRef.value = editMotorcycle;
      fullnameRef.value = editName;
      emailRef.value = editEmail;
      datetimeRef.value = editTime;

      liPreview.remove();
      testRideBtn.disabled = false;
    }

    // Next ....

    nextBtn.addEventListener('click', onNext);

    function onNext() {
      let liComplete = document.createElement('li');
      let articleComplete = document.createElement('article');
      articleComplete = articlePreview;

      // let color = document.createElement("p");
      // color.textContent = `Color: ${editColor.value}`;

      // let motorcycle = document.createElement("p");
      // motorcycle.textContent = `Model: ${editMotorcycle.value}`;

      // let fullName = document.createElement("p");
      // fullName.textContent = `For: ${editName.value}`;

      // let email = document.createElement("p");
      // email.textContent = `Contact: ${editEmail.value}`;

      // let datetime = document.createElement("p");
      // datetime.textContent = `Test Ride On: ${editTime.value}`;

      // articleComplete.appendChild(color);
      // articleComplete.appendChild(motorcycle);
      // articleComplete.appendChild(fullName);
      // articleComplete.appendChild(email);
      // articleComplete.appendChild(datetime);

      let completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = 'Complete';

      articleComplete.appendChild(completeBtn);
      liComplete.appendChild(articleComplete);
      complete.appendChild(liComplete);

      liPreview.remove();

      completeBtn.addEventListener('click', onComplete);

      //Completing

      function onComplete() {
        liComplete.remove();

        let confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Your Test Ride is Confirmed';

        dataviewRef.appendChild(confirmBtn);

        confirmBtn.addEventListener('click', onConfirm);

        //FINISH

        function onConfirm() {
          window.location.reload();
        }
      }
    }
  }
}
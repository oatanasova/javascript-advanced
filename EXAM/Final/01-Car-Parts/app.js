window.addEventListener("load", solve);

function solve() {
        let carmodelRef = document.getElementById('car-model');
        let caryearRef = document.getElementById('car-year');
        let partnameRef = document.getElementById('part-name');
        let partnumberRef = document.getElementById('part-number');
        let conditionRef = document.getElementById('condition');

        let nextBtn = document.getElementById('next-btn');

        let imageElement = document.getElementById('complete-img');
        let textElement = document.getElementById('complete-text');
        let infoList = document.querySelector('.info-list');
        let confirmList = document.querySelector('.confirm-list');
        //   let resolvedList = document.querySelector('.resolved-list');

        nextBtn.addEventListener('click', onNext);

        function onNext(e) {
                e.preventDefault();

                if (carmodelRef.value === '' ||
                        caryearRef.value === '' || caryearRef.value < 1960 || caryearRef.value > 2025 ||
                        partnameRef.value === '' ||
                        partnumberRef.value === '' ||
                        conditionRef.value === '') return;

                imageElement.style.visibility = 'hidden';
                textElement.textContent = '';

                let liInfo = document.createElement('li');
                liInfo.className = 'part-content';

                let articleInfo = document.createElement('article');

                let carmodel = document.createElement('p');
                carmodel.textContent = `Car Model: ${carmodelRef.value}`;
                let caryear = document.createElement('p');
                caryear.textContent = `Car Year: ${caryearRef.value}`;
                let partname = document.createElement('p');
                partname.textContent = `Part Name: ${partnameRef.value}`;
                let partnumber = document.createElement('p');
                partnumber.textContent = `Part Number: ${partnumberRef.value}`;
                let condition = document.createElement('p');
                condition.textContent = `Condition: ${conditionRef.value}`;

                let editBtn = document.createElement('button');
                let continueBtn = document.createElement('button');

                editBtn.className = 'edit-btn'
                editBtn.textContent = 'Edit';
                continueBtn.className = 'continue-btn'
                continueBtn.textContent = 'Continue';

                articleInfo.appendChild(carmodel);
                articleInfo.appendChild(caryear);
                articleInfo.appendChild(partname);
                articleInfo.appendChild(partnumber);
                articleInfo.appendChild(condition);

                liInfo.appendChild(articleInfo);
                liInfo.appendChild(editBtn);
                liInfo.appendChild(continueBtn);

                infoList.appendChild(liInfo);

                let carmodelEdit = carmodelRef.value;
                let caryearEdit = caryearRef.value;
                let partnameEdit = partnameRef.value;
                let partnumberEdit = partnumberRef.value;
                let conditionEdit = conditionRef.value;

                carmodelRef.value = '';
                caryearRef.value = '';
                partnameRef.value = '';
                partnumberRef.value = '';
                conditionRef.value = '';

                nextBtn.disabled = true;

                // Edit

                editBtn.addEventListener('click', onEdit);

                function onEdit() {
                        carmodelRef.value = carmodelEdit;
                        caryearRef.value = caryearEdit;
                        partnameRef.value = partnameEdit;
                        partnumberRef.value = partnumberEdit;
                        conditionRef.value = conditionEdit;

                        liInfo.remove();
                        nextBtn.disabled = false;
                }

                // 3.	Continue

                continueBtn.addEventListener('click', onContinue);

                function onContinue() {
                        let liConfirm = document.createElement('li');
                        liConfirm.className = 'part-content';

                        let articleConfirm = document.createElement('article');
                        articleConfirm = articleInfo;

                        let confirmBtn = document.createElement('button');
                        let cancelBtn = document.createElement('button');

                        confirmBtn.className = 'confirm-btn'
                        confirmBtn.textContent = 'Confirm';
                        cancelBtn.className = 'cancel-btn'
                        cancelBtn.textContent = 'Cancel';

                        liConfirm.appendChild(articleConfirm);
                        liConfirm.appendChild(confirmBtn);
                        liConfirm.appendChild(cancelBtn);
                        liInfo.remove();

                        confirmList.appendChild(liConfirm);
                        // nextBtn.disabled = true;


                        confirmBtn.addEventListener('click', onConfirm);
                        cancelBtn.addEventListener('click', onCancel);

                        function onConfirm() {
                                confirmList.innerHTML = '';
                                nextBtn.disabled = false;
                                imageElement.style.visibility = 'visible';
                                textElement.textContent = 'Part is Ordered!';

                        }

                        function onCancel() {
                                confirmList.innerHTML = '';
                                nextBtn.disabled = false;
                        }
                }
        }
}
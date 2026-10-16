window.addEventListener("load", solve);

function solve() {
  let titleRef = document.getElementById('post-title');
  let categoryRef = document.getElementById('post-category');
  let contentRef = document.getElementById('post-content');

  let publishBtn = document.getElementById('publish-btn')

  let reviewList = document.getElementById('review-list')
  let publishList = document.getElementById('published-list')

  let clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();

    if (titleRef.value === '' ||
      categoryRef.value === '' ||
      contentRef.value === '') return;

    let liReview = document.createElement('li');
    liReview.className = 'rpost';

    let articleReview = document.createElement('article');

    let titleReview = document.createElement('h4');
    titleReview.textContent = `${titleRef.value}`;
    let categoryReview = document.createElement('p');
    categoryReview.textContent = `Category: ${categoryRef.value}`;
    let contentReview = document.createElement('p');
    contentReview.textContent = `Content: ${contentRef.value}`;

    let editBtn = document.createElement('button');
    let approveBtn = document.createElement('button');

    editBtn.className = 'action-btn edit'
    editBtn.textContent = 'Edit';
    approveBtn.className = 'action-btn approve'
    approveBtn.textContent = 'Approve';

    articleReview.appendChild(titleReview);
    articleReview.appendChild(categoryReview);
    articleReview.appendChild(contentReview);

    liReview.appendChild(articleReview);
    liReview.appendChild(approveBtn);
    liReview.appendChild(editBtn);

    reviewList.appendChild(liReview);

    let titleEdit = titleRef.value;
    let categoryEdit = categoryRef.value;
    let contentEdit = contentRef.value;

    titleRef.value = '';
    categoryRef.value = '';
    contentRef.value = '';

    // publishBtn.disabled = true;

    // Edit

    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      titleRef.value = titleEdit;
      categoryRef.value = categoryEdit;
      contentRef.value = contentEdit;

      liReview.remove();

    }

    // 3.	Approve posts

    approveBtn.addEventListener('click', onApprove);

    function onApprove() {
      let liApprove = document.createElement('li');
      liApprove.className = 'rpost';

      let articleApprove = document.createElement('article');
      articleApprove = articleReview;

      liApprove.appendChild(articleApprove);
      liReview.remove();

      publishList.appendChild(liApprove);



    }
  }      
  //4.	Clear posts
        clearBtn.addEventListener('click', () => {
        publishList.innerHTML = '';
      });
}

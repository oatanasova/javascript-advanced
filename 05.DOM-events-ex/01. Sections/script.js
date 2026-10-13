function create(words) {
   let content = document.getElementById('content');

   words.forEach((word) => {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.addEventListener('click', () => {
         paragraph.style.display = 'block';
      });

      div.appendChild(paragraph);
      content.appendChild(div);
   });
}
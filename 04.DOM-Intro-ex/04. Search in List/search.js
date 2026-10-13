function search() {

   let searchTextRef = document.getElementById('searchText').value.toLowerCase();
   let towns = document.querySelectorAll('#towns li');
   let outputRef = document.getElementById('result');

   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';

      if (town.textContent.toLowerCase().includes(searchTextRef)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   outputRef.textContent = `${matches} matches found`;

}
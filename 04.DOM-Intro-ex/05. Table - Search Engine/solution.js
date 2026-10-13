function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchFieldRef = document.getElementById('searchField');
   let tableRowRef = document.querySelectorAll('tbody tr');

   function onClick() {
      let searchText = searchFieldRef.value;
      if (!searchText) {
         return;
      }

      searchFieldRef.value = '';

      for (let i = 0; i < tableRowRef.length; i++) {
         let tableDataRef = tableRowRef[i].querySelectorAll('td');

         for (let j = 0; j<tableDataRef.length; j++){
            const txt = tableDataRef[j].textContent;

            if(txt.includes(searchText)){
               tableRowRef[i].classList.add('select');
               break;
            } else{
               tableRowRef[i].classList.remove('select');
            }
         }
      }
   }
}
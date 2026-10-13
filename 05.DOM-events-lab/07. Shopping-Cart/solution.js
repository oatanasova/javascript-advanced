function solve() {
   let products = document.querySelectorAll('.product');
   let textAreaField = document.querySelector('textarea');
   let checkoutBtn = document.querySelector('.checkout');

   let cart = [];

   products.forEach(product => {
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      let addProdctBtn = product.querySelector('button');

      addProdctBtn.addEventListener('click', () => {
         cart.push({ name, price });

         textAreaField.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   checkoutBtn.addEventListener('click', () => {
      let total = cart.reduce((sum, product) => sum + product.price, 0);
      let uniqueProducts = [];

      for (let product of cart) {
         if (!uniqueProducts.includes(product.name)) {
            uniqueProducts.push(product.name);
         }
      }

      textAreaField.value += `You bought ${uniqueProducts.join(', ')} for ${total.toFixed(2)}.`;

      document.querySelectorAll('button').forEach(button => {
         button.disabled = true;
      });
   });

}
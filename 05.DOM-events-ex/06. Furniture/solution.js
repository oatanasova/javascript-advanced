function solve() {
    let [input, output] = document.querySelectorAll('textarea');
    let [generateBtn, buyBtn] = document.querySelectorAll('button');
    let table = document.querySelector('tbody');

    generateBtn.addEventListener('click', () => {
        let furniture = JSON.parse(input.value);

        furniture.forEach(item => {
            let row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="${item.img}"></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><p>${item.decFactor}</p></td>
                <td><input type="checkbox"></td>
            `;

            table.appendChild(row);
        });
    });

    buyBtn.addEventListener('click', () => {
        let checked = Array.from(table.querySelectorAll('input[type="checkbox"]:checked'));

        let names = [];
        let totalPrice = 0;
        let totalDecoration = 0;

        checked.forEach(checkbox => {
            let row = checkbox.parentElement.parentElement;

            names.push(row.children[1].textContent.trim());
            totalPrice += Number(row.children[2].textContent);
            totalDecoration += Number(row.children[3].textContent);
        });

        let averageDecoration = checked.length
            ? totalDecoration / checked.length
            : 0;

        output.value =
            `Bought furniture: ${names.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${averageDecoration}`;
    });
}
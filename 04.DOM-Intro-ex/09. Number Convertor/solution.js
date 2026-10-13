function solve() {
    let from = document.getElementById('from');
    let to = document.getElementById('selectMenuTo');
    let input = document.getElementById('input');
    let result = document.getElementById('result');

    to.innerHTML = `
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
    `;

    document.querySelector('button').addEventListener('click', () => {
        let number = Number(input.value);

        if (to.value === 'binary') {
            result.value = number.toString(2);
        } else if (to.value === 'hexadecimal') {
            result.value = number.toString(16).toUpperCase();
        }
    });
}
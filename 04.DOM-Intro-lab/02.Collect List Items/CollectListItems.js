function extractText() {
    const items = Array.from(document.getElementsByTagName('li'));
    const text = items.map( i => i.textContent);

    const output = document.getElementById('result');
    output.value = text.join('\n');
}
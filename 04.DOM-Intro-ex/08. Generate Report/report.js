function generateReport() {
    let tableHeaderRef = document.querySelectorAll('thead tr th');
    let tableRowRef = document.querySelectorAll('tbody tr');
    let outputRef = document.getElementById('output');

    let headerToDisplay = new Map();
    let tableHeaderArr = Array.from(tableHeaderRef);

    for(let i = 0; i <tableHeaderArr.length; i++){
        let th = tableHeaderArr[i];
        let isChecked = tableHeaderArr[i].querySelector('input').checked;

        if(isChecked){
            const text = th.textContent.trim();
            headerToDisplay.set(i, text.toLowerCase());
        }
    }

    let result = [];
    tableRowRef.forEach(row => {
        let rowData = {};
        headerToDisplay.forEach((key, value) => {
            let currentText = row.cells[value].textContent;
            rowData[key] = currentText;
        });
        result.push(rowData);
    })

    outputRef.value = JSON.stringify(result);
}
function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    console.log(arr);
    
    let output = ["<table>"];
    output.push(makeKeyRow(arr));
    arr.forEach((obj) => output.push(makeValueRow(obj)));
    output.push("</table>");

    function makeKeyRow(arr) {
        let row = "<tr>";

        for (let key of Object.keys(arr[0])) {
            row += `<th>${key}</th>`;
        }

        return row + "</tr>";
    }

    function makeValueRow(obj) {
        let row = "<tr>";

        for (let value of Object.values(obj)) {
            row += `<td>${escapeHtml(value)}</td>`;
        }

        return row + "</tr>";
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }
    console.log(output.join('\n'));
}

jsonToHtmlTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
);

jsonToHtmlTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);
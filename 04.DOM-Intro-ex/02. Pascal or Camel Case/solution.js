function solve() {
  let textRef = document.getElementById('text').value;
  let namingRef = document.getElementById('naming-convention').value;
  let resultRef = document.getElementById('result');

  let result = textRef.toLowerCase().split(' ');

  if (namingRef === "Camel Case") {
    for (let i = 1; i < result.length; i++) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }

    result[0] = result[0].toLowerCase();

  } else if (namingRef === "Pascal Case") {
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }

  } else {
    resultRef.textContent = "Error!";
    return;
  }

  resultRef.textContent = result.join('');
}
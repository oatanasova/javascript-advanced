function solve() {
  let textareaRef = document.getElementById('input');
  let output = document.getElementById('output');

  let text = textareaRef.value;

  let textArr = text.split(".").filter(e => e !== " " && !!e);

  for (let i = 0; i < textArr.length; i += 3) {
    let result = [];
    for (let j = 0; j < 3; j++) {
      if (!textArr[i + j]) {
        break;
      }
      result.push(textArr[i + j]);
    }
    let buffer = result.join(".") + ".";
    output.innerHTML += `<p>${buffer.trim()}</p>`;
  }
}


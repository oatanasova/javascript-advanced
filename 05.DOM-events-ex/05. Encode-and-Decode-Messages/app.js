function encodeAndDecodeMessages() {
    let [sendText, receivedText] = Array.from(document.querySelectorAll('div textarea'));
    let [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'));
    

    encodeBtn.addEventListener('click', () => {
        let output = '';
        let text = sendText.value;
        for(let el of text){
            output += String.fromCharCode(el.charCodeAt() + 1);
        }
        sendText.value = '';
        receivedText.value = output;
    });

    decodeBtn.addEventListener('click', () => {
        let output = '';
        let text = receivedText.value;
        for(let el of text){
            output += String.fromCharCode(el.charCodeAt() - 1);
        }
        receivedText.value = output;

    });
}
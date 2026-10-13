function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result')

    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);
    
    function onMouseMove(event) {
        result.textContent = Math.floor(event.offsetX / 300 * 100) + '%';
        // result.textContent = Math.floor(event.offsetX / event.offsetWidth * 100) + '%';
    }
    
    function onMouseOut() {
        result.textContent = '';
    }
}
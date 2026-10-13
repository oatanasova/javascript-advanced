function attachEventsListeners() {
    let unitsToMeters = {
        km: 1000, m: 1, cm: 0.01, mm: 0.001, 
        mi: 1609.344, yrd: 0.9144, ft: 0.3048, in: 0.0254
    };

    let inputDistance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');

    document.getElementById('convert').addEventListener('click', () => {
        let distInMeters = Number(inputDistance.value) * unitsToMeters[inputUnits.value];
        outputDistance.value = distInMeters / unitsToMeters[outputUnits.value];
    });
}
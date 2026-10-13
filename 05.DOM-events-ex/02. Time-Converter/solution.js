function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let value = Number(button.parentElement.querySelector('input').value);

            if (button.id === 'daysBtn') {
                hours.value = value * 24;
                minutes.value = value * 1440;
                seconds.value = value * 86400;
            } else if (button.id === 'hoursBtn') {
                days.value = value / 24;
                minutes.value = value * 60;
                seconds.value = value * 3600;
            } else if (button.id === 'minutesBtn') {
                days.value = value / 1440;
                hours.value = value / 60;
                seconds.value = value * 60;
            } else if (button.id === 'secondsBtn') {
                days.value = value / 86400;
                hours.value = value / 3600;
                minutes.value = value / 60;
            }
        });
    });
}
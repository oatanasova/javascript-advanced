function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach((profile) => {
        let button = profile.querySelector('button');
        let hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
        let lockRadio = profile.querySelector('input[Value="lock"]');

        button.addEventListener('click', () => {
            if(lockRadio.checked) return;

            let isHidden = hiddenFields.style.display === 'none' || hiddenFields.style.display === '';

            hiddenFields.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? 'Hide it' : 'Show more';
        });
    });

    
}
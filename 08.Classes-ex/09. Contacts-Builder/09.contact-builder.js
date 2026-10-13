// const { createElement } = require("react");

class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    render(id) {
        let parent = document.getElementById(id);
        let article = document.createElement('article');
        let titleDiv = document.createElement('div');
        this.titleDiv = titleDiv;
        let btn = document.createElement('button')
        titleDiv.className = 'title';
        titleDiv.classList.toggle('online', this._online);
        btn.innerHTML = '&#8505';
        titleDiv.innerHTML = `${this.firstName} ${this.lastName}`;
        titleDiv.appendChild(btn);

        article.appendChild(titleDiv);

        let infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.style.display = 'none';
        let spanPhone = document.createElement('span');
        let spanEmail = document.createElement('span');
        spanPhone.innerHTML = `&phone; ${this.phone}`
        spanEmail.innerHTML = `&#9993; ${this.email}`

        infoDiv.append(spanPhone, spanEmail);

        article.appendChild(infoDiv);
        parent.appendChild(article);

        btn.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.titleDiv) {
            this.titleDiv.classList.toggle('online', value);
        }
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
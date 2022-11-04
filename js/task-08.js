const form = document.querySelector('.login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');


const userData = {};
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.text === "" || password.value === "") {
        return alert('Все поля должны быть заполнены!')
    };

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};

const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formEls = event.currentTarget.elements;
    const mail = formEls.email.value;
    const password = formEls.password.value;


    const userDetails = {
        mail, password
    };

     const isInputValueCorrect = mail === "" || password === ""
        ? alert('Все поля должны быть заполнены!')
        : console.log(userDetails);
    event.currentTarget.reset();
};


    
    
    
   







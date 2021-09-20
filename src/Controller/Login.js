function check() {
    const form = document.querySelector('.form-global');
    checkReg();
    function eventForm(event) {
        event.preventDefault();

        const valueEmail = form.querySelector('#email-log').value;
        const valueSenha = form.querySelector('#password-log').value;
        var storedName = localStorage.getItem("email");
        var storedPass = localStorage.getItem("senha");

        function verifiEmail(event) {
            if (valueEmail == storedName && valueSenha == storedPass) {
                const storedName = localStorage.getItem("name")
                
                alertify.success(`Olá, ${storedName}! Seja bem vindo.`);

                setTimeout(function() { window.open('../HomePage.html') }, 1000);
                
            } else {
                alertify.error('Email or Password is not correct');
            }
        }
        verifiEmail();

    }
    form.addEventListener('submit', eventForm);
}

check();
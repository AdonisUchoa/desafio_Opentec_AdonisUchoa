function check() {
    const form = document.querySelector('.form-global');

    function eventForm(event) {
        event.preventDefault();

        const valueEmail = form.querySelector('#email');
        const emailOpen = valueEmail.value;
        const valueSenha = form.querySelector('#password');
        const senhaOpen = valueSenha.value;

        function verifiEmail(event) {
            if (emailOpen == 'usuario@teste.com.br' && senhaOpen === 'senha123') {
                alertify.success('Olá, usuario@teste.com.br! Seja bem vindo.');

            } else {
                alertify.error('Email or Password is not correct');
            }
        }
        verifiEmail();

    }
    form.addEventListener('submit', eventForm);
}

check();
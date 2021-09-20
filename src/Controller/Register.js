function check() {

    const form = document.querySelector('.form-global');
    
    function register() {
        location.href = '../open-teste/index.html';
    
    }
    
    function eventForm(evento) {
    
        evento.preventDefault();
        const valueEmail = form.querySelector('#idEmail-reg');
        const valueSenha = form.querySelector('#idPassword-reg');
        const emailRegOpen = valueEmail.value;
        const senhaRegOpen = valueSenha.value;
    
        function validRegister() {
            if (emailRegOpen == 'usuario@teste.com.br' && senhaRegOpen == 'senha123') {
                alertify.success('Successfully registered.');
                setTimeout(function() { register() }, 2000);
            } else {
                alertify.error('The chosen Email or Password is not correct.');
            }
        }
        validRegister();

    }
    form.addEventListener('submit', eventForm)
}

check();
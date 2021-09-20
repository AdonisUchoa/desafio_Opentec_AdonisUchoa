function checkReg() {

    const form = document.querySelector('.form-global');
    
    function register() {
        location.href = '../index.html';
    
    }
    
    function eventForm(evento) {
    
        evento.preventDefault();
        const valueEmail = form.querySelector('#idEmail-reg');
        const valueSenha = form.querySelector('#idPassword-reg');
        // const valueName = form.querySelector('#idName-reg');
        const emailRegOpen = valueEmail.value;
        const senhaRegOpen = valueSenha.value;
        // const nameRegOpen = valueName.value;
        function store() {
            localStorage.setItem('email', emailRegOpen);
            localStorage.setItem('senha', senhaRegOpen);
            // localStorage.setItem('name', nameRegOpen);
        }
        function validRegister() {
            if (emailRegOpen,senhaRegOpen) {
                alertify.success('Successfully registered.');
                store();
                setTimeout(function() { register(); }, 2000);
            } else {
                alertify.error('The chosen Email or Password is not correct.');
            }
        }
        validRegister();

    }
    form.addEventListener('submit', eventForm)
}

check();
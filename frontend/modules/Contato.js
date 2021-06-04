import validator from 'validator';

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }


    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);

        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        if(!nomeInput.value == '' && sobrenomeInput.value == ''){
            alert("Digite seu sobrenome");
            error = true;    
        }

        if(!sobrenomeInput.value == '' && nomeInput.value == ''){
            alert("Digite seu nome");
            error = true;    
        }

        if(!emailInput.value == '' && telefoneInput.value == ''){
            alert("Digite seu telefone");
            error = true;   
            }

        if(!telefoneInput.value == '' && emailInput.value == '' ){
            alert("Digite seu email");
            error = true;
                     
            }
        
        if(emailInput.value == '' && telefoneInput.value == ''){
            alert("Email e telefone devem ser digitados para entrar no sistema");
            error = true;
        }



        if(!error) el.submit();

    }
}

$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    
    $('form').on('submit', function(e) {
        e.preventDefault();
    })
    
});
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: "Por favor, insira o seu nome",
        email: {
            required: "Por favor, insira seu e-mail",
            email: "Por favor, insira um e-mail válido"
        },
        telefone: "Por favor, insira seu telefone",
        cpf: "Por favor, insira seu telefone",
        endereco: "Por favor, insira seu endereço",
        cep: "Por favor, insira seu CEP"
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = numberOfInvalids();
        console.log(camposIncorretos);
    }
});

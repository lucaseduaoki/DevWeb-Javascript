<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .erro{
            color: tomato;
            display: none;
        }

        .grupo{
            padding: 10px;
        }

        input{
            height: 20px;
            outline: none;
            font-size: 15px;
            width: 350px;;
            cursor: pointer;
            align-self: center;
            border-width: 1px;
            border-radius: 5px;
            color: black;
        }

        input.invalido{
            border: solid 2px tomato;
        }

    </style>
</head>
<body>
    
    <form action="">


        <div class="grupo">
            <input type="text" placeholder="Informe seu nome">
            <span class="erro">O nome deve ter pelo menos três caracteres</span>
        </div>

        <div class="grupo">
            <input type="text" placeholder="Informe seu e-mail">
            <span class="erro">O email precisa ser válido</span>
        </div>

        <div class="grupo">
            <input type="password" placeholder="Informe sua senha">
            <span class="erro">A senha precisa ter 8 caracteres</span>

            <a class="alternarSenha"><i class="bi bi-eye-fill"></i></a>

        </div>

        <div class="grupo">
            <input type="password" placeholder="Confirme sua senha">
            <span class="erro">A confirmação não corresponde à senha</span>
        </div>

        <div class="grupo">
            <input type="submit">
        </div>



        <script>
            const inputs = document.querySelectorAll('input')
            const erros = document.querySelectorAll('.erro')

            function validaNome(){
                if(inputs[0].value.length < 3){
                    console.log("digitou")
                    erros[0].style.display = 'block'
                    inputs[0].classList.add('invalido')
                }
                else{
                    erros[0].style.display = 'none'
                    inputs[0].classList.remove('invalido')
                }
            }

            inputs[0].addEventListener('input', validaNome)

            function validaEmail(){
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                if(!emailRegex.test(inputs[1].value)){
                    erros[1].style.display = 'block'
                    inputs[1].classList.add('invalido')
                }
                else{
                    erros[1].style.display = 'none'
                    inputs[1].classList.remove('invalido')
                }
            }

            inputs[1].addEventListener('input' , validaEmail)

            function validaSenha(){
                const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

                if(!senhaRegex.test(inputs[2].value)){
                    erros[2].style.display = 'block'
                    inputs[2].classList.add('invalido')
                }
                else{
                    erros[2].style.display = 'none'
                    inputs[2].classList.remove('invalido')
                }
            }

            inputs[2].addEventListener('input' , validaSenha)
            
            function confirmaSenha(){

                if(inputs[3].value != inputs[2].value){
                    erros[3].style.display = 'block'
                    inputs[3].classList.add('invalido')
                }
                else{
                    erros[3].style.display = 'none'
                    inputs[3].classList.remove('invalido')
                }
            }

            inputs[3].addEventListener('input', confirmaSenha)

            document.querySelector('form').addEventListener('submit', (event)=> {

                event.preventDefault()

                validaNome()
                validaEmail()
                validaSenha()
                confirmaSenha()
            })

            document.querySelector('.alternarSenha').addEventListener('click', () =>{
                const tipoAtual = inputs[2].getAttribute('type');

                const tipo = tipoAtual === "password" ? 'text' : 'password';

                inputs[2].setAttribute('type', tipo);
                inputs[2].setAttribute('type', tipo);
            })


        </script>
    </form>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ATIVIDADE 8</title>

    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 800px;
            height: 400px;
            background-color: rgb(184, 177, 169);
            margin-top: 10%;
            gap: 10px;
            border-color: black;
        }

        #CampoTexto {
            padding: 10px 20px;
            font-size: 18px;
            width: 350px;
            cursor: pointer;
            border: none;
            align-self: center;
            border-radius: 5px;
            color: black;
        }

        .tema-escuro {
            background: #000;
        }
    </style>

</head>
<body>
    <div id="container" class="container">
        <input type="text" id="CampoTexto">
        <p id="p">Escreva um sabor de sorvete</p>
        <button>Tema Claro/Escuro</button>
    </div>

    <script>
        const texts = document.querySelector('p');
        const input = document.querySelector('#CampoTexto');

        input.addEventListener('keyup', () => {
            let textDigitado = input.value;

 
            if (textDigitado.length > 3) {
                let responseText = "";
                if (textDigitado=== "chocolate") {
                    responseText = "Eu amo sorvete de chocolate!";
                } else if (textDigitado === "baunilha") {
                    responseText = "Ahh, mas chocolate é o meu favorito...";
                } else {
                    responseText = "Ahh, eu esperava um sabor de sorvete...";
                }
                texts.innerText = responseText;
            } else {
                texts.innerText = "";
            }
        });

        const botao = document.querySelector('button');

        botao.addEventListener('click', () => {
            if (document.body.classList.contains('tema-escuro')) {
                document.body.classList.add('tema-claro');
                document.body.classList.remove('tema-escuro');
                localStorage.setItem('tema', 'tema-claro');
            } else {
                document.body.classList.add('tema-escuro');
                document.body.classList.remove('tema-claro');
                localStorage.setItem('tema', 'tema-escuro');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const tema = localStorage.getItem('tema');
            if (tema) {
                document.body.classList.add(tema); // Adiciona a classe de tema armazenada
            }
        });
    </script>

</body>
</html>

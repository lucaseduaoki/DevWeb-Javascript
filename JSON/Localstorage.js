<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>

    <style>

        .tema-escuro{
            background: #000;
        }

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            align-self: center;
            border-radius: 5px;
            background-color: blue;
            color: white;
        }
    </style>


</head>
<body>

    <button>Tema Claro/Tema Escuro</button>

    <script>

        const botao = document.querySelector("button");

        botao.addEventListener('click', ()=>{

            if(document.body.classList.contains('tema-escuro')){
                document.body.classList.add('tema-claro')
                document.body.classList.remove('tema-escuro');
                localStorage.setItem('tema', 'tema-claro');
            }
            else{
                document.body.classList.add('tema-escuro');
                document.body.classList.remove('tema-claro');
                localStorage.setItem('tema', 'tema-escuro');
            }
        })

        document.addEventListener('DOMContentLoaded', ()=>{ 

            const tema = localStorage.getItem('tema');
            console.log(tema)
            document.body.classList.addClass('tema')


        })


    </script>

</body>
</html>

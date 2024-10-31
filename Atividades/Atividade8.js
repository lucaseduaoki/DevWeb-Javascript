<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ATIVIDADE 8</title>

    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        #CampoTexto{
            padding: 10px 20px;
            font-size: 18px;
            width: 350px;;
            cursor: pointer;
            border: none;
            align-self: center;
            border-radius: 5px;
            color: white;
        }
    </style>

</head>
<body>
        <input type="text" id="CampoTexto">
        <p></p>

    <script>

        const texts = document.querySelector ('p');
        const input = document.querySelector('#CampoTexto');

        input.addEventListener('keyup', () =>{
            let textDigitado = input.value;
            texts.innerText = input.value;

            if(textDigitado == "Chocolate"){
                texts.innerText = "Eu amo sorvete de chocolate!";
            } else if(textDigitado == "Baunilha"){
                texts.innerText = "Ahh, mas chocolate é o meu favorito...";
            } else{
                texts.innerText = "Ahh, eu esperava um sabor de sorvete...";
            }
        });
    </script>


</body>
</html>

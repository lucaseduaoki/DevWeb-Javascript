<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            font-size: 200px;
        }

        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: red;
            color: white;
        }

    </style>

<html>
<body>

<h2>0</h2>
    <button>Clique para adicionar!</button>

    <script>
        const button = document.querySelector('button');
        let contador = 0;
        const exibirContador = document.querySelector('h2');

        button.addEventListener('click', () => {
            contador++;
            exibirContador.innerText = contador;
        });
    </script>

</body>
</html>

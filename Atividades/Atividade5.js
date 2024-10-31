<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade 5</title>

    <style>

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        li{
            font-family: Arial, sans-serif;
            font-size: 20px;
        
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
</head>
<body>
    
    <button>ADICIONE</button>
    <li>0</li>

    <script>
        const button = document.querySelector('button');
        const lista = document.querySelector('li');
        let numeroLista = 1;

        button.addEventListener('click', ()=> {

            const novoItem = document.createElement('li');
            novoItem.textContent = numeroLista++;
            lista.appendChild(novoItem);
        })
    </script>

</body>
</html>

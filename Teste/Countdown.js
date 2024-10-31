<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            display: flex;
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
            font-size: 300px;
            flex-direction: column;
        }

        .button {
            text-align: center;
            margin-top: 20px;
        }
    </style>

</head>
<body>

    <h2>10</h2>
    <button>Começar!</button>

    <script>
        
        const button = document.querySelector('button');


        button[
        let contador = 10;
        const regressiva = document.querySelector('h2')
        let interval = setInterval(()=>{
            regressiva.innerText = contador;
            contador--;

            if(contador == -1){
                clearInterval(interval)
            }

        },1000);
    </script>


    
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabalho H1</title>

    <style>

        h1{
            color: black;
            font-size: 100px;
        }

        body{
            display: flex;
            text-align: center;
            justify-content: center;
        }

    </style>
    
</head>
<body>  

    <h1>Hello world</h1>

    <script>
        let text = document.querySelector('h1');
        text.innerText = 'Hello people';
        text.style.color = 'red';
        text.style.fontSize = '200px';
    </script>

</body>
</html>

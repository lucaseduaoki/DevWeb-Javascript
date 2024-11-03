<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Waddles</title>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-weight: bold;
        color: black;
        font-style: normal;
        font-size: 50px;
        
    }
    body{
        background-image: url('https://76153.cdn.simplo7.net/static/76153/sku/tematicos-fazenda-celeiro-fundo-fotografico-fazendinha-em-tecido-ffc-205--p-1657203380560.jpg'); 
        background-size: 2000px;
        background-position: center; 
        background-repeat: no-repeat; 
        color: aliceblue;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
       
    
    }
    body img{
        margin-top: 100px;
        width: 500px;
        margin-left: 40px;
    }
    .caixa{
        width: 500px;
        height: 50px;
        background-color: aliceblue;
        color:rgb(93, 24, 121);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>


</head>
<body>
    <div class="Box">
        <p>Oinc oinc</p>
    </div>

    <img src="images (2).jpeg" alt="">
    <script>
        
const imagem = document.querySelector("img");
const texto = document.querySelector("p");

    imagem.addEventListener("click", function(e){
        texto.innerText = "Você tá encostando em mim. Pareee OINC OINC";
    })

    imagem.addEventListener("mouseenter", function(){
        texto.innerText = "Quer fazer carinho em mim é? OINC OINC";
    })
    imagem.addEventListener("mousemove", function(){
        texto.innerText = "Não ouse OINC OINC!";
    })
    
    imagem.addEventListener('mouseleave', function(){
        texto.innerText = "Nem pense em encostar em mim OINC OINC";
    })
    
    </script>
</body>
</html>

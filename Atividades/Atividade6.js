<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade6</title>

    <style>

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

        h2{
            font-family: Arial, Helvetica, sans-serif;
        }

        .nome{
            flex-wrap: nowrap;
        }

    </style>
</head>
<body>
    
    <h2>Gerador de Nomes de Aventura</h2>
    <button>Gerar nome</button>
    <p>Exemplo:</p>
   

    <script>
        const titles = ["Sr.", "Mister", "Dom", "Lord", "Lady", "Capitão", "Dama"];
        const names = ["Arthur", "Gwendolyn", "Merlin", "Lancelot", "Morgana", "Ragnar", "Éowyn"];
        const classes = ["Mago", "Paladino", "Arqueiro", "Ladino", "Bárbaro", "Feiticeiro", "Cavaleiro"];
        const locations = ["Valfenda", "Gondor", "Asgard", "Camelot", "Nárnia", "Babilônia", "Atlantis"];

        const button = document.querySelector('button');
        const nome = document.querySelector('p');

        button.addEventListener('click', ()=> {
            const differentTitle = titles[Math.floor(Math.random() * titles.length)];
            const differentName = names[Math.floor(Math.random() * names.length)];
            const differentClass= classes[Math.floor(Math.random() * classes.length)];
            const differentLocation = locations[Math.floor(Math.random() * locations.length)];

        nome.innerText = `${differentTitle} ${differentName}, o ${differentClass} de ${differentLocation}`;
    })

    </script>

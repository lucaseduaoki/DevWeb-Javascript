const input = document.querySelector('input');
const button = document.querySelector('button');
const lista = document.querySelector('ul');

button.addEventListener('click', ()=> {

    let tarefa = input.value

    if (tarefa != ""){
        addToList(tarefa)
        salvarNoLocalStorage(tarefa)
    }

    input.value = ''
});

function addToList(tarefa){
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = input.value
    lista.appendChild(novaTarefa);

    let excluir = document.createElement('button')
    excluir.textContent = 'excluir';

    novaTarefa.appendChild(excluir)
    lista.appendChild(novaTarefa);
}

function salvarNoLocalStorage(tarefa){

    localStorage.setItem('tarefas', tarefa)
}

function obterTodasAsTarefas(){

    const tarefas = localStorage.getItem('tarefas')

    if (tarefas){
        tarefas = JSON.parse(tarefas);
    } else{
        tarefas = []
    }
    // return tarefas ? JSON.parse(tarefas) : [];
}

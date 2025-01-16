function adicionarTarefa() {

    // Mensagem após o input ser realizado
    let mensagem = "Tarefa adicionada com sucesso!";

    // Pega o valor do input e salva em outra variável
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    document.getElementById("mensagem").textContent = mensagem;

    // Adiciona a tarefa digitada no input em uma lista ul
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")

    // Pega o conteudo da variável tarefa
    novaTarefa.textContent = tarefa

    // Adiciona a tarefa colocada no input dentro da lista 
    listaTarefas.appendChild(novaTarefa)

    // Esvazia o input após o usuário enviar a tarefa
    inputTarefa.value = ""
}
function adicionarTarefa() {

    // Pega o valor do input e salva em outra variável
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    // Verifica se o input é vazio e impede o usuário de envia-lo caso seja esse o caso
    if (tarefa == "") {
        // Mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicionar a sua lista";
        document.getElementById("mensagem").textContent = mensagemErro;
    } else {
        // Mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        document.getElementById("mensagem").textContent = mensagemSucesso;

        // Adiciona a tarefa digitada no input em uma lista ul
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    // Esvazia o input após o usuário enviar a tarefa
    inputTarefa.value = ""
}
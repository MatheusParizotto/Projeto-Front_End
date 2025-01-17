function adicionarTarefa() {

    // Pega o valor do input e salva em outra variável
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // Verifica se o input é vazio e impede o usuário de envia-lo caso seja esse o caso
    if (tarefa == "") {
        // Mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicionar a sua lista";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red"
    } else {
        // Mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "green"

        // Adiciona a tarefa digitada no input em uma lista ul
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    // Esvazia o input após o usuário enviar a tarefa
    inputTarefa.value = ""
}
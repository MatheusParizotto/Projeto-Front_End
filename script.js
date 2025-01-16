function adicionarTarefa() {

    // Mensagem após o input ser realizado
    let mensagemSucesso = "Tarefa adicionada com sucesso!";

    // Pega o valor do input e salva em outra variável
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    document.getElementById("mensagem").textContent = mensagemSucesso;

    // Adiciona a tarefa digitada no input em uma lista ul
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")

    // Pega o conteudo da variável tarefa
    novaTarefa.textContent = tarefa

    // Adiciona a tarefa colocada no input dentro da lista 
    listaTarefas.appendChild(novaTarefa)

    // Esvazia o input após o usuário enviar a tarefa
    inputTarefa.value = ""

    // Verifica se o input é vazio e impede o usuári de enviar esse input
    if (tarefa == "") {
        let mensagemErro = "Adicione uma tarefa antes de tentar enviar";
        document.getElementById("mensagem").textContent = mensagemErro;
    }
}
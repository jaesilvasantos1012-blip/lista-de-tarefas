const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();

    if (texto === "") {
        mensagem.textContent = "Digite uma tarefa antes de adicionar.";
        return;
    }

    mensagem.textContent = "";

    const item = document.createElement("li");
    item.classList.add("tarefa");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    const concluirBtn = document.createElement("button");
    concluirBtn.textContent = "Concluir";
    concluirBtn.classList.add("concluirBtn");

    concluirBtn.addEventListener("click", function () {
        item.classList.toggle("concluida");

        if (item.classList.contains("concluida")) {
            concluirBtn.textContent = "Desfazer";
        } else {
            concluirBtn.textContent = "Concluir";
        }
    });

    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.classList.add("excluirBtn");

    excluirBtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(textoTarefa);
    item.appendChild(concluirBtn);
    item.appendChild(excluirBtn);
    listaTarefas.appendChild(item);

    tarefaInput.value = "";
    tarefaInput.focus();
}

adicionarBtn.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

const cadastrar = (event) => {
    //Parar a propagacao padrao do evento
    event.preventDefault();

    // Capturar os valores do elementos po Id
    let nome = document.getElementById ("nome").value
    let email = document.getElementById ("email").value

    // Capturando o elemento da lista por Id
    let lista = document.getElementById("lista");

    // Criar um novo elemento <li>Nome - Email<li>
    let novoItem = document.createElement ("li");
    novoItem.innerText = nome + " - " + email;

    // Adicionar o novo item na lista ja existente
    lista.appendChild(novoItem);

    

    // Limpar os campos
    document.getElementById ("nome").value = "";
    document.getElementById ("email").value = "";
};




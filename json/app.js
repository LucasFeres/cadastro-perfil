// declara um conjunto inicial de Cadastros
var db_Cadastros_inicial = {
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_Cadastro'));
if (!db) {
    db = db_Cadastros_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCadastro(Cadastro) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoCadastro = {
        "id": novoId,
        "Banco": Cadastro.Banco,
        "Nome" : Cadastro.Nome,
        "Email": Cadastro.Email,
        "Estado" : Cadastro.Estado,
        "Cidade": Cadastro.Cidade,
        "Celular": Cadastro.Celular,
        "Empresa": Cadastro.Empresa
    };

    // Insere o novo objeto no array
    db.data.push(novoCadastro);
    displayMessage("Cadastro Inserido Com Sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Cadastro', JSON.stringify(db));
}

function updateCadastro(id, Cadastro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].Banco = Cadastro.Banco,
    db.data[index].Nome = Cadastro.Nome,
    db.data[index].Email = Cadastro.Email,
    db.data[index].Estado = Cadastro.Estado,
    db.data[index].Cidade = Cadastro.Cidade,
    db.data[index].Celular = Cadastro.Celular,
    db.data[index].Empresa = Cadastro.Empresa

    displayMessage("Cadastro alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Cadastro', JSON.stringify(db));
}

function deleteCadastro(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Cadastro', JSON.stringify(db));
}
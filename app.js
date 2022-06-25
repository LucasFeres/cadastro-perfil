// declara um conjunto inicial de Cadastros
var db_Cadastros_inicial = {
    "data": [
        {
            "id": 1,
            "Banco": "Bradesco",
            "Nome": "Lucas Andrade",
            "Email": "lucas_andrade@gmail.com",
            "Estado": "Minas Gerais",
            "Cidade": "Belo Horizonte",
            "Celular": "(31) 99703-9904",
            "Empresa": "Puc"
        },
        {
            "id": 2,
            "Banco": "Santander",
            "Nome": "Elaine Sophie Assunção",
            "Email": "elaine_assuncao@vivax.com",
            "Estado": "Roraima",
            "Cidade": "Boa Vista",
            "Celular": "(95) 99431-5709",
            "Empresa": "Microsoft"
        },
        {
            "id": 3,
            "Banco": "Banco Do Brasil",
            "Nome": "Analu Carla Marlene Martins",
            "Email": "analucarlamartins@hotmai.com",
            "Estado": "Minas Gerais",
            "Cidade": "Itaúna",
            "Celular": "(37) 3625-7940",
            "Empresa": ""
        },
        {
            "id": 4,
            "Banco": "Itaú",
            "Nome": "Ryan Caio Joaquim da Mota",
            "Email": "ryancaiodamota@outloock.com",
            "Estado": "Pará",
            "Cidade": "Londrina",
            "Celular": "(43) 98967-0559",
            "Empresa": "Ubisoft"
        },
        {
            "id": 5,
            "Banco": "Santander",
            "Nome": "Teresinha Flávia Almada",
            "Email": "teresinha-almada88@startingfitness.com.br",
            "Estado": "Mato Grosso",
            "Cidade": "Várzea Grande",
            "Celular": "(65) 98414-5601",
            "Empresa": ""
        },
        {
            "id": 6,
            "Banco": "Banco Do Brasil",
            "Nome": "Rodrigo Kevin das Neves",
            "Email": "rodrigokevindasneves@yool.com.br",
            "Estado": "Amazonas",
            "Cidade": "Manaus",
            "Celular": "(92) 98603-8991",
            "Empresa": ""
        },
        {
            "id": 7,
            "Banco": "Caixa Econômica Federal",
            "Nome": "Pedro Leonardo da Cruz",
            "Email": "pedro_dacruz@mosman.com.br",
            "Estado": "Mato Grosso",
            "Cidade": "Várzea Grande",
            "Celular": "(65) 98443-7066",
            "Empresa": ""
        },
    ]
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

    var token = "09d70b40916b4224a2e55e75a71c5625";
         // Exemplo de requisição GET para listar pessoas
        fetch("https://crudcrud.com/api/"+token+"/pessoas")
        .then(response => response.json())
        .then(data => botaTabela(data))
        .catch(error => console.log(error));

        function botaTabela(pessoas) {
            console.log(pessoas);
            // cria a variável tabela que pega o corpo da tabela pelo ID
            // pega a tag dentro da tabela
            // [0] pq getElementsByTAgName retorna um array e queremos o primeiro elemento deste array 
            var tabela = document.getElementById("tabelaAlunos").getElementsByTagName("tbody")[0];
            // inserir os dados da tabela a partir da variável de parametros de pessoas
            pessoas.forEach(function (elementoQueEstaSendoPercorrido) {
                // criando uma linha usando uma função no Javascript
                var linha = tabela.insertRow();
                // criando a célula 0 da linha trabalhada
                var celulaNome = linha.insertCell(0);
                var celulaNascimento = linha.insertCell(1);
                var celulaTelefone = linha.insertCell(2);
                var celulaEndereco = linha.insertCell(3);
                var celulaExcluir = linha.insertCell(4);
                // colocando os valores nas células criadas
                celulaNome.innerHTML = elementoQueEstaSendoPercorrido.nome;
                celulaNascimento.innerHTML = elementoQueEstaSendoPercorrido.nascimento;
                celulaTelefone.innerHTML = elementoQueEstaSendoPercorrido.telefone;
                celulaEndereco.innerHTML = elementoQueEstaSendoPercorrido.endereco;
                celulaExcluir.innerHTML = '<button onclick="excluir(\''+elementoQueEstaSendoPercorrido._id+'\')">Excluir</button>';
            })
        }
        function excluir(id) {
            var token = "09d70b40916b4224a2e55e75a71c5625"
            fetch("https://crudcrud.com/api/"+token+"/pessoas/"+id, {
            method: "DELETE"
            })
            .finally(()=>{
            setTimeout(window.location.href = "index.html",2000);
            });
            
            
        }
        
    function cadastrar() {
        var token = "09d70b40916b4224a2e55e75a71c5625";
          // Exemplo de requisição POST para adicionar uma nova pessoa
        fetch("https://crudcrud.com/api/"+token+"/pessoas", {
        // metodo de requisição (get, post, put, delete)
        method: "POST",
        // cabeçalho da requisição(tipo de conteudo, autorizações, etc...)
        headers: {
            "Content-Type": "application/json"
        },
        // corpo da requisição (dados que serão enviados)
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            nascimento: document.getElementById('nascimento').value,
            endereco: document.getElementById('endereco').value,
            telefone: document.getElementById('telefone').value
        })
        })
        .then(response => response.json())
        .then(data => console.log("pessoa criado:", data))
        .catch(error => console.error("Erro no POST:", error))
        .finally(() => {
            // redirecionar para a pagina inicial
         setTimeout(window.location.href = "index.html", 2000);
            
        });
    }

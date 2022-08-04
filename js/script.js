class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos =[];
       
    }

    salvar(){
        let produto = this.lerDados();

        if(this.validaCampos(produto) == true) {
            alert('Salvar');
        }

        console.log(produto);
    }

    
    lerDados(){
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(){
        let mensagem = '';

        if(produto.nomeProduto == '') {
            mensagem += 'Informe o nome do produto \n';
        }

        if(produto.preco == '') {
            mensagem += 'Informe o preco do produto \n';
        }

        if(mensagem != ''){
            alert(mensagem);
            return false;
        }

        return true;

    }


    cancelar(){


    }
}

var produto = new Produto();
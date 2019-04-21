class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let data = this._inputData.value

        console.log(typeof data);
        console.log(data);

        let data_formatada = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(typeof data_formatada);
        console.log(data_formatada);

    
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        // console.log(negociacao);
    }
}
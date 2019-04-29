class MensagemView extends View {
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        console.log(model);
        console.log(this.texto);
        
        return `<p class="alert alert-info">${model.texto}</p>`;
    }
}
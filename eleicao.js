function votar() {
    var nome = input_nome.value
    var idade = Number(input_idade.value)

    if(idade>=16) {
        div_mensagem.innerHTML = `
        Senhor(a) ${nome}, você tem ${idade} anos, portanto já pode votar!!!
        `;
    } else {
        div_mensagem.innerHTML = `
        Senhor(a) ${nome}, você tem ${idade} anos, portanto ainda não pode votar!!!
        `;
    }
}
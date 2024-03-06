function calcular() {
    var nome = input_nome.value;
    var distancia = Number(input_distancia.value);
    var bandeira = Number(input_bandeira.value);
    var horario = Number(input_horario.value);
    var totalCorrida = distancia * 1.25

    if (bandeira == 1) {
        if (horario <= 23) {
            totalCorrida = totalCorrida * 1.15
        }
        if (horario <= 12) {
            totalCorrida = totalCorrida * 1.1
        }
        if (horario <= 6) {
            totalCorrida = totalCorrida * 1.05
        } else {
            div_mensagem.innerHTML = `Só aceitamos horarios entre 0 e 23hrs`;
        }

    }
    if (bandeira == 2) {
        if (horario <= 23) {
            totalCorrida = totalCorrida * 1.3
        }
        if (horario <= 12) {
            totalCorrida = totalCorrida * 1.2
        }
        if (horario <= 6) {
            totalCorrida = totalCorrida * 1.1
        } else {
            div_mensagem.innerHTML = `Só aceitamos horarios entre 0 e 23hrs`;
        }
    }
    if (bandeira == 3) {
        if (horario <= 23) {
            totalCorrida = totalCorrida * 1.45
        }
        if (horario <= 12) {
            totalCorrida = totalCorrida * 1.3
        }
        if (horario <= 6) {
            totalCorrida = totalCorrida * 1.15
        } else {
            div_mensagem.innerHTML = `Só aceitamos horarios entre 0 e 23hrs`;
        }
    } else {
        div_mensagem.innerHTML = `Apenas são permitidos números dentro da bandeira (1,2 ou 3)`;
    }

    div_mensagem.innerHTML = `Olá ${nome} Sua corrida, será na bandeira ${bandeira}, percorrerá ${distancia} km e o total da corrida será de ${totalCorrida}`;

}
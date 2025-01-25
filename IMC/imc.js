function calcular() {
    //SELECONANDO OS ELEMENTOS E PROPIEDADES
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var result = document.getElementById('resultado');

    //CALCÚLO PARA ANALISAR O IMC
    if (nome !== '' && altura !== '' && peso !== '') {
        const imc = (peso / (altura * altura)).toFixed(1);

        let clas = '';

        if (imc < 18.5) {
            clas = 'Abaixo do Peso.';
        } else if (imc < 25) {
            clas = 'com o peso ideal.';
        } else if (imc < 30) {
            clas = 'levemente acima do peso.';
        } else if (imc < 35) {
            clas = 'com obesidade 1º GRAU.';
        } else if (imc < 40) {
            clas = 'com obesidade 2º GRAU.';
        } else {
            clas = 'com obesidade 3º GRAU [PERIGO!]';
        }
        //IMPRIMINDO NA TELA O RESULTADO
        result.innerText = `Olá ${nome} seu IMC é ${imc} e você está ${clas}`;

    }else {
        //CASO UM DOS CAMPOS ESTEJA VAZIO
        result.innerText = 'Preencha todos os campos!';
    }
}
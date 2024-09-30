function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if (tipoIngresso.value == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso.value == 'superior') {
        qtdCadeiraSuperior(qtd);
    } else {
        qtdCadeiraInferior(qtd)
    }      
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponivel para o tipo de pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso');
    }
}

function qtdCadeiraSuperior(qtd) {
    let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdCadeiraSuperior) {
        alert('Quantidade Indisponivel para o tipo de pista');
    } else{
        qtdCadeiraSuperior = qtdCadeiraSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior
        alert('Compra Realizada com sucesso')
    }
}

function qtdCadeiraInferior(qtd) {
    let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdCadeiraInferior) {
        alert('Quantidade indisponivel para o tipo de pista');
    } else {
        qtdCadeiraInferior = qtdCadeiraInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior
        alert('Compra realizada com sucesso')
    }
}
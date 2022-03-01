let num = document.getElementById("number");
let lista = document.getElementById("list");
let result = document.getElementById("res");
let vector = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inLista(num.value, vector)) {
    vector.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado. `;
    lista.appendChild(item);
    result.innerHTML = ''
  } else {
    window.alert("Valor Invalido");
  }
  num.value = ''
  num.focus()
}

function finalizar(){
    if(vector.length == 0){
        window.alert('Adicione um valor')
    }else{
        let tot = vector.length
        let maior = vector[0]
        let menor = vector[0]
        let soma = 0
        let media = 0

        for (let pos in vector){
            soma = soma + vector[pos]
            if (vector[pos]> maior)
            maior = vector[pos]
            if (vector[pos] < menor)
            menor = vector[pos]
        }
        media = soma / tot
        result.innerHTML = ''
        result.innerHTML += `<p> Ao todo temos ${tot} Valores cadastrados </p>`
        result.innerHTML += `<p> O Maior valor e ${maior} . </p>`
        result.innerHTML += `<p> O Menor valor e ${menor} . </p>`
        result.innerHTML += `<p> A soma dos valores e ${soma} . </p>`
        result.innerHTML += `<p> A Media dos valores e ${media} . </p>`
    }
}

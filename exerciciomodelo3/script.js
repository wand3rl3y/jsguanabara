function contar() {
  let ini = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("res");
  if (
    ini.value.length == 0 ||
    passo.value.length == 0 ||
    fim.value.length == 0
  ) {
    res.innerHTML = "Impossivel Contar";
    window.alert("ERRO digite um numero valido");
  } else {
    res.innerHTML = "Contando:";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      //contagem crescente
      for (let cont = i; cont <= f; cont += p) {
        res.innerHTML += ` ${cont} \u{1F47B}	`; //unicode para JS
      }
    } else {
      //contagem regressiva
      for (let cont = i; cont >= f; cont -= p) {
        res.innerHTML += `${cont} \u{1F47A}	`;
      }
    }
  }
}

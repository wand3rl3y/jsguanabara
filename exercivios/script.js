function carregar() {
  var msg = window.document.getElementById("div1");
  var img = window.document.getElementById("img");

  var date = new Date();
  var hora = date.getHours();
  msg.innerHTML = ` Agora são ${hora} Horas `;

  if (hora >= 0 && hora <= 12) {
    //bom dia
    img.src = "manha.jpg";
    document.body.style.backgroundColor = "#C6A08C";
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = "tarde.jpg";
    document.body.style.backgroundColor = "#59877C";
  } else {
    //Boa noite
    img.src = "noite.jpg";
    document.body.style.backgroundColor = "#041C38";
  }
}

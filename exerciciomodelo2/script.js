function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') //tem uma DIV com o mesmo nome 
    

    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert ("ERRO digite numero correto ANIMAL")
    }else{
        var fsex = document.getElementsByName('radsex') // pode ser 0 ou 1 não sei se funciona com ID ? 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto') //posso fazer pelo java scrip ou pelo css o ID
        img.setAttribute('height' , '200px')
        img.setAttribute('width' , '200px')
        img.style.borderRadius = '50%'


        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10  ){
                // criança
                img.setAttribute('src' , 'criam.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemM.jpg')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.jpg')
            }else {
                // velho
                img.setAttribute('src', 'velho.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10  ){
                // criança
                img.setAttribute('src' , 'criaf.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'jovemF.jpg')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src' , 'mulher.jpg')
            }else {
                // velho
                img.setAttribute('src' , 'velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona a imagem no HTML
    }
}
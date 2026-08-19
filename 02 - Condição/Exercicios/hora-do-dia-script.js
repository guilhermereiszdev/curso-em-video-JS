function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var agora = new Date();
    var hora = agora.getHours();
    msg.innerText = `Agora são ${hora} horas`

    if (hora > 4 && hora < 13){
        msg.innerHTML += '<p>Bom dia!!</p>'
        img.src = '/imagens/dia.jpg'
        document.body.style.backgroundColor = '#78b7de'
    } else if (hora > 12 && hora < 18) {
        msg.innerHTML += '<p>Boa Tarde!!</p>'
        img.src = '/imagens/tarde.jpg'
        document.body.style.backgroundColor = '#efa441'
    } else {
        msg.innerHTML += '<p>Boa noite!!</p>'
        img.src = '/imagens/noite.jpg'
        document.body.style.backgroundColor = '#3c3c3c'
    }
}
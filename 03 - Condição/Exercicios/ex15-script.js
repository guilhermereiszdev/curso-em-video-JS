function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('Tá errado chefia!!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        
        if (sex[0].checked) {
            genero = 'Homem'

            if (idade < 12) {
                img.setAttribute('src','/imagens/criança-homem.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', '/imagens/jovem-homem.jpeg')
            } else if (idade < 65) {
                img.setAttribute('src', '/imagens/adulto-homem.jpg')
            } else if (idade >= 65) {
                img.setAttribute('src', '/imagens/idoso-homem.jpg')
            }

        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src','/imagens/criança-mulher.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', '/imagens/jovem-mulher.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', '/imagens/adulta-mulher.jpg')
            } else if (idade >= 65) {
                img.setAttribute('src', '/imagens/idoso-mulher.png.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}
/*var inicio = 0;

var final = 10;

var passo = 2;

for (var inicio = 0; inicio <= final; inicio += passo){
    console.log(inicio)
}*/


function executar() {
    var campoIni = document.getElementById('txtini')
    var campoFim = document.getElementById('txtfim')
    var campoPas = document.getElementById('txtpas')
    var res = document.getElementById('res')

    var ini = Number(campoIni.value)
    var fim = Number(campoFim.value)
    var pas = Number(campoPas.value)

    if (campoIni.value === '' || campoFim.value === '') {
        res.innerHTML = '[ERROR] Verificar se algum campo está vazio'
    } else {
        if (campoPas.value === '' || pas === 0) {
            alert('Campo "Passo" inválido, será considerado como 1')
            pas = 1
        }

        if (ini < fim) {
            res.innerHTML = ''

            for (ini; ini <= fim; ini += pas) {
                res.innerHTML += ini + ' '
            }
        } else {
            res.innerHTML = ''

            for (ini; ini >= fim; ini -= pas) {
                res.innerHTML += ini + ' '
            }
        }
    }
}
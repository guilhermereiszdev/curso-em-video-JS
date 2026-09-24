var vet = []
var res = document.getElementById("res")

function adicionar(){
    var campo = document.getElementById("numtxt")
    var valor = Number(campo.value)
    var lista = document.getElementById("flista")
    var guardar = document.createElement("option")

    if (campo.value == ""){
        alert("Digite um valor")
    } else if (valor < 1 || valor > 100){
        alert("O números devem estar entre 1 e 100")
    } else if (vet.indexOf(valor) == -1) {
        guardar.innerHTML += `Valor ${valor} adicionado.`
        lista.appendChild(guardar)
        vet.push(valor)
        campo.value = ""
    } else {
        alert("Valor existente")
    }
}

function finalizar(){

    if (vet.length == 0){
        alert("Dados invalidos")
        return
    } 
    res.innerHTML = ""
    
    res.innerHTML += `Total de números adicionados: ${vet.length}<br>`
    var maior = vet[0]
    var menor = vet[0]
    var acumuladora = 0;
    for (var pos = 0; pos < vet.length; pos++){
        acumuladora += vet[pos]
        if (vet[pos] > maior){
            maior = vet[pos]
        }
        if (vet[pos] < menor){
            menor = vet[pos]
        }
    }
    var media = acumuladora / vet.length
    res.innerHTML += `Valor da soma dos valores: ${acumuladora}<br>`
    res.innerHTML += `Maior número encontrado: ${maior}<br>`
    res.innerHTML += `Menor número encontrado: ${menor}<br>`
    res.innerHTML += `Média dos valores: ${media}`
}

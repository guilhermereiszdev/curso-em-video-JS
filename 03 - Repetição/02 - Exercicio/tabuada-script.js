/*var valor = 5
var mult = 1
var passo = 1
var res = ''

while (mult <= 10){
    res = valor * mult
    mult += 1
    console.log(res)
}*/

/*var valor = 3
var res = ''

for (mult = 1; mult <= 10; mult += 1){
    res = valor * mult
    console.log(res)
}*/

function calcular(){
    var valor =  Number(document.getElementById('valor').value)
    var res = document.getElementById('res')
    res.innerHTML = ''

    for(mult = 1; mult <= 10; mult += 1){
        var calc = valor * mult
        res.innerHTML += `<p>${valor} x ${mult} = ${calc}</p>`
    }
}
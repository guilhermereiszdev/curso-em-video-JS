let valores = [5,4,6,8,3,2]
valores.sort()

/*for(pas = 0; pas < valores.length; pas += 1){
    console.log(valores[pas])
}*/

for (let pos in valores) {
    console.log(valores[pos])
}
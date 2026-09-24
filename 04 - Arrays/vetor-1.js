let num = [5,4,9,8,4,2,1]

/* Versão mais antiga

    for (pos=0;pos < num.length; pos++){
    console.log(`A posição ${pos} possui valor ${num[pos]}`)
}*/

// Versão mais recente

for (let pos in num){
    console.log(`A posição ${pos} possui valor ${num[pos]}`)
}

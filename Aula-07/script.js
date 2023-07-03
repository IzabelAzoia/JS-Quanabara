let valores = [8, 1, 7, 4, 2, 9]

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor  ${valores[pos]}`)
}


let num = [4, 5,6,7,8]

for (let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(31)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor ${num[pos]} está na posicao ${pos}`)
}

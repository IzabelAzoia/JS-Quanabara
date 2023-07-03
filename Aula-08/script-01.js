function parimpar(n) {
    if(n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar'
    }
}
console.log(parimpar(11))

function posneg(n) {
    if(n == 1) {
        return 'Possitivo!'
    } else {
        if(n == -1)
        return 'Negativo!'
    }
}
console.log(posneg(1))
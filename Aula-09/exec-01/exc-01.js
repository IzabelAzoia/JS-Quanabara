let amigo = {
nome: 'Eduardo',
sexo: 'M',
peso: 85.4,
musculo: 90,
aumentarMusculatura (m=0) {
   console.log('cresceu os musculos')
   this.musculo += m
}}

let aumentoMuscularCm = 5
amigo.aumentarMusculatura(aumentoMuscularCm)
console.log(`${amigo.nome} cresceu os musculos ${amigo.musculo} cm`)
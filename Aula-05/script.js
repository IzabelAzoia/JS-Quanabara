function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) { 
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebehomem.png')
                genero = 'criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-adolecentehomem.png')
                genero = 'adolecente'
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adultohomem.png')
                genero = 'adulto'
            } else {
                img.setAttribute('src', 'foto-idosohomem.png')
                genero = 'idoso'
            }

         } else if (fsex[1].checked) { 
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebemulher.png')
                genero = 'criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-adolecentemulher.png')
                genero = 'adolecente'
            } else if (idade < 50) {
                img.setAttribute('src', ' foto-adultomulher.png')
                genero = 'adulto'
            } else {
                img.setAttribute('src', 'foto-idosomulher.png')
                genero = 'idosa'                
            }
         }
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img)
    }  
}
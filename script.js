function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 1 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique o ano e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute
                ('src', 'imagens/criancamenino.jpg')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', 'imagens/homemmaduro.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criancamenina.jpg')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', 'imagens/mulhermadura.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
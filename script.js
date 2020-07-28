function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'madulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'mvelho.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
   
}
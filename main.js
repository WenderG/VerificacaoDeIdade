function verificar() {
     var niver = window.document.getElementById('nascimento')
     var text =  window.document.getElementById('texto')
     var img =  window.document.getElementById('imagem')
     var sexo = window.document.getElementsByName('radsex')
     var data =  new Date()

     var nascimento = Number(niver.value)
     var anoAtual = data.getFullYear()

     if(niver.value.length == 0 || niver.value > anoAtual) {
          alert("Data inválida!")

     }else {
          var genero = ''
          var idade = anoAtual - nascimento

          if(sexo[0].checked)
               genero = 'feminino'
          else if(sexo[1].checked)
               genero = 'masculino'

          switch(genero) {
               case 'masculino':
                    document.body.style.background = '#0400ff'
                    if(idade < 13) {
                         //criança
                         text.innerHTML = `Criança de ${idade} anos!`
                         img.src = './img/menino.jpg'
               
                    }else if(idade < 18) {
                         //adolescente
                         text.innerHTML = `Adolescente de ${idade} anos!`
                         img.src = './img/garoto_adolescente.jpg'
               
                    }else if(idade < 65) {
                         //adulto
                         text.innerHTML = `Adulto de ${idade} anos!`
                         img.src = './img/homem.jpg'
                    }else {
                         //idoso
                         text.innerHTML = `Idoso de ${idade} anos!`
                         img.src = './img/idoso.jpg'
                    }
                    break
               
               case 'feminino':
                    document.body.style.background = '#ff00bf'
                    if(idade < 13) {
                         //criança
                         text.innerHTML = `Criança de ${idade} anos!`
                         img.src = './img/menina.jpg'
               
                    }else if(idade < 18) {
                         //adolescente
                         text.innerHTML = `Adolescente de ${idade} anos!`
                         img.src = './img/garota_adolescente.jpg'
               
                    }else if(idade < 65) {
                         //adulto
                         text.innerHTML = `Adulta de ${idade} anos!`
                         img.src = './img/mulher.jpg'
                    }else {
                         //idoso
                         text.innerHTML = `Idoso de ${idade} anos!`
                         img.src = './img/idosa.jpg'
                    }
                    break
                    
               }

          }

          

     }

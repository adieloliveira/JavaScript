  var res = document.querySelector("#resultado");
  var operacao = null;
  var x1;
  var x2;

  function Validar(botao) {
      switch(botao){
          case 'bt7':
              res.value +=7;
              break;

        case 'bt8':
            res.value +=8;
            break;

        case 'bt9':
            res.value +=9;
            break;

        case 'bt4':
            res.value +=4;
            break;

        case 'bt5':
            res.value +=5;
            break;

        case 'bt6':
            res.value +=6;
            break;

        case 'bt1':
            res.value +=1;
            break;

        case 'bt2':
            res.value +=2;
            break;

        case 'bt3':
            res.value +=3;
            break;
    }
  }
  function Limpar(limp) {
      document.getElementById('resultado').value='';
  }
  function Operacao(op) {
      x1 = Number(res.value);
      res.value=null;
      operacao=op;
      }
    function Calcular() {
        x2= Number(res.value);
        var resCalculo;
        switch (operacao) {
            case 'som':
                resCalculo = x1+x2;
            break;
            case 'sub':
                resCalculo = x1-x2;
            break;
            case 'mut':
                resCalculo = x1*x2;
            break;
            case 'div':
                resCalculo = x1/x2;
            break;
        }

        res.value=resCalculo;
    }

  

    

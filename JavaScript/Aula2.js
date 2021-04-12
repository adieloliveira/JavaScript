var nome='Wes';
var idade=21;
var peso=70;
var casado=false;

console.log(nome, typeof(nome))
console.log(idade, typeof(idade))
console.log(peso, typeof(peso))
console.log(casado, typeof(casado))

var valor=1;

console.log(valor);
valor+=2///3
console.log(valor);
valor-=1///2

var nota=5;

if(nota>=6){
    console.log('Aluno Aprovado')
}
else if (nota>=4){
    console.log('Aluno de Exame')
}
else{
    console.log('Aluno Reprovado')
}


var tab=2;

for(var i=1;i<=10;i++){

    console.log(tab+'x'+i+"="+(tab*i));
}

function quadrado(a) {
	return a*a
}

var resultado = quadrado(2)
console.log(resultado)

function concatena(a,b,c) {
	return a + "---" + b + "---" + c 
}

var minhaString = concatena("adiel", "silva", "oliveira")
console.log(minhaString)

var conta = {
	saldo: 0,
	depositar: function (valor) {
				this.saldo += valor ;
	}
}

conta.depositar(100);
conta.depositar(100);
console.log(conta.saldo);

var deposita = function (valor) {
	this.saldo += valor;
}

var conta = {
	saldo: 0,
	nome: "Maria"
}

deposita.apply(conta,[200]);
console.log(conta.saldo);

var soma = function() {
	var soma =0;
	
	for(var i=0; i<  arguments.length;i++) {
		soma +=arguments [i];
	}
	
	return soma;
}

var resultado = soma(2,4,5,6,1);
console.log(resultado);

function ordena(array) {
	
	var menor=0
	var aux=0
	for(var i=0; i<array.length;i++) {
		menor=array[i]
		for( var x=0;array.length;x++) {
			if(menor<array[x]) {
				aux=menor
				menor=array[x]
				array[i]=menor
				array[x]=aux
			}
		}
	}
	
	return array
	
}

var ordem1=[9,7,3,5,1,4,2,6,8]
var ordem2=[10,5,15]
var ordem3=[1,-1,0,2,4,5,3]

var ordenado= ordena(ordem1)
var ordenado2= ordena(ordem2)
var ordenado3= ordena(ordem3)
console.log(ordenado);
	
	

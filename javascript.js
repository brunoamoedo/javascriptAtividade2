

function adicionarNumero(){
    var listaNumeros = []
for(let i=0;i<=10;i++){
    var addNumero = document.getElementById('numeroAdicionado').value
    listaNumeros.push(addNumero)
    }
for(i of listaNumeros){
    return document.getElementById('numeroEscolhido').innerHTML+=i + " - " 
}
}

function sorteadorNumero(){
    
    var quantidadeNumero = document.getElementById('sortearNumero').value
    const listaNumeroSorteados = []
    console.log("valor quantidade numero: ",quantidadeNumero)
    const text = []
    for(let i =0;i<quantidadeNumero;i++)
    {
        let aleatorio = Math.floor(Math.random() * 100);
        listaNumeroSorteados.push(aleatorio)
    }

    // for(i of listaNumeroSorteados){
    //     let text2 = ''
    //     text2+='['+i+']'
    //     text.push(text2)
    //     console.log(text)
    //     return document.getElementById('numeroSorteado').innerHTML+=text2
    // }
    for(let j = 0;j<parseInt(quantidadeNumero);j++){
        document.getElementById("numeroSorteado").innerText+='['+listaNumeroSorteados[j]+']'
    }
}

function mudarCor(e){
    var depois = document.getElementById("retangulo").style.backgroundColor=e
    
    // let borda = document.getElementById("retangulo").style.borderColor=e    
}
function over(){
    document.getElementById("retangulo").style.backgroundColor="white"   
}

var corAtual = document.getElementById("retangulo").backgroundColor;
console.log(corAtual)
function mouseOut(){
    let cor = corAtual
    document.getElementById("retangulo").style.backgroundColor=cor
}

function dados(){
var total = 0
var gorjeta = 0
 let entrada = document.getElementById('entrada').value
 console.log("entrada",entrada)
 let refeicao = document.getElementById('refeicao').value
 console.log("refeicao",refeicao)
 let bebida = document.getElementById('bebida').value
 console.log("bebida",bebida)
 let sobremesa = document.getElementById('sobremesa').value
 console.log("sobremsa",sobremesa)
 valores = []
 
 valores.push(parseFloat(entrada),parseFloat(refeicao),parseFloat(bebida),parseFloat(sobremesa))
 console.log(valores)
 var aux=0
 for (i of valores){
     aux+=i
     console.log('valor total: ',aux)
 }
 document.getElementById("totalConsumo").innerText=aux
 gorjeta = aux*0.1
 total = aux + gorjeta
 document.getElementById('valorAPagar').innerText=parseFloat(total)
}
 

function teste(){
    var form = document.forms['form1']
    var nome = form.elements.nome.value
    var salario = form.elements.salario.value
    var porcentagem = salario*0.1
    var salario_total = parseFloat(salario) + parseFloat(porcentagem)
    if (salario_total != null || salario_total != NaN){
        document.getElementById('novoNome').innerText=nome
        document.getElementById('novoSalario').innerText=parseFloat(salario_total)
        document.getElementById('invisivel').removeAttribute("hidden")
        document.getElementById('invisivel2').removeAttribute("hidden")
    }
    
}

function mudaParagrafo(){
    var p = document.getElementById('p1').style.color='red'

}
function branco(){
    document.getElementById('p1').style.color="black"
}


var nome = "rodrigo silva"
var idade = 26
//alert(nome +" tem " +idade + " anos!");
// array 
var fruts = [ "maçã", "banana", "laranja", "manga" ]

console.log(fruts);
fruts.forEach(element => {
    if (element == "manga") {
    console.log(element);
    }
    
});

//dicionario

var frutas = [{ cor: "amarela", fruta: "manga", tipo: "fruta" }, { cor: "verde", fruta: "laranja", tipo: "fruta" }, { cor: "vermelha", fruta: "banana", tipo: "fruta" }, { cor: "azul", fruta: "maçã", tipo: "fruta" }]
/*console.log(frutas[0].cor);
frutas.forEach(element =>{
    if (element.cor == "verde" || element.cor == "amarela") {
        console.log(element);
        console.log(`as frutas selecionadas são ${element.fruta}?`)
    }
    
})*/

//while

var count =0;

while (count <= frutas.length ){
  
    
    console.log(count);

    
    count++;
}
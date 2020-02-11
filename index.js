var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;
var peso = prompt("Digite o peso do objeto na terra");
var planeta = prompt("Escolha um planeta. Marte ou Jupter? ");
var pesofinal;
if(planeta == "Marte"){
    pesofinal = (peso / gTerra) * gMarte;
    document.write("O peso do objeto em Marte é: " + pesofinal);
}else if (planeta == "Jupter") {
    pesofinal = (peso / gTerra) * gJupter;
    document.write("O peso do objeto em Jupter é: " + pesofinal); 
}else{
    document.write("Não posso calcular o peso neste planeta")
}

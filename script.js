const name = prompt("Qual o seu nome?");
let opcao1 = false;
let opcao2 = false;
let opcao3 = false;
let camisa = 0;
let gola = 0;
let tecido = 0;

function selection1 (element, num){
    const choice = document.querySelector(".selecionado1");
    if (choice == null){
        element.classList.add("selecionado1");
        opcao1 = true;
        camisa = num;
    }
    if (choice === element){
        element.classList.remove("selecionado1");
        opcao1 = false;
        camisa = 0;
    }
    activatebutton();
}
function selection2 (element, num){
    const choice = document.querySelector(".selecionado2");
    if (choice == null){
        element.classList.add("selecionado2");
        opcao2 = true;
        gola = num;
    }
    if (choice === element){
        element.classList.remove("selecionado2");
        opcao2 = false;
        gola = 0;
    }
    activatebutton();
}
function selection3 (element, num){
    const choice = document.querySelector(".selecionado3");
    if (choice == null){
        element.classList.add("selecionado3");
        opcao3 = true;
        tecido = num;
    }
    if (choice === element){
        element.classList.remove("selecionado3");
        opcao3 = false;
        tecido = 0;
    }
    activatebutton();
}

function activatebutton (){
    const button = document.querySelector(".botaopedido");
    if (opcao1 == true && opcao2 ==true && opcao3 == true){
        button.classList.add("buttonready");
    } else {
        button.classList.remove("buttonready");
    }
}
function makedeal (){

}
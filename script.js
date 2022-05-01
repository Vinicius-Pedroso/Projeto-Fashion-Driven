const name = prompt("Qual o seu nome?");
let opcao1 = false;
let opcao2 = false;
let opcao3 = false;
let camisa = "";
let gola = "";
let tecido = "";
receivedata();

function receivedata (){
    const clothes = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    clothes.then(imprimirbottom);
    clothes.catch(function(){alert("entrou no catch")});
}
function imprimirbottom (clothes){
    alert("entrou no then");
    console.log(clothes)
    imprimirbottom1(clothes);
    imprimirbottom2(clothes);
}
function imprimirbottom1(clothes){
    const linha1 = document.querySelector(".bottom1");
    linha1.innerHTML = `
        <h1>Ultimos pedidos</h1>
        <div class="pedidos">
            <div>
                <img src="${clothes.data[0].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[1].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[2].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[3].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[4].image}">
                <p>Bom dia</p>
            </div>
        </div>
    `
}
function imprimirbottom2 (clothes){
    const linha2 = document.querySelector(".bottom2");
    linha2.innerHTML += `
        <div class="pedidos">
            <div>
                <img src="${clothes.data[5].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[6].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[7].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[8].image}">
                <p>Bom dia</p>
            </div>
            <div>
                <img src="${clothes.data[9].image}">
                <p>Bom dia</p>
            </div>
        </div>
    `
}
function selection1 (element, type){
    const choice = document.querySelector(".selecionado1");
    if (choice == null){
        element.classList.add("selecionado1");
        opcao1 = true;
        camisa = type;
    }
    if (choice === element){
        element.classList.remove("selecionado1");
        opcao1 = false;
        camisa = "";
    }
    activatebutton();
}
function selection2 (element, type){
    const choice = document.querySelector(".selecionado2");
    if (choice == null){
        element.classList.add("selecionado2");
        opcao2 = true;
        gola = type;
    }
    if (choice === element){
        element.classList.remove("selecionado2");
        opcao2 = false;
        gola = "";
    }
    activatebutton();
}
function selection3 (element, type){
    const choice = document.querySelector(".selecionado3");
    if (choice == null){
        element.classList.add("selecionado3");
        opcao3 = true;
        tecido = type;
    }
    if (choice === element){
        element.classList.remove("selecionado3");
        opcao3 = false;
        tecido = "";
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
    let image = document.querySelector('input[name="image"]').value
    if (checkURL(image) == false){
        alert("Imagem de reverência inválida");
    }else {
        if(opcao1 == true && opcao2 ==true && opcao3 == true){
            alert("Sua encomenda foi enviada");
            informserver();
        }
    }
}
function informserver(){






}
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

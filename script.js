const name = prompt("Qual o seu nome?");
let opcao1 = false;
let opcao2 = false;
let opcao3 = false;
let camisa = "";
let gola = "";
let tecido = "";
let actualoffer = [];
receivedata();

function receivedata (){
    const clothes = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    clothes.then(imprimirbottom);
    clothes.catch(function(){});
}
function imprimirbottom (clothes){
    actualoffer = clothes;
    imprimirbottom1(clothes);
    imprimirbottom2(clothes);
}
function imprimirbottom1(clothes){
    const linha1 = document.querySelector(".bottom1");
    linha1.innerHTML = ""
    linha1.innerHTML = `
        <h1>Ultimos pedidos</h1>
        <div class="pedidos">
            <div onclick='buyrecent(0);'>
                <img src="${clothes.data[0].image}">
                <p>Criador: ${clothes.data[0].owner}</p>
            </div>
            <div onclick='buyrecent(1);'>
                <img src="${clothes.data[1].image}">
                <p>Criador: ${clothes.data[1].owner}</p>
            </div>
            <div onclick='buyrecent(2);'>
                <img src="${clothes.data[2].image}">
                <p>Criador: ${clothes.data[2].owner}</p>
            </div>
            <div onclick='buyrecent(3);'>
                <img src="${clothes.data[3].image}">
                <p>Criador: ${clothes.data[3].owner}</p>
            </div>
            <div onclick='buyrecent(4);'>
                <img src="${clothes.data[4].image}">
                <p>Criador: ${clothes.data[4].owner}</p>
            </div>
        </div>
    `
}
function imprimirbottom2 (clothes){
    const linha2 = document.querySelector(".bottom2");
    linha2.innerHTML = ""
    linha2.innerHTML += `
        <div class="pedidos">
            <div onclick='buyrecent(5);'>
                <img src="${clothes.data[5].image}">
                <p>Criador: ${clothes.data[5].owner}</p>
            </div>
            <div onclick='buyrecent(6);'>
                <img src="${clothes.data[6].image}">
                <p>Criador: ${clothes.data[6].owner}</p>
            </div>
            <div onclick='buyrecent(7);'>
                <img src="${clothes.data[7].image}">
                <p>Criador: ${clothes.data[7].owner}</p>
            </div>
            <div onclick='buyrecent(8);'>
                <img src="${clothes.data[8].image}">
                <p>Criador: ${clothes.data[8].owner}</p>
            </div>
            <div onclick='buyrecent(9);'>
                <img src="${clothes.data[9].image}">
                <p>Criador: ${clothes.data[9].owner}</p>
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
    let http = document.querySelector('input[name="image"]').value
    if (checkURL(http) == false){
        alert("Imagem de reverência inválida");
    }else {
        if(opcao1 == true && opcao2 ==true && opcao3 == true){
            alert("Sua encomenda foi enviada");
            informserver(http);
        }
    }
}
function informserver(http){
    let modelready = {
        "model": camisa,
        "neck": gola,
        "material": tecido,
        "image": http,
        "owner": name,
        "author": name
    }
    enviar = axios.post(
        "https://mock-api.driven.com.br/api/v4/shirts-api/shirts", modelready
    )
    enviar.then(alert("Sua encomenda foi confirmada com sucesso"))
    enviar.catch(function (){alert("Ops, não conseguimos processar sua encomenda")});
    receivedata();
}
function buyrecent (num){
    let yes = confirm(offerdata(num));
    if (yes == true){
        modelready = {
            "model": actualoffer.data[num].model,
            "neck": actualoffer.data[num].neck,
            "material": actualoffer.data[num].material,
            "image": actualoffer.data[num].image,
            "owner": actualoffer.data[num].owner,
            "author": actualoffer.data[num].owner
        }
        enviar = axios.post(
            "https://mock-api.driven.com.br/api/v4/shirts-api/shirts", modelready
        )
        enviar.then(alert("Sua encomenda foi confirmada com sucesso"))
        enviar.catch(function (){alert("Ops, não conseguimos processar sua encomenda")});
        receivedata();
    }
}
function offerdata (num){
    let string = "Você deseja comprar uma peça de roupa com modelo "+actualoffer.data[num].model +", gola "+actualoffer.data[num].neck +", feito de: "+actualoffer.data[num].material +". Deseja confirmar o pedido?";
    return string;
}
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
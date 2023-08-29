console.log("O JS está linkado!");

function verificar() {
    let tutor = document.getElementById("input-tutor").value;
    let name = document.getElementById("input-name").value;
    let especie = document.getElementById("input-especie").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let nascimento = document.getElementById("input-nascimento").value;

    console.log({ tutor });
    console.log({ name });
    console.log({ especie });
    console.log({ imgLink });
    console.log({ nascimento });


    if (tutor == '' || name == '' || especie == '' || imgLink == '' || nascimento == '') {
        console.log("Os dados estão vazios!");

        return true;
    } else {
        console.log("Os dados estão preenchidos!");
        return false;
    }
}

function envieMsg(msg, tipo) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
    <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);
}

class Pets {
    constructor(tutor, name, especie, imgLink, nascimento) {
        this.tutor = tutor;
        this.name = name;
        this.especie = especie;
        this.imgLink = imgLink;
        this.nascimento = nascimento;
        this.age = this.calculateAge(nascimento);
    }

    calculateAge(nascimento) {
        const newDateJS = new Date(nascimento);
        const yearDate = newDateJS.getFullYear();
    
        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();
    
        const age = nowDate - yearDate;
        return age
      }
}

const cadastroPet = new Pets("Teste", "Teste", "Teste", "Teste", "Teste");
console.log(cadastroPet);

function cadastrar() {
    let tutor = document.getElementById("input-tutor").value;
    let name = document.getElementById("input-name").value;
    let especie = document.getElementById("input-especie").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let nascimento = document.getElementById("input-nascimento").value;
    let datacorreta = nascimento.split('-');
    let datainvert = datacorreta.reverse().join('/');
   

    const pet = new Pets(tutor, name, especie, imgLink, nascimento);
    console.log(pet);
    bibliotecaPets.add(pet);

}
class ListaPets {
    constructor() {
        this.listPets = [];
    }
    add(parametro) {
        if (verificar()) {
            envieMsg("Preencha todos os campos!", "erro")
        } else {
            this.listPets.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso!", "sucesso");
            console.log(this.listPets);
        }
    }
}

const bibliotecaPets = new ListaPets();
console.log(bibliotecaPets);

function limparInputs() {
    console.log("Passou pela função limparInputs!");

     document.getElementById("input-tutor").value = '';
    document.getElementById("input-name").value = '';
   document.getElementById("input-especie").value = '';
    document.getElementById("input-imgLink").value = '';
    document.getElementById("input-nascimento").value = '';
}

function renderizarConteudo() {
    

    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    let petDiv = '';
    let array = bibliotecaPets.listPets;

    console.log(array);
    array.forEach(pet => {

        petDiv = `
            <div class='petDetalhe'>
            <img src="${pet.imgLink}" alt="${pet.tutor}">
                <h2>Tutor: ${pet.tutor}</h2>
                <p>Nome do pet:${pet.name}</p>
                <p>Espécie: ${pet.especie}</p>
                <p>Data de nascimento: ${pet.nascimento}</p>
                <p>Idade: ${pet.age} anos</p>
            </div>
       `;

        listaHTML.innerHTML += petDiv;
    });
}
function voltinha2(){
    document.getElementById("container").classList.add("hidden");
    document.getElementById("containerLista").classList.remove("hidden");
    renderizarConteudo();
}
function voltinha() {
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("containerLista").classList.add("hidden");
    renderizarConteudo();
}

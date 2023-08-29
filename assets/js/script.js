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
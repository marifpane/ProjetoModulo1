function voltar(){
    location.replace("../index.html")
}

function responder1(){    
    var resposta = prompt("Digite sua resposta: ");
    while(resposta != 1 && resposta != 2){
        var resposta = prompt("Opções inválida. Digite 1 ou 2:");
        if(resposta === null)
        {
            return;
        }
    }
    if (resposta == 1){
        alert("Logo de cara o publico pega ranço de você, e no primeiro paredão você foi eliminado com alto índice de rejeição!");
        location.replace("../GameOver/GameOverChaves.html");
   
    } else{
        alert("O resto da casa fica agradecida por você ter alertado do plano. Como gratidão, você passa a ser o protegido da maioria dos participantes!");
        location.replace("../Chaves/ChavesFase2.html");
    }
}

function responder2(){    
    var resposta = prompt("Digite sua resposta: ");
    while(resposta != 1 && resposta != 2){
        var resposta = prompt("Opções inválida. Digite 1 ou 2:");
        if(resposta === null)
        {
            return;
        }
    }
    if (resposta == 1){
        alert("Chaves acaba cada vez mais caindo tanto nas graças da casa quanto da população que assiste! Com isso acaba sendo o participante mais querido de todas as edições.");
        location.replace("../Chaves/ChavesFase3.html");
   
    } else{
        alert("Chaves é acusado de gordofobia pelo seu grupo, e passa a ser o próximo indicado ao paredão! Após a indicação ele sai da casa, perde o premio e ainda recebe diversos processos por gordofobia!");
        location.replace("../GameOver/GameOverChaves.html");
    }
}

function responder3(){    
    var resposta = prompt("Digite sua resposta: ");
    while(resposta != 1 && resposta != 2){
        var resposta = prompt("Opções inválida. Digite 1 ou 2:");
        if(resposta === null)
        {
            return;
        }
    }
    if (resposta == 1){
        alert("Após a repercurssão na internet, o Big Boss faz uma revisão da prova e verifica que realmente Chaves infringiu as regras e com isso ele é desclassificado.");
        location.replace("../GameOver/GameOverChaves.html");
   
    } else{
        alert("Chaves acaba perdendo sua vaga imediata na final, mas também ganha de vez o coração do público. Com isso, em seu último paredão, todo o público se junta em mutirões para salvá-lo. Depois de ser salvo do paredão, se inicia a votação do grande campeão e com uma vantagem de 90% dos votos, Chaves é  o novo campeão. Ganhando sua tão sonhada viagem a Acapulco!");
        location.replace("../VoceVenceu.html");
    }
}

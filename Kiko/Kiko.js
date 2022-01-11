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
        alert("Quando as garotas descobrem da estratégia, é tiro porrada e bomba para todos os lados. Por não ter participado da estratégia, Kiko fica de fora da briga e não se queima com o público.");
        location.replace("../Kiko/KikoFase2.html");
   
    } else{
        alert("As garotas descobrem a estratégia, se revoltam e resolvem tirar satisfação. Por ser o líder do grupo, Kiko é o primeiro a ser indicado ao paredão e se torna o eliminado da semana!");
        location.replace("../GameOver/GameOverKiko.html");
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
        alert("Todos na casa percebem como o Kiko está se esforçando para mudar e por isso não colocam ele no paredão da semana.");
        location.replace("../Kiko/KikoFase3.html");
   
    } else{
        alert("Cansados de serem prejudicados pelas atitudes egoistas de Kiko, a casa se une para eliminá-lo na semana.");
        location.replace("../GameOver/GameOverKiko.html");
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
        alert("Kiko se mostra uma pessoa muito maquiavélica, e por isso o resto da casa decide colocá-lo no paredão. E com alto índice de rejeição Kiko é o mais novo eliminado.");
        location.replace("../GameOver/GameOverKiko.html");
   
    } else{
        alert("Toda a vila fica impressionada com a trajetória de Kiko dentro da casa, de todos foi o que mais mudou, se tornando uma pessoa melhor. Dessa forma, ele não só volta do paredão do quarto branco, como também é quem acaba ganhando a grande final e a tão disutada viagem.");
        location.replace("../VoceVenceu.html");
    }
}

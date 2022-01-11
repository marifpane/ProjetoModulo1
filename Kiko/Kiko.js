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
        alert("Ninguém gosta de dono da razão. Chiquinha deixou sua fama subir a cabeça e por isso acabou sendo rejeitada pela população.");
        location.replace("../GameOver/GameOverKiko.html");
   
    } else{
        alert("Chiquinha faz jus ao seu apelido e se mostra uma pessoa sensata, não se envolvendo em brigas e nem se estressando a toa.");
        location.replace("../Kiko/KikoFase3.html");
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
        alert("Dois pesos e duas medidas. O apelido de fada sensata é substituído pelo de Dona Florinda. Por isso o público decide que a próxima pessoa a ser eliminada é Chiquinha.");
        location.replace("../GameOver/GameOverKiko.html");
   
    } else{
        alert("Chiquinha se mostra uma participante sensata e justa, com uma trajetória impecável durante o programa. Por isso quando é a grande final, o público decide por consagrá-la a grande vencedora.");
        location.replace("../VoceVenceu.html");
    }
}

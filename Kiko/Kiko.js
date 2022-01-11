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
        alert("As garotas da casa agradecem Chiquinha por te-las defendido. Chiquinha passa a ser chamada de Fada Sensata e se torna a protegida da casa.");
        location.replace("../Kiko/KikoFase2.html");
   
    } else{
        alert("As meninas descobrem que não só a história era verdade, como também que Chiquinha caçoou delas. Por isso, Chiquinha passa a ser excluida dentro da casa, sendo indicada e eliminada no paredão.");
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

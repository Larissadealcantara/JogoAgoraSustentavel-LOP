
// BOTÕES
  // BOTÕES MODELO

function botaoMenu( texto, xMin, xMax, yMin, yMax, largura, altura, opcao, xtexto, tamtexto ){
  
  stroke(255,255,250);
  strokeWeight(2);

  if( mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax ){
    //escolhaFase = opcao;
    fill(73, 4, 66);
    if (mouseIsPressed) {
      tela = opcao;
    }
  }
  else{
    escolhaFase;
    fill(162, 2, 51);
  }
  rect( xMin, yMin, largura, altura, 10 );  
  noStroke()
  textAlign(LEFT);
  fill( 255,255,250 );
  textSize( tamtexto );
  text( texto, xMin + xtexto, yMin + 20 );
}

function botaoJogar( xMin, xMax, yMin, yMax, largura, altura, opcao ){
  
  if( mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax ){
    
    if( tela == 3){ 
      fill(162, 2, 51);
    }
    else{
      fill(141, 141, 141);
    } 

  escolhaFase = opcao;

  }
  
  else{
    if( tela == 3){
      fill(73, 4, 66);
    }
    else{
      fill(255, 255, 255);
    }
  }
    rect( xMin, yMin, largura, altura, 0,0,10,10);  
}

function botaoRespostas( texto, xMin, xMax, yMin, yMax, largura, altura, opcao, xtexto, tamtexto ){
  
  stroke(255,255,250);
  strokeWeight(2);

  if( mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax ){
    escolhaFase = opcao;
    x = tela;
    fill(141, 141, 141);
   }
  else{
    fill(255, 255, 255);
  }
  rect( xMin, yMin, largura, altura, 10 );  
  noStroke()
  if( mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax ){
    fill(255, 255, 255);
   }
  else{
    fill(141, 141, 141);
  }
  textAlign(LEFT);
  textSize( tamtexto );
  text( texto, xMin + xtexto, yMin + 7, 292, 100);

}

function BotaoescolhaODS( xMin, yMin, opcao ){

  var d = dist(mouseX, mouseY, xMin, yMin);

  if (d < 12) {
    escolhaFase = opcao;
    fill(236, 201, 201); 
  }
  else{
    fill(244, 243, 243);
  }
  ellipse(xMin, yMin, 24, 24 );

}

  // BOTÕES FIXOS

function botaoVoltar(){

  if( mouseX > 23 && mouseX < 23 + 27 && mouseY > 7 && mouseY < 7 + 16 ){
    fill(225,225,225);
    escolhaFase = 0; 
   }

  else{
    noFill();
  } 
  rect( 23, 7, 27, 16, 3 );
  image( imagemsetinha, 26, 11, 20, 0); 
  image( imagemcasa, 50, 9, 12, 12);
}
function botaoTenteNovamente(){
  
  if( mouseX > 172 && mouseX < 172 + 157 && mouseY > 286 && mouseY < 286 + 28 ){
    escolhaFase = x;
  fill(162, 2, 51);
  }
  else{
    fill(73, 4, 66);
  }
  rect( 172, 286, 157, 29, 5 );  
  noStroke()
  textAlign(CENTER);
  fill( 255,255,250 );
  textSize( 12 );
  text( "Tente Novamente", 173, 286 + 10, 157 );
}

// TELAS PRINCIPAIS
  // TELAS MODELO

function telaPerguntas( back,q ,a, b, c, d, texto_A, texto_B, texto_C, texto_D, pergunta){
  
  background(back);

  textSize(15);
  textStyle(BOLD);
  fill(30, 0, 27 );
  text(q + "/3", 54, 60);
  textSize(10);
  text(pergunta, 100, 82, 275, 100);
  
  botaoRespostas( "a) "+ texto_A, xMinResp, xMaxResp, yMinResp1, yMaxResp1, larguraResp, alturaResp, a, 10, 9 );
  botaoRespostas( "b) " +texto_B, xMinResp, xMaxResp, yMinResp2, yMaxResp2, larguraResp, alturaResp, b, 10, 9 );
  botaoRespostas( "c) " + texto_C, xMinResp, xMaxResp, yMinResp3, yMaxResp3, larguraResp, alturaResp, c, 10, 9 );
  botaoRespostas( "d) " + texto_D, xMinResp, xMaxResp, yMinResp4, yMaxResp4, larguraResp, alturaResp, d, 10, 9);

}
function telaODS(opcaoR, tema, resumo ){

  // Botão voltar
    botaoVoltar() 

  botaoJogar( xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, larguraBotao4, alturaBotao4, opcaoR);

  textSize(15);
  textStyle(BOLD)
  fill(44, 49, 59);
  text("Responder o Quiz",185,350);

  fill(255,255,255)
  textSize(15);
  text(tema, 90,117);

  textStyle(NORMAL);
  textSize(10);
  text(resumo, 92,130,315);
  
  BotaoescolhaODS( 40, 400.5, 4 ); //ODS 2
  BotaoescolhaODS( 66, 400.5, 4.2 ); //ODS 2
  
  image(imagemv2, 89, 158, 325, 165);

  image(imagemb1, 27, 391, 26, 26);
  image(imagemb2, 53, 391, 26, 26);
  image(imagembotoes, 80, 391, 397, 26);
}

  // TELAS FIXAS
function telaMenu(){
  
  background(imagemBackMenu);
  
  //Texto do jogo
  textSize( 25 );
  textStyle( BOLD );
  textAlign(CENTER)
  fill( 255,255,255 ); 
  text( "Agora Sustentável", 139, 200, 233, 100 );

  /// Animação 
  tempo ++

   image(circ[contador % 17],180,60); 

   if( tempo > 10 ){

    contador ++
    tempo = 0

   }

  fill(255,255,255);
  textSize(10);
  textStyle( NORMAL );
  text("Um jogo inspirado nos 17 Objetivos de Desenvolvimento\nSustentáveis da Agenda 2030 da ONU.",
   120, 233, 270, 30);
  
  //Botão 1 - Play
  botaoMenu("Play", xMinBotao,xMaxBotao,yMinBotao,yMaxBotao,larguraBotao,alturaBotao,3,103,15 );
  image(imagemplay, xMinBotao + 82.96, yMinBotao + 8.38, 11.08, 14.25 );

  //Botão 2 - Instrução 
  botaoMenu("Instruções", xMinBotao2,xMaxBotao2,yMinBotao2,yMaxBotao2,larguraBotao2,alturaBotao2,1,19,12 );

  //Botão 3 - Créditos
  botaoMenu("Créditos", xMinBotao2,xMaxBotao2,yMinBotao3,yMaxBotao3,larguraBotao2,alturaBotao2,2,25,12 );
 
}

function telaInstrucoes(){
  background( imagemBackground);

  //Imagem de trás
  image(imagemBackJogar, 0,264,500,186)
  
  // Botão voltar
  botaoVoltar()

  // Blocos 
  fill(255,201,107);
  rect( 0, 88, 500, 300 );

  fill(255,255,255);
  textSize(20);
  textStyle( NORMAL );
  text("Instruções", 28, 111, 150, 28); 

  fill(24,25,31);
  textSize(12);
  textStyle( NORMAL );
  text("Passo 1: Click com o mouse sobre o Objetivo de Desenvolvimento Sustentável\n(ODS) que você quer aprender! ",
   28, 144, 440, 50);

  fill(24,25,31);
  textSize(12);
  textStyle( NORMAL );
  text("Passo 2: Quando o jogo começar, leia com atenção o problema que aparecerá na parte de cima da sua tela e pense em como solucioná-lo!",
  28, 190, 440, 50);

  fill(24,25,31);
  textSize(12);
  textStyle( NORMAL );
  text("Passo 3: Na parte de baixo da tela aparecerá quatro botões com algumas solu-\nções para aquele problema. Escolha a que você achar a melhor!",
  28, 236, 440, 50);
  
  fill(24,25,31);
  textSize(12);
  textStyle( NORMAL );
  text("Passo 4: Depois de escolher, você irá saber como aquela solução pode ajudar o mundo e como VOCÊ também pode ajudar o planeta a ser um lugar mais susten-\ntável e melhor para todos!",
  28, 282, 440, 50);
  
  fill(24,25,31);
  textSize(12);
  textStyle( BOLD );
  text("Depois disso, se aventure nessa jornada de conhecimento e faça todas as missões das ODS!",
  28, 340, 440, 50);
}

function telaCredito(){
  background(imagemBackground);

  // Botão voltar
  botaoVoltar()
  
  // Blocos 
  fill(244, 243, 243);
  rect( 0, 205, 500, 164 );

  // Informações dos blocos

   //Fotos das particiantes  
  // Imagem Isabelle
  if( mouseX > 28 && mouseX < 28 + 120 && mouseY > 145 && mouseY < 145 + 120 ){  
    fill(30, 0, 27);
  }
  else{
    noFill()
  }
  rect( 23 , 145, 130, 130, 5)
  image(imagemIsabelle, 28 , 150, 120, 120);

  // Imagem Ana Augusta
  if( mouseX > 185 && mouseX < 185 + 120 && mouseY > 145 && mouseY < 145 + 120 ){  
    fill(30, 0, 27);
  }
  else{
    noFill()
  }
  rect( 180 , 145, 130, 130, 5);
  image(imagemAna, 185, 150, 120, 120);
  
  // Imagem Larissa
  if( mouseX > 343 && mouseX < 343 + 120 && mouseY > 145 && mouseY < 145 + 120 ){  
    fill(30, 0, 27);
  }
  else{
    noFill()
  }
  rect( 338 , 145, 130, 130, 5)
  image(imagemLarissa, 343 , 150, 120, 120);

  fill(141, 141, 141);
  textStyle( BOLD );
  textSize(12);
  text("Isabelle dos Santos", 28, 280, 120, 32); 
  text("Ana Augusta Rangel", 185, 280, 120, 32); 
  text("Larissa de Alcântara", 343, 280, 120, 32); 

  textStyle( NORMAL );
  textSize(8);
  text("° Pedagoga - UFPB \n° Pesquisadora sobre Literatura\nInfanto-Juvenil na perspectiva antirracista", 28, 300, 135); 
  text("° Graduanda em Ciências e Tecnologia pela UFRN;\n° Programadora e UX/UI; ", 185, 300, 122, 32); 
  text("° Graduanda em Ciências e Tecnologia pela UFRN;\n° Programadora;", 343, 300, 122, 32);

  fill(30, 0, 27);
  rect( 0 , 396, 500, 33);
  
  textSize(9);
  fill(244, 243, 243);
  text("Unidas com o objetivo de contribuir para a formação de humanos mais conscientes sobre si e o mundo que vivem.",16,407,475,15);
}

function telaJogar(){
  background(imagemBackground);

  // Botão voltar
    botaoVoltar()  
  
  fill(30, 0, 27);
  rect(78,84,345,282,10);

  fill(73, 4, 66);
  rect(78,326,345,40,0,0,10,10);
  
  botaoJogar( xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, larguraBotao4, alturaBotao4, 4);

  textSize(15);
  textStyle(BOLD)
  fill(225,225,225);
  text("Próximo",225,350);

  textSize(15);
  text("Geração do amanhã", 90,117);

  textStyle(NORMAL);
  textSize(10);
  text("Nosso lema é não deixar ninguém para trás, pensando globalmente e agindo localmente. Assista ao vídeo abaixo!", 92,130,302);

  image(imagemv2, 89, 158, 325, 165);

}

function telaTentenovamente(){
  background(imagemBackTN);
  
  botaoVoltar()
  //Texto do jogo
  textSize( 12 );
  textStyle( BOLD );
  textAlign(CENTER)
  fill(199, 33, 47);
  text( "Essa não é a resposta correta", 152, 265, 200, 25 );

  botaoTenteNovamente();
}

function telaODS1(){
  background(imagemBackground);

  fill(244, 243, 243);
  rect(0,205,500,245);  
  
  fill(233, 34, 63);
  rect(78,84,345,282,10);

  fill(255,255,255);
  rect(78,326,345,40,0,0,10,10);
  
  telaODS(5,"ODS #01 - Erradicação da Pobreza ", "Acabar com a pobreza em todas as suas formas, em todos os lugares.");
  

}// tela = 4

function telaODS2(){
 
  background(imagemBackground);

   fill(244, 243, 243);
   rect(0,205,500,245);  
  
  fill(222, 169, 75);
  rect(78,84,345,282,10);

 telaODS(8 ,"ODS #02 - Fome zero e Agricultura sustentável","Acabar com todas as formas de fome e a má-nutrição até 2030" );


}// tela = 4.2

//FUNÇÕES BASE
  //FUNÇÕES FIXAS

function mousePressed(){

  if(escolhaFase == 0){
       tela = 0;
  }
  clicar(4,3); // Tela jogar para Tela ODS1 
  clicar(5,4);// Tela ODS1 para Tela de Quiz - ODS 1
  clicar(8,4.2) // Tela ODS1 para Tela de Quiz - ODS 2

  // botões para escolha da ODS
  clicar(4.2,4); // Tela ODS 1 para Tela ODS2
  clicar(4,4.2); // Tela ODS 2 para Tela ODS1
  // ODS1
  passarFase(5); // fase 1 para 2
  passarFase(6); // fase 2 para 3
  passarFase(7); // fase 3 para fim de jogo
  clicarfimdejogo(7); // fim de jogo para Tela de ODS
  
  //ODS2
  passarFase(8); // fase 1 para 2
  passarFase(9); // fase 2 para 3
  clicarfimdejogo(10); // fase 3 para fim de jogo 
  //

  //botão tente novamente 
  if(tela == v){
    if( escolhaFase == x ){
      tela = x;
    }
  }

  // Recomeçar
  if(tela == 999){
    if( escolhaFase == 4){
      tela = 4;
    }
  }
}

function preload() {
  imagemBackground = loadImage('./imagens/background.png');
  imagemBackJogar = loadImage('./imagens/imagemBackJogar.png');
  imagemBackMenu = loadImage('./imagens/imagemBackMenu.png');
  imagemBackTN = loadImage('./imagens/imagemBackTN.png')
  imagemIsabelle = loadImage('./imagens/imagemIsabelle.jpeg');
  imagemLarissa = loadImage('./imagens/imagemLarissa.jpeg');
  imagemAna = loadImage('./imagens/imagemAnaaugusta.jpeg');
  imagemsetinha = loadImage('./imagens/imagemSeta.png');
  imagemplay = loadImage('./imagens/imagemPlay.png');
  imagemcasa = loadImage('./imagens/imagemCasa.png');
  imagemb1 = loadImage('./imagens/imagemB1.png');
  imagemb2 = loadImage('./imagens/imagemB2.png');
  imagemb1a = loadImage('./imagens/imagemB1a.png');
  imagemb2a = loadImage('./imagens/imagemB2a.png');
  imagembotoes = loadImage('./imagens/imagemBotoes.png');
  imagemv2 = loadImage('./imagens/imagemV2.png');
  imagemfim = loadImage('./imagens/imagemFimdejogo.png');
  imagemParabens = loadImage('./imagens/imagemBackFim.png');
  imagemRespODS1 = loadImage('./imagens/imagemBotoes1.png');
  imagemRespODS2 = loadImage('./imagens/imagemBotoes2.png');
  circ[0] = loadImage('./imagens/im1.png');
  circ[1] = loadImage('./imagens/im2.png');
  circ[2] = loadImage('./imagens/im3.png');
  circ[3] = loadImage('./imagens/im4.png');
  circ[4] = loadImage('./imagens/im5.png');
  circ[5] = loadImage('./imagens/im6.png');
  circ[6] = loadImage('./imagens/im7.png');
  circ[7] = loadImage('./imagens/im8.png');
  circ[8] = loadImage('./imagens/im9.png');
  circ[9] = loadImage('./imagens/im10.png');
  circ[10] = loadImage('./imagens/im11.png');
  circ[11] = loadImage('./imagens/im12.png');
  circ[12] = loadImage('./imagens/im13.png');
  circ[13] = loadImage('./imagens/im14.png');
  circ[14] = loadImage('./imagens/im15.png');
  circ[15] = loadImage('./imagens/im16.png');
  circ[16] = loadImage('./imagens/im17.png');

}

function setup() {
  createCanvas(500, 450);

  // video1 = createDiv('<iframe width="325" height="165" src="https://www.youtube.com/embed/IvS2cQYzSto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  // video1.style('font-size', '16px');
  // video1.position(89, 158);

}

function draw() {
  
  if( tela == 0 ) {
    telaMenu()
  }
  if( tela == 1 ){
    telaInstrucoes()
  }
  if( tela == 2 ){
    telaCredito()
  }
  if( tela == 3 ){
    telaJogar()
  }
  if( tela == 4 ){
    telaODS1()
  }
  if( tela == 4.2){
    telaODS2()
  }
  if( tela == 5 ){  
    perg1_1()
  }
  if( tela == 6 ){
    perg1_2()
  }
  if( tela == 7 ){
    perg1_3()
  }
  if( tela == 8 ){  
    perg2_1()
  }
  if( tela == 9 ){
    perg2_2()
  }
  if( tela == 10 ){
    perg2_3()
  }
  if( tela == 999 ){
    fimdejogo()
  }

  if( tela == v ){
    telaTentenovamente();
  }
}

  //FUNÇÕES MODELO

function passarFase(x){
  if(tela == x){
    if( escolhaFase == v){
      tela = v;
    }
    if( escolhaFase == x + 1){
      tela = x + 1;
    }
  }

  // if(tela == 7){
  //   if( escolhaFase == 6){
  //     tela = 6;
  //   }
  //   if( escolhaFase == 0){
  //     tela = 0;
  //   }
  // }
}
function clicar(x,y){
  if(escolhaFase == x){
    if( tela == y){
       tela = x;
     }
  }
  
  // if(escolhaFase == 4){
  //   if( tela == 3){
  //      tela = 4;
  //    }
  // }
}
function clicarfimdejogo(x){
  if(tela == x){
    if( escolhaFase == v){
      tela = v;
    }
    if( escolhaFase == 999){
      tela = 999;
    }
  }
}
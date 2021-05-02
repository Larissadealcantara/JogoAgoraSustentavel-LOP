// Perguntas ODS 1
//tela = 5
function perg1_1(){

  pergunta = " Qual o primeiro objetivo de desenvolvimento sustentável e o qual é uma das metas para alcançá-lo? "
  resposta1 = "Erradicação da Pobreza. 'Erradicar a pobreza extrema para todas as pessoas em todos os lugares e reduzir pelo menos à metade a   proporção de pessoas de todas as idades, que vivem na pobreza";
  resposta2 = "Fome zero e Agricultura sustentável. 'Acabar com a fome e garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e   suficientes durante todo o ano.'";
  resposta3 = "Redução das desigualdades. 'Promover a inclusão social, econômica e política de todos, independentemente da idade, gênero, deficiência, raça, etnia, origem, religião, condição econômica ou outra' ";
  resposta4 = "Paz, justiça e instituições fortes.'Reduzir significativamente toda forma de violência e as taxas de mortalidade relacionada, em todos os lugares'";

  telaPerguntas(imagemRespODS1,1,6,v,v,v,resposta1,resposta2,resposta3, resposta4, pergunta);
}
//tela = 6
function perg1_2(){
  pergunta = "Qual é uma das principais causas de pobreza no mundo?"
  resposta1 = "A falta de dinheiro no mundo. Há menos dinheiro no mundo do   que a quantidade de pessoas, por isso não é possível que todos\ntenham acesso a uma boa qualidade de vida.";
  resposta2 = "As grandes desigualdades sociais. Por causa das diferenças\nsociais, alguns países e pessoas têm mais facilidade de acessar\n seus direitos que outras";
  resposta3 = "A falta de comida no mundo. Por não existir alimento suficiente   para todas as pessoas do mundo, algumas pessoas acabam viven- do em situação de pobreza";
  resposta4 = "Não existe motivo para a pobreza no mundo.";
  telaPerguntas(imagemRespODS1,2,v,7,v,v,resposta1,resposta2,resposta3, resposta4, pergunta);
}
//tela = 7
function perg1_3(){
  pergunta = "Quais são algumas atitudes que podem ser tomadas para alcançar a ODS1 - Erradicação da Pobreza e quem são os reponsáveis?"
  resposta1 = "As empresas, governos e sociedade devem buscar dar auxilio a quem necessita com ações como trabalho voluntário em causas\nsociais e tornar as tecnologias mais acessíveis às populações mais pobres."
  resposta2 = "As pessoas em situação de pobreza devem buscar sair dessa\nsituação procurando um trabalho para se sustentar.";
  resposta3 = "As empresas devem vender para as pessoas pobres os alimen-\ntos de forma mais barata para que eles possam comprar e sair des- sa situação";
  resposta4 ="Não há nada a ser feito para acabar com a pobreza do mundo";
  telaPerguntas(imagemRespODS1,3, 999 ,v,v,v,resposta1,resposta2,resposta3, resposta4, pergunta);
}

// Perguntas ODS 2
//tela = 8
function perg2_1(){
  pergunta = "Qual o Objetivo de Desenvolvimento Sustentável #2? "
  resposta1 = "Erradicação da Pobreza";
  resposta2 = "Redução das desigualdades";
  resposta3 = "Paz, justiça e instituições fortes";
  resposta4 = "Fome zero e agricultura sustentável";
  telaPerguntas(imagemRespODS2,1,v,v,v,9,resposta1,resposta2,resposta3, resposta4, pergunta);

}
//tela = 9
function perg2_2(){
  pergunta = "Qual é uma das metas para alcançá-lo?"
  resposta1 = "Promover a inclusão social, econômica e política de todos";
  resposta2 = "Acabar com a fome e garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e   suficientes durante todo o ano.";
  resposta3 = "Reduzir significativamente toda forma de violência e as taxas de mortalidade";
  resposta4 = "Nenhum das alterantivas";
  telaPerguntas(imagemRespODS2,2,v,10,v,v,resposta1,resposta2,resposta3, resposta4, pergunta);

}
//tela = 10
function perg2_3(){
  pergunta = "Qual a faixa etária que a ODS da prioridade?"
  resposta1 = "Idosos";
  resposta2 = "Adultos";
  resposta3 = "Jovens";
  resposta4 = "Crianças";
  telaPerguntas(imagemRespODS2,3,v,v,v,999,resposta1,resposta2,resposta3, resposta4, pergunta);

}

//tela = 999
function fimdejogo(){
  background(imagemParabens);

  fill(250, 92, 11);
  textStyle(NORMAL);
  textSize(12);
  text("Agora você conhece ainda mais sobre um dos\n17 Objetivos de Desenvolvimento Sustentável!", 120, 119, 285, 35);
  textStyle(BOLD);
  textSize(20);
  text("PARABÉNS!", 120, 85, 285, 35);

  if( mouseX > 183.9 && mouseX < 183.9 + 148.11 && mouseY > 363 && mouseY < 363 + 28){
    escolhaFase = 4;
    fill(254, 254, 254);
  }
  else{
    fill(14, 119, 184);
  }
  rect( 183.9, 363, 148.11, 28, 5 );  
  noStroke()
  textAlign(LEFT);

  if( mouseX > 183.9 && mouseX < 183.9 + 148.11 && mouseY > 363 && mouseY < 363 + 28){
    fill(14, 119, 184);
  }
  else{
    fill(254, 254, 254);
  }
  textSize( 10 );
  text( "Continuar Jornada", 212, 380);
}

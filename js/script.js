// Acesso a DIV usuario
var divUsuario = document.querySelector(".usuario");
var corpo = document.querySelector("header");

//Objeto user-------------------------------------------------------------

var user = {
  name: "Fred Castro",
  email: "frederico@qulture.rocks",
  picture_url: "perfil.png",
  tags: [
    {
      name: "Engenharia"
    },
    {
      name: "Marketing"
    },
    {
      name: "São Paulo"
    }
  ],
  teams: [
    {
      name: "Squad Mobile"
    }
  ]
};

// Váriaveis globais-----------------------------------------------------
var nome = user.name;
var email = user.email;
var picture = './img/' + user.picture_url; //endereço da imagem
var tagUm = user.tags[0];
var tagDois = user.tags[1];
var teamUm = user.teams[0];
var teamDois = user.teams[1];

//console.log(picture);

//CRIAR FUNÇÃO PARA CRIAR DOCUMENTO HTML ----------
var criarUser = function () {

  //Criar elementos-----------------------------------------------------
  var criarDiv = document.createElement("div");
  var tagImg = document.createElement("img");
  var tagH2 = document.createElement("h2");
  var paragrafo = document.createElement("p");
  var tagInput = document.createElement("input");

  // Aplicar estilo ------------------------------------------------------
  criarDiv.className = "usuarios";

  // Aplicar src da picture na img----------------------------------------
  tagImg.src = picture;

  //console.log(tagImg);

  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture);
  var titulo = document.createTextNode(nome);
  var tag1 = document.createTextNode(tagUm);
  var tag2 = document.createTextNode(tagDois);
  var team1 = document.createTextNode(teamUm);
  var team2 = document.createTextNode(teamDois);

  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem);
  tagH2.appendChild(titulo);
  paragrafo.appendChild(tag1);
  paragrafo.appendChild(tag2);
  paragrafo.appendChild(team1);
  paragrafo.appendChild(team2);

  //Vincular elementos ao documento e a div mae---------------------------------------
  corpo.appendChild(divUsuario);
  divUsuario.appendChild(criarDiv);
  criarDiv.appendChild(tagImg)
  criarDiv.appendChild(tagH2);
  criarDiv.appendChild(paragrafo);
  criarDiv.appendChild(paragrafo);
  criarDiv.appendChild(paragrafo);
  criarDiv.appendChild(tagInput);

  

};





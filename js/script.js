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
      name:"Engenharia"
    },
    {
      name:"Marketing"
    },
    {
      name:"São Paulo"
    }
  ],
  teams: [
    {
      name:"Squad Mobile"
    },
    {
      
    }
  ]
};

// Váriaveis globais-----------------------------------------------------
var nome = user.name;
var email = user.email;
var picture = './img/' + user.picture_url; //endereço da imagem
var tagUm = (user.tags[0].name);
var tagDois = (user.tags[1].name);
var tagtres = (user.tags[2].name);
var teamUm =(user.teams[0].name);
var teamDois =(user.teams[1].name);

  //Criar elementos-----------------------------------------------------
  var criarDiv = document.createElement("div");
  var tagImg = document.createElement("img");
  var tagH2 = document.createElement("h2");
  var tagEmail = document.createElement("p");
  var paragrafoTag1 = document.createElement("p");
  var paragrafoTag2 = document.createElement("p");
  var paragrafoTeam1 = document.createElement("p");
  var paragrafoTeam2 = document.createElement("p");
  var tagInput = document.createElement("input");
  var link = document.createElement("button");
  var paragrafoVazio = document.createElement("p");

  // Aplicar estilo ------------------------------------------------------
  criarDiv.className = "usuarios";
  link.className = "btn-input";

  // Aplicar src da picture na img----------------------------------------
  tagImg.src = picture;

  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture);
  var titulo = document.createTextNode(nome);
  var textoEmail = document.createTextNode(email);
  var tag1 = document.createTextNode(tagUm);
  var tag2 = document.createTextNode(tagDois);
  var team1 = document.createTextNode(teamUm);
  var team2 = document.createTextNode(teamDois);
  var botao = document.createTextNode("Enviar");

  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem);
  tagH2.appendChild(titulo);
  tagEmail.appendChild(textoEmail);
  paragrafoTag1.appendChild(tag1);
  paragrafoTag2.appendChild(tag2);
  paragrafoTeam1.appendChild(team1);
  paragrafoTeam2.appendChild(team2);
  link.appendChild(botao);

//Vincular elementos ao documento e a div mae---------------------------------------

//   var criarUser = function () {
//   corpo.appendChild(divUsuario);
//   divUsuario.appendChild(criarDiv);
//   criarDiv.appendChild(tagImg)
//   criarDiv.appendChild(tagH2);
//   criarDiv.appendChild(tagEmail);
//   criarDiv.appendChild(paragrafoTag1);
//   criarDiv.appendChild(paragrafoTag2);
//   criarDiv.appendChild(paragrafoTeam1);
//   criarDiv.appendChild(paragrafoTeam2);
//   criarDiv.appendChild(tagInput);
//   criarDiv.appendChild(link);
//   criarDiv.appendChild(paragrafoVazio);
// };

//Formato Default-----------------------------------------------------------
var defaultTeam = function () {
  if (teamUm !== undefined & teamDois !== undefined) {
    corpo.appendChild(divUsuario);
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTeam1); //team1
    criarDiv.appendChild(paragrafoTeam2);//team2
    criarDiv.appendChild(tagInput);//campo texto
    criarDiv.appendChild(link); //botao
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
  } else if (teamUm !== undefined & teamDois === undefined) {
    corpo.appendChild(divUsuario);
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTeam1); //team1
    criarDiv.appendChild(tagInput);//campo texto
    criarDiv.appendChild(link); //botao
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
  }
};


var defaultTag = function () {
  if (tagUm !== undefined & tagDois !== undefined & teamUm === undefined & teamDois === undefined ) {
    corpo.appendChild(divUsuario);
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTag1); //tag1
    criarDiv.appendChild(paragrafoTag2); //tag2
    criarDiv.appendChild(tagInput);//campo texto
    criarDiv.appendChild(link); //botao
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
  } else if (tagUm !== undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined){
    corpo.appendChild(divUsuario);
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTag1); //tag1
    criarDiv.appendChild(tagInput);//campo texto
    criarDiv.appendChild(link); //botao
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
  }
};

var defaultEmail = function () {
  if(email !== undefined & tagUm === undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined) {
    corpo.appendChild(divUsuario);
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(tagEmail);
    criarDiv.appendChild(tagInput);//campo texto
    criarDiv.appendChild(link); //botao
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
  }
};

var acessoOptionTeam = document.querySelector("#option-team").value;
var acessoOptionTag = document.querySelector("#option-tag").value;
var acessoOptionEmail = document.querySelector("#option-email").value;

console.log(acessoOptionTeam);
console.log(acessoOptionTag);
console.log(acessoOptionEmail);




//Formato Small-----------------------------------------------------------
var small = function(){
  corpo.appendChild(divUsuario);
  divUsuario.appendChild(criarDiv);
  criarDiv.appendChild(tagH2);
};

//Formato Only-Picture-----------------------------------------------------------
var onlyPicture = function(){
  corpo.appendChild(divUsuario);
  divUsuario.appendChild(criarDiv);
  criarDiv.appendChild(tagImg);//foto
};


var radio = document.getElementsByName("options");

console.log(radio);




  // fazer ONCLICK pelo JAVASCRIPT
  //document.querySelector(".btn-input").onclick = function() {criarFrase()};
  // var acesso = document.querySelector(".pic");
  // //console.log(acesso);

  // var criarFrase = function (){
  //   acesso.classList.toggle("show");
  // };





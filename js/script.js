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
      name:"Squad Back-end"
    }
  ]
};

// Acesso a DIV usuario
var AcessDiv = document.querySelector(".usuario");

// Váriaveis dados--------------------------------------------------
var nome = user.name;
var email = user.email;
var picture = './img/' + user.picture_url; //endereço da imagem
var tagUm = (user.tags[0].name);
var tagDois = (user.tags[1].name);
var tagtres = (user.tags[2].name);
var teamUm =(user.teams[0].name);
var teamDois =(user.teams[1].name);
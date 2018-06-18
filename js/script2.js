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
var divUsuario = document.querySelector(".usuario");

// Váriaveis dados--------------------------------------------------
var nome = user.name;
var email = user.email;
var picture = './img/' + user.picture_url; //endereço da imagem
var tagUm = (user.tags[0].name);
var tagDois = (user.tags[1].name);
var tagtres = (user.tags[2].name);
var teamUm =(user.teams[0].name);
var teamDois =(user.teams[1].name);

//Formato Default-------------------------------------------------------------------------------------------------------------------------
var defaultTeam = function () {
  //Criar elementos-----------------------------------------------------
  var criarDiv = document.createElement("div");
  criarDiv.className = "user";
  var tagImg = document.createElement("img");
  tagImg.src = picture;
  var tagH2 = document.createElement("h2");
  var tagEmail = document.createElement("p");
  var paragrafoTag1 = document.createElement("p");
  var paragrafoTag2 = document.createElement("p");
  var paragrafoTeam1 = document.createElement("p");
  var paragrafoTeam2 = document.createElement("p");
  var paragrafoVazio = document.createElement("p");
  var form = document.createElement("form");
  var tagInput = document.createElement("input");
  tagInput.maxLength = 30;
  tagInput.size = 30;
  tagInput.value = "Digite seu status";
  var divOptions = document.createElement("div");

  var tag = document.createElement("small");
  var inputRadioTag = document.createElement("input");
  inputRadioTag.type="radio";
  inputRadioTag.id="tag";
  var smallTeam = document.createElement("small");
  var inputRadioTeam = document.createElement("input");
  inputRadioTeam.type="radio";
  inputRadioTeam.id="team";
  inputRadioTeam.name="options";

  var smallTag = document.createElement("small");
  var inputRadioTag = document.createElement("input");
  inputRadioTag.type="radio";
  inputRadioTag.id="tag";
  inputRadioTag.name="options";

  var smallEmail = document.createElement("small");
  var inputRadioEmail = document.createElement("input");
  inputRadioEmail.type="radio";
  inputRadioEmail.id="email";
  inputRadioEmail.name="options";
  
  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture);
  var titulo = document.createTextNode(nome);
  var textoEmail = document.createTextNode(email);
  var tag1 = document.createTextNode(tagUm);
  var tag2 = document.createTextNode(tagDois);
  var team1 = document.createTextNode(teamUm);
  var team2 = document.createTextNode(teamDois);
  var textoTeam = document.createTextNode("Team");
  var textoTag = document.createTextNode("Tag");
  var textoEmail = document.createTextNode("E-mail");


  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem);
  tagH2.appendChild(titulo);
  tagEmail.appendChild(textoEmail);
  paragrafoTag1.appendChild(tag1);
  paragrafoTag2.appendChild(tag2);
  paragrafoTeam1.appendChild(team1);
  paragrafoTeam2.appendChild(team2);
  smallTeam.appendChild(textoTeam);
  smallTag.appendChild(textoTag);
  smallEmail.appendChild(textoEmail);


  //Vincular elementos ao documento e a div pai---------------------------------------
  //------------------------- Padrão TAG -------------------------------------
  if (teamUm !== undefined & teamDois !== undefined) {
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTeam1); //team1
    criarDiv.appendChild(paragrafoTeam2);//team2
    criarDiv.appendChild(form);
    form.appendChild(tagInput);//campo texto
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
   // document.getElementById("escolha").classList.remove("apagar");
    criarDiv.appendChild(divOptions);
    divOptions.appendChild(inputRadioTeam);
    divOptions.appendChild(smallTeam);
    divOptions.appendChild(inputRadioTag);
    divOptions.appendChild(smallTag);
    divOptions.appendChild(inputRadioEmail);
    divOptions.appendChild(smallEmail);

    console.log("esta funcionando");
  } 
  else if (teamUm !== undefined & teamDois === undefined) {
    divUsuario.appendChild(criarDiv);
    criarDiv.appendChild(tagImg);//foto
    criarDiv.appendChild(tagH2);//nome
    criarDiv.appendChild(paragrafoTeam1); //team1
    criarDiv.appendChild(form);
    form.appendChild(tagInput);//campo texto
    criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
    //document.getElementById("escolha").classList.remove("apagar");
    criarDiv.appendChild(divOptions);
    divOptions.appendChild(inputRadioTeam);

  }

  //------------------------- Padrão TAG -------------------------------------

  if (tagUm !== undefined & tagDois !== undefined & teamUm === undefined & teamDois === undefined ) {
      //Vincular elementos ao documento e a div mae---------------------------------------
      divUsuario.appendChild(criarDiv);
      criarDiv.appendChild(tagImg);//foto
      criarDiv.appendChild(tagH2);//nome
      criarDiv.appendChild(paragrafoTag1); //tag1
      criarDiv.appendChild(paragrafoTag2); //tag2
      criarDiv.appendChild(form);
      form.appendChild(tagInput);//campo texto
      criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
      //document.getElementById("escolha").classList.remove("apagar");

    } 
    else if (tagUm !== undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined){
      divUsuario.appendChild(criarDiv);
      criarDiv.appendChild(tagImg);//foto
      criarDiv.appendChild(tagH2);//nome
      criarDiv.appendChild(paragrafoTag1); //tag1
      criarDiv.appendChild(form);
      form.appendChild(tagInput);//campo texto
      criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
      //document.getElementById("escolha").classList.remove("apagar");

    }

      //------------------------- Padrão Email -------------------------------------

    if(email !== undefined & tagUm === undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined) {
      divUsuario.appendChild(criarDiv);
      criarDiv.appendChild(tagImg);//foto
      criarDiv.appendChild(tagH2);//nome
      criarDiv.appendChild(tagEmail);
      criarDiv.appendChild(form);
      form.appendChild(tagInput);//campo texto
      criarDiv.appendChild(paragrafoVazio); //paragrafo para receber texto
    }

    // 3) Override---------------------------------------------------------------------------
    ///////função para apagar ou evento itens 

        // 4)Texto customizável-----------------------------------------------------------------
        inputRadioTag.addEventListener("checked", function (event) {
          event.preventDefault();
          //Remove os elementos selecionados ***********
          document.querySelector('.user p').remove()
          //////Cria um novo Elementooooo

          console.log("funcionouuuuuuuu")



        });








    // 4)Texto customizável-----------------------------------------------------------------
    form.addEventListener("submit", function (event) {
      // Nao permitir comportamento padrao do navegador
      event.preventDefault()
      // Capturar o elemento de input
      var todoInput = document.querySelector("form input")
      // Capturar text do input
      var todoText = todoInput.value
      // Checar se tem texto no input
      if (todoText !== "") {
        // Criar novo li 
        var newTodoItem = document.createElement("li")
        // Criar text que vai dentro de novo li
        var newTodoItemText = document.createTextNode(todoText)
        // Colocar texto dentro do li
        newTodoItem.appendChild(newTodoItemText)
        // Capturar elemento da lista
        var todoList = document.getElementById("list")
        // Colocar novo li dentro da lista
        todoList.appendChild(newTodoItem)
        todoInput.classList="apagar";
      }
    });
    //FIM Texto customizável-----------------------------------------------------------------
}

//Formato Small-----------------------------------------------------------
var small = function(){
  //Criar elementos-----------------------------------------------------
  var criarDiv = document.createElement("div");
  var tagH2 = document.createElement("h2");
  // Aplicar estilo ------------------------------------------------------
  criarDiv.className = "usuarios";
  //Criar nós-----  Valores do objeto   -------------------------------
  var titulo = document.createTextNode(nome);
  //Vincular nós ao elementos--------------------------------------------
  tagH2.appendChild(titulo);
//Vincular elementos ao documento e a div mae---------------------------------------
  divUsuario.appendChild(criarDiv);
  criarDiv.appendChild(tagH2);
};

//Formato Only-Picture-----------------------------------------------------------
var onlyPicture = function(){
  //Criar elementos-----------------------------------------------------
  var criarDiv = document.createElement("div");
  var tagImg = document.createElement("img");
  // Aplicar estilo ------------------------------------------------------
  criarDiv.className = "usuarios";
  // Aplicar src da picture na img----------------------------------------
  tagImg.src = picture;
  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture);
  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem);
//Vincular elementos ao documento e a div mae---------------------------------------
  divUsuario.appendChild(criarDiv);
  criarDiv.appendChild(tagImg);//foto
};





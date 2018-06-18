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
}

// Acesso a DIV usuario
var AcessDiv = document.querySelector(".usuario")

// Váriaveis dados--------------------------------------------------
var nome = user.name
var email = user.email
var picture = './img/' + user.picture_url //endereço da imagem
var tagUm = (user.tags[0].name)
var tagDois = (user.tags[1].name)
var tagtres = (user.tags[2].name)
var teamUm =(user.teams[0].name)
var teamDois =(user.teams[1].name)

//Formato Default-------------------------------------------------------------------------------------------------------------------------
var defaultT = function () {
  //Criar elementos-----------------------------------------------------
  var userDiv = document.createElement("div")
  userDiv.classList.add("user")
  var tagImg = document.createElement("img")
  tagImg.src = picture

  var titleDiv = document.createElement("div")
  var tagH2 = document.createElement("h2")

  var infoDiv = document.createElement("div")
  infoDiv.classList.add("info")

  var tagEmail = document.createElement("p")
  var pTag1 = document.createElement("p")
  var pTag2 = document.createElement("p")
  var pTeam1 = document.createElement("p")
  var pTeam2 = document.createElement("p")
  var pStatus = document.createElement("p")
  var form = document.createElement("form")
  var statusInput = document.createElement("input")
  statusInput.maxLength = 30
  statusInput.size = 30
  //statusInput.value = "Digite seu status"

  var optionsDiv = document.createElement("div")

  var optionsA = document.createElement("a")

  // var tag = document.createElement("small")
  // var inputRadioTag = document.createElement("input")
  // inputRadioTag.type="radio"
  // inputRadioTag.id="tag"
  // var smallTeam = document.createElement("small")
  // var inputRadioTeam = document.createElement("input")
  // inputRadioTeam.type="radio"
  // inputRadioTeam.id="team"
  // inputRadioTeam.name="options"

  // var smallTag = document.createElement("small")
  // var inputRadioTag = document.createElement("input")
  // inputRadioTag.type="radio"
  // inputRadioTag.id="tag"
  // inputRadioTag.name="options"

  // var smallEmail = document.createElement("small")
  // var inputRadioEmail = document.createElement("input")
  // inputRadioEmail.type="radio"
  // inputRadioEmail.id="email"
  // inputRadioEmail.name="options"
  
  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture)
  var titulo = document.createTextNode(nome)
  var textoEmail = document.createTextNode(email)
  var tag1 = document.createTextNode(tagUm)
  var tag2 = document.createTextNode(tagDois)
  var team1 = document.createTextNode(teamUm)
  var team2 = document.createTextNode(teamDois)
  
  // var textoTeam = document.createTextNode("Team")
  // var textoTag = document.createTextNode("Tag")
  // var textoEmail = document.createTextNode("E-mail")


  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem)
  tagH2.appendChild(titulo)
  tagEmail.appendChild(textoEmail)
  pTag1.appendChild(tag1)
  pTag2.appendChild(tag2)
  pTeam1.appendChild(team1)
  pTeam2.appendChild(team2)
  // smallTeam.appendChild(textoTeam)
  // smallTag.appendChild(textoTag)
  // smallEmail.appendChild(textoEmail)


  //Vincular elementos ao documento e a div pai---------------------------------------
  //------------------------- Padrão TAG -------------------------------------
  if (teamUm !== undefined & teamDois !== undefined) {
    AcessDiv.appendChild(userDiv)
    userDiv.appendChild(tagImg)//foto
    userDiv.appendChild(tagH2)//nome
    userDiv.appendChild(pTeam1) //team1
    userDiv.appendChild(pTeam2)//team2
    userDiv.appendChild(form)
    form.appendChild(statusInput)//campo texto
    userDiv.appendChild(pStatus) //paragrafo para receber texto
   // document.getElementById("escolha").classList.remove("apagar")
    userDiv.appendChild(optionsDiv)
    // optionsDiv.appendChild(inputRadioTeam)
    // optionsDiv.appendChild(smallTeam)
    // optionsDiv.appendChild(inputRadioTag)
    // optionsDiv.appendChild(smallTag)
    // optionsDiv.appendChild(inputRadioEmail)
    // optionsDiv.appendChild(smallEmail)

    console.log("esta funcionando")
  } 
  else if (teamUm !== undefined & teamDois === undefined) {
    AcessDiv.appendChild(userDiv)
    userDiv.appendChild(tagImg)//foto
    userDiv.appendChild(tagH2)//nome
    userDiv.appendChild(pTeam1) //team1
    userDiv.appendChild(form)
    form.appendChild(statusInput)//campo texto
    userDiv.appendChild(pStatus) //paragrafo para receber texto
    //document.getElementById("escolha").classList.remove("apagar")
    userDiv.appendChild(optionsDiv)
    optionsDiv.appendChild(inputRadioTeam)

  }

  //------------------------- Padrão TAG -------------------------------------

  if (tagUm !== undefined & tagDois !== undefined & teamUm === undefined & teamDois === undefined ) {
      //Vincular elementos ao documento e a div mae---------------------------------------
      AcessDiv.appendChild(userDiv)
      userDiv.appendChild(tagImg)//foto
      userDiv.appendChild(tagH2)//nome
      userDiv.appendChild(pTag1) //tag1
      userDiv.appendChild(pTag2) //tag2
      userDiv.appendChild(form)
      form.appendChild(statusInput)//campo texto
      userDiv.appendChild(pStatus) //paragrafo para receber texto
      //document.getElementById("escolha").classList.remove("apagar")

    } 
    else if (tagUm !== undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined){
      AcessDiv.appendChild(userDiv)
      userDiv.appendChild(tagImg)//foto
      userDiv.appendChild(tagH2)//nome
      userDiv.appendChild(pTag1) //tag1
      userDiv.appendChild(form)
      form.appendChild(statusInput)//campo texto
      userDiv.appendChild(pStatus) //paragrafo para receber texto
      //document.getElementById("escolha").classList.remove("apagar")

    }

      //------------------------- Padrão Email -------------------------------------

    if(email !== undefined & tagUm === undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined) {
      AcessDiv.appendChild(userDiv)
      userDiv.appendChild(tagImg)//foto
      userDiv.appendChild(tagH2)//nome
      userDiv.appendChild(tagEmail)
      userDiv.appendChild(form)
      form.appendChild(statusInput)//campo texto
      userDiv.appendChild(pStatus) //paragrafo para receber texto
    }

    // 3) Override---------------------------------------------------------------------------
    ///////função para apagar ou evento itens 

        // 4)Texto customizável-----------------------------------------------------------------
        // inputRadioTag.addEventListener("checked", function (event) {
        //   event.preventDefault()
        //   //Remove os elementos selecionados ***********
        //   document.querySelector('.user p').remove()
        //   //////Cria um novo Elementooooo

        //   console.log("funcionouuuuuuuu")



        // })








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
        todoInput.classList="apagar"
      }
    })
    //FIM Texto customizável-----------------------------------------------------------------
}

//Formato Small-----------------------------------------------------------
var small = function(){
  //Criar elementos-----------------------------------------------------
  var userDiv = document.createElement("div")
  var tagH2 = document.createElement("h2")
  // Aplicar estilo ------------------------------------------------------
  userDiv.className = "usuarios"
  //Criar nós-----  Valores do objeto   -------------------------------
  var titulo = document.createTextNode(nome)
  //Vincular nós ao elementos--------------------------------------------
  tagH2.appendChild(titulo)
//Vincular elementos ao documento e a div mae---------------------------------------
  AcessDiv.appendChild(userDiv)
  userDiv.appendChild(tagH2)
}

//Formato Only-Picture-----------------------------------------------------------
var onlyPicture = function(){
  //Criar elementos-----------------------------------------------------
  var userDiv = document.createElement("div")
  var tagImg = document.createElement("img")
  // Aplicar estilo ------------------------------------------------------
  userDiv.className = "usuarios"
  // Aplicar src da picture na img----------------------------------------
  tagImg.src = picture
  //Criar nós-----  Valores do objeto   -------------------------------
  var imagem = document.createTextNode(picture)
  //Vincular nós ao elementos--------------------------------------------
  tagImg.appendChild(imagem)
//Vincular elementos ao documento e a div mae---------------------------------------
  AcessDiv.appendChild(userDiv)
  userDiv.appendChild(tagImg)//foto
}





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
      name:"Squad Developer"
    }
  ]
}

// Váriaveis dados--------------------------------------------------
var nome = user.name
var email = user.email
var picture = './img/' + user.picture_url //endereço da imagem
var tagUm = (user.tags[0].name)
var tagDois = (user.tags[1].name)
var tagtres = (user.tags[2].name)
var teamUm =(user.teams[0].name)
var teamDois =(user.teams[1].name)

// 1) >>>>>>> Formato Default----------------------------------------------------------------------------------------
var defaultT = function () {
  //location.reload()


  var userDiv = document.createElement("div")
  userDiv.classList.add("user")
  //Criando elementos com innerHTML e if's para condicionar com os valores do obj user--------- 1ª Default-teams -------
  if (teamUm !== undefined & teamDois !== undefined) {
  userDiv.innerHTML = `<img src="${picture}">
                        <div class="title">
                          <h2>${nome}</h2>
                        </div>
                        <div class="info">
                          <p class="teams">${teamUm} -</p>
                          <p class="teams">${teamDois}</p>
                        </div>
                        <div class="status">
                        <form>
                          <input maxlength="30" size="30">
                        </form>
                        <p class="textoStatus"></p>
                        </div>
                        <hr>
                        <div class="options">
                          <a id="team">Team</a>
                          <a id ="tag">Tag</a>
                          <a id= "email">E-mail</a>
                        </div>`
    var AcessDiv = document.querySelector(".usuario")
    AcessDiv.appendChild(userDiv)
  }
  else if (teamUm !== undefined & teamDois === undefined) {
    userDiv.innerHTML = `<img src="${picture}">
                          <div class="title">
                            <h2>${nome}</h2>
                          </div>
                          <div class="info">
                            <p>${teamUm}</p>
                          </div>
                          <div class="status">
                          <form>
                            <input maxlength="30" size="30">
                          </form>
                          <p class="textoStatus"></p>
                          </div>
                          <hr>
                          <div class="options">
                            <a id="team">Team</a>
                            <a id ="tag">Tag</a>
                            <a id= "email">E-mail</a>
                          </div>`
      var AcessDiv = document.querySelector(".usuario")
      AcessDiv.appendChild(userDiv)
  }

  //Criando elementos com innerHTML e if's para condicionar com os valores do obj user--------- 1ª Default -tags -------
  if (tagUm !== undefined & tagDois !== undefined & teamUm === undefined & teamDois === undefined ) {
    userDiv.innerHTML = `<img src="${picture}">
                          <div class="title">
                            <h2>${nome}</h2>
                          </div>
                          <div class="info">
                            <p>${tagUm} -</p>
                            <p>${tagDois}</p>
                          </div>
                          <div class="status">
                          <form>
                            <input maxlength="30" size="30">
                          </form>
                          <p class="textoStatus"></p>
                          </div>
                          <hr>
                          <div class="options">
                            <a id="team">Team</a>
                            <a id ="tag">Tag</a>
                            <a id= "email">E-mail</a>
                          </div>`
    var AcessDiv = document.querySelector(".usuario")
    AcessDiv.appendChild(userDiv)
    document.querySelector("#team").classList.add("apagar")
  } 

  else if (tagUm !== undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined){
    userDiv.innerHTML = `<img src="${picture}">
                          <div class="title">
                            <h2>${nome}</h2>
                          </div>
                          <div class="info">
                            <p>${tagUm}</p>
                          </div>
                          <div class="status">
                          <form>
                            <input maxlength="30" size="30">
                          </form>
                          <p class="textoStatus"></p>
                          </div>
                          <hr>
                          <div class="options">
                            <a id="team">Team</a>
                            <a id ="tag">Tag</a>
                            <a id= "email">E-mail</a>
                          </div>`
  var AcessDiv = document.querySelector(".usuario")
  AcessDiv.appendChild(userDiv)
  document.querySelector("#team").classList.add("apagar")
  }

  //Criando elementos com innerHTML e if's para condicionar com os valores do obj user--------- 1ª Default-email -------
  if(tagUm === undefined & tagDois === undefined & teamUm === undefined & teamDois === undefined) {
    userDiv.innerHTML = `<img src="${picture}">
                          <div class="title">
                            <h2>${nome}</h2>
                          </div>
                          <div class="info">
                            <p>${email}</p>
                          </div>
                          <div class="status">
                          <form>
                            <input maxlength="30" size="30">
                          </form>
                          <p class="textoStatus"></p>
                          </div>`
    var AcessDiv = document.querySelector(".usuario")
    AcessDiv.appendChild(userDiv)

  }


    // 2) >>>>>>>>>>> OVERRIDE    --------------------------------------------------------------------------------------
    //TEAM>>>>>>>>>>>>>>>>>>>>
    var optionsTeam = document.querySelector("#team")
    optionsTeam.addEventListener("click", function (event) {
    event.preventDefault()
    if (teamUm !== undefined & teamDois !== undefined){
      document.querySelector('.info').innerHTML = `<div class="info">
                                                    <p>${teamUm}</p>
                                                    <p>${teamDois}</p>
                                                  </div>`
      console.log("funcionouuuuuuuu")
    } 
    else if (teamUm !== undefined & teamDois === undefined) {
      document.querySelector('.info').innerHTML = `<div class="info">
                                                    <p>${teamUm}</p>
                                                  </div>`

    }
  })

  //TAG   >>>>>>>>>>>>>>>>>>>>
    var optionsTag = document.querySelector("#tag")
    optionsTag.addEventListener("click", function (event) {
      event.preventDefault()
      if (tagUm !== undefined & tagDois !== undefined) {
        document.querySelector('.info').innerHTML = `<div class="info">
                                                      <p>${tagUm}</p>
                                                      <p>${tagDois}</p>
                                                    </div>`
        console.log("funcionouuuuuuuu")
      } 
      else {
        document.querySelector('.info').innerHTML = `<div class="info">
                                                      <p>${tagUm}</p>
                                                    </div>`
      }
    })

    //EMAIL      >>>>>>>>>>>>>>>>>>>>
    var optionsEmail = document.querySelector("#email")
    optionsEmail.addEventListener("click", function (event) {
      event.preventDefault()
      document.querySelector('.info').innerHTML = `<div class="email">
                                                    <p>${email}</p>
                                                  </div>`
      console.log("funcionouuuuuuuu")
    })


// 3) >>>>>>>> Texto customizável---------------------------------------------------------------------------------------
var form = document.querySelector(".user form")
form.addEventListener("submit", function (event) {
  event.preventDefault()
  var acessInput = document.querySelector("form input")
  var inputText = '"'+ acessInput.value + '"'
  if (inputText !== "") {
    var newStatus = document.createElement("p")
    var newStatusText = document.createTextNode(inputText)
    newStatus.appendChild(newStatusText)
    var todoStatus = document.querySelector(".textoStatus")
    todoStatus.appendChild(newStatus)
    acessInput.classList="apagar"

    var status = document.querySelector(".textoStatus")
    status.addEventListener("click", function (event) {
      event.preventDefault()
      var pStatus = document.querySelector(".textoStatus p")
      pStatus.remove()
      console.log("Funcionandoooooooooooooooooooo editar")
      acessInput.classList.remove("apagar")

      

    })
  
  }
})
}


  // 4) Small >>>>>>>>>>  -----------------------------------------------------------------
  var smallBtn = document.querySelector("#small")
  smallBtn.addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector('.usuario').innerHTML = `<div class="user">
                                                      <h2>${nome}</h2>
                                                    </div>`
    console.log("funcionouuu o novo comando btnSmall")
  })

  // 5) Only-Picture  >>>>>>>>>>  -----------------------------------------------------------------
  var onlyPictureBtn = document.querySelector("#only-picture")
  onlyPictureBtn.addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector('.usuario').innerHTML = `<div class="user">
                                                      <img src="${picture}">
                                                    </div>`
    console.log("funcionouuu o novo comando btnSmall")
  })




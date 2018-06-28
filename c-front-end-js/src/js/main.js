
      const btnMessage = document.querySelector(".message-input button")
      const listMessage = document.querySelector(".message-list")
      const input = document.querySelector(".message-input input")

      const newItemList = function() {
        const verificaText = input.value.trim()
        // Checar se tem texto no input
        if (verificaText.length === 0) {
            input.value = ""
        } else {
          let valorInput = input.value
          const newList = document.createElement("li")
          const itemList = document.createTextNode(valorInput)
          newList.appendChild(itemList)
          listMessage.appendChild(newList)
          input.value = ""
          input.focus()
        }
      }

      btnMessage.addEventListener("click", function(event) {
        event.preventDefault()
        newItemList()
      })

      input.addEventListener("submit", function(event) {
       console.log("ok")
        event.preventDefault()
        newItemList()
      })
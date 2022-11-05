function createGame(player1, hour, player2) {
  return `
      <li>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      </li>
  `
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
           ${games}
      </ul>
    </div>
  `
}

 document.querySelector("#cards").innerHTML = 
       createCard("24/10", "quinta", createGame("brazil", "16:00", "serbia")) +
       createCard(
         "28/11",
         "segunda",
         createGame("brazil", "13:00", "swetizerland")
       ) +
       createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")
       )
    
  // trocando as cores de fundo dinamicamente

  let fundoAzul = document.querySelector(".bgBlue")
  let fundoVerde = document.querySelector(".bgGreen")
  let fundoOriginal = document.querySelector(".bgOriginal")
  let body = document.querySelector(".green")

  fundoAzul.addEventListener("click", () => {
    
    body.classList.remove("green")
     body.classList.add("blue")
  })

  fundoVerde.addEventListener("click", () => {
      body.classList.remove("blue")
      body.classList.add("green")
  })

  fundoOriginal.addEventListener("click", () => {
    body.classList.remove("blue")
    body.classList.remove("green")
  })
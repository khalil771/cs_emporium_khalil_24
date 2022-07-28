// creation du bouton connexion dans la navbar
let div6 = document.querySelectorAll("div")[6]
let boutton = document.createElement("button")
boutton.innerText="CONNEXION"
boutton.id = "clair"
div6.insertAdjacentElement("afterbegin",boutton)

//creation du thme sombre et clair
let blanc = document.createElement("button")
blanc.id = "white"
let noir = document.createElement("button")
noir.id = "black"
div6.insertAdjacentElement("afterbegin",blanc)
div6.insertAdjacentElement("afterbegin",noir)

// creation du bouton sale section 2
let sale = document.querySelector("#bouttonsale")
let boutsale = document.createElement("button")
boutsale.innerText = "SALE ITEMS"
boutsale.id ="boutsale"
sale.insertAdjacentElement("afterbegin",boutsale)

// creation des cartes a l'aide de la section containers
let containers_card = document.querySelector("#containers_cards")


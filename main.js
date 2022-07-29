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
let body = document.querySelector("body")
let navnoir = document.querySelector("section") 
let titre = document.querySelector("h1")
let titre2 = document.querySelectorAll("h2")[1]

noir.addEventListener("click", function(){
    body.style.backgroundColor = "black"
    navnoir.style.backgroundColor = "white"
    titre.style.color = "white"
    titre2.style.color="white"
})
blanc.addEventListener("click",function(){
    body.style.backgroundColor = "white"
    titre.style.color ="#212529"
    titre2.style.color="#212529"
})

boutton.addEventListener("click",function(){
    let formulaire1 = document.createElement("div")
    formulaire1.id = "formulaire1"
    body.insertAdjacentElement("afterend",formulaire1)
    body.style.opacity = 0.3
    let titreco =  document.createElement("h2")
    titreco.id ="titreco"
    titreco.innerText = "Connectez Vous !"
    let nomutilisateur = document.createElement("h4")
    nomutilisateur.innerText = "Nom d'utilisateur :"
    let input1 = document.createElement("input")
    input1.id = "input1"
    let mdp = document.createElement("h4")
    mdp.innerText = "Mot de passe :"
    let input2 = document.createElement("input")
    input1.id = "input2"
    let connexion = document.createElement("button")
    connexion.innerText = "Connexion"
    connexion.id = "connexion"
    let div = document.createElement("div")
    div.id ="containerbutton"

    let phrase = document.createElement("h4")
    let inscription = document.createElement("button")
    inscription.innerText = "s'inscricre"
    phrase.innerText = "pas encore de compte? " 

    formulaire1.insertAdjacentElement("afterbegin", titreco)
    titreco.insertAdjacentElement("afterend", nomutilisateur)
    nomutilisateur.insertAdjacentElement("afterend",input1)
    input1.insertAdjacentElement("afterend", mdp)
    mdp.insertAdjacentElement("afterend",input2)
    input2.insertAdjacentElement("afterend",div)
    div.insertAdjacentElement("afterend", connexion)
    connexion.insertAdjacentElement("afterend", phrase )
    phrase.insertAdjacentElement("afterend", inscription)

    connexion.addEventListener("click", function(){
        //fermeture du formulaire au clic du bouton connexion 
    formulaire1.id = "fermeture1"
    body.style.opacity = 1
    } )
    inscription.addEventListener("click",function(){

        titreco.innerText=' Inscription'
        nomutilisateur.innerText = "nom"
        let prenom = document.createElement("h4")
        prenom.innerText = "prenom"
        input1.insertAdjacentElement("afterend", prenom)
        input1.id = "input1-1"
        let input3 = document.createElement("input")
        input3.id = "input3"
        prenom.insertAdjacentElement("afterend", input3)
        mdp
        mdp.insertAdjacentElement("afterend", input2)
        let confirmation = document.createElement("h4")
        confirmation.innerText = "Confirmer votre mot de passe"
        input2.insertAdjacentElement("afterend", confirmation)
        let input4 = document.createElement("input")
        input4.id = "input3"
        confirmation.insertAdjacentElement("afterend",input4)
        div.id = "fin"
        connexion.id = "connexion2"
        phrase.id = "finphrase"
        inscription.id = "fininscription"
        let nouveauinscrire = document.createElement("button")
        nouveauinscrire.innerText = "S'inscrire"
        nouveauinscrire.id = "nouveauinscrire"
        let div2 = document.createElement("div")
        input4.insertAdjacentElement("afterend",div2)
        div2.insertAdjacentElement("afterend", nouveauinscrire)
        nouveauinscrire.addEventListener("click", function(){
            formulaire1.id ="fermeture2"
            body.style.opacity = 1
        })
    })
})  

// raccoucir le hr 
let carte3 = document.querySelectorAll('p')[9]
carte3.addEventListener("mouseover",function(){
    carte3.className = "transitioncentre"
})
carte3.addEventListener("mouseout",function(){
    carte3.className = "centre"
})

let carte3_2 = document.querySelectorAll('p')[10]
carte3_2.addEventListener("mouseover",function(){
    carte3_2.className = "transitioncentre2"
} )
carte3_2.addEventListener("mouseout", function(){
    carte3_2.className ="centre1"
})

let carte3_3 = document.querySelectorAll('p')[11]
carte3_3.addEventListener("mouseover", function(){
    carte3_3.className = "transitioncentre2"
})
carte3_3.addEventListener("mouseout",function(){
    carte3_3.className = "centre2"
})


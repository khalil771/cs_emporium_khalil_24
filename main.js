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
    body.style.color="white"
    
})
blanc.addEventListener("click",function(){
    body.style.backgroundColor = "white"
    titre.style.color ="#212529"
    titre2.style.color="#212529"
    body.style.color="black"
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


// lancement de la caroussel 


let carte1 = document.querySelector(".carte1").querySelectorAll("img")
let carte2 = document.querySelector(".carte2").querySelectorAll("img")
let carte33 = document.querySelector(".carte3").querySelectorAll("img")
let carte4 = document.querySelector(".carte4").querySelectorAll("img")


let text111 = document.getElementsByClassName("c1")
let texte1l = Array.from(text111)
console.log(texte1l[0].className);




let carte1l = Array.from(carte1)
let carte2l = Array.from(carte2)
let carte3l = Array.from(carte33)
let carte4l = Array.from(carte4)



let bouton1 = document.querySelector(".bouttons1")
bouton1.addEventListener("click", function(){
    


for (let i = 0; i < texte1l.length; i++) {
        texte1l[i].style.display = 'block'
        
    }
})

let bouton2 = document.querySelector(".bouttons2")
bouton2.addEventListener("click", function(){
    for (let i = 0; i < carte1l.length; i++) {
        carte1l[i].style.display = 'none'
    }
    for (let i = 0; i < texte1l.length; i++) {
        texte1l[i].style.display = 'none'
        
    }


    for (let i = 0; i < carte3l.length; i++) {
        carte3l[i].style.display = 'none'
    }


    for (let i = 0; i < carte4l.length; i++) {
        carte4l[i].style.display = 'none'
    }

    for (let i = 0; i < carte2l.length; i++) {
        carte2l[i].style.display = 'block'
    }
})

let bouton3 = document.querySelector(".bouttons3")
bouton3.addEventListener("click",function(){

    for (let i = 0; i < carte3l.length; i++) {
        carte3l[i].style.display = 'block'
    }

    for (let i = 0; i < carte2l.length; i++) {
        carte2l[i].style.display = 'none'
    }


    for (let i = 0; i < carte1l.length; i++) {
        carte1l[i].style.display = 'none'
    }


    for (let i = 0; i < carte4l.length; i++) {
        carte4l[i].style.display = 'none'
    }

    
})


let bouton4 = document.querySelector(".bouttons4")
bouton4.addEventListener("click",function(){
    for (let i = 0; i < carte3l.length; i++) {
        carte3l[i].style.display = 'none'
    }


    for (let i = 0; i < carte1l.length; i++) {
        carte1l[i].style.display = 'none'
    }


    for (let i = 0; i < carte2l.length; i++) {
        carte2l[i].style.display = 'none'
    }

    for (let i = 0; i < carte4l.length; i++) {
        carte4l[i].style.display = 'block'
    }
})
console.log(bouton2);
console.log(carte1[0]);


//navbar
let nav = document.querySelector("section")

window.addEventListener("scroll",function(){
    if(this.scrollY >20){
        nav.style.opacity = 0.5
    }

    else{
        nav.style.opacity=1
    }
})

// https://colorlib.com/preview/theme/seogo/




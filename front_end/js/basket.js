//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {
    //Promise (qui ici n'envoie pas de données utile) mais permettant d'utiliser les console.log directement *
    //dans le DOM du HTML
    await fetch(``)

   
    displayBasket()
})()


function displayBasket(){
    //Si le panier est vide (inférieur à 1 article)
    if(basketContent.length < 1){
        console.log("Le panier est vide")
        //Permet de cacher la section "basketIsFilled étant donné que le panier est vide"
        const filledBasket = document.getElementById("basketIsFilled")
        console.log("yo", filledBasket)
        filledBasket.classList.add("d-none")
    }
    //Si le panier contient des produits (égal ou supérieur à 1 article)
    else{
        console.log("Le panier n'est pas vide")
        //Permet de cacher la section "basketIsEmpty" étant donné que le panier contient des articles
        const emptyBasket = document.getElementById("basketIsEmpty")
        console.log("coucou", emptyBasket)
        emptyBasket.classList.add("d-none")
        
        //Afficher le contenu du panier 
        let arrayBasketStructure = []; //Déclarer la structure de l'affichage du panier avec un [array]
        const productsInBasket = document.getElementById("productsInBasket") //Déclarer où le panier sera envoyé dans le html
        console.log("là", productsInBasket)
        
        //Boucle for itérant sur la length de basketContent, permettant d'aller chercher les éléments du panier 1 à 1 et d'y *
        //ajouter les éléments du basketContent dynamiquement
        for(j = 0; j < basketContent.length; j++){
            arrayBasketStructure = arrayBasketStructure + `
            <div class="d-flex justify-content-between p-3 rounded" >
                <img class="rounded d-block d-md-none" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo Zurss 50S" width="100" height="100">
                <img class="rounded d-none d-md-block" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo Zurss 50S" width="200">
            <div class="d-flex flex-column align-items-center pt-4">
                <h3 id="product__name">${basketContent[j].name}</h3>
                <p id="product__option">${basketContent[j].option}</p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn remove1FromBasket" type="button" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                
                <input class="cart-quantity-input quantity w-25" type="number" id="product__quantity" name="quantity" value="${basketContent[j].quantity}">
                <button class="btn add1ToBasket" type="button" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                <h5 class="pt-2" id="product__quantity">${basketContent[j].quantity}</h5>
            </div>
            <div class="d-flex flex-row align-items-center">
                <p class="pt-3" ><strong id="product__price">${showPrices(basketContent[j].price)}</strong></p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn removeProductFromBasket" type="button" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </div>
            </div>`;
        }
        //Envoie du panier dans le html
        productsInBasket.innerHTML = arrayBasketStructure
    }
    
    //Création de la const utilisant la méthode find pour aller cibler un élément en particulier du [basketContent]

    //Bouton add 1
    //Relie le bouton du html à sa const. Utilisation d'une class et non d'un id pour ce bouton car il y en plsieurs sur la page *
    //(1 par article). Si un id est appelé, seul le premier sera appelé étant donné qu'un id est unique
    //const buttonDecreaseOne = document.getElementsByClassName("remove1FromBasket")
    
    
    let deductBtnArr = document.getElementsByClassName('remove1FromBasket');
    

    for(let deductBtn of deductBtnArr){
        deductBtn.onclick = (event) => {
            event.preventDefault()
            let currentInputBox = deductBtn.nextElementSibling;
            currentInputBox.value =  --currentInputBox.value;
            basketContent.quantity = currentInputBox.value 
            console.log("ici", basketContent)
            localStorage.setItem("produit", JSON.stringify(basketContent))
            location.reload()
        }
    }
    
    

    
    
    
    //Bouton deleteItem
    const btnRemoveProductFromBasketArr = document.getElementsByClassName("removeProductFromBasket")
    
    //Ne fonctionne pas : vide tous les objets avec "produit" dans le localStorage, donc tout le panier
    for(let btnRemoveProductFromBasket of btnRemoveProductFromBasketArr){
        btnRemoveProductFromBasket.onclick = () => {
            localStorage.removeItem("produit")
            location.reload()
        }
    }
    
    //Bouton "clear"
    
    //Relie le bouton du html à sa const
    const buttonClearBasket = document.getElementById("clearBasket")
    
    //Ajout d'un addEventListener lors du click sur le bouton, appelle la fonction permettant de vider le localStorage et *
    //recharge la page
    buttonClearBasket.addEventListener("click", () => {
        clearBasket()
        location.reload()
    })
    
}






//Pour le moment fonction inutilisée, peut être implantée plus tard
/*
function displayBasketProducts(){
    const templateBasket = document.getElementById("templateBasket") //Récupère le template présent dans le HTML
    const cloneBasket = document.importNode(templateBasket.content, true) //Clone ce template
    
    //Envoie les données récupérées dans l'API directement dans le DOM aux #id correspondants
    cloneBasket.getElementById("product__name").textContent = basketContent.name
    cloneBasket.getElementById("product__description").textContent = basketContent.description
    cloneBasket.getElementById("product__price").textContent = showPrices(basketContent.price)
    cloneBasket.getElementById("product__img").src = basketContent.imageUrl
    cloneBasket.getElementById("product__img").alt = "Modèle appareil photo" + basketContent.name
     
    document.getElementById("productsInBasket").appendChild(cloneBasket) //Affiche les templates clonés en enfant de l'élément indiqué

}
*/


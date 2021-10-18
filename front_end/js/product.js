//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci

(async function () {
    const productId = getProductId()
    const product = await getProduct(productId)
    
    displayProductPage(product)
})()

function getProductId() {
    return new URL(location.href).searchParams.get("_id")
}

function displayProductPage(product) {
            //Envoie dynamiquement les données du produit sur la page de celui-ci, en fonction de son Id
            function displayProduct(product) {
                document.getElementById("product__name").textContent = product.name
                document.getElementById("product__description").textContent = product.description
                document.getElementById("product__price").textContent = showPrices(product.price)
                document.getElementById("product__img").src = product.imageUrl
                document.getElementById("product__img").alt = "Modèle appareil photo" + product.name
                displayLenses(product)
            }
            displayProduct(product)
            
            //Envoie dynamiquement les données des lentilles dans le html
            function displayLenses (product) {
                //Déclaration de la variable définissant les choix de lentilles pour le produit, rattaché à l'élément sel
                const lenses_Choices = document.getElementById("product__options")
                //Boucle for permettant de passer sur chaque donnée de lenses dans l'API 
                for (i = 0; i < product.lenses.length; i++) {
                    //Déclaration de "option", un élément qui sera intégré dans le html
                    const option = document.createElement("option")
                    //Remplissage de l'option nommée juste avant avec une donnée de [lenses], jusqu'à la fin de celui-
                    option.textContent = product.lenses[i]
                    //Envoie de la variable "option" à product__options dans le html
                    lenses_Choices.appendChild(option)
                }
            }
            
            const BtnAddToBasket = document.getElementById("BtnAddToBasket")
            BtnAddToBasket.addEventListener("click", (event) => {
                event.preventDefault();
                const lenses_Choosed = document.getElementById("product__options");
                const quantity = document.getElementById("quantity_Choice")
                
                const productInBasket = {
                    id : product._id,
                    name : product.name,
                    description : product.description,
                    price : product.price,
                    lenses : lenses_Choosed.value,
                    quantity : quantity.value,
                    img : product.imageUrl
                }
                            
                //Fonction ajoutant le produit au localStorage : *
                //le produit est envoyé dans le [array] basketContent, puis ce array est envoyé dans le localStorage *
                //cela permet de stocker plusieurs produits dans le localStorage *
                function addProductInLocalStorage() {
                    basketContent.push(productInBasket)
                    localStorage.setItem("produit", JSON.stringify(basketContent))
                }
                
                
                //S'il y a déja des produits enregistrés dans le local storage 
                if(basketContent) {
                    const inHere = basketContent.find((el) => el.id === product._id)
                    if(inHere) {
                        console.log("already in here")
                        productInBasket.quantity = ++inHere.quantity;
                        //Ici on ne peut pas appeler la fonction addProductInLocalStorage car elle envoie le [array] dans le localStorage *
                        //alors qu'il y est déjà dû à la condition else plus bas, ce qui duplique les [array] et donc les produits dans le panier
                        localStorage.setItem("produit", JSON.stringify(basketContent))
                        console.log("coucou", inHere.quantity) 
                    }
                    
                //S'il n'y a aucun produit enregistré dans le localStorage
                else {
                    console.log("gonna add it")
                    //Appel de la fonction pour ajouter un produit au [basketContent] puis pour envoyer [array] au localStorage
                    addProductInLocalStorage()
                    }
                }
                
                
            });
                
                    
            //---------------------Bouton Magique pour tout vider lol---------------------------------
            //localStorage.clear()
            //
            
    
}













        


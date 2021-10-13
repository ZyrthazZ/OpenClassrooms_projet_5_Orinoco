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
                            
                let basketContent = JSON.parse(localStorage.getItem("produit"))
                console.log("viva l'algérie", basketContent)
                
                //S'il y a déja des produits enregistrés dans le local storage 
                if(basketContent) {
                    //  Check if product exist already
                        //1. if product.name == productInBasket.name && prodcut.lenses === productInBasket.lenses  exist .
                            // iF YES, get quantity and add it to existing
                          
                        // 2.  if no
                            
                    basketContent.push(productInBasket)
                    localStorage.setItem("produit", JSON.stringify(basketContent))
    
                }
                //S'il n'y a pas de produits enregistrés dans le local storage
                else {
                    basketContent = [];
                    basketContent.push(productInBasket);
                    localStorage.setItem("produit", JSON.stringify(basketContent))
    
                }
        
            });
            
                    
            //---------------------Bouton Magique pour tout vider lol---------------------------------
            //localStorage.clear()
            //
    
}
        
        


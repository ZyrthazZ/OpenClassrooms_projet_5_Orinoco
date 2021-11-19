//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci

(async function () {
    const productId = getProductId()
    console.log("productId", productId)
    const product = await getProduct(productId)

    displayProductPage(product)
})()

//Fonction permettant d'aller chercher l'id du produit demandé, pour ensuite l'utiliser dans la fonction getProduct sur cette page en tant que paramètre.
//Permet donc d'aller chercher les informations de ce produit dans l'API grâce à son Id
function getProductId() {
    return new URL(location.href).searchParams.get("_id")
}


//Fonction permettant d'afficher dynamiquement le produit sur la page html, avec tout ses composants
function displayProductPage(product) {
    //Envoie dynamiquement les données du produit sur la page de celui-ci, en fonction de son Id
    function displayProduct(product) {
        document.getElementById("product__name").textContent = product.name
        document.getElementById("product__description").textContent = product.description
        document.getElementById("product__price").textContent = showPrices(product.price)
        document.getElementById("product__img").src = product.imageUrl
        document.getElementById("product__img").alt = "Modèle appareil photo" + product.name
        //Appel de la fonction displayLenses, implantée un peu plus loin dans le code
        displayLenses(product)
    } //Fin de la fonction displayProduct

    //Appel de la fonction displayProduct
    displayProduct(product)

    //Envoie dynamiquement les données des lentilles dans le html
    function displayLenses(product) {
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
        } //Fin de la boucle for

    } //Fin de la fonction displayLenses

    //Relie le javascript à son html
    const btnAddToBasket = document.getElementById("btnAddToBasket")
    //AJout d'un addEventListener sur le btnAddToBasket
    btnAddToBasket.addEventListener("click", (event) => {
        event.preventDefault();
        //Déclaration de l'objet lenses_Choosed en allant chercher l'information sélectionnée dans le html par l'utilisateur
        const lenses_Choosed = document.getElementById("product__options");
        //Déclaration de l'objet quantity en allant chercher l'information sélectionnée dans le html par l'utilisateur
        const quantity = document.getElementById("quantity_Choice")

        //Création de l'objet productInBasket avec toutes les informations concernant le produit devant être envoyées dans le basket
        const productInBasket = {
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            option: lenses_Choosed.value,
            quantity: quantity.value,
            img: product.imageUrl
        }

        //Fonction ajoutant le produit au localStorage : *
        //le produit est envoyé dans le [array] basketContent, puis ce array est envoyé dans le localStorage *
        //cela permet de stocker plusieurs produits dans le localStorage *
        function addProductInLocalStorage() {
            basketContent.push(productInBasket)
            localStorage.setItem("produit", JSON.stringify(basketContent))
        } //Fin de la fonction addProductInLocalStorage

        //S'il y a déja des produits enregistrés dans le local storage 
        if (basketContent) {
            //Cherche dans le locaStorage si un produit a le même id et la même option de sélectionné
            const inHere = basketContent.find((el) => el.id === productInBasket.id && el.option === productInBasket.option)
            if (inHere) {
                console.log("already in basket")
                //Incrémente à la quantité existante de inHere la nouvelle quantité demandée par l'utilisateur sur la page produit
                inHere.quantity = +inHere.quantity + +productInBasket.quantity
                //Ici on ne peut pas appeler la fonction addProductInLocalStorage car elle envoie le [array] dans le localStorage *
                //alors qu'il y est déjà dû à la condition else plus bas, ce qui duplique les [array] et donc les produits dans le panier
                localStorage.setItem("produit", JSON.stringify(basketContent))
            } //Fin du if

            //S'il n'y a aucun produit enregistré dans le localStorage
            else {
                console.log("gonna add it to basket")
                //Appel de la fonction pour ajouter un produit au [basketContent] puis pour envoyer [array] au localStorage
                addProductInLocalStorage()
            } //Fin du else

        } //Fin du if(basketContent)

    }); //Fin du addEventListener sur btnAddToBasket

} //Fin de la fonction displayProductPage
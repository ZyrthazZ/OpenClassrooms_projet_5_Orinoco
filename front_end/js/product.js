//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {
    const productId = getProductId()
    const product = await getProduct(productId)
    console.log(productId)
    console.log(product)

    displayProduct(product)
})()

//Récupère l'Id de la page en fonction du produit lié à l'API sur lequel l'utilisateur a cliqué
function getProductId() {
    return new URL(location.href).searchParams.get("_id")
}

function showPrices(val) {
    return val / 100 + " €"
}

//Envoie dynamiquement les données du produit sur la page de celui-ci, en fonction de son Id
function displayProduct(product) {
    document.getElementById("product__name").textContent = product.name
    document.getElementById("product__description").textContent = product.description
    document.getElementById("product__price").textContent = showPrices(product.price)
    document.getElementById("product__img").src = product.imageUrl
    document.getElementById("product__img").alt = "Modèle appareil photo" + product.name
    
    //Déclaration de la variable définissant les choix de lentilles pour le produit, rattaché à l'élément select #product__options
    const lenses__choice = document.getElementById("product__options");
    
    
    //Boucle for permettant de passer sur chaque donnée de lenses dans l'API 
    
    //Ici la boucle déclare que i commence à 0, et que tant que i est inférieur à la *
    //longueur du array [lenses] dans l'API, i sera augmenté de 1
    for (i = 0; i < product.lenses.length; i++) {
        //Déclaration de "option", un élément qui sera intégré dans le html
        const option = document.createElement("option");
        //Remplissage de l'option nommée juste avant avec une donnée de [lenses], jusqu'à la fin de celui-ci
        option.textContent = product.lenses[i];
        //Envoie de la variable "option" à lenses__choice dans le html
        lenses__choice.appendChild(option);
    }
}


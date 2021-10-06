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

    //Compléter ici
}
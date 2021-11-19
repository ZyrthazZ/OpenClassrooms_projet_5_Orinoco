/**
    Fonction principale de la page, va appeler les différentes fonctions
 */
(async function () {
    const products = await getProduct();

    console.log("APIproducts", products)

    for (product of products) {
        displayProducts(products)
    }
})()

/**
    Fonction permettant d'afficher les informations de l'API dans la page, en remplaçant les id de index.html
    Utilisation de template sur la page html pour minimer les failles de sécurité et pour avoir un code plus lisible
 */
function displayProducts() {
    const templateElt = document.getElementById("templateProduct") //Récupère le template présent dans le HTML
    const cloneElt = document.importNode(templateElt.content, true) //Clone ce template

    //Envoie les données récupérées dans l'API directement dans le DOM aux #id correspondants
    cloneElt.getElementById("product__name").textContent = product.name
    cloneElt.getElementById("product__description").textContent = product.description
    cloneElt.getElementById("product__price").textContent = showPrices(product.price)
    cloneElt.getElementById("product__img").src = product.imageUrl
    cloneElt.getElementById("product__img").alt = "Modèle appareil photo" + product.name
    cloneElt.getElementById("product__link").href += `?_id=${product._id}`

    document.getElementById("products").appendChild(cloneElt) //Affiche les templates clonés en enfant de l'élément indiqué
} //Fin de la fonction displayProducts
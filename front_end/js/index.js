main () //Éxécute la fonction main

/**
    Fonction principale de la page, va appaler les différentes fonctions
 */
async function main() {
    const products = await getProducts();
    
    console.log(products)
    
    for (product of products) {
        displayProducts(products)
    }
}

/**  
    Fonction fetch permettant de recevoir par l'API les différents produits
*/

function getProducts() {
    return fetch("http://localhost:3000/api/cameras")
        .then(function(res) {
            return res.json();
        })
        .then(function (products) {
            return products;
        })
        .catch(function (err) {
            alert(error);
        })
}


/**
    Fonction permettant de diviser par 100 les prix pour en enlever les décimales et de rajouter le symbole €
 */
function showPrices(val) {
    return val / 100 + " €"
}

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
     
    document.getElementById("products").appendChild(cloneElt) //Affiche les templates clonés en enfant de l'élément indiqué
}



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
    Fonction permettant d'afficher les informations de l'API dans la page, en remplaçant les id de index.html
    Utilisation de template sur la page html pour minimer les failles de sécurité et pour avoir un code plus lisible
 */
function displayProducts() {
    const templateElt = document.getElementById("templateProduct")
    const cloneElt = document.importNode(templateElt.content, true)
    
    cloneElt.getElementById("product__name").textContent = product.name
    cloneElt.getElementById("product__description").textContent = product.description
    cloneElt.getElementById("product__price").textContent = product.price
    cloneElt.getElementById("product__img").src = product.imageUrl
    cloneElt.getElementById("product__img").alt = "Modèle appareil photo" + product.name
     
    document.getElementById("products").appendChild(cloneElt)
}


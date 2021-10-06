/**
    Fonction permettant de diviser par 100 les prix pour en enlever les décimales et de rajouter le symbole €
 */
function showPrices(val) {
    return val / 100 + " €"
}

//Permet d'aller chercher les données dans l'API en fonction du produit demandé
function getProduct(productId="") {
    return fetch(`http://localhost:3000/api/cameras/${productId}`)
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
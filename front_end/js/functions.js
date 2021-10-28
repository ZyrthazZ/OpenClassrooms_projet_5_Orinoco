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

//Déclaration de la variable basketContent qui contient les objets avec les keys et values du localStorage
const basketContent = JSON.parse(localStorage.getItem("produit")) || [];
console.log("basketContent", basketContent)



function removeItemFromBasket(){
    event.preventDefault();
    //On va chercher la valeur key sur l'élément du html pour cibler le bon produit du [basketContent]
    let key = event.target.parentElement.dataset.remove;
    //Utilisation de .splice sur le [basketContent] : permet de supprimer ou d'ajouter des items dans le [array] *
    //Ici on supprime un item : 
    //Avec la valeur de key qui correspond à la place du produit visé dans [basketContent], on va cibler cet indice du [array] et *
    //demander à supprimer 1 élément, celui en question
    basketContent.splice(key, 1)
    //On renvoie le nouveau [basketContent] dans le localStorage
    localStorage.setItem("produit", JSON.stringify(basketContent))
    //Recharge la page
    location.reload();
}

//Création de la fonction permettant de vider le localStorage
function clearBasket(){
    event.preventDefault()
    localStorage.clear()
    location.reload()
}

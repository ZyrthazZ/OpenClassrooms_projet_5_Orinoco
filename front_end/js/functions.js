//Fonction permettant de diviser par 100 les prix pour en enlever les décimales et de rajouter le symbole €
function showPrices(val) {
    return val / 100 + " €"
}


//Permet d'aller chercher les données dans l'API en fonction du produit demandé
function getProduct(productId = "") {
    return fetch(`http://localhost:3000/api/cameras/${productId}`)
        .then(function (res) {
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


//Fonction permettant de supprimer un élément en particulier du localStorage
function removeItemFromBasket() {
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

//Fonction permettant de vider le localStorage et de recharger la page
function clearBasket() {
    event.preventDefault()
    localStorage.clear()
    location.reload()
}

//Calcul du totalPrice
function calculateTotalPrice() {
    let totalPrice = 0;
    //Va aller sur chaque élément produit du [basketContent]
    basketContent.forEach((produit) => {
        //Pour chaque produit, calcul le totalPrice en multipliant le prix et la quantité du produit 
        //Sur chaque nouvel élément trouvé par la fonction (produit), le montant trouvé pour l'élément précédent y est additionné
        //Par exemple, on peut le voir avec le console log ci dessous :
        //Si on a 1 produit à 499€ en 3 exemplaires, 1 produit à 1599€ en 2 exemplaires et 1 produit à 599€ en 1 exemplaire , *
        //Le console log va afficher : 
        /*
        totalPrice 1497€
        totalPrice 4695€
        totalPrice 5294€
        */
        //Le dernier console.Log correspond au prix total des produits
        totalPrice = totalPrice + produit.quantity * produit.price;
        console.log("totalPrice", totalPrice)
    });
    //Relie le totalInBasket à son élément en html
    const totalInBasket = document.getElementById("totalPrice");
    //Injecte le résultat trouvé plus haut dans le html en le mettant au format des prix du site à l'aide de la fonction showPrices()
    totalInBasket.innerHTML += `${showPrices(totalPrice)}`;
}
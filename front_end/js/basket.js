//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {
   
    displayBasket()
    
    displayForm()
})()


function displayBasket(){
    //Si le panier est vide (inférieur à 1 article)
    if(basketContent.length < 1){
        console.log("Le panier est vide")
        //Permet de cacher la section "basketIsFilled étant donné que le panier est vide"
        const filledBasket = document.getElementById("basketIsFilled")
        console.log("yo", filledBasket)
        filledBasket.classList.add("d-none")
    }
    //Si le panier contient des produits (égal ou supérieur à 1 article)
    else{
        console.log("Le panier n'est pas vide")
        //Permet de cacher la section "basketIsEmpty" étant donné que le panier contient des articles
        const emptyBasket = document.getElementById("basketIsEmpty")
        console.log("coucou", emptyBasket)
        emptyBasket.classList.add("d-none")
        
        //Afficher le contenu du panier 
        let arrayBasketStructure = []; //Déclarer la structure de l'affichage du panier avec un [array]
        const productsInBasket = document.getElementById("productsInBasket") //Déclarer où le panier sera envoyé dans le html
        console.log("là", productsInBasket)
        
        //Boucle for itérant sur la length de basketContent, permettant d'aller chercher les éléments du panier 1 à 1 et d'y *
        //ajouter les éléments du basketContent dynamiquement
        for(j = 0; j < basketContent.length; j++){
            arrayBasketStructure = arrayBasketStructure + `
            <div class="d-flex justify-content-between p-1 rounded" >
                <img class="rounded d-block d-md-none" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo ${basketContent[j].name}" width="100" height="100">
                <img class="rounded d-none d-md-block" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo ${basketContent[j].name}" width="200">
            <div class="d-flex flex-column align-items-center">
                <h6 class="d-block d-md-none" id="product__name">${basketContent[j].name}</h6>
                <h5 class="d-none d-md-block" id="product__name">${basketContent[j].name}</h5>
                <p id="product__option">${basketContent[j].option}</p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn remove1FromBasket" type="button" aria-hidden="true" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " fill="red" class="bi bi-x-circle" viewBox="0 0 16 16" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>

                <input class="cart-quantity-input quantity d-none" type="number" id="product__quantity" name="quantity" value="${basketContent[j].quantity}">

                <button class="btn add1ToBasket" type="button" aria-hidden="true" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                
                <span class="pt-2" id="product__quantity">${basketContent[j].quantity}</span>
                
            </div>
            <div class="d-flex flex-row align-items-center">
                <p class="pt-3 d-block d-md-none" id="product__price">${showPrices(basketContent[j].price)}</p>
                <p class="pt-3 d-none d-md-block"><strong id="product__price">${showPrices(basketContent[j].price)}</strong></p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn removeProductFromBasket" type="button" aria-hidden="true" data-remove="${j}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="red" class="bi bi-trash" viewBox="0 0 16 16" data-remove="${j}">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" data-remove="${j}"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </div>
            <div class="d-flex flex-column align-items-center pt-4">
                <h6>Sous-Total</h6>
                <p>${showPrices(basketContent[j].quantity * basketContent[j].price)}</p>
            </div>
            </div>`;
        }
        //Envoie du panier dans le html
        productsInBasket.innerHTML = arrayBasketStructure;
    }
    
    
    //Boutons add, deduct, remove et clear

    //Bouton deduct 1
    
    //Relie le bouton du html à sa const. Utilisation d'une class et non d'un id pour ce bouton car il y en plusieurs sur la page *
    //(1 par article). Si un id est appelé, seul le premier sera appelé étant donné qu'un id est unique
    let deductBtnArr = document.getElementsByClassName('remove1FromBasket');
        console.log('deduct btn here: ', deductBtnArr);
        
        //Boucle for permettant d'itérer sur tous les boutons deductBtnArr de la page 
        for(let deductBtn of deductBtnArr){
            //addEventListener sur le click de ce bouton 
            deductBtn.onclick = (event) => {
                event.preventDefault();
                console.log("1", event.target);
                console.log("2", event.target.parentElement);
                
                //Déclare la "key", c'est à dire la déclaration de la place du produit dans le array basketContent (le 1er produit est à 0, puis 1 etc. Important pour cibler)
                let key = event.target.parentElement.dataset.deduct;
                console.log("key", key);
                
                //Déclare l'"id", qui est rattaché au produit afin de l'utiliser plus loin
                let id = event.target.parentElement.dataset.id;
                console.log("id", id);
                //Déclare l'"option", qui est rattachée au produit afin de l'utiliser plus loin
                let option = event.target.parentElement.dataset.option;
                console.log("option", option)
                
                //Déclare la const servant à selectionner tous les buttons de la page contenant "data-remove", ce qui revient à sélectionner tous les buttons *
                //remove1FromBasket
                let deductBtns = document.querySelectorAll('button[data-deduct]');
                console.log("deductBtns", deductBtns)
                //Boucle itérant sur chaque bouton remove1FromBasket
                deductBtns.forEach(deductBtn => {
                    console.log("deductBtn", deductBtn);
                    console.log("deductBtn.dataset", deductBtn.dataset.deduct);
                    //If vérifiant si la key dataset du bouton et la key de celui-ci sont les mêmes afin de s'assurer de cibler le bon produit dans le array
                    if(deductBtn.dataset.deduct == key) {
                        console.log("IN HERE");
                        //déclare la variable currentInputBox pour la rattacher à l'input voisin de deductBtn
                        let currentInputBox = deductBtn.nextElementSibling;
                        console.log("currentInputBox value is :" + currentInputBox.value );
                        
                        //Condition if : si la valeur de la quantité du produit est supérieur à 1, la quantité peut être décrémenter d'une unité, *
                        //sinon rien ne se passe
                        if(currentInputBox.value > 1){
                            //Lors de l'appui sur le bouton, réduit la valeur de currentInputBox de 1
                            currentInputBox.value =  currentInputBox.value - 1;
                            // Va envoyer le produit dans le localStorage
                            for(basket of basketContent) {
                                if(basket.id === id && basket.option === option){
                                    basket.quantity = currentInputBox.value;
                                    localStorage.setItem("produit", JSON.stringify(basketContent))
                                    location.reload();
                                }
                            }
                        } //Fin du If
                        //Else : la quantité du produit n'est pas supérieur à 1
                        else{
                            console.log("la quantité du produit n'est pas supérieur à 1, suppression du produit")
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
                    }
                })
                console.log("deductBtns", deductBtns);
            }
        }
        
        
        
    //Bouton add 1
    
    //Relie le bouton du html à sa const. Utilisation d'une class et non d'un id pour ce bouton car il y en plusieurs sur la page *
    //(1 par article). Si un id est appelé, seul le premier sera appelé étant donné qu'un id est unique
    let addBtnArr = document.getElementsByClassName('add1ToBasket');
    console.log('add btn here: ', addBtnArr);
    
    //Boucle for permettant d'itérer sur tous les boutons addBtnArr de la page 
    for(let addBtn of addBtnArr){
        //addEventListener sur le click de ce bouton 
        addBtn.onclick = (event) => {
            event.preventDefault();
            console.log("1", event.target);
            console.log("2", event.target.parentElement);
            
            //Déclare la "key", c'est à dire la déclaration de la place du produit dans le array basketContent (le 1er produit est à 0, puis 1 etc. Important pour cibler)
            let key = event.target.parentElement.dataset.add;
            console.log("key", key);
            
            //Déclare l'"id", qui est rattaché au produit afin de l'utiliser plus loin
            let id = event.target.parentElement.dataset.id;
            console.log("id", id);
            //Déclare l'"option", qui est rattachée au produit afin de l'utiliser plus loin
            let option = event.target.parentElement.dataset.option;
            console.log("option", option)
            
            //Déclare la const servant à selectionner tous les buttons de la page contenant "data-add", ce qui revient à sélectionner tous les buttons 
            //add1ToBasket
            let addBtns = document.querySelectorAll('button[data-add]');
            console.log("addBtns", addBtns)
            //Boucle itérant sur chaque bouton add1ToBasket
            addBtns.forEach(addBtn => {
                console.log("addBtn", addBtn);
                console.log("addBtn.dataset", addBtn.dataset.add);
                //If vérifiant si la key dataset du bouton et la key de celui-ci sont les mêmes afin de s'assurer de cibler le bon produit dans le array
                if(addBtn.dataset.add == key) {
                    console.log("IN HERE");
                    //déclare la variable currentInputBox pour la rattacher à l'input voisin de addBtn
                    let currentInputBox = addBtn.previousElementSibling;
                    console.log("currentInputBox value is :" + currentInputBox.value);
                        //Lors de l'appui sur le bouton, augmente la valeur de currentInputBox de 1
                        currentInputBox.value =  ++currentInputBox.value;
                        // Va envoyer le produit dans le localStorage
                        for(basket of basketContent) {
                            if(basket.id === id && basket.option === option){
                                basket.quantity = currentInputBox.value;
                                localStorage.setItem("produit", JSON.stringify(basketContent))
                                location.reload();
                            }
                        }
                }
            })
            console.log("addBtns", addBtns);
        }
    }

        
    //Bouton deleteItem
    const btnRemoveProductFromBasketArr = document.getElementsByClassName("removeProductFromBasket")
    //Boucle for itérant sur tous les boutons "removeProductFromBasket" du html 
    for(let btnRemoveProductFromBasket of btnRemoveProductFromBasketArr){
        //addEventListener sur le click de ce bouton 
        btnRemoveProductFromBasket.onclick = (event) => {
            removeItemFromBasket()
        }
    }
    
    
    
    //Bouton "clear"
    //Relie le bouton du html à sa const
    const buttonClearBasket = document.getElementById("clearBasket")
    //Ajout d'un addEventListener lors du click sur le bouton, appelle la fonction permettant de vider le localStorage et *
    //recharge la page
    buttonClearBasket.addEventListener("click", () => {
        clearBasket()
    })
    
    
    //Affichage du totalPrice
    
    calculateTotalPrice()
    
}//Fin de la fonction displayBasket


//Fonction displayForm(), qui va gérer tout ce qui est lié à l'affichage du formulaire sur la page basket
function displayForm(){
    //Fonction permettant d'injecter le formulaire dans le html
    function injectForm(){
        //Relie le html au javascript
        const formBasket = document.getElementById("formBasket")
        
        //Ajoute le html
        formBasket.innerHTML = `
        <div class="container my-5">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="firstname">Prénom</label>
                    <input type="name" class="form-control" id="firstname" placeholder="Jean">
                </div>
                <div class="form-group col-md-6">
                    <label for="lastname">Nom</label>
                    <input type="name" class="form-control" id="lastname" placeholder="Valjean">
                </div>
            </div>
                <div class="form-group">
                    <label for="email">Adresse Mail</label>
                    <input type="" class="form-control" id="email" placeholder="jean.valjean@les-miserables.com">
                    <small class="form-text text-muted" id="emailHelp">Nous ne partagerons jamais votre adresse mail avec Jafer</small>
                </div>
                <div class="form-group">
                    <label for="adress">Adresse</label>
                    <input type="" class="form-control" id="adress" placeholder="1862 place des Thénardiers">
                </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="town">Ville</label>
                    <input type="" class="form-control" id="town" placeholder="Paris">
                </div>
                <div class="form-group col-md-4">
                    <label for="country">Pays</label>
                    <input type="" class="form-control" id="country" placeholder="France">
                </div>
                <div class="form-group col-md-4">
                    <label for="postalcode">Code Postal</label>
                    <input type="" class="form-control" id="postalcode" placeholder="75000">
                </div>
            </div>
        </form>
        </div>
        `
    }//Fin de la function injectForm()
    
    //Bouton validateBasket
    //Relie le bouton du html au javascript
    const btnValidateBasket = document.getElementById("validateBasket")
    const btnValidateCommand = document.getElementById("validateCommand")
    console.log("btnValidateCommand", btnValidateCommand)
    
    //Ajoute un addEventListener sur le click du bouton
    btnValidateBasket.addEventListener("click", (event) => {
        event.preventDefault;
        //Appelle la function injectForm() pour afficher le formulaire
        injectForm()
        //Fait disparaître le button btnValidateBasket après le click
        btnValidateBasket.classList.add("d-none")
        //Fait apparaître le button btnValidateCommand après le click
        btnValidateCommand.classList.remove("d-none")
        
        //Relie le lien backToProducts du html au javascript
        const backToProducts = document.getElementById("backToProducts")
        //Fais disparaître le lien backToProducts lors du click sur le bouton, donc lors de l'affichage du formulaire
        backToProducts.classList.add("d-none");
    })//Fin du addEventListener de btnValidateBasket
    
    
    //REGEX
    
    //Déclaration des différentes REGEX pour vérifier que les champs du formulaire sont remplis correctement
    
    //Fonction déclarant la regex name pour vérifier le format du prénom
    function checkFirstname(){
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const firstname = document.getElementById("firstname")
        //Regex pour les noms propres : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 35 caractères *
        //Ici on crée un nouvel objet RegExp, une des 2 méthodes d'écriture de Regex possible. Strictement équivalente à la regex de lastname
        var regexName = new RegExp("^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$", "g");
        //
        //Le if va vérifier que la regex (regexName) est respecté sur la valeur de l'input visé (firstname) avec la méthode test
        if(regexName.test(firstname.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le prénom est valide")
            return true;
        }
        else{
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du prénom !")
        }
    }
    
    //Fonction déclarant la regex name pour vérifier le format du nom
    function checkLastname(){
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const lastname = document.getElementById("lastname")
        //Regex pour les noms propres : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 35 caractères *
        //Ici on déclare directement la régex, une des 2 méthodes d'écriture de Regex possible. Strictement équivalente à la regex de firstname
        var regexName = /^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$/g
        //Le if va vérifier que la regex (regexName) est respecté sur la valeur de l'input visé (lastname) avec la méthode test
        if(regexName.test(lastname.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le nom est valide")
            return true;
        }
        else{
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du nom !")
        }
    }
    
    function checkEmail(){
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const email = document.getElementById("email")
        //Regex pour les emails : 
        var regexMail = new RegExp("^[a-zA-Z0-9\-_]{1,}[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]{1,}.[a-zA-Z]{2,}","gi")
        
        //        

        //Le if va vérifier que la regex (regexMail) est respecté sur la valeur de l'input visé (email) avec la méthode test
        if(regexMail.test(email.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("L'email est valide")
            return true;
        }
        else{
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du mail !")
        }
    }
    
    
    function checkAdress(){
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const adress = document.getElementById("adress")
        //Regex pour les adresses 
        var regexAdress = new RegExp("^([a-zA-ZÜ-ü0-9]+( [a-zA-ZÜ-ü0-9_\.\'\-\/]+)*){4,50}$", "g")
        
        //        

        //Le if va vérifier que la regex (regexAdress) est respecté sur la valeur de l'input visé (adress) avec la méthode test
        if(regexAdress.test(adress.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("L'adresse est valide")
            return true;
        }
        else{
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format de l'adresse !")
        }
        
    }
    
    
    
    
    //addEventListener sur le click du button btnValidateCommand, qui va appeler les fonctions de regex pour le formulaire
    btnValidateCommand.addEventListener("click", (event) => {
        event.preventDefault;
        
        checkFirstname();
        checkLastname();
        checkEmail();
        checkAdress();
    })
    
    
    
    
    
    
    
}//Fin de la function displayForm()














//Pour le moment fonction inutilisée, peut être implantée plus tard
/*
function displayBasketProducts(){
    const templateBasket = document.getElementById("templateBasket") //Récupère le template présent dans le HTML
    const cloneBasket = document.importNode(templateBasket.content, true) //Clone ce template
    
    //Envoie les données récupérées dans l'API directement dans le DOM aux #id correspondants
    cloneBasket.getElementById("product__name").textContent = basketContent.name
    cloneBasket.getElementById("product__description").textContent = basketContent.description
    cloneBasket.getElementById("product__price").textContent = showPrices(basketContent.price)
    cloneBasket.getElementById("product__img").src = basketContent.imageUrl
    cloneBasket.getElementById("product__img").alt = "Modèle appareil photo" + basketContent.name
     
    document.getElementById("productsInBasket").appendChild(cloneBasket) //Affiche les templates clonés en enfant de l'élément indiqué

}
*/





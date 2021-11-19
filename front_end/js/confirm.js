//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {
    displayConfirmationPage()
})()

//Fonction permettant d'afficher les éléments de la page confirmation
function displayConfirmationPage() {


    //Création de la const orderData, allant récupérer les informations de orderData dans le localStorage
    const orderData = JSON.parse(localStorage.getItem("orderData"))

    //Relie le html au javascript
    const confirmText = document.getElementById("confirmText")

    //Injecte le texte dans le html, avec des informations dynamiques fournies par orderData
    confirmText.innerHTML = `
    <div class="col my-5">
        <div class="container bg-white text-center">
            Bonjour <strong>${orderData.contact.firstName} ${orderData.contact.lastName}</strong>, et merci d'avoir passé une commande sur le site Orinoco ! <br/>
            Un email de confirmation vous a été adressé à <strong>${orderData.contact.email}</strong>, contenant les informations liées à votre commande d'un total de <strong>${orderData.totalPrice}</strong> (référence : <strong>${orderData.orderId}</strong>)
            Pour rappel, votre commande vous sera livrée à l'adresse suivante : <br/>
            <strong>${orderData.contact.address} <br/>
            ${orderData.contact.city}, ${orderData.contact.zipcode} <br/>
            ${orderData.contact.country}</strong> <br/>
            Merci pour votre confiance, et à bientôt sur Orinoco ! <br/>
            <a class="text-decoration-none" href="../index.html" id="goBackToIndex"><h3 class="text-primary py-2 d-inline-flex">Retourner à l'acceuil</h3></a>
        </div>
    </div>
    `

    //Relie le html au javascript
    const goBackToIndex = document.getElementById("goBackToIndex")

    //addEventListener sur le bouton goBackToIndex, vidant le localStorage de la commande
    goBackToIndex.addEventListener("click", (event) => {
        event.preventDefault;
        localStorage.clear()
    })
}
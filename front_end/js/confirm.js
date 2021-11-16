//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {
    displayConfirmationPage()
})()

//Fonction permettant d'afficher les éléments de la page confirmation
function displayConfirmationPage(){
    
    
    const orderData = JSON.parse(localStorage.getItem("orderData"))
    
    const confirmText = document.getElementById("confirmText")
    
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
    
    const goBackToIndex = document.getElementById("goBackToIndex")
    
    goBackToIndex.addEventListener("click", (event) => {
        event.preventDefault;
        localStorage.clear()
    })
}
class Alert
{

    /**
     *Creates an instance of Alert.
     * @memberof Alert
     */
    constructor()
    {
        this.alert = document.createElement("div");
        this.annulReserv = document.createElement("input");
        this.continuer = document.createElement("input");
        this.annuler = document.createElement("input");
        this.bouton = document.createElement("div");
    }

    baseAlertBox()
    {
        this.alert.id = "alert";
        this.alert.style.display ="flex";
        this.alert.style.flexDirection = "column";
        this.alert.style.textAlign = "center";
        this.alert.style.justifyContent = "center";
        this.alert.style.position = "absolute";
        this.alert.style.width = "50%";
        this.alert.style.marginLeft ="25%";
        this.alert.style.marginRight ="25%";
        this.alert.style.height = "125px";
        this.alert.style.backgroundColor = "white";
        this.alert.style.zIndex ="90";
        this.alert.style.borderRadius ="5%";
        this.alert.style.fontFamily = "Rokkitt";
        this.alert.style.border = " 5px solid green";
        var currentDiv = document.getElementById("voile");
        document.body.insertBefore(this.alert, currentDiv);
        this.bouton.style.display = "flex";
        this.bouton.style.flexDirection = "row";
        this.bouton.style.justifyContent = "space-around";
        document.getElementById('declenchement').style.display="flex";
    }

    buttonAnnuler()
    {
        this.annuler.id = "alertAnnuler";
        this.annuler.value = "annuler";
        this.annuler.type = "button";
        this.annuler.style.display = "flex";
        this.annuler.style.textAlign = "center";
        this.annuler.style.justifyContent = "center";
        this.annuler.style.width = "42%";
        this.annuler.style.height = "32px";
        this.annuler.style.marginTop = "15px";
        this.annuler.style.backgroundColor = "rgb(49, 163, 49)";
        this.annuler.style.border = "1px solid green";
        this.annuler.style.borderRadius = "4%";
        this.annuler.style.paddingLeft = "10px";
        this.annuler.style.zIndex ="100";
        this.bouton.appendChild(this.annuler);
    }

    buttonContinuer()
    {
        this.continuer.id = "alertContinuer";
        this.continuer.value = "continuer";
        this.continuer.type = "button";
        this.continuer.style.display = "flex";
        this.continuer.style.textAlign = "center";
        this.continuer.style.justifyContent = "center";
        this.continuer.style.width = "42%";
        this.continuer.style.height = "32px";
        this.continuer.style.marginTop = "15px";
        this.continuer.style.backgroundColor = "rgb(49, 163, 49)";
        this.continuer.style.border = "1px solid green";
        this.continuer.style.borderRadius = "4%";
        this.continuer.style.paddingLeft = "10px";
        this.continuer.style.zIndex ="100";
        this.bouton.appendChild(this.continuer);
    }

    buttonAnnulReserv()
    {
        this.annulReserv.id = "annulReserv";
        this.annulReserv.value = "OUI";
        this.annulReserv.type = "button";
        this.annulReserv.style.display = "flex";
        this.annulReserv.style.textAlign = "center";
        this.annulReserv.style.justifyContent = "center";
        this.annulReserv.style.width = "42%";
        this.annulReserv.style.height = "32px";
        this.annulReserv.style.marginTop = "15px";
        this.annulReserv.style.backgroundColor = "rgb(49, 163, 49)";
        this.annulReserv.style.border = "1px solid green";
        this.annulReserv.style.borderRadius = "4%";
        this.annulReserv.style.paddingLeft = "10px";
        this.annulReserv.style.zIndex ="100";
        this.bouton.appendChild(this.annulReserv);           
    }


    alertReservation()
    {
        this.baseAlertBox();
        this.alert.innerHTML = "Vous avez déjà une réservation, voulez-vous l'annuler ?";
        this.alert.style.bottom = "-90%";
        if(window.matchMedia("(max-width: 991px)").matches)
        {
            this.alert.style.bottom = "-50%";
        }
        this.alert.appendChild(this.bouton);
    }


    alertSignature()
    {
        this.baseAlertBox();
        this.alert.innerHTML = "Veuillez signer avant de continuer !";
        this.alert.style.top = "30%";
        this.alert.appendChild(this.bouton);
    }

    alertNomPrenom()
    {
        this.baseAlertBox()
        this.alert.innerHTML ="Veuillez rentrer votre nom ET prénom avant de continuer !"
        this.alert.style.top = "30%";
        this.alert.appendChild(this.bouton);
    }
}






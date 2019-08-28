class Storage
{

    /**
     *Creates an instance of Storage.
     * @memberof Storage
     */
    constructor()
    {
        this.nom = document.getElementById("nom");
        this.prenom = document.getElementById("prenom");
        this.compteur = document.getElementById("test");
        this.adresseSave = document.getElementById("adresse");
        this.nom_stationSave = document.getElementById("nom_station");
        this.validerInfos = document.getElementById('validerInfos');
        this.resetInfos = document.getElementById('resetInfos');
    }

    /* Méthode permettant la sauvegarde en local du nom et prénom si saisie, sinon message d'erreur */
    sauvegarde()
    {
        this.validerInfos.addEventListener('click', () => 
        {
            if(this.nom.value == "" && this.prenom.value == "")
            {
                var alert = new Alert();
                alert.alertNomPrenom();
                alert.buttonAnnuler();
            }
            else{
                localStorage.setItem('nom', this.nom.value);
                localStorage.setItem('prenom', this.prenom.value);
                document.getElementById("declenchement").style.display = "flex";
                document.getElementById("position_canvas").style.display = "flex";
                signature.resize();
                signature.reset();
            }
        })
    }
    
    /* Méthode chargeant le nom et prénom */
    chargement()
    {
        this.nom.value = localStorage.getItem('nom');
        this.prenom.value = localStorage.getItem('prenom');
    }

    /* Méthode permettant la suppression du nom et prénom sauvegardés */
    suppression()
    {
        this.resetInfos.addEventListener('click', () =>
        {
            localStorage.clear();
            this.nom.value = "";
            this.prenom.value = "";
        });
    }

    /* Méthode sauvegardeant en session l'adresse de la station selectionnée */
    sauvegardeSession()
    {
        sessionStorage.setItem('adresse', this.adresseSave.innerHTML);
    }

    /* Méthode permettant la suppression de la station enregistrée ainsi que le reset du Timer */
    suppressionSession()
    {
        horloge.resetTimer.addEventListener('click', function()
        {       
            horloge.time.style.display = "none";
            horloge.resetTimer.style.display = "none";
            horloge.clear();
            document.getElementById("station").style.display = "none";
        })
    }
}

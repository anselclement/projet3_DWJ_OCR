class Station {


    /**
     *Creates an instance of Station.
     * @param {*} adresse
     * @param {*} nom_station
     * @param {*} status
     * @param {*} nb_velos
     * @param {*} nb_rangement
     * @memberof Station
     */
    constructor(adresse, nom_station, status, nb_velos, nb_rangement)
    {
        this.adresse = adresse;
        this.nom_station = nom_station;
        this.status = status;
        this.nb_velos = nb_velos;
        this.nb_rangement = nb_rangement;
        this.affichage = document.getElementById('station');
        this.fermer = document.getElementById('fermer');
        this.transition = 100;
    }

    /* Méthode affichant les informations de la station sur laquelle nous avons cliqué */
   infosStation()
   {
        if(this.nb_velos >= 1 && this.status == "OPEN")
        {
            document.getElementById("adresse").innerHTML = this.adresse;
            document.getElementById("nom_station").innerHTML = this.nom_station;
            document.getElementById("status").innerHTML = this.status;
            document.getElementById("nb_velos").innerHTML = this.nb_velos;
            document.getElementById("nb_rangement").innerHTML = this.nb_rangement;
            this.apparitionStation();
        }
        else{
            if(this.nb_velos == 0 || this.status == "CLOSE")
            {
                this.apparitionFermer();
            }
        }  
    }

    apparitionStation()
    {
        this.affichage.style.display = "flex";
        this.fermer.style.display = "none";
    }

    apparitionFermer()
    {
        this.fermer.style.display = "flex";
        this.affichage.style.display = "none";
    }
}

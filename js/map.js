class Map {


    /**
     *Creates an instance of Map.
     * @param {*} latitude
     * @param {*} longitude
     * @param {*} zoom
     * @memberof Map
     */
    constructor(latitude, longitude, zoom){
        this.map = document.getElementById('map');
        this.latitude = latitude;
        this.longitude = longitude;
        this.zoom = zoom;
        this.nantes = null;
        this.marqueur = null;
        this.tableau = [];
        this.icones = {
            vert: {
                icon: 'images/icones/velo_vert.png'
            },
            rouge: {
                icon: 'images/icones/velo_rouge.png'
            }
        }
    };

    /* Méthode initialisant la map en utilisant l'objet Google Maps */
    initMap() 
    {
        this.nantes = new google.maps.Map(this.map, {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: this.zoom
        });
        
    };
    
    /* Permet l'ajout de marqueur sur la Map grâce à l'appel AJAX et l'API JCDecaux */
    ajoutMarqueur()
    {
        const appel = new Ajax();

        appel.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=021b8ebecfb88415523cef88c3e003df3845924b", () =>
        {
            appel.donnee.forEach( (station) => {
                if(station.available_bikes  == 0 || station.status == "CLOSE")
                {
                    this.marqueur = new google.maps.Marker({position: station.position, map: this.nantes, title: station.name, icon: this.icones.rouge.icon});
                }
                else{
                    this.marqueur = new google.maps.Marker({position: station.position, map: this.nantes, title: station.name, icon: this.icones.vert.icon});
                }
                this.tableau.push(this.marqueur);
                this.marqueur.addListener('click', () =>
                {
                    if(sessionStorage.getItem("adresse"))
                    {
                        var alert = new Alert();
                        alert.alertReservation();
                        alert.buttonAnnulReserv();
                        alert.buttonAnnuler();
                    }else{
                        var infos = new Station(station.address, station.name, station.status, station.available_bikes, station.available_bike_stands);
                        infos.infosStation();
                    }
                });
            });
            
            const markerCluster = new MarkerClusterer(this.nantes, this.tableau, {imagePath: 'images/marker/m'});
        });
    }
}
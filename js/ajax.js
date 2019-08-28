class Ajax {


    /**
     *Creates an instance of Ajax.
     * @memberof Ajax
     */
    constructor()
    {
        this.donnee;
        this.req = new XMLHttpRequest;
    }

    // Exécute un appel AJAX GET
    // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
    ajaxGet(url, callback) {
        this.req.open("GET", url);
        this.req.addEventListener("load",  () => {
            if (this.req.status >= 200 && this.req.status < 400) {

                this.donnee = JSON.parse(this.req.responseText);                
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(this);

            } else {
                console.error(this.req.status + " " + this.req.statusText + " " + url);
            }
        });
        this.req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        this.req.send(null);

    }

}

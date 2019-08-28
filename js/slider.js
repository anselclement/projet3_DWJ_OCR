class Slider {

    /**
     *Creates an instance of Slider.
     * @memberof Slider
     */
    constructor(){
        
        this.element = document.getElementById('slider');
        this.precedent = document.getElementById('previous');
        this.suivant = document.getElementById('next');
        this.pause = document.getElementById('stop');
        this.lecture = document.getElementById('play');
        this.position = 0;
        this.interval = null;
        
    };


    /* Méthode permettant de gérer l'événement précédent sur le slider,
    le -400 permet d'aller directement à la dernière slide depuis la première car 5 images au total */
    previous()
    {  
        this.precedent.addEventListener('click', () =>
        {
            if (this.element.style.left === "0%")
            {
                this.element.style.left = -400 + "%";
                this.position = -400;
            } else {
                this.position = this.position + 100;
                this.element.style.left = this.position + "%";
            }
        });
    };

    /* Méthode gérant l'événement suivant sur le slider,
    permet d'aller du dernier au premier slide */
    next()
    {
        this.suivant.addEventListener('click', () =>
        {
            if (this.element.style.left === "-400%")
            {
                this.element.style.left = 0 + "%";
                this.position = 0;
            } else {
                this.position = this.position - 100; 
                this.element.style.left = this.position + "%";
            }
        })
    };

    /* Méthode qui anime le slider en changeant d'images toutes les 5 secondes */
    defilement() 
    {
        this.interval = setInterval(() => {
            if (this.element.style.left === "-400%")
            {
                this.element.style.left = 0 + "%";
                this.position = 0;
            } else {
                this.position = this.position - 100; 
                this.element.style.left = this.position + "%";
            }
        }
        ,5000);
    };

    /* Méthode gérant l'action Stop qui arrête le défilement automatique du Slider */
    stop()
    {
        this.pause.addEventListener('click', () =>
        {
            clearInterval(this.interval);
            this.pause.style.display = "none";
        }) 
    };

    /* Méthode permettant le redémarrage du défilement automatique après arrêt */
    play()
    {
        this.lecture.addEventListener('click', () =>
        {
            this.defilement();
            diapo.pause.style.display = "flex";
        })
    }


    /* Méthode gérant les événements du clavier, qui sont les fléches gauche et droite */
    clavier()
    {
        document.addEventListener('keydown', (touche) =>
        {
            if(touche.keyCode === 37)
            {
                if (this.element.style.left === "0%")
                {
                    this.element.style.left = -400 + "%";
                    this.position = -400;
                } else {
                    this.position = this.position + 100;
                    this.element.style.left = this.position + "%";
                }
            } 
            else if(touche.keyCode === 39) 
            {
                if (this.element.style.left === "-400%")
                {
                    this.element.style.left = 0 + "%";
                    this.position = 0;
                } else {
                    this.position = this.position - 100; 
                    this.element.style.left = this.position + "%";
                }
            }
        });
    };

    
}

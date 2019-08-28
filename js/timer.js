class Timer
{

    /**
     *Creates an instance of Timer.
     * @memberof Timer
     */
    constructor() 
    {
        this.time = document.getElementById("time");
        this.minutes = document.getElementById("minutes");
        this.secondes = document.getElementById("secondes");
        this.resetTimer = document.getElementById('resetTimer');
        this.duration =  1200000; /*commentaire*/
        this.timer = null;
        this.mins = null;
        this.secs = null;
        this.decompte = null;
    }


    /* Méthode permettant d'afficher dynamiquement le décompte du timer */
    timer_visuel()
    {
        this.minutes.innerHTML = this.mins;
        this.secondes.innerHTML = this.secs;
        this.time.style.display = "flex";
        this.time.innerHTML = "Il reste " + this.minutes.innerHTML + " : " + this.secondes.innerHTML + " avant la fin de votre réservation qui se situe " + sessionStorage.getItem('adresse');
        this.resetTimer.style.display = "flex";
        document.getElementById("position_canvas").style.display = "none";
    }

    /* Méthode qui décompte toute les secondes dés que la réservation est effectuée pendant 20 mins */
    decremente()
    {
        let futurTime = new Date().getTime() + this.duration;
        this.timer = futurTime - new Date().getTime();
        this.mins = Math.floor(this.timer % (1000 * 60 * 60) / (1000 * 60));
        this.secs = Math.floor(this.timer % (1000 * 60) / 1000);
        sessionStorage.setItem('date', futurTime);
        document.getElementById('declenchement').style.display = "none";
        this.decompte = setInterval(() => {
            if(this.secs > 0)
            {
                this.timer_visuel();
                this.secs--;
            }
            else if(this.mins > 0 && this.secs == 0)
            {
                this.timer_visuel();
                this.mins--;
                this.secs = 59;
            }
            else if(this.mins == 0 && this.secs == 0)
            {
                horloge.time.style.display = "none";
                horloge.resetTimer.style.display = "none";
                horloge.clear();
                document.getElementById("station").style.display = "none";
            }
        }, 1000);
    }
  

    /* Méthode qui vérifie si il y a une réservation lors du refresh de la page et qui continue le décomtpe */
    verification()
    {
        if(sessionStorage.getItem("adresse"))
        {
            this.timer = sessionStorage.getItem("date") - new Date().getTime();
            this.mins = Math.floor(this.timer % (1000 * 60 * 60) / (1000 * 60));
            this.secs = Math.floor(this.timer % (1000 * 60) / 1000);
            this.timer_visuel();
            this.decompte = setInterval(() => {
                if(this.secs > 0)
                {
                    this.timer_visuel();
                    this.secs--;
                }
                else if(this.mins > 0 && this.secs == 0)
                {
                    this.timer_visuel();
                    this.mins--;
                    this.secs = 59;
                }
                else if(this.mins == 0 && this.secs == 0)
                {
                    horloge.time.style.display = "none";
                    horloge.resetTimer.style.display = "none";
                    horloge.clear();
                    document.getElementById("station").style.display = "none";
                }
            }, 1000);
        }
    }

    /* Méthode qui permet de reset le décompte ainsi que l'adresse */
    clear()
    {
        clearInterval(this.decompte);
        sessionStorage.clear();
    }

    
}


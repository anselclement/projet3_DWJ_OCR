class Canvas
{

    /**
     *Creates an instance of Canvas.
     * @memberof Canvas
     */
    constructor()
    {
       this.canvas = document.getElementById('canvas');
       this.paint = false;
       this.context = this.canvas.getContext('2d');
       this.mousePos = { x:0, y:0 };
       this.lastPos = this.mousePos;
       this.valider = document.getElementById("valider");
       this.resetbutton = document.getElementById("reset");
       this.compteur = 0;
    }


    
    /* Méthode qui permet de savoir quand il y a une pression sur le bouton de la souris */
    actionDown()
    {
        if(window.matchMedia("(min-width: 992px)").matches)
        {
            this.canvas.addEventListener('mousedown', () => 
            {
                this.paint = true;
                this.lastPos = this.getMousePos(this.canvas, 'mousedown');
                this.compteur++;
            })
        }
        else if(window.matchMedia("(max-width: 991px)").matches)
        {
            this.canvas.addEventListener('touchstart', (touchEvent) => 
            {
                touchEvent.preventDefault();
                this.paint = true;
                this.lastPos = this.getMousePos(this.canvas, 'touchstart');
                this.compteur ++;
                this.mousePos = this.getTouchPos(this.canvas, touchEvent);
            });
        }
    };

    /* Méthode qui permet de savoir quand la pression sur le bouton de la souris est relachée */
    actionUp()
    {
        if(window.matchMedia("(min-width: 992px)").matches)
        {
            this.canvas.addEventListener('mouseup', () => 
            {
                this.paint = false;
            })
        }
        else if(window.matchMedia("(max-width: 991px)").matches)
        {
            this.canvas.addEventListener('touchend', (touchEvent) =>
            {
                touchEvent.preventDefault();
                this.paint = false;
            });
        }
    };

    /* Méthode qui permet de tracer des traits sur la partie du canvas */
    draw()
    {
        if(window.matchMedia("(min-width: 992px)").matches)
        {
            this.canvas.addEventListener('mousemove', (mouseEvent) =>
            {
                this.mousePos = this.getMousePos(canvas, mouseEvent);
                if(this.paint == true)
                {
                    this.context.beginPath();
                    this.context.moveTo(this.lastPos.x, this.lastPos.y);
                    this.context.lineTo(this.mousePos.x, this.mousePos.y);
                    this.context.closePath();
                    this.context.stroke();
                    this.lastPos = this.mousePos;
                };
            })
        }
        else if(window.matchMedia("(max-width: 991px)").matches)
        {
            this.canvas.addEventListener('touchmove', (touchEvent) =>
            {
                touchEvent.preventDefault();
                this.mousePos = this.getTouchPos(canvas, touchEvent);
                if(this.paint == true)
                {
                    this.context.beginPath();
                    this.context.moveTo(this.lastPos.x, this.lastPos.y);
                    this.context.lineTo(this.mousePos.x, this.mousePos.y);
                    this.context.closePath();
                    this.context.stroke();
                    this.lastPos = this.mousePos;
                };
            })
        }
    };

    /* Méthode réinitialisant le canvas donc suppression des trait effectués auparavant */
    reset()
    {
        this.resetbutton.addEventListener('click', () =>
        {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.compteur = 0;
        })
    }

    /* Méthode permettant de savoir la position de la souris sur le canvas */
    getMousePos(canvasDom, mouseEvent)
    {
        var rect = canvasDom.getBoundingClientRect(); 
        return {
            x:mouseEvent.clientX - rect.left,
            y:mouseEvent.clientY - rect.top
        };
    };

    /* Méthode permettant de savoir la position du doigt sur l'écran tactile */
    getTouchPos(canvasDom, touchEvent)   
    {
        var rect = canvasDom.getBoundingClientRect();
        return {
            x:touchEvent.touches[0].clientX - rect.left,
            y:touchEvent.touches[0].clientY - rect.top
        }
    }

    /* Méthode permettant de vérifier si il y a eu une signature sur la canvas */
    hasSignature()
    {
        this.valider.addEventListener('click', () =>
        {
            if(this.compteur == 0)
            {
                document.getElementById("position_canvas").style.display = "none";
                var alert = new Alert();
                alert.alertSignature();
                alert.buttonContinuer();
            }
            else
            {
                sauvegarde.sauvegardeSession();
                horloge.decremente();
                this.scroll_verticale();
            }
        })
    }

    /* Méthode qui scroll tout en bas de la page quand le timer se déclenche */
    scroll_verticale()
    {
        setTimeout( () => 
        {
            window.scrollTo(0,document.body.scrollHeight);
        }, 1000);
    }

    /* Méthode qui redéfinie la taille du canvas */
    resize()
    {
        if(window.matchMedia("(max-width: 767px)").matches)
        {
            this.canvas.setAttribute("width", 300);
            this.canvas.setAttribute("height", 180);
        }
    }
}

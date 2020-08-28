//initialize default functions
const initImageCursor = new Cursor();
const readyHome = new initHome();
const initList = new listItemsShow();

//function used in barba lifecycle to control the effects durations
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


//barba lifecycle
barba.init({
    debug: true,
    transitions: [
    {
        name: 'to-pages',
        async leave(data){
            const done = this.async();
            pageTransitionToPage(data.next.namespace);
            await delay(1300);
            done();
        },
        async enter() {
            contentAnimationToPage();
        },
        from: {
            namespace: 'home',
        },
        to: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
    },
    {
        name: 'to-home',
        async leave(){
            const done = this.async();
            pageTransitionToHome();
            await delay(1000);
            done();
        },
        async enter(data) {
            contentAnimationToHome(data.current.namespace);
        },
        async after(data){
            listItemsShow();
            Cursor()
        },
        from: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
        to: {
            namespcae: 'home'
        }
    },
    ]
});


//home list show effect
function initHome(){
    gsap.from('li.list-item a', {y: 170, duration: .8, display: 'block', stagger: 0.2, ease: "power2.out" })
}

function pageTransitionToPage(arg){

    document.querySelector('.image-container').classList.remove('mouse');

    gsap.to('.home-left-container div', {opacity: 0, duration: 0.3});
    gsap.to('li.list-item a', {y: 170, duration: .8, display: 'block', stagger: 0.2, delay: 0.3,  ease: "power2.out" });

    switch (arg) {
        case 'about':
            gsap.to('.image-container:nth-child(1)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            break;
        case 'products':
            gsap.to('.image-container:nth-child(2)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            break;
        case 'contacts':
            gsap.to('.image-container:nth-child(3)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            break;
        case 'portfolio':
            gsap.to('.image-container:nth-child(4)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out"  } )
            break;
    }
    
}

function contentAnimationToPage(){
    gsap.from('div.row h1', {y: 170, duration: .8, display: 'block', stagger: 0.2,  ease: "power2.out" });
    gsap.from('div.nav a', {y: 170, duration: .8, display: 'block', delay: .8});
}

function pageTransitionToHome(){
    gsap.to('div.row h1', {y: 170, duration: .8, display: 'block', stagger: 0.2, delay: .3,  ease: "power2.out" });
    gsap.to('div.nav a', {y: 170, duration: 1, display: 'block',});
}

function contentAnimationToHome(arg){
    gsap.from('li.list-item a', {y: 170, duration: .8, display: 'block', stagger: 0.2,  ease: "power2.out" });

    document.querySelector('.image-container').classList.add('mouse');

    switch (arg) {
        case 'about':
            gsap.fromTo('.image-container:nth-child(1)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(1)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'products':
            gsap.fromTo('.image-container:nth-child(2)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(2)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'contacts':
            gsap.fromTo('.image-container:nth-child(3)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(3)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'portfolio':
            gsap.fromTo('.image-container:nth-child(4)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(4)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
    }
    gsap.from('.home-left-container div', {y: 1000, duration: .8, display: 'block', stagger: 0.2, delay: 0.5, ease: "power2.out"});
}

//home list show cursor image effects
function listItemsShow(){

    let items = document.querySelectorAll('.list-item');
    let links = document.querySelectorAll('a');
    let images = document.querySelectorAll('.image-container');

    for (let i = 0; i < items.length; i++) {
        
        items[i].addEventListener('mouseover', function(){

            switch (this.value) {
                case 0:
                    images[0].classList.add("img-reveal");
                    links[0].style.color = "white";
                    links[0].classList.add('right-margin');
                    break;
                case 1:
                    images[1].classList.add("img-reveal");
                    links[1].style.color = "white";
                    links[1].classList.add('right-margin');
                    break;
    
                case 2:
                    images[2].classList.add("img-reveal");
                    links[2].style.color = "white";
                    links[2].classList.add('right-margin');
                    break;
                case 3:
                    images[3].classList.add("img-reveal");
                    links[3].style.color = "white";
                    links[3].classList.add('right-margin');
                    break;
            }
        })

        items[i].addEventListener("mouseleave", function(){
            switch (this.value) {
                case 0:
                    images[0].classList.remove("img-reveal");
                    links[0].style.color = "black";
                    links[0].classList.remove('right-margin');
                    break;
                case 1:
                    images[1].classList.remove("img-reveal");
                    links[1].style.color = "black";
                    links[1].classList.remove('right-margin');
                    break;
                case 2:
                    images[2].classList.remove("img-reveal");
                    links[2].style.color = "black";
                    links[2].classList.remove('right-margin');
                    break;
                case 3:
                    images[3].classList.remove("img-reveal");
                    links[3].style.color = "black";
                    links[3].classList.remove('right-margin');
                    break;
            }
        }) 
    }
}

//image cursor effect
function Cursor(){
   
    var $cursor = document.querySelectorAll('.mouse');

    function moveCursor(e) {

        for (let i = 0; i < $cursor.length; i++) {
            gsap.to($cursor[i], 0.23, {
                left: e.pageX - 200,
                top: e.pageY -300,
                ease: Power4.easOut
            });
            
        }   

    }

    addEventListener('mousemove', moveCursor);
}





const initFunctionality = new initFunctions();

$(window).ready(initHome);

function initHome(){
    gsap.from('li.list-item a', {y: 100, duration: .8, display: 'block', stagger: 0.2})
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


function pageTransitionToPages(){
    gsap.to('li.list-item a', {y: 100, duration: .8, display: 'block', stagger: 0.2});
    $('.image-container').removeClass('mouse');
    gsap.to('.image-container:nth-child(1)',{opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 } )
}

function contentAnimation(){
    gsap.from('div.row h1', {y: 100, duration: .8, display: 'block', stagger: 0.2});
    gsap.from('div.nav a', {y: 100, duration: .8, display: 'block', delay: .8});
}

function pageTransitionToHome(){
    gsap.to('div.row h1', {y: 100, duration: .8, display: 'block', stagger: 0.2, delay: .3});
    gsap.to('div.nav a', {y: 100, duration: 1, display: 'block',});
    $('.image-container').removeClass('mouse');
}

function contentAnimationToHome(){
    gsap.from('li.list-item a', {y: 100, duration: .8, display: 'block', stagger: 0.2});
    $('.image-container').addClass('mouse');

    gsap.fromTo('.image-container:nth-child(1)',
    {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
    {opacity: 0, width: 400 } 
    )

    
    gsap.from('.image-container:nth-child(1)',
    {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
    })
}

$(function(){
    barba.init({
        debug: true,
        transitions: [{
            name: 'to-pages',
            async leave(data){
                const done = this.async();
                
                pageTransitionToPages();
                await delay(1000);
                done();
            },
            async enter(data) {
                contentAnimation();
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
            async leave(data){
                const done = this.async();
                
                pageTransitionToHome();
                await delay(1000);
                done();
            },
            async enter(data) {
                contentAnimationToHome();
                
            },
            async after(data){
                listItemsShow();
                initFunctions()
            },
            from: {
                namespace: [
                    'about',
                    'product',
                    'contacts',
                    'portfolio'
                ]
            },
            to: {
                namespcae: ['home']
            }
          },
        ]
    });
    
})

function listItemsShow(){
    $('.list-item').on("mouseover", function(){
        $('a',this).css("color", "white")
        $(this).addClass('right-margin');
        switch ($(this).val()) {
            case 0:
                $(".image-container:nth-child(1)").addClass("img-reveal")
                break;
            case 1:
                $(".image-container:nth-child(2)").addClass("img-reveal")
                break;

            case 2:
                $(".image-container:nth-child(3)").addClass("img-reveal")
                break;
            case 3:
                $(".image-container:nth-child(4)").addClass("img-reveal")
                break;
        }
    });

    $('.list-item').on("mouseleave", function(){
        $('a',this).css("color", "black")
        $(this).removeClass('right-margin');
        switch ($(this).val()) {
            case 0:
                $(".image-container:nth-child(1)").removeClass("img-reveal")
                break;
            case 1:
                $(".image-container:nth-child(2)").removeClass("img-reveal")
                break;

            case 2:
                $(".image-container:nth-child(3)").removeClass("img-reveal")
                break;
            case 3:
                $(".image-container:nth-child(4)").removeClass("img-reveal")
                break;
        }
    })
}

$(document).ready(listItemsShow());

function initFunctions(){
    //Cursor 
    var $cursor = $('.mouse');
        
    function moveCursor(e) {
            
        gsap.to($cursor, 0.23, {
            left: e.pageX - 200,
            top: e.pageY -300,
            ease: Power4.easOut
            
        });

    }

    $(window).on('mousemove', moveCursor);

}


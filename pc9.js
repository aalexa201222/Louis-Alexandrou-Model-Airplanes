document.addEventListener("DOMContentLoaded",function(event){
    const menu=document.querySelector('#mobile-menu');
    const menuLinks =document.querySelector('.navbar__menu');
    
    function dropdow(event){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
    menu.addEventListener('click',dropdow);
    
    
// ANIMATION

console.log("saini")
if(window.screen.width>500){
    var tl= new TimelineMax({onUpdate:updatePercentage}); //{onUpdate:updatePercentage} for scrollbased animations
    var tl2= new TimelineMax({onUpdate:updatePercentage});
    var tl3= new TimelineMax({onUpdate:updatePercentage});
    const controller= new ScrollMagic.Controller();



    tl.from("#pic1",1,{x:-200, opacity:0});
    tl.from("#speech",1,{x:200, opacity:0});
    tl2.from("#pic2",1,{x:-200, opacity:0});
    tl2.from("#speech2",1,{x:200, opacity:0});
    tl3.from("#pic3",1,{x:-200, opacity:0});
    tl3.from("#speech3",1,{x:200, opacity:0});

        console.log("first ");
        const scene = new ScrollMagic.Scene({
            triggerElement: ".triker",          //possition to trigger element
        })

            .setTween(tl)
            .addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: ".triker2",          //possition to trigger element
        })
            
            .setTween(tl2)
            .addTo(controller);
        const scene3 = new ScrollMagic.Scene({
            triggerElement: ".triker3",          //possition to trigger element
            })
                
            .setTween(tl3)
                .addTo(controller);
        function updatePercentage(){
                // if(window.innerWidth<=600)
                console.log("window.innerWidth ");
                tl.progress();
            // console.log(tl.progress());

    }
}
});


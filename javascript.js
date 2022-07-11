const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //toggel nav
    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active");
        //animate links
        navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        }
        });
        if (nav.style.animation){
            nav.style.animation = "";
        }
        else{
            nav.style.animation = `navPanelFade 0.5s ease forwards`;
        }
        
        
    });
    
}

//const app = ()=>{
//    navSlide();
//}

navSlide();
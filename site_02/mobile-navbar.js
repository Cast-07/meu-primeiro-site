class MobileNavbar {
    constructor() {
      this.mobileMenu = document.querySelector(this.mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(this.navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation
                ? ""
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    }



    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
        
    Infinity(){
       if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
  }
}

const  mobileNavBar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
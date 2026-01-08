
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled'); 
    }
});
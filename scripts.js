document.addEventListener('DOMContentLoaded', function() {
    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var skills = document.getElementById('skills');
    var contact = document.getElementById('contact');

    home.scrollIntoView();

    document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function(event) {
        event.preventDefault();
        about.scrollIntoView();
    });

    document.querySelector('nav ul li a[href="#skills"]').addEventListener('click', function(event) {
        event.preventDefault();
        skills.scrollIntoView();
    });

    document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function(event) {
        event.preventDefault();
        contact.scrollIntoView();
    });
});
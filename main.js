document.addEventListener("DOMContentLoaded", function() {
    const routes = {
        "/": "/home.html",
        "/work": "/work.html",
        "/about": "/about.html",
        "/contact": "/contact.html"
    };

    const contentDiv = document.getElementById("content");

    function navigateTo(route) {
        fetch(routes[route])
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
                new WOW().init();
            })
            .catch(err => {
                console.error('Error loading page:', err);
                contentDiv.innerHTML = "<h1>Page Not Found</h1>";
            });
    }

    window.onpopstate = function(event) {
        if (event.state && event.state.route) {
            navigateTo(event.state.route);
        }
    };

    document.querySelectorAll("nav a, #resize ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const route = this.getAttribute("href");
            history.pushState({ route }, "", route);
            navigateTo(route);
        });
    });

    navigateTo(window.location.pathname);
});

const urlPageTitle = "Jahari's Portfolio"

document.addEventListener('click', (e) => {
    const {target} = e;
    if(!target.matches("nav")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/404.html",
        title: urlPageTitle,
        description: "Page not found"
    },
    "/": {
        template: "/index.html",
        title: urlPageTitle,
        description: "This is the homepage"
    },
    "/about": {
        template: "/about.html",
        title: urlPageTitle,
        description: "This is the about us page"
    },
    "/work": {
        template: "/work.html",
        title: urlPageTitle,
        description: "This is the work page"
    },
    "/contact": {
        template: "/contact.html",
        title: urlPageTitle,
        description: "This is the contact page"
    },
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    urlLocationHandler();
}


const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/"
    }

    const route = urlRoutes[location] || urlRoutes[404]
    const html = await fetch(route.template).then((response)=>
    response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);



};


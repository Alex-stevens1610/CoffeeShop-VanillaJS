
const Router = {
    init: () => {

        //Add listeners to navlinks
        document.querySelectorAll("a.navlink").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.getAttribute('href');
                Router.go(url)
            })
        })

        //Url Change event listener
        window.addEventListener('popstate', (event) => {
            Router.go(event.state.route, false)
        })

        //Handle initial route being deep URL
        Router.go(location.pathname)

    },
    go: (route, addToHistory = true) => {
        console.log(`Navigating to ${route}`)

        if (addToHistory){
            history.pushState({ route }, null, route)
        }

        let pageElement = null;
        switch(route){
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
                if (route.startsWith("/product-")){
                    pageElement.createElement("details-page");
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.productId = paramId
                }
        }

        const cache = document.querySelector("main");
        if (pageElement == null){
            pageElement = document.createElement("h1")
            pageElement.textContent = "404"
        }


        cache.innerHTML = "";
        cache.appendChild(pageElement);
        window.scrollX = 0;
        window.scrollY = 0;






    }
}

export default Router
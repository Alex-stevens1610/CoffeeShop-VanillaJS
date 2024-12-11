import Store from './services/store.js';
import Api from './services/api.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

//Linking Custom Web Components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import { ProductItem } from './components/ProductItem.js';
import { CartItem } from './components/CartItem.js';



customElements.define("menu-page", MenuPage);
customElements.define("details-page", DetailsPage);
customElements.define("order-page", OrderPage); 
customElements.define("product-item", ProductItem);
customElements.define("cart-item", CartItem);



window.app = {
    store: Store,
    api: Api,
    router: Router,
}

window.addEventListener('DOMContentLoaded', async () => {
    loadData();
    app.router.init();
}) 

window.addEventListener("appcartchange", (event) => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, curr) => (
        acc + curr.quantity
    ), 0)
    
    badge.textContent = qty;
    badge.hidden = qty == 0;
})
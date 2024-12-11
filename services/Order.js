import { getProductById } from "./Menu.js";

export async function addToCart(id){

    const product = await getProductById(id);

    const results = app.store.cart.filter((item) => item.product.id == id)
    if (results.length == 1){
        //Already in cart
        app.store.cart = app.store.cart.map((p) => (
            p.product.id == id 
            ? { ...p, quantity: p.quantity + 1 } 
            : p

        ))
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }]

    }



}

export async function removeFromCart(id){
    app.store.cart = app.store.cart.filter((product) => product.product.id != id)
}
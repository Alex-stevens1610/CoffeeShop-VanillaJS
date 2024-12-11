import Api from "./api.js";

export async function loadData(){
    const menu = await Api.fetchMenu();
    app.store.menu = menu;
}

export async function getProductById(id){
    if (app.store.menu == null){
        await loadData();
    } 

    for (let category of app.store.menu){
        for (let product of category.products){
            if (product.id == id){
                return product;
            }
        }
    }
    return null
}
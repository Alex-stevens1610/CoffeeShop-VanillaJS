import Api from "./api.js";

const Store = {
  menu: null,
  cart: [],
  api: Api,
};

const proxiedStore = new Proxy(Store, {
    set(target, property, value){

        //Could Implement Validation if necessary
        let condition = false;
        if (condition){
            return false
        }

        //Reassign Value
        target[property] = value;

        //Maybe only dispatch event change if newValue != oldValue

        if (property == "menu"){
            window.dispatchEvent(new Event("appmenuchange"));
        }
        if (property == "cart"){
            window.dispatchEvent(new Event("appcartchange"));
        }

        return true;

    }
})

export default proxiedStore;

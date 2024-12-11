
export const Api = {
    url: "data/menu.json",
    fetchMenu: async () => {
        let response = await fetch(Api.url);
        let result = await response.json();
        return result
    }
}


export default Api
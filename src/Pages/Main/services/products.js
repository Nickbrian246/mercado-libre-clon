const BASE_URL = process.env.REACT_APP_API_KEY
console.log(BASE_URL);

/**
 * 
 * @param {amount of Product that would be requested} howManyProduct 
 * @returns array of products 
 */
export const fetchGroupOfProducts = async (howManyProduct) => {
    try {
        let defaultProducts = howManyProduct ?? 45 
        const data = await fetch(`https://fakestoreapi.com/products?limit=${defaultProducts}`);
        const response = await data.json()
        return response     
    } catch (error) {
        console.log(error);
    }
}
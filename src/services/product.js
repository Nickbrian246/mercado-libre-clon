const BASE_URL = process.env.REACT_APP_API_KEY
export async function fetchProductWithId (productId){
    try {
        const data = await fetch(`${BASE_URL}/products/${productId}`);
        const response = await data.json()
        return response
    } catch (error) {
        throw error
    }
}
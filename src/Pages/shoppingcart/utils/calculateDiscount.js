export function calculateDiscount(porcentage, price) {
 return  Math.abs((((porcentage /100) * price)- price)).toFixed(2)
}
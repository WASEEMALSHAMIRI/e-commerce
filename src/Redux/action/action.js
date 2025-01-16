import { addItem, addproduct, delitem } from "./typeactoin"

// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:addproduct,
        payload:product
    }
}
export const additem = (item) =>{
    return {
        type:addItem,
        payload:item
    }
}


export const delCart = (item) =>{
    return {
        type:delitem,
        payload:item
    }
}
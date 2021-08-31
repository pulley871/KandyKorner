import React from "react"
import { PostCandyOrder } from "../ApiManager"
export const InventoryList = ({product}) =>{
    const purchaseCandy = (event)=>{
        const [candyId, candyTypeId] = event.target.value.split("--")
        const candyObject = {
            customerId : parseInt(localStorage.getItem("kandy_customer")),
            productId : parseInt(candyId),
            productTypeId : parseInt(candyTypeId)
        }
        PostCandyOrder(candyObject)
    }
    return (<div className="container bg-light"key={`product--${product?.id}`}>
    <h3 className="fw-bolder text-white bg-info"key={`productname--${product?.id}`}>{product?.name}</h3>
    <button value={`${product?.id}--${product.productType?.id}`} onClick={purchaseCandy}>Purchase</button>
    <p className="productType fw-bold"key={`productType--${product.productType?.id}`}>Product Type: {product.productType?.name}</p>
    
    <h4 key={`productsoldatstores--${product?.id}`}>Stores that sell {product?.name}</h4>
    
</div>)
}
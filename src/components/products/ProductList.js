import React, {useEffect, useState} from "react";
import { ProductsByStore } from "./ProductsByStore";
import "./ProductList.css"
export const ProductList = ()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8088/products?_expand=productType&_sort=productTypeId')
        .then(res=> res.json())
        .then((data)=> setProducts(data))
    },
    [])
    const purchaseCandy = (event)=>{
        const [candyId, candyTypeId] = event.target.value.split("--")
        debugger
        const candyObject = {
            customerId : parseInt(localStorage.getItem("kandy_customer")),
            productId : parseInt(candyId),
            productTypeId : parseInt(candyTypeId)
        }
        fetch(`http://localhost:8088/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candyObject)
        })
            
    }
    return (
        <>
        <h1>Product List</h1>
        {products.map((product)=>{
            return <div className="container bg-light"key={`product--${product.id}`}>
                        <h3 className="fw-bolder text-white bg-info"key={`productname--${product.id}`}>{product.name}</h3>
                        <button value={`${product.id}--${product.productType.id}`} onClick={purchaseCandy}>Purchase</button>
                        <p className="productType fw-bold"key={`productType--${product.productType.id}`}>Product Type: {product.productType.name}</p>
                        
                        <h4 key={`productsoldatstores--${product.id}`}>Stores that sell {product.name}</h4>
                        <ProductsByStore key={product.id} productId={product.id} />
            </div>
        })}
        </>
    )
}
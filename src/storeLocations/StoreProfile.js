import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { StoreEmployees } from "./employees/StoreEmployees"

export const StoreProfile = () =>{
    const [store, setStore]= useState([])
    const [products, setProducts]= useState([])
    const {storeId} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:8088/locations/${storeId}`)
        .then((res)=> res.json())
        .then((data)=> setStore(data))
    },
    [])
    useEffect(()=>{
        fetch(`http://localhost:8088/productsByLocations?locationId=${store.id}&_expand=product`)
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },
    [store])
    return (
        <div className="container bg-light"key={`store--${store.id}`}>
            <h1 key={`storename--${store.id}`}>{store.city}</h1>
            <h3><u>Products Sold at Location</u></h3>
            <ul>
                {products.map((item)=> <li className="list-group-item list-group-item-action"key={`storeproduct--${item.id}`}>{item.product?.name}</li>)}
            </ul>
            <StoreEmployees id={store.id}/>
        </div>
    )
}
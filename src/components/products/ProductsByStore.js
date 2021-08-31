import React, {useEffect, useState} from "react";
import { FetchProductsByStore } from "../ApiManager";
import { Link } from "react-router-dom"

export const ProductsByStore = (props) =>{
    const [products, setProducts] = useState([])
    useEffect(
        ()=>{
            FetchProductsByStore(props)
            .then((data)=> setProducts(data))
        },
        [])
    return(
        <>
            <div>
                {products.map((product)=>{
                    return <Link className="list-group-item list-group-item-action"key={`productlink--${product.location.id}`}to= {`/stores/${product.location.id}`}>{product.location.city}</Link>
                })}
            </div>
        </>
    )
}
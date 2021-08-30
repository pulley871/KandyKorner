import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"

export const ProductsByStore = (props) =>{
    const [products, setProducts] = useState([])
    useEffect(
        ()=>{
            fetch(`http://localhost:8088/productsByLocations?productId=${props.productId}&_expand=location`)
            .then(res => res.json())
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
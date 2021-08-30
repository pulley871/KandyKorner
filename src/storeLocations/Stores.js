import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Stores.css"
export const StoresList = () =>{
    const[stores, setStores]= useState([])

    useEffect(
        ()=>{
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((data)=>{
                setStores(data)
            })
        },
        []
        )
        
    return (
        <>
        <h1>Store List</h1>
        {stores.map((store)=>{
            return <div className="container bg-light"key={`store--${store.id}`}><Link key={`storeName--${store.id}`}to={`/stores/${store.id}`}><h2>{store.city}</h2></Link>
                    <ul key={`storeInfo--${store.id}`}>
                        <li className="list-group-item list-group-item-action"key={`address--${store.id}`}>{store.address}</li>
                        <li className="list-group-item list-group-item-action"key={`phone--${store.id}`}>{store.phoneNumber}</li>
                    </ul></div>
        })}
        </>
    )
}


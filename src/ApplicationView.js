import React from "react"
import {Route} from "react-router-dom"
import { CustomerList } from "./components/customers/CustomerList"
import { Purchases } from "./components/customers/userPurchases/Purchases"
import { ProductList } from "./components/products/ProductList"
import { StoreProfile } from "./storeLocations/StoreProfile"
import { StoresList } from "./storeLocations/Stores"


export const ApplicationViews = ()=>{
    return (
        <>
            
                
            
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path ="/stores">
                <StoresList />
            </Route>
            <Route  path ="/stores/:storeId(\d+)">
                <StoreProfile />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/purchases">
                <Purchases />
            </Route>
        </>
    )
}
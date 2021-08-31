import React, {useEffect, useState} from "react"
import { fetchPurchasesByUserId } from "../../ApiManager"


export const Purchases = ()=>{
    const userId = localStorage.getItem("kandy_customer")
    const [purchases, setPurchases] = useState([])
    const [customerTotals, setTotals] = useState(new Map())
    
    //let totals = new Map()
    
    useEffect(()=>{
        fetchPurchasesByUserId(userId)
        .then((data)=> setPurchases(data))
    },[])
    const createLineItem= ()=>{
        const totals = new Map()
        for (const purchase of purchases){
            if (totals.has(purchase.product.name)){
                totals.get(purchase.product.name).total++
                totals.get(purchase.product.name).price += totals.get(purchase.product.name).total
            }else{
                totals.set(purchase.product.name,{total: 1, price: purchase.product.price})
            }
        }
       
        return totals
        
    }
    useEffect(() => {
        setTotals(createLineItem())
        
        
        
    }, [purchases])
    
    return (
        <>
        <h1>Your Purchases</h1>
        <div id="purchasetotals">
            <table className="table table-hover"><thead><tr><th >Product</th><th>Total Purchases</th><th>Total Spent</th></tr></thead>
            <tbody>
        {
            [...customerTotals].map(([key,value])=>{
                return ((<tr><td>{key}</td><td>{value.total}</td><td>${value.price}</td></tr>))
            })
        }
        </tbody>
        </table>
        </div>
        </>
    )
}
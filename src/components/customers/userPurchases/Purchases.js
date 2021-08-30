import React, {useEffect, useState} from "react"


export const Purchases = ()=>{
    const userId = localStorage.getItem("kandy_customer")
    const [purchases, setPurchases] = useState([])
    let totals = new Map()
    console.log(totals)
    useEffect(()=>{
        fetch(`http://localhost:8088/purchases?customerId=${userId}&_expand=product&_expand=productType`)
        .then((res)=>res.json())
        .then((data)=> setPurchases(data))
    },[])
    const createLineItem= ()=>{
        for (const purchase of purchases){
            if (totals.has(purchase.productId)){
                totals.get(purchase.productId).total++
            }else{
                totals.set(purchase.productId,{total: 1, price: purchase.product.price})
            }
        }
        //totals = [...totals.values()]
        
    }
    useEffect(() => {
        createLineItem()
        console.log(totals.entries())
    }, [purchases])
 
    return (
        <>
        <h1>Your Purchases</h1>
        {totals?.entries().next().total}
        </>
    )
}
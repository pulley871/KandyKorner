import React, {useEffect, useState} from "react"


export const Purchases = ()=>{
    const userId = localStorage.getItem("kandy_customer")
    const [purchases, setPurchases] = useState([])
    const [customerTotals, setTotals] = useState(new Map())
    const [html, setHtml] = useState([])
    //let totals = new Map()
    
    useEffect(()=>{
        fetch(`http://localhost:8088/purchases?customerId=${userId}&_expand=product&_expand=productType`)
        .then((res)=>res.json())
        .then((data)=> setPurchases(data))
    },[])
    const createLineItem= ()=>{
        const totals = new Map()
        for (const purchase of purchases){
            if (totals.has(purchase.product.name)){
                totals.get(purchase.product.name).total++
            }else{
                totals.set(purchase.product.name,{total: 1, price: purchase.product.price})
            }
        }
        //totals = [...totals.values()]
        return totals
        
    }
    const generateHtml = ()=>{
        let htmlstring = []
        for (const [key, value] of customerTotals.entries()){
            htmlstring.push(<h2>{key} || {value.total}</h2>)
        }
        return htmlstring
    }
    useEffect(() => {
        setTotals(createLineItem())
        
        
        
    }, [purchases])
    useEffect(() => {
        setHtml(generateHtml)
        console.log(html)
        console.log(customerTotals)
    }, [customerTotals])
    return (
        <>
        <h1>Your Purchases</h1>
        <div id="purchasetotals">
        {html?.map((item)=>{
            return (item)
        })
        
        
        /* {customerTotals.forEach(({value}, {key})=>{
            return (<h2>{key} || {value?.price} || {value?.total}</h2>)
            //console.log(`${key}|| price: ${value.price} || total purchased ${value.total}`)
        })} */}
        </div>
        </>
    )
}
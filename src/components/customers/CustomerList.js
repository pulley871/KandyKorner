import React, {useState, useEffect} from "react"


export const CustomerList = ()=>{
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])
    const [customersWithTotals, setCustomersWithTotals]= useState([])
    const fetchPurchases = ()=>{
        fetch("http://localhost:8088/purchases")
        .then(res=>res.json())
        .then((data)=> setPurchases(data))
    }
    const fetchCustomers = ()=>{
        fetch("http://localhost:8088/customers")
        .then(res=>res.json())
        .then((data)=> setCustomers(data))
    }
    useEffect(()=>{
        fetchCustomers()
        fetchPurchases()
    }
    ,[])
    useEffect(()=>{

        
        const customersArr = customers
        const customerWithTotalsArr = customersArr.map((customer)=>{
            const totalPurchases = purchases.filter((purchase)=> purchase.customerId === customer.id).length
            customer.total = totalPurchases
            return customer
        })
        
         setCustomersWithTotals(customerWithTotalsArr.sort((a,b) => b.total - a.total))
        
    },[purchases])
    return (
        <div>
            <h1> Customer List</h1>
            <table><tr><th>Customer Name</th><th>Products Bought</th></tr>{customersWithTotals.map((customer)=>{
                return (<tr key={`customerrow--${customer.id}`}><td key={`customername--${customer?.id}`}>{customer?.name}</td><td key={`customertotal--${customer?.id}`}>{customer?.total}</td></tr>)
            })}</table>
        </div>
    )
}
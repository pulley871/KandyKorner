import React, {useState, useEffect} from "react"
import { fetchCustomers, fetchPurchases } from "../ApiManager"


export const CustomerList = ()=>{
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])
    const [customersWithTotals, setCustomersWithTotals]= useState([])
    
    useEffect(()=>{
        fetchCustomers()
        .then(data=> setCustomers(data))
    }
    ,[])
    useEffect(()=>{
        fetchPurchases()
        .then(data=> setPurchases(data))
    },[customers])
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
            <table className="table table-hover"><thead><tr><th>Customer Name</th><th>Products Bought</th></tr></thead><tbody>{customersWithTotals.map((customer)=>{
                return (<tr key={`customerrow--${customer.id}`}><td key={`customername--${customer?.id}`}>{customer?.name}</td><td key={`customertotal--${customer?.id}`}>{customer?.total}</td></tr>)
            })}</tbody></table>
        </div>
    )
}
export const getAllCustomers = ()=>{

}
//Product Componenets Fetch Calls
export const FetchProductsByStore = (props)=>{
    return fetch(`http://localhost:8088/productsByLocations?productId=${props.productId}&_expand=location`)
    .then(res => res.json())
}
export const FetchProductsWithTypeSortedById = ()=>{
    return fetch('http://localhost:8088/products?_expand=productType&_sort=productTypeId')
        .then(res=> res.json())
}
export const PostCandyOrder = (object)=>{
    return fetch(`http://localhost:8088/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
}

//Customer Componenets Fetch Calls
export const fetchPurchases = ()=>{
    return fetch("http://localhost:8088/purchases")
    .then(res=>res.json())
   
}
export const fetchCustomers = ()=>{
    return fetch("http://localhost:8088/customers")
    .then(res=>res.json())
    
}
export const fetchPurchasesByUserId = (userId)=>{
    return fetch(`http://localhost:8088/purchases?customerId=${userId}&_expand=product&_expand=productType`)
    .then((res)=>res.json())
}

//auth
export const existingUserChecks = (customerEmail)=>{
    return fetch(`http://localhost:8088/customers?email=${customerEmail}`)
    .then(res => res.json())
}
export const postNewUser = (object)=>{
    return fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(object)
                    })
                        .then(res => res.json())
}
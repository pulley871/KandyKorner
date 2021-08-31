import React, {useState, useEffect} from "react"
import { FetchProductsWithTypeSortedById } from "../ApiManager"
import { InventoryList } from "./InventoryList"
import { SearchProducts } from "./ProductSearch"

export const Inventory = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [foundProduct, setFoundProduct] = useState({})
    useEffect(()=>{
        FetchProductsWithTypeSortedById()
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        const foundProducts = products.find((product)=> product.name.startsWith(searchTerm)  )
        
        if (foundProducts !== undefined){
            setFoundProduct(foundProducts)

        }
    },[searchTerm])
    return (<>
    {console.log(foundProduct)}
        <SearchProducts item={setSearchTerm}/>
        <InventoryList product={foundProduct}/>
    </>)
}
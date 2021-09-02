import React, {useEffect, useState} from "react"

export const SearchProducts = ({item})=>{
    //const [searchText, setSearchText]=useState("")
    return (<div>
        <input type="text" placeholder="Search For Product" onKeyUp={(event)=>{
            
            if (event.keyCode === 13){
                item(event.target.value)
            }else{
                item(event.target.value)
            }

           
                
                
            
         } }></input>
      
    </div>)
}
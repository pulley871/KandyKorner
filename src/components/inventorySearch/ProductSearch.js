import React, {useEffect, useState} from "react"

export const SearchProducts = ({item})=>{
    const [searchText, setSearchText]=useState("")
    return (<div>
        <input type="text" placeholder="Search For Product" onKeyUp={(event)=>{
            
            if (event.keyCode === 13){
                item(searchText)
            }else{
                setSearchText(event.target.value)
            }

           
                
                
            
         } }></input>
        {console.log(searchText)}
        <button id="searchinvbtn"onClick={()=> item(searchText)}>Search</button>
    </div>)
}
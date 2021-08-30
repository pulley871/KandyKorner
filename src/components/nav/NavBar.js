import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () =>{
    return (
        <ul className="navbar navbar-light bg-light navbar-expand-lg">
            <li className="navbar__item  btn btn-outline-success me-2">
                <Link className="navbar_link" to="/products" >Product List</Link>
            </li>
            <li className="navbar__item  btn btn-outline-success me-2">
                <Link className="navbar_link" to="/stores">Stores</Link>
            </li>
            <li className="navbar__item  btn btn-outline-success me-2">
                <Link className="navbar_link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item  btn btn-outline-success me-2">
                <Link className="navbar_link" to="/login" onClick={()=>localStorage.removeItem("kandy_customer")}>Logout</Link>
            </li>
            <li className="navbar__item  btn btn-outline-success me-2">
                <Link className="navbar_link" to="/purchases" >Purchases</Link>
            </li>
        </ul>
    )
}
import React from "react"
import { Redirect, Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationView"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const KandyKorner = () => {
    return (
        <>
        <Route 
            render={()=>{
                if (localStorage.getItem("kandy_customer")){
                    return(
                        <>
                        <NavBar />
                        <ApplicationViews />
                        </>
                    )
                }else{
                    return <Redirect to="/login" />
                }
            }}
        />
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        </>
        )
}
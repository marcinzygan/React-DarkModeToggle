import React from "react"
import  ReactDOM  from "react-dom"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./index.css"


ReactDOM.render(
<div>
    <Navbar />
    <Hero /> 
    <Footer/>
</div>
    ,document.getElementById("root"))
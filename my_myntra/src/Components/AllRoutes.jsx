import React from "react";
import {Routes,Route} from "react-router-dom"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Products  from "./Pages/Products"

const AllRoutes = () => {
    return(<div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
        </Routes>
    </div>)
}

export default AllRoutes
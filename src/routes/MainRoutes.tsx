import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRoute from "./PrivateRoute"
import Home from "../pages/Home"
import Search from "../pages/Search"
import NotFound from "../pages/NotFound"
import BuyProcess from "../pages/BuyProcess"
import BuyConfirmation from "../pages/BuyConfirmation"
import Product from "../pages/Product"

export const MainRoutes = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />
            <Route path="/product" element={<PrivateRoute><Product /></PrivateRoute>} />
            <Route path="/buyProcess" element={<PrivateRoute><BuyProcess /></PrivateRoute>} />
            <Route path="/buyConfirmation" element={<PrivateRoute><BuyConfirmation email="gabrielraulinoschoenell@gmail.com"/></PrivateRoute>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
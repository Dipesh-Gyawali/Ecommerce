import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";
import { ProductDetail} from "../pages";
import { PageNotFound} from "../pages";
import { CartPage } from "../pages";
import { Login,Register } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import {OrderPage} from "../pages/Order/OrderPage";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />

        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />


        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        

    </Routes>
    </>
  )
}

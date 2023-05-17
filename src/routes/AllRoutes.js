import {Routes, Route} from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import {ProductList} from "../pages/Products/ProductList"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />

        </Routes>
    </>
  )
}

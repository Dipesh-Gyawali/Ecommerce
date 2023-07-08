import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";
import { ProductDetail} from "../pages";
import { PageNotFound} from "../pages";
import { Login,Register } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />

        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

    </Routes>
    </>
  )
}

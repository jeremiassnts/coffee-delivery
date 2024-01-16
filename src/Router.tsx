import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Cart } from "./pages/Cart";
import { Confirmation } from "./pages/Confirmation";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Route>
        </Routes>
    )
}
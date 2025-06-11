import './App.css';
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import ProductsListScreen from "./screens/ProductsListScreen";
import CartScreen from "./screens/CartScreen";
import productsList from "./assets/MockData";
import {useState} from "react";
import {Route, Router, Routes} from "react-router";
import HomeScreen from "./screens/HomeScreen";


function App() {
    const [cartProducts, setCartProducts] = useState([])

    function handleAddProductToCart({product}) {
        setCartProducts((products) => [...products, product])
    }

    function handleRemoveProductToCart({id}) {
        console.log("remove")
        setCartProducts((prevCartProducts) => prevCartProducts.filter((product) => product.id !== id))
    }

    return (
        <div className={"d-flex flex-column vw-100 h-auto bg-white"}>
            <AppNavbar/>
            <Routes>
                <Route index element={<HomeScreen/>}/>
                <Route path="/cart"
                       element={<CartScreen products={cartProducts} onRemoveProduct={handleRemoveProductToCart}/>}/>
                <Route path="/products" element={<ProductsListScreen
                    products={productsList}
                    onAddProductToCart={handleAddProductToCart}
                    isCart={false}
                />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

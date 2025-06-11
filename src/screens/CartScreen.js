import React, {useState} from 'react';
import {Button, Container} from "reactstrap";
import ProductsListScreen from "./ProductsListScreen";

function CartScreen({products, onRemoveProduct}) {
    const [cartProducts, setCartProducts] = useState([...products]);
   

    function handleAddProduct() {
        // Ensure products is an array and has items
        if (products && products.length > 0) {
            // Select a random product
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            // Add the product to the cart
            setCartProducts(prevCart => [...prevCart, randomProduct]);
        }
    }



    return (
        <Container
            className={"vw-100 h-auto bg-transparent position-relative d-flex flex-column justify-content-start align-items-center my-5 px-5"}>
            <h1>Cart</h1>
            <div>
                {cartProducts && (<ProductsListScreen products={cartProducts} isCart={true}
                                     onRemoveProductIsCart={onRemoveProduct}/>)}
            </div>
        </Container>
    );
}

export default CartScreen;
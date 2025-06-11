import React from 'react';
import "./../styles/Products.css"
import ProductItem from "../components/ProductItem";
import {Container} from "reactstrap";
import CartScreen from "./CartScreen";

function ProductsListScreen({products, onAddProductToCart, isCart, onRemoveProductIsCart}) {
    return (

        <Container>

            <div className={"products-list-screen d-flex flex-wrap vw-100 h-auto position-relative"}>
                {
                    products.map(
                        (product) => (
                            <ProductItem product={product} onAddProductToCart={onAddProductToCart} key={product.id} isCart={isCart} onRemoveProductIsCart={onRemoveProductIsCart}/>
                        )
                    )
                }
            </div>
        </Container>


    );
}

export default ProductsListScreen;
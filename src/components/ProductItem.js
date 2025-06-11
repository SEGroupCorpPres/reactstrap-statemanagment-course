import React from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from "reactstrap";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function ProductItem({product, onAddProductToCart, isCart, onRemoveProductIsCart}) {
    function replaceDesc({desc}) {
        if (desc.length > 30) {
            return desc.substring(0, 30) + "..."
        }
        return desc;
    }

    function handleAddProductToCart() {
        console.log("add")
        console.log(product)
        onAddProductToCart({product: product})
    }
    function handleRemoveProductToCart() {
        console.log("remove")
        onRemoveProductIsCart({id: product.id})
    }

    function splitPrice(price) {
        const wholePart = Math.floor(price); // Get the integer (whole) part
        const fractionalPart = Math.round((price - wholePart) * 100); // Extract the fractional part
        return {wholePart, fractionalPart};
    }

    function formatPrice(priceValue) {
        const {wholePart, fractionalPart} = splitPrice(priceValue);
        return (
            <span className={"d-flex flex-row align-items-start"}>
                <span>${wholePart}</span>
                <span style={{fontSize: "10px"}}>{fractionalPart.toString().padStart(2, '0')}</span>
            </span>
        );
    }

    function replacePrice({price, discountPercentage}) {
        if (discountPercentage > 0) {
            const discountedPrice = price * (1 - discountPercentage / 100);
            return (
                <span className={"d-flex flex-row align-items-end"}>
                    <span className={"text-danger"}>
                        {formatPrice(discountedPrice)}
                    </span>
                    <span
                        className={"mx-2 text-decoration-line-through text-secondary"}
                        style={{fontSize: "13px"}}
                    >
                       ${price}
                    </span>
                </span>
            );
        } else {
            return <span>{price}</span>;
        }
    }

    return (
        <Card className={"col-sm-2 p-2"} color="light">
            {isCart &&
                // (<CardImgOverlay>
                    <CloseRoundedIcon onClick={handleRemoveProductToCart}
                                      className={"position-absolute t-0  bg-danger rounded-5 color-white"}/>
                // </CardImgOverlay>)
            }
            <CardImg src={product.images} alt={`${product.title
            })} image`} className={""}/>
            {/*<CardImgOverlay>*/}
                {!isCart && (<AddRoundedIcon onClick={handleAddProductToCart}
                                             className={"position-absolute bottom-50 end-0 bg-warning rounded-5"}/>)}
            {/*</CardImgOverlay>*/}
            <CardBody>
                <span
                    className={"bg-danger rounded px-2 text-white discount-font-size"}>
                    {product.discountPercentage}%off
                </span>
                <CardTitle tag="h5">
                    {
                        replacePrice({
                            price: product.price,
                            discountPercentage: product.discountPercentage
                        })
                    }
                </CardTitle>
                <CardSubtitle
                    className="text-black"
                    tag="h6"
                >
                    {product.title}
                </CardSubtitle>
                <CardText className={""} style={{fontSize: "12px"}}>
                    {replaceDesc({desc: product.description})}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default ProductItem;
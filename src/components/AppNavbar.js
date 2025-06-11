import React, {useState} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./../styles/AppNavbar.css"

function AppNavbar(props) {
    // const [isHome, setIsHome] = useState(true);
    // const [isCart, setIsCart] = useState(false);
    // const [isProducts, setIsProducts] = useState(false);

    // function handleActiveHome({isHome, isCart, isProducts}) {
    //     if (isHome) {
    //         setIsHome(true);
    //         setIsCart(false);
    //         setIsProducts(false);
    //         console.log("home")
    //     } else if (isCart) {
    //         setIsCart(true);
    //         setIsProducts(false);
    //         setIsHome(false);
    //         console.log("cart")
    //
    //     } else if (isProducts) {
    //         setIsCart(false);
    //         setIsProducts(true);
    //         setIsHome(false);
    //         console.log("products")
    //
    //     }
    //
    // }


    return (
        <Navbar
            className={"my-0 bg-gradient-left-to-right-darkgreen"}
            // color="dark"
            // dark
            // fixed={"top"}
        >
            <NavbarBrand  className={"navbar-brand text-light d-flex gap-2"}>
                <ShoppingCartIcon fontSize="large" color="dark"/>
                <p>
                    Ecommerce
                </p>
            </NavbarBrand>
            <Nav
                pills
            >
                <NavItem>
                    <NavLink
                        to={"/"}
                        active={true}
                        href={"/"}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    // to={"/cart"}
                    href={"/cart"}
                             >
                        Cart
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href={"/products"}
                        // to={"/products"}
                        // disabled
                    >
                        Products
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar;
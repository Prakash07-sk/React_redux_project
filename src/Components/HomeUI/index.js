import HeaderNav from "./HeaderNav";
import { Container } from 'react-bootstrap';
import ProductListPage from "./ProductListPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialProducts } from "./Utils/searchProducts.util";
import Footer from "./Footer";


export default () => {

    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getInitialProducts());
    }, []);
    return (
        <>
            <Container>
                <HeaderNav />
                <ProductListPage />
            </Container>

            <Footer/>
        </>
    );
};
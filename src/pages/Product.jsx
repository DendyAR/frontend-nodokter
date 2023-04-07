import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import Layout from './Layout';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    useEffect(() => {
        if(isError){
            navigate("/")
        }
    }, [isError , navigate])

    return (
        <Layout>
            <ProductDetail />
        </Layout>
    );
}

export default Product;

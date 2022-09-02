import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponents from '../productComponents/ProductComponents'
import { setProducts } from '../../redux/actions/ProductAction'
import './productListining.css'
const ProductListining = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log('Err', err);
        })
        dispatch(setProducts(res.data));
    }
        console.log(products);
        useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='ui grid container'>
            <ProductComponents/>
        </div>
    )
}

export default ProductListining
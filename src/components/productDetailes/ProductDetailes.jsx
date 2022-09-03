import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {selectedProducts} from '../../redux/actions/ProductAction'
import { FaTag } from 'react-icons/fa';
import './productDetailes.css'


const ProductDetailes = () => {

    const {productId} = useParams()
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    console.log(product);
    const fetchProductDetailes = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log('Err' + err);
        })
        dispatch(selectedProducts(res.data))
    }
    React.useEffect(() =>{
        if(productId && productId !== '')fetchProductDetailes()
    } ,[productId])
    
    return (
        <div className='product-cont'>
            <div>
                <img src={product.image} alt={product.title} />
            </div>
            <div>
                {product.title}
                <div className='icon-cont'>
                <FaTag className='icon'/>
                <div className='extend'></div>
                <p className='detaile-price'>$ {product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailes
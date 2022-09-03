import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";
import './productComponents.css'
const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products)
    const list = products.map(items => {
        const {id, title, image, price, category} = items
        return(
        <div className='card' key={id}>
            <Link to={`/product/${id}`} className='product-navegate'>
                <div>
                <img src={image} alt={title}/>
                </div>
            </Link>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
        </div>
        )
    })
    return <>{list}</>
}

export default ProductComponents
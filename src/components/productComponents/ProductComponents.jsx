import React from 'react'
import { useSelector } from 'react-redux'
import './productComponents.css'
const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products)
    const list = products.map(items => {
        const {id, title, image, price, category} = items
        return(
        <div className='four col wide' key={id}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">{price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    })
    return <>{list}</>
}

export default ProductComponents
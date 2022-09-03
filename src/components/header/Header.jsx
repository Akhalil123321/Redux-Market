import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <div className="Nav-cont">
            <div>
                <Link to='/' className='header-navegate'>
                    <h2>TEK STORE</h2>
                </Link>
            </div>
        </div>
    )
}
export default Header
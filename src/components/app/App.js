import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import ProductDetailes from '../productDetailes/ProductDetailes';
import ProductListining from '../productlistining/ProductListining';
import './App.css';

function App() {
return (
    <div className="App">
		<Header/>
		<Routes>
				<Route path='/' element={<ProductListining/>}></Route>
				<Route path='/product/:productId' exact component={<ProductDetailes/>}></Route>
		</Routes>
    </div>
);
}

export default App;

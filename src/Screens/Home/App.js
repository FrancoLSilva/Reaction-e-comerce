import Characters from "../../ApiFiles/charactersApi.js";
import React, { useState, useEffect } from 'react';
import './App.css';
import ContainerProduct from "../../Components/Container/Container";
import Navigation from "../../Components/NavBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
const [filter,setFilter] = useState("");
const [products,setProducts] =useState([]);
const getProducts= async ()=>{
  const products= await Characters();
  setProducts(products);
};


useEffect(()=>{
  getProducts(Characters);
},[]);

  
  return(
        <div className='pageContainer'>
          <div className='navBar'>
            <h1 className='Title-primary'>REACTION</h1>
            <Navigation/>
          </div>;
          <h2 className='Title-secondary'>PRUDUCTOS</h2>,
          <p className='Info-primary'>¡Elegi dentro de nuestra gran variedad de productos!</p>,
          <input id='product-filter' 
            name='product-filter' 
            type="text" 
            value={filter} 
            placeholder="Buscar producto" 
            onChange={(event)=> setFilter(event.target.value)}/>,

          <div className="productsContainer">
            {products
            .filter((filterProdcut) => filterProdcut.nombre.includes(filter))
            .map((product, i)=>(
            <ContainerProduct
            key={i}
            name= {product.nombre}
            image={product.imagen}
            quote={product.info}/> 
            ))} 
          </div>;
               
        </div>
        );
  }      

export default App;

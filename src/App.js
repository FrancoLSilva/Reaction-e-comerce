import Characters from "./ApiFiles/charactersApi.js";
import React, { useState } from 'react';
import './App.css';
import ContainerProduct from "./Components/Container/Container";
import Navigation from "./Components/NavBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [filter,setFilter] = useState("");
  return(
        <div className='pageContainer'>
          <div className='navBar'>
            <h1 className='Title-primary'>REACTION</h1>
            <Navigation/>
          </div>; 
          <div className="productsContainer">
            <h2 className='Title-secondary'>PRUDUCTOS</h2>,
            <p className='Info-primary'>¡Elegi dentro de nuestra gran variedad de productos!</p>
            <input id='product-filter' name='product-filter' type="text" value={filter} placeholder="Buscar producto" onChange={(event)=> setFilter(event.target.value)}/>
            {Characters.filter(filterProd => filterProd.product.includes(filter)).map((product, i)=>(
            <ContainerProduct
            key={i}
            name= {product.character}
            image={product.image}
            quote={product.quote}/> 
            ))} 
          </div>;     
        </div>
        );
        
        
          
    
}

export default App;

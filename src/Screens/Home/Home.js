import ProductsAvaibles from "../../ApiFiles/ProductsAvaibles.js";
import React, { useState, useEffect } from 'react';
import './Home.css';
import ItemListContainer from "../../Components/Container/ItemListContainer";
import Navigation from "../../Components/NavBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";


function Home() {
const [filter,setFilter] = useState("");
const [products,setProducts] =useState([]);
const category = useParams;
/* const getProducts= async ()=>{
  const products= await ProductsAvaibles();
  setProducts(products); 
  } */

const getProducts= () =>{
    setTimeout(() =>{
      const products= ProductsAvaibles;
      setProducts(products); 
    },3000);
}

useEffect(()=>{
  getProducts();
},[]);

  return(
    <div className='pageContainer'>
      <header className='home-header'>
      <h1 className='Title-primary'>REACTION</h1>
      </header>
      <div className='navBar'>
        <Navigation/>
      </div>;
      <div className="body-home">
      <h2 className='Title-secondary'>PRUDUCTOS</h2>,
      <p className='Info-primary'>¡Elegi dentro de nuestra gran variedad de productos!</p>,
      <input 
        id='product-filter' 
        name='product-filter'
        category='product-filter' 
        type="text" 
        value={filter} 
        placeholder="Buscar producto" 
        onChange={(event)=> setFilter(event.target.value)}/>,

      <div className="productsContainer">
        {category? products
        .filter((filterProduct) => filterProduct.nombre.includes(filter)).filter((filterProduct) => filterProduct.categoria === category)
        .map((product, i)=>(
        <ItemListContainer
        id={i}
        key={i}
        name= {product.nombre}
        image={product.imagen}
        quote={product.info}
        category={product.categoria}/> 
        ))
        :
        products
        .filter((filterProduct) => filterProduct.nombre.includes(filter))
        .map((product, i)=>(
        <ItemListContainer
        id={i}
        key={i}
        name= {product.nombre}
        image={product.imagen}
        quote={product.info}
        category={product.categoria}/> 
        ))}
        
      </div>;
      </div>
      
           
    </div>
    );
  
};




  
  
      

export default Home;

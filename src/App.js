import React from 'react';
import './App.css';
import Characters from './ApiFiles/charactersApi.js';
import ContainerProduct from './Components/Container/Container';
import Navigation from './Components/NavBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
        <div className='pageContainer'>
            <div className='navBar'>
            <h1 className='Title-primary'>REACTION</h1>
            <Navigation/>
          </div>; 
          <div className="productsContainer">
            <h2 className='Title-secondary'>PRUDUCTOS</h2>,
            <p className='Info-primary'>¡Elegi dentro de nuestra gran variedad de productos!</p>,
            {Characters.map((character, i)=>(
            <ContainerProduct
            key={i}
            name= {character.character}
            image={character.image}
            quote={character.quote}/> 
            ))} 
          </div>;
        
        </div>);
        
          
    
}

export default App;

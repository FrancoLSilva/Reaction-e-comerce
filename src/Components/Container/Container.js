const ContainerProduct = ({key,name,image,quote}) => {
  return(<div className='container' key={key}>
  <h3>{name}</h3>;
  <img alt={`personaje: ${name}`} src={image}></img>
  <p>{quote}</p>
</div>)
    
  };

  
 

  export default ContainerProduct;
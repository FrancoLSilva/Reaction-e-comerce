const ContainerProduct = (name,image,quote) => {
    <div className='container'>
      <h3>{name}</h3>;
      <img alt={`personaje: ${name}`} src={image}></img>
      <p>{quote}</p>
    </div>
  };

  export default ContainerProduct;
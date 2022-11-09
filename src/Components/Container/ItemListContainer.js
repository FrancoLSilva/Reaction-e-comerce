import './ItemListContainer.css';

const ItemListContainer = ({key,name,image,quote,category}) => {
  return(<div className='container-product' key={key}>
  <h3>{name}</h3>;
  <img alt={`personaje: ${name}`} src={image}></img>
  <p>{quote},
    {category},
  </p>
  <button className='btn-detail'/>
</div>)
    
  };



  export default ItemListContainer;
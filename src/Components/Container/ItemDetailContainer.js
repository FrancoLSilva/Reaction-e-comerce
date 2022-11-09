
import './ItemDetailContainer.css';

const ItemDetailContainer = ({key,name,image,quote,price,category,id}) => {
    return(
    <div className='container-detail-product' key={key}>
        <h3>{name}</h3>;
            <img alt={`personaje: ${name}`} src={image}></img>
            <p>{quote},
                {price},
                {category},
                {id},
        </p>
  </div>)
};

const DetailBtn = document.getElementById("btn-detail")
btn.addEventListener("click", ()=>{
    ItemDetailContainer();
})

export default DetailBtn;
  
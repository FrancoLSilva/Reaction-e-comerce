import { useParams } from "react-router-dom";

const Products = ()=>{
    const {name}= useParams();
    return(
    <div>
        {name}
    </div>)   
};


export default Products;
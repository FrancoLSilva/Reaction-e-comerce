import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*"  element={<Home/>}/>
                <Route path="/Products/:name" element={<Home/>}/>
                <Route path="/category/:categoryid" element={<Home/>}/>
                <Route path="/category/:categoryid" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default Router;
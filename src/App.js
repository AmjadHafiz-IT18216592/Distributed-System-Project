import logo from './logo.svg';
import  Header from '../src/components/Header';
import Products from '../src/components/Items';
import Home from '../src/components/Home'
import NewProducts from '../src/components/AddItems'
import UpdateItems from "./components/UpdateItems";
import DeleteItems from "./components/DeleteItems";
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <section>
                <Routes>
                    <Route path="home" element={<Home/>} style={{textDecoration:'none'}}></Route>
                        <Home/>

                    <Route path="products" element={<Products/>} style={{textDecoration:'none'}}>
                    <Products/>
                    </Route>
                    <Route path="newproducts" element={<NewProducts/>}style={{textDecoration:'none'}}>
                        <NewProducts/>
                    </Route>
                    <Route path="updateproducts" element={<UpdateItems/>}style={{textDecoration:'none'}}>
                        <UpdateItems/>
                    </Route>
                    <Route path="deleteproducts" element={<DeleteItems/>}style={{textDecoration:'none'}}>
                        <DeleteItems/>
                    </Route>
                </Routes>
            </section>
        </Router>


    </div>
  );
}

export default App;

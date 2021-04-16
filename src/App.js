import logo from './logo.svg';
import  Header from '../src/components/Header';
import Products from '../src/components/Items';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <section>
                <Routes>
                    <Route path="products" element={<Products/>}></Route>
                    <Products/>
                </Routes>
            </section>
        </Router>


    </div>
  );
}

export default App;

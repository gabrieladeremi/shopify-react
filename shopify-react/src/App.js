import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Header from './containers/Header'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:id' exact Component={ProductDetail} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

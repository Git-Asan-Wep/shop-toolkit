import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
const [product, setProduct] = useState([])
    const fetchingProduct  = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/category/jewelery')
        setProduct(res.data)
    }
    useEffect(() => {
        fetchingProduct()
    },[])
    console.log(product)

  return (
    <div className="App">

    </div>
  );
}

export default App;

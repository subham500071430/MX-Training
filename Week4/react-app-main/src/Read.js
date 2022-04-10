import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Read() {
    const [products, setProducts] = useState([]);

    const getProducts = () =>{
        axios.get("http://localhost:4000/products").then((res) =>{
            console.log(res.data);
            const allProducts = res.data;
            setProducts(allProducts);
        })
    }

    useEffect(() =>{
        getProducts();
    }, []);
  return (
    <div className="App">
      <h1>Reading data from API</h1>
      <table>
          <thead>
              <th>Name</th><th>Brand</th><th>Model</th><th>Price</th><th>Quantity</th></thead>
              <tbody>
                  {
                      products.map((product) => {
                          return <tr>
                              <td>{product.name}</td><td>{product.brand}</td><td>{product.model}</td><td>{product.price}</td><td>{product.quantity}</td>
                          </tr>
                      })
                  }
              </tbody>
      </table>
    </div>

  );
}

export default Read;

import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeBrand = (e) =>{
        setBrand(e.target.value);
    }

    const changeModel = (e) =>{
        setModel(e.target.value);
    }

    const changePrice = (e) =>{
        setPrice(e.target.value);
    }

    const changeQuantity = (e) =>{
        setQuantity(e.target.value);
    }

    const saveProduct = (e) =>{
        e.preventDefault();

        const product = {
            name: name,
            brand: brand,
            model: model,
            price: price,
            quantity: quantity
        }
       // alert(JSON.stringify(product));
       axios.post("http://localhost:4000/products", product).then((res) =>{
           console.log(res);
           alert("Product is saved");
       }).catch((err) => {
           alert("Error: " + err);
       });
    }
  return (
    <div className="App">
      <h1>Saving data into API</h1>
      <form onSubmit={saveProduct}>
          <p><input type="text" value={name} placeholder="Enter Name" onChange={changeName} /></p>
          <p><input type="text" value={brand} placeholder="Enter Brand" onChange={changeBrand} /></p>
          <p><input type="text" value={model} placeholder="Enter Model" onChange={changeModel} /></p>
          <p><input type="text" value={price} placeholder="Enter Price" onChange={changePrice} /></p>
          <p><input type="text" value={quantity} placeholder="Enter Quanity" onChange={changeQuantity} /></p>
          <p><input type="submit" value="Save" /></p>
      </form>
    </div>

  );
}

export default Create;

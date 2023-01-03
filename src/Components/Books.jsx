import React from "react";
import { useState } from "react";
import Cart from "./Cart";

function Books({ data }) {
const [add, setAdd] = useState([]); 
const [price,setPrice] = useState(Number);
const addToCart = (data) => {    
  setPrice((prev)=>  prev + data.price)
const index = add.findIndex((item)=>  item.id === data.id)

if(index === -1) {
const addedBook = add.concat({...data,quantity:1}) 
setAdd(addedBook) 
}
else{  
    add[index].quantity+= 1
const newBook = [...add]  
setAdd(newBook) 
}

  };
return (
<>
<div className="main-div">
<div className="Products-Div">
{data.map((product,index) => {
return (
<div key={index} >
<h1>{product.title}</h1>
<div>
<img src={product.image} alt={""} />
</div>
<h1>{product.price}</h1>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
);
})}
</div>
<div className="Cart-Div">
{" "}
<Cart add={add}  setAdd={setAdd}  price={price}  setPrice={setPrice} />{" "}
</div>
    </div>
    </>
  );
}
export default Books;

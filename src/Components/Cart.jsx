import React from "react";

function Cart({ add, setAdd, price, setPrice }) {
  console.log(add);

  const removeItem = (removeItem) => {
    const find = add.findIndex((item) => item.id === removeItem.id);

    if (removeItem.quantity === 1) {
      const remove = add.filter((data) => data.id !== removeItem.id);
      setAdd(remove);
    } else if (removeItem.quantity > 1) {
      add[find].quantity -= 1;
      const newBook = [...add];
      setAdd(newBook);
    }
    setPrice((prev) => prev - removeItem.price);
  };

  return (
    <div className="cart-div">
      <h1>Cart Items</h1>
      <div>
        {add.map((cartRender,index) => {
          return (
            <div className="cart-div" key={index}>
              <h3>{cartRender.title}</h3>
              <div>
                <img src={cartRender.image} alt={""} />
              </div>
              <h3>{cartRender.quantity}</h3>
              <h1>{cartRender.price}</h1>
              <button onClick={() => removeItem(cartRender)}>
                -RemoveItem
              </button>
            </div>
          );
        })}
        
        <h2>Total Price: {`${parseFloat(price).toFixed(2)}`}   </h2>
      </div>
    </div>
  );
}
export default Cart;

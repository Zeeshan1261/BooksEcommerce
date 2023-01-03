import React from "react";

function Cart({ add, setAdd }) {
  console.log(add);

  const removeItem = (removeItem) => {
    const remove = add.filter((data) => data.id !== removeItem.id);
    setAdd(remove);
  };
  return (
    <div className="cart-div">
      <h1>Cart Items</h1>
      <div>
        {add.map((cartRender) => {
          return (
            <div className="cart-div">
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
      </div>
    </div>
  );
}
export default Cart;

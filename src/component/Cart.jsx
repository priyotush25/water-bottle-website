const Cart = ({ cards, removeHandle }) => {
  return (
    <>
      <div className="add-cart">
        <h1>Add to Card {cards.length}</h1>
        <div className="cart-box ">
          {cards.map((cart, index) => (
            <div className="box" key={index}>
              <img src={cart.img} alt="" className="add-cart-img" />
              <p style={{ fontSize: "14px" }}>{cart.name}</p>
              <button onClick={() => removeHandle(cart.id)}>Remove Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import CartCard from "./CartCard";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2>Cart</h2>
        <div className="container-fluid">
          <div className="row">
            {this.props.items.map((item) => (
              <CartCard name={item[0]} price={item[1]} src={item[2]}></CartCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;

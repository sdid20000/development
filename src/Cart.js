import React from "react";
import CartCard from "./CartCard";

class Cart extends React.Component {
  getQuantity = (name) => {
    return this.props.quantities[this.props.names.indexOf(name)];
  };

  render() {
    return (
      <div>
        <h2>Cart</h2>
        <div className="container-fluid">
          <div className="row">
            {this.props.items.map((item) => (
              <CartCard
                name={item[0]}
                price={item[1]}
                src={item[2]}
                quantity={this.getQuantity(item[0])}
                addOne={this.props.addOne}
                subOne={this.props.subOne}
                key={item[0]}
              ></CartCard>
            ))}
          </div>
          Total Price: ${this.props.cost.toFixed(2)}
        </div>
      </div>
    );
  }
}
export default Cart;

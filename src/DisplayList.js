import React from "react";
import MyCard from "./MyCard";

class DisplayList extends React.Component {
  displayEmpty() {
    if (this.props.list.length === 0) {
      return <p>There are no keyboards that match your search query.</p>;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.displayEmpty()}
          {this.props.list.map((item) => (
            <MyCard
              name={item.name}
              src={item.src}
              price={item.price}
              desc={item.desc}
              addItem={this.props.addItem}
            ></MyCard>
          ))}
        </div>
      </div>
    );
  }
}
export default DisplayList;

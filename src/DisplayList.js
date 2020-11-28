import React from "react";
import MyCard from "./MyCard";

//A class to hold the list of cards
class DisplayList extends React.Component {
  //Handles when the search query comes up empty
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
              switches={item.switches}
              addItem={this.props.addItem}
              key={item.name}
            ></MyCard>
          ))}
        </div>
      </div>
    );
  }
}
export default DisplayList;

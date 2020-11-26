import React from "react";
import DisplayList from "./DisplayList.js";

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "All",
      switch: "All",
      numpad: "All",
    };
  }

  matchesFilterBrand = (item) => {
    if (this.state.brand === "All") {
      return true;
    } else if (this.state.brand === item.brand) {
      return true;
    } else {
      return false;
    }
  };

  matchesFilterSwitches = (item) => {
    if (this.state.switch === "All") {
      return true;
    } else if (item.switches.indexOf(this.state.switch) >= 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <DisplayList
          list={this.props.list.filter(
            this.matchesFilterBrand,
            this.matchesFilterSwitches
          )}
        ></DisplayList>
      </div>
    );
  }
}
export default FilteredList;

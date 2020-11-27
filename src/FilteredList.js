import React from "react";
import DisplayList from "./DisplayList.js";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "All",
      switch: "All",
      numpad: "All",
      sort: "Sort",
    };
  }

  onSelectFilterBrand = (event) => {
    this.setState({
      brand: event,
    });
  };

  onSelectFilterSwitch = (event) => {
    this.setState({
      switch: event,
    });
  };

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

  changeSortState = (newSort) => {
    this.setState({
      sort: newSort,
    });
  };

  changeSwitchState = (newSwitch) => {
    this.setState({
      switch: newSwitch,
    });
  };

  render() {
    return (
      <div>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Brand:
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={this.onSelectFilterBrand}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Cherry" onSelect={this.onSelectFilterBrand}>
              Cherry
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Corsair" onSelect={this.onSelectFilterBrand}>
              Corsair
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Razer" onSelect={this.onSelectFilterBrand}>
              Razer
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Switch Type:
            </Nav.Link>
          </Nav.Item>

          <DropdownButton id="dropdown-basic-button" title={this.state.switch}>
            <Dropdown.Item onClick={() => this.changeSwitchState("All")}>
              All
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Cherry MX Black")}
            >
              Cherry MX Black
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Cherry MX Red")}
            >
              Cherry MX Red
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Cherry MX Blue")}
            >
              Cherry MX Blue
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Cherry MX Brown")}
            >
              Cherry MX Brown
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Cherry MX Speed")}
            >
              Cherry MX Speed
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Razer Green")}
            >
              Razer Green
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Razer Orange")}
            >
              Razer Orange
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSwitchState("Razer Yellow")}
            >
              Razer Yellow
            </Dropdown.Item>
          </DropdownButton>
        </Nav>

        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Sort:
            </Nav.Link>
          </Nav.Item>

          <DropdownButton id="dropdown-basic-button" title={this.state.sort}>
            <Dropdown.Item onClick={() => this.changeSortState("Default")}>
              Default
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSortState("Lowest to Highest")}
            >
              Price : Lowest to Highest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.changeSortState("Highest to Lowest")}
            >
              Price : Highest to Lowest
            </Dropdown.Item>
          </DropdownButton>
        </Nav>

        <DisplayList
          list={this.props.list
            .filter((item) => {
              return (
                this.matchesFilterBrand(item) &&
                this.matchesFilterSwitches(item)
              );
            })
            .sort((a, b) => {
              if (this.state.sort === "Lowest to Highest") {
                return a.price - b.price;
              } else if (this.state.sort === "Highest to Lowest") {
                return b.price - a.price;
              } else {
                return 0;
              }
            })}
        ></DisplayList>
      </div>
    );
  }
}
export default FilteredList;

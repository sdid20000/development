import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

//A class to display a single card
class MyCard extends React.Component {
  //Handles the display of the multiple switches per keyboard
  switches = () => {
    return this.props.switches.map((item) => <ul>{item}</ul>);
  };

  render() {
    return (
      <div className="m-4">
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Price : ${this.props.price}</ListGroupItem>
            <ListGroupItem>
              Available switches:
              {this.switches()}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button
              onClick={() =>
                this.props.addItem([
                  this.props.name,
                  this.props.price,
                  this.props.src,
                ])
              }
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default MyCard;

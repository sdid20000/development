import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class CartCard extends React.Component {
  render() {
    return (
      <div className="m-4">
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Price : ${this.props.price}</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
export default CartCard;

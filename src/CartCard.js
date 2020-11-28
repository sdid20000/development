import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
            <ListGroupItem>
              <button
                type="button"
                onClick={() => this.props.subOne(this.props.name)}
                className="btn btn-outline-primary btn-sm mr-2"
              >
                -
              </button>
              Quantity: {this.props.quantity}
              <button
                type="button"
                onClick={() => this.props.addOne(this.props.name)}
                className="btn btn-outline-primary btn-sm ml-2"
              >
                +
              </button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
export default CartCard;

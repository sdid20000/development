import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class DisplayList extends React.Component {
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
export default DisplayList;

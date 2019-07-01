import React, { Component } from "react";
import InfoWindow from "./InfoWindow";
import { Jumbotron, Container, Row, Col, Modal, ListGroup, Form, Button } from "react-bootstrap/es/";
import "./visitor.css";
import OrderRoute from "../../../utils/OrderRoute";

class VisitorOrders extends Component {
    state = {
        items: [],
        tempOrder: [],
        orderItem: {}
    };

    componentDidMount() {
        this.props.loadMenu()
        this.setState({ tempOrder: this.props.orders })
        console.log(this.props.orders);
    }

    // This will populate the Orders section of the visitor-side site
    // If the user has ordered anything already, that current order will be shown when the user navigates to Orders
    loadOrders = () => {
        OrderRoute.getOrders(this.state._id)
            .then(res => {
                this.setState({ tempOrder: res.data });
                this.props.updateOrder(this.state.tempOrder);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Your BIG Order</h1>
                </Jumbotron>
                {this.props.phone === "" ? (
                    <Container>
                        <Form>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone Number (Numbers Only)</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                                <Form.Text className="text-muted">Enter your phone number without any spaces, dashes, or non-numerical characters.</Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Container>
                ) : (
                        <Container>
                            <InfoWindow
                                nameFirst={this.props.nameFirst}
                                nameLast={this.props.nameLast}
                                phone={this.props.phone}
                            />
                        </Container>
                    )}
                <br />
                <div className="order-window">
                    <Container>
                        {this.state.tempOrder > 0 ? (
                            <ListGroup>
                                {this.state.tempOrder.map(order => (
                                    <ListGroup.Item
                                        key={order._id}
                                        orderItem={order}
                                    />
                                ))}
                            </ListGroup>
                        ) : (
                                <Row>
                                    <Col><h2 className="empty-order"><strong>You do not have any pending orders.</strong></h2></Col>
                                </Row>
                            )
                        }
                    </Container>
                </div>
                <br />
                <br />
                {this.props.phone !== "" ? (
                    this.props.items.length ? (
                        <Container>
                            <ListGroup>
                                {this.props.items.map(item => (
                                    <ListGroup.Item key={item._id}>
                                        <h3 className="item-head">{item.name}</h3>
                                        <p className="item-ingredients">{item.ingredients}</p>
                                        <p className="item-description">{item.description}</p>
                                        <Button variant="primary" onClick={e => this.props.addToOrder(e, item)}>Add to Order</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Container>
                    ) : (
                            <h3>Our menu is currently unavailable for viewing.</h3>
                        )) : (
                        <h3>Please enter your phone number.</h3>
                    )}
            </>
        )
    }
}

export default VisitorOrders;
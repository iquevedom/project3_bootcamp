import React from "react";
import { ListGroup } from "react-bootstrap/es";
import { Link } from "react-router-dom";

function VisitorOrdersShow() {
    return (
        <ListGroup>
            {this.props.orders.length > 0 ? (
                this.props.orders.map(order => (
                    <ListGroup.Item key={order._id}>
                        <Link to={"/orders/" + order._id}>
                            <h3><strong>ID : {order._id}</strong></h3>
                        </Link>
                        <p><strong>Date : </strong> : {order.date}</p>
                    </ListGroup.Item>
                ))
            ) : (
                    <ListGroup.Item>
                        <h3>You do not have any pending orders.</h3>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default VisitorOrdersShow;
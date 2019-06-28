import React, { Component } from "react";
import NavSection from "../../common/NavVisitors/NavSection"
import { Jumbotron } from "react-bootstrap";

class VisitorOrders extends Component {
    state = {};

    render() {
        return (
            <>
                <NavSection />
                <Jumbotron>
                    <h1>Your Orders</h1>
                </Jumbotron>
                <div>
                    asadsads
                </div>
            </>
        )
    }
}

export default VisitorOrders;
import React, { Component } from "react";
import NavSection from "../../common/NavVisitors/NavSection"
import OrderRoute from "../../../utils/OrderRoute";
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup } from "react-bootstrap/es/";
import { Container } from "bloomer/lib/layout/Container";
import Footer from "../../common/Footer";

class VisitorOrders extends Component {
    state = {
        nameLast: "",
        nameFirst: "",
        phone: Number,
        orders: [],
        _id: ""
    };

    componentDidMount() {
        if (!this.state._id === "") {
            this.loadOrders(this.state._id);
        }
    }

    loadOrders = () => {
        OrderRoute.getOrders(this.state._id)
            .then(res => {
                this.setState({
                    nameLast: "",
                    nameFirst: "",
                    phone: Number,
                    orders: res.data,
                    _id: ""
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <NavSection />
                <Jumbotron>
                    <h1>Your BIG Orders</h1>
                </Jumbotron>
                {this.state.visitorObj ? (
                    <Container>
                    </Container>
                ) : (
                        <Container>
                            <h3>You do not have any pending orders.</h3>
                        </Container>
                    )}
                <Footer />
            </>
        )
    }
}

export default VisitorOrders;
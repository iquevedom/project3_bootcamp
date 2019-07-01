import React, { Component } from "react";
import OrderRoute from "../../../utils/OrderRoute";
import VisitorRoute from "../../../utils/VisitorRoute";
import InfoTaker from "./InfoTaker";
import InfoWindow from "./InfoWindow";
import VisitorOrderShow from "./VisitorOrderShow";
import { Jumbotron, Container, Modal } from "react-bootstrap/es/";
import "./style.css";

class VisitorOrders extends Component {
    state = {
        orderItem: {}
    };

    componentDidMount() {
        if (!this.state._id === "") {
            this.loadOrders();
        }
    }

    loadOrders = () => {
        OrderRoute.getOrders(this.state._id)
            .then(res => {
                this.setState({ orders: res.data });
            })
            .catch(err => console.log(err));
    };

    onChange(e) {
        this.setState({ phone: e.target.phone });
    };

    onSubmit = phone => {
        VisitorRoute.getInfoByPhone(phone)
            .then(res => {
                this.setState({
                    nameFirst: res.data.nameFirst,
                    nameLast: res.data.nameLast,
                    _id: res.data._id
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Your BIG Order</h1>
                </Jumbotron>
                {this.state._id === "" ? (
                    <Container>
                        <InfoTaker
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                        />
                    </Container>
                ) : (
                        <Container>
                            <InfoWindow
                                phone={this.state.phone}
                            />
                            <VisitorOrderShow
                                order={this.state.orders}
                            />
                        </Container>
                    )}
            </>
        )
    }
}

export default VisitorOrders;
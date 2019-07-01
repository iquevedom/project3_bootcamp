import React, { Component } from "react";
// Routes used to make orders
import OrderRoute from "../../../utils/OrderRoute";
import VisitorRoute from "../../../utils/VisitorRoute";

class VisitorHub extends Component {
    // This state allows the site to keep temporary track of the user's ordered items
    state = {
        nameFirst: "",
        nameLast: "",
        _id: "",
        phone: 0,
        orders: [],
        orderItem: {}
    };

    // This will populate the Orders section of the visitor-side site
    // If the user has ordered anything already, that current order will be shown when the user navigates to Orders
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
}

export default VisitorHub;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Routes used to make orders
import VisitorRoute from "../../../utils/VisitorRoute";
import OrderRoute from "../../../utils/OrderRoute";
import MenuRoute from "../../../utils/MenuRoute";
import Home from "../Home/VisitorHome";
import Orders from "../Orders/VisitorOrders";
import Menu from "../Menu/VisitorMenu";
import NoPath from "../NoPath";
import Nav from "../../common/NavSection/VisitorNav";
import Footer from "../../common/Footer/VisitorFooter";

class VisitorHub extends Component {
    // This state allows the site to keep temporary track of the user's ordered items
    state = {
        nameFirst: "",
        nameLast: "",
        _id: "",
        phone: "",
        orders: [],
        items: []
    };

    componentDidMount() {
        this.getVisitor();
    }

    loadMenu = () => {
        MenuRoute.getMenu()
            .then(res => {
                this.setState({
                    items: res.data,
                })
            })
            .catch(err => console.log(err));
    };

    getVisitor = () => {
        VisitorRoute.getInfoByPhone(this.state.phone)
            .then(res => {
                this.setState({ visitor: res.data });
            })
            .catch(err => console.log(err));
    };

    addToOrder = (e, newItem) => {
        let tempArray = this.state.orders;

        tempArray.push(newItem);
        this.setState({ orders: tempArray });
    };

    sendOrder = () => {
        let total = 0;
        let orderItem = {};

        this.state.orders.forEach(item => {
            total += item.price;
        });

        orderItem = {
            items: this.state.orders,
            totalCost: total,
            owner: this.state.phone
        };

        OrderRoute.postOrders(orderItem)
            .then(res => {
                this.setState({ tempOrder: res.data });
                this.props.updateOrder(this.state.tempOrder);
            })
            .catch(err => console.log(err));
    }

    sendVisitor = () => {
        let visitor = {
            nameFirst: this.state.nameFirst,
            nameLast: this.state.nameLast,
            phone: this.state.phone
        }

        VisitorRoute.postInfoById(visitor)
            .then(res => {
                console.log("Data uploaded");
            })
            .catch(err => console.log(err));
    }

    onSubmit = (e, phone) => {
        e.preventDefault();
        VisitorRoute.postInfoByPhone(phone)
            .then(res => {
                this.setState({
                    nameFirst: res.data.nameFirst,
                    nameLast: res.data.nameLast,
                    phone: res.data.phone
                })
            })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <>
                <Route component={Nav} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/orders" render={(props) =>
                        <Orders
                            {...props}
                            orders={this.state.orders}
                            phone={this.state.phone}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}
                            addToOrder={this.addToOrder}
                            loadMenu={this.loadMenu}
                            items={this.state.items}
                            onSubmit={this.onSubmit}
                            onChange={this.handleInputChange}
                        />
                    } /> */}
                    <Route exact path="/menu" render={(props) =>
                        <Menu
                            {...props}
                            orders={this.state.orders}
                            addToOrder={this.addToOrder}
                            loadMenu={this.loadMenu}
                            items={this.state.items}
                        />
                    } />
                    <Route component={NoPath} />
                </Switch>
                <Route component={Footer} />
            </>
        );
    }
}

export default VisitorHub;
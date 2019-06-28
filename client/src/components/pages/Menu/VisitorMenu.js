import React, { Component } from "react";
import API from "../../../utils/MenuRoute";
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup } from "react-bootstrap";

class VisitorMenu extends Component {
    state = {
        allTypes: ["sandwich", "appetizer", "beverage", "platter"],
        items: [],
        name: "",
        ingredients: "",
        description: "",
        price: "",
        type: ""
    };

    componentDidMount() {
        this.loadMenu();
    }

    loadMenu = () => {
        API.getMenu()
            .then(res =>
                this.setState({
                    items: res.data,
                    name: "",
                    ingredients: "",
                    description: "",
                    price: "",
                    type: ""
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>The Big Restaurant</h1>
                </Jumbotron>
                {this.state.items.length ? (
                    this.state.items.map(item => (
                        <ListGroup>
                            <ListGroup.Item key={item._id}>
                                <h3>{item.name}</h3>
                                <strong>{item.ingredients}</strong>
                                <p>{item.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    ))) : (
                        <h3>Our menu is currently unavailable for viewing.</h3>
                    )}
            </>
        )
    }
}

export default VisitorMenu;
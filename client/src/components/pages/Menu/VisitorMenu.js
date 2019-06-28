import React, { Component } from "react";
import MenuRoute from "../../../utils/MenuRoute";
import NavSection from "../../common/NavVisitors/NavSection"
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup } from "react-bootstrap/es/";

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
        MenuRoute.getMenu()
            .then(res => {
                this.setState({
                    items: res.data,
                    name: "",
                    ingredients: "",
                    description: "",
                    price: "",
                    type: ""
                })
            }
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <NavSection />
                <Jumbotron>
                    <h1>The Big Restaurant</h1>
                </Jumbotron>
                {this.state.items.length ? (
                    this.state.items.map(item => (
                        <ListGroup>
                            <ListGroup.Item key={item._id}>
                                <h3>{item.name}</h3>
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
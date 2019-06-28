import React, { Component } from "react";
import MenuRoute from "../../../utils/AdminRoute";
import NavSection from "../../common/NavVisitors/NavSection"
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup } from "react-bootstrap/es/";

<<<<<<< HEAD
class AdminMenu extends Component {
=======
class VisitorMenu extends Component {
>>>>>>> d560923e7307fe86548d1f0179d60c3e586285f7
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

export default AdminMenu;
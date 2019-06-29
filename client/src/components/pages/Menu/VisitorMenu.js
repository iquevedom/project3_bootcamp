import React, { Component } from "react";
import MenuRoute from "../../../utils/MenuRoute";
import NavSection from "../../common/NavVisitors/NavSection"
import Footer from "../../common/Footer";
import { Jumbotron, ListGroup, Container } from "react-bootstrap/es/";
import "./visitor.css"
import { Link } from "react-router-dom";

class VisitorMenu extends Component {
    state = {
        allTypes: ["sandwich", "appetizer", "beverage", "platter"],
        items: [],
        name: "",
        ingredients: "",
        description: "",
        price: "",
        type: "",
        itemRow: []
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
                    <h1>The BIG Menu</h1>
                </Jumbotron>
                {this.state.items.length ? (
                    <Container>
                        {this.state.items.map(item => (
                            <ListGroup>
                                <ListGroup.Item key={item._id}>
                                    <h3 className="item-head">{item.name}</h3>
                                    <p className="item-ingredients">{item.ingredients}</p>
                                    <p className="item-description">{item.description}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </Container>
                ) : (
                        <h3>Our menu is currently unavailable for viewing.</h3>
                    )}
                <Footer />
            </>
        )
    }
}

export default VisitorMenu;
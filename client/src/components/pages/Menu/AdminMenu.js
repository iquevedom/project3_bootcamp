import React, { Component } from "react";
import MenuRoute from "../../../utils/MenuRoute";
import NavSection from "../../common/NavAdmin/NavSection";
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup } from "react-bootstrap/es/";
import DeleteBtn from "../../DeleteBtn";
import API from "../../../utils/API";

class AdminMenu extends Component {
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

  // Remove a menu item, pass its id
  deleteMenu = id => {
    MenuRoute.deleteAdminMenu(id)
      .then(res => this.loadMenu())
      .catch(err => console.log(err));
  };

  // Load entire menu
  loadMenu = () => {
    MenuRoute.getAdminMenu()
      .then(res => {
        this.setState({
          items: res.data,
          name: "",
          ingredients: "",
          description: "",
          price: "",
          type: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <NavSection />
        <Jumbotron>
          <h1>The Big Restaurant</h1>
        </Jumbotron>
        <h1>Actual Menu</h1>
        {this.state.items.length ? (
          this.state.items.map(item => (
            <ListGroup>
              <ListGroup.Item key={item._id}>
                <Link to={"/menus/" + item._id}>
                  <strong>
                    <h3>Name : {item.name}</h3>
                  </strong>
                </Link>
                <h3>
                  <strong>Ingredients : </strong> : {item.ingredients}
                </h3>
                <h3>
                  <strong>Price : </strong> : {item.price}
                </h3>
                <h3>
                  <strong>Description : </strong> : {item.description}
                </h3>
                <DeleteBtn onClick={() => this.deleteMenu(item._id)} />
              </ListGroup.Item>
            </ListGroup>
          ))
        ) : (
          <h3>Our menu is currently unavailable for viewing.</h3>
        )}
      </>
    );
  }
}

export default AdminMenu;

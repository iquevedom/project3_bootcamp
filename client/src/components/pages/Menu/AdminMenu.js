import React, { Component } from "react";
import MenuRoute from "../../../utils/MenuRoute";
import { Jumbotron, ListGroup } from "react-bootstrap/es/";
import DeleteBtn from "../../DeleteBtn";
import AddForm from "../../AddForm";
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
        <Jumbotron>
          <h1>Menu Control Pane</h1>
        </Jumbotron>
        <AddForm />
        {this.state.items.length ? (
          this.state.items.map(item => (
            <ListGroup>
              <ListGroup.Item key={item._id}>
                <h3><strong>Name : {item.name}</strong></h3>
                  <p><strong>Ingredients : </strong> : {item.ingredients}</p>
                  <p><strong>Price : </strong> : {item.price}</p>
                  <p><strong>Description : </strong> : {item.description}</p>
                <DeleteBtn
                  item={item}
                  onClick={() => this.deleteMenu(item._id)}
                />
              </ListGroup.Item>
            </ListGroup>
          ))
        ) : (
            <h3>Our menu is currently unavailable for viewing or empty.</h3>
          )}
      </>
    );
  }
}

export default AdminMenu;

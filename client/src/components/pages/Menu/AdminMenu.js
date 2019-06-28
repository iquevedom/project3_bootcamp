import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Grid";
import Jumbotron from "../../Jumbotron";
import { List, ListItem } from "../../List";
import API from "../../../utils/API";
import DeleteBtn from "../../DeleteBtn";

 class AdminMenu extends Component {
 /* state = {
    book: {}
  }; */
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  /* componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  } */

  
    state = {
      book: {},
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus = () => {
    API.getMenus()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Menus Available
               {/*  {this.state.book.title} by {this.state.book.author} */}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Menus</h1>
              <p>
                {this.state.books.synopsis}
              </p>
              {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/menu-items/" + book._id}>
                      <strong>
                        {book.title} : {book.author}
                      </strong>
                      <p>{book.synopsis}</p>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} 
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Admin Menu</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminMenu;
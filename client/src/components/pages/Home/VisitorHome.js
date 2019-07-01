import React, { Component } from "react";
import { Jumbotron, Image, Container, Row, Col } from "react-bootstrap/es";
import "./visitor.css";
const pizza = require('../../../images/pizza.jpg');
const burger = require('../../../images/burger.jpg');
const chicken = require('../../../images/chicken.jpeg');
const hotdog = require('../../../images/hot dog.jpg');

class VisitorHome extends Component {
    render() {
        return (
            <>
                <Image src={pizza} fluid />

                <Jumbotron fluid className="tranparent" id="ptag">
                    <Container>
                        <p>
                            The world’s best hot dogs, sausages, burgers and chicken sandwiches, cooked just the way you like it over a glowing bed of real hardwood charcoal.
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Image src={burger} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Try one of our
                            delicious specialty
                            pizzas and find your
                            new favorite!
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Image src={chicken} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Start your summer
                            right with fried
                            Chicken
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Image src={hotdog} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Classic and custome made
                            hotdogs
                        </p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default VisitorHome;
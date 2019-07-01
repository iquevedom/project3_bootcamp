import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./visitor.css"

export default function Footer() {
    return (
        <Jumbotron>
            <>
                <div>
                    <a className="atg2" href="/../Users/Bryce/code/projects/project3_bootcamp/client/src/components/pages/Home/AdminHome" target="_blank">github.com</a>
                </div>
                <Link to="/admin">Admin Portal</Link>
            </>

        </Jumbotron>
    );
}

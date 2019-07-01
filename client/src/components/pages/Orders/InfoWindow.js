import React from "react";
import { Card } from "react-bootstrap/es";

function InfoWindow(props) {
    return (
        <Card>
            <Card.Body>
                {props.phone}
            </Card.Body>
        </Card>
    );
}

export default InfoWindow;
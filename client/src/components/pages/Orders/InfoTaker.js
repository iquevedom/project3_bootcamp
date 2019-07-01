import React from "react";
import { Form, Button } from "react-bootstrap/es";

function InfoTaker() {
    return (
        <Form>
            <Form.Group controlId="phone">
                <Form.Label>Phone Number (Numbers Only)</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
                <Form.Text className="text-muted">Enter your phone number without any spaces, dashes, or non-numerical characters.</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default InfoTaker;
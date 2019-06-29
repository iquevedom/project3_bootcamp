import React from "react";
import "./style.css";
import Form from "react-bootstrap/es/Form";

// Add a thing to the parent. The function to add should be defined by the parent
function AddBtn(props) {
    return (
        <Form>
            <Form.Group>
                
            </Form.Group>
            <span className="add-btn" onClick={props.onClick} role="button" tabIndex="0">
                ✗
    </span>
        </Form>

    );
}

export default AddBtn;
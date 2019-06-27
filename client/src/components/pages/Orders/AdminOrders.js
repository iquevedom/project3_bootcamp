import React, { Component } from "react";
import NavSection from "../../components/NavSection";

class Orders extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    render() {
        return (
            <>
                <NavSection />
                <div>
                    orders
            </div>
            </>
        )
    }
}

export default Orders;
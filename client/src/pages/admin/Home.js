import React, { Component } from "react";
import NavSection from "../../components/NavSection";

class Home extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };

    render() {
        return (
            <>
            <NavSection/>
            <div>
                Testing
            </div>
            </>
        )
    }
}

export default Home;
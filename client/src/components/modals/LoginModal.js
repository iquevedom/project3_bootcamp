import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../state/auth/actions";

import Modal from "./Modal";
// import { Card, CardHeader, CardContent, CardHeaderTitle } from "bloomer";

function LoginModal(props) {
  const [email, setEmail] = useState("tucker@gmail.com");
  const [password, setPassword] = useState("kittens");

  return (
    <Modal>
      <div>
        <div>
          <h1>Login!</h1>
        </div>
        <div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="burrito@taco.com"
              className="input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Secret Sauce"
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="has-text-right">
            <button
              onClick={() => props.dispatch(signin(email, password))}
              className="button is-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default connect(
  null,
  null
)(LoginModal);

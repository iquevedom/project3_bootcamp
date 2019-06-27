import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import {
  Card,
  CardHeader,
  CardContent,
  CardHeaderTitle,
  Notification
} from "bloomer";
import { signup } from "../../state/auth/actions";
import { clearError, signupError } from "../../state/errors/actions";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <Modal>
      <Card>
        <CardHeader>
          <CardHeaderTitle>Create an Account!</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          {props.signupError && (
            <Notification isColor="danger">{props.signupError}</Notification>
          )}
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="burrito@taco.com"
              className="input"
              name="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                props.clearError();
              }}
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
              onChange={e => {
                setPassword(e.target.value);
                props.clearError();
              }}
              type="password"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="rePassword">
              Re Enter Password
            </label>
            <input
              placeholder="Gotta Double Dip"
              className="input"
              name="rePassword"
              value={rePassword}
              onChange={e => {
                setRePassword(e.target.value);
                props.clearError();
              }}
              type="password"
            />
          </div>
          <div className="has-text-right">
            <button
              onClick={() => {
                props.signup(email, password, rePassword);
              }}
              className="button is-primary"
            >
              Sign Up
            </button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

const mapStateToProps = ({ errors }) => ({
  signupError: errors.signup
});

const mapDispatchToProps = dispatch => ({
  signup(email, password, rePassword) {
    if (!email) {
      return dispatch(signupError("Please enter an email"));
    }

    if (password === "" || password !== rePassword) {
      return dispatch(signupError("Passwords do not match"));
    }
    dispatch(signup(email, password));
  },
  clearError() {
    dispatch(clearError());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);

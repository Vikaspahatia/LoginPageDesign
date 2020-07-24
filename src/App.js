import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside"></div>

        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <Route exact path="/">
            <div className="FormCenter">
              <form className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="FormField__Input"
                    placeholder="Enter your full name"
                    name="name"
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="FormField__Input"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your e-mail"
                    name="email"
                  />
                </div>

                <div className="FormField">
                  <label className="FormField__CheckboxLabel">
                    <input
                      className="FormField__CheckboxLabel"
                      type="checkbox"
                      name="hasAgreed"
                    />{" "}
                    I agree all statements in{" "}
                    <a href="" className="FormField__TermsLink">
                      {" "}
                      terms of services
                    </a>
                  </label>
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
                  <Link to="/sign-in" className="FormField__Link">
                    I'm already a member
                  </Link>
                </div>
              </form>
            </div>
          </Route>

          <Route path="/sign-in">
            <div className="FormCenter">
              <form className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your e-mail"
                    name="email"
                    //value={this.state.email}
                    //onChange={this.handleChange}
                  />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="FormField__Input"
                    placeholder="Enter your password"
                    name="password"
                    //value={this.state.password}
                    //onChange={this.handleChange}
                  />
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button>
                  <Link to="/" className="FormField__Link">
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

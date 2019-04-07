import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import axios from 'axios';

import "./login.css";

const API_PATH = 'https://cuestionarios.g20coaching.com/wp-content/themes/cuestionario-g20/functions/ajax/user.php';

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
      .then(function (response) {
        console.log("Data from server : "+response.data);
      })
      .catch(function (error) {
        console.log("Error from server : "+error);
      });
    }

    render() {
        return (
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bs-size="large">
                <label>Email</label>
                <FormControl
                  autoFocus
                  name="correo"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required=""
                />
              </FormGroup>
              <FormGroup controlId="password" bs-size="large">
                <label>Password</label>
                <FormControl
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  required=""
                />
              </FormGroup>
              <Button
                block
                bs-size="large"
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        );
      }
    }
import React  from 'react';
import Form from "../../common/form";
import Joi from "joi-browser";
import auth from "../../services/authService";
import { Redirect, Link } from "react-router-dom";
import  "./styles/login.scss";
class Register extends Form {
    state = {
        data: { name: "", email:"", password: ""},
        errors: {}
      };

      schema = {
        name: Joi.string()
          .required()
          .label("Name"),
        email: Joi.string()
        .required()
        .label("Email"),
        password: Joi.string()
          .required()
          .label("Password")
      };
    
      doSubmit = async () => {
        try {
          const { data } = this.state;
          await auth.register(data.name, data.email, data.password);
    
          window.location =  "/";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };
    render() { 
        // if (auth.getCurrentUser()) return <Redirect to="/" />;

        return ( 
            <div className="container mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-5 col-md-6  col-lg-5 mt-5  p-4 m-1" >
                        <h1 className="text-center"  >Register</h1>
                        <form onSubmit={this.handleSubmit}>
                        {this.renderInput2("name", "Name")}
                        {this.renderInput2("email", "Email")}
                        {this.renderInput2("password", "Password","password" )}
                        {this.renderButton("Register")}
                        </form>
                </div>
                <div className="col"></div>
            </div>
          </div>
         );
    }
}
 
export default Register;
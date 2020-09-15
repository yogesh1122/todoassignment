import React  from 'react';
import Form from "../../common/form";
import Joi from "joi-browser";
import auth from "../../services/authService";
import { Redirect, Link } from "react-router-dom";
import  "./styles/login.scss";
class Login extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
      };
    
      schema = {
        username: Joi.string()
          .required()
          .label("Username"),
        password: Joi.string()
          .required()
          .label("Password")
      };
    
    
      doSubmit = async () => {
        try {
          const { data } = this.state;
          await auth.login(data.username, data.password);
    
          window.location =  "/dashboard";
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };
    render() { 
        // if (auth.getCurrentUser()) return <Redirect to="/dashboard" />;

        return ( 
            <div className="container mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-5 col-md-6  col-lg-5 mt-5  p-4 m-1" >
                        <h1 className="text-center"  >Login</h1>
                        <form onSubmit={this.handleSubmit}>
                        {this.renderInput2("username", "Username")}
                        {this.renderInput2("password", "Password","password" )}
                        {this.renderButton("Login")}
                        </form>
                        <div className=" mt-3">
                          <button className="btn btn-success btn-block">
                          <Link to="/register">Register</Link>
                          </button>
                        </div>
                </div>
                <div className="col"></div>
            </div>
          </div>
         );
    }
}
 
export default Login;
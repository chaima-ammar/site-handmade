import React, { Component } from "react";
import {
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import { MDBInput } from "mdbreact";
import "../login/sigin.css";
import { login ,getUser} from "../../../actions/authentification";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import Navbar from "../../client/navbar"

class SignIn extends Component {
  componentDidMount() {
this.props.getUser();
  }

  state = {
    email: "",
    password: "",
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    if (this.props.user.role) {
      return <Redirect to="/" />;
    }

    return (
      <div className="box">
     <div>
       {""}
       <Navbar user ={this.props.user}/>
     </div>
     <div className='main-sign'>
     <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
        <MDBCardTitle className="">CONNEXION</MDBCardTitle>

        <MDBModalBody className="">
          <div className="grey-text inputs">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBCol md="" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  onChange={this.handleChangeEmail}
                  type="email"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="email"
                  placeholder="entrer votre adress email"
                />
              </MDBCol>

              <MDBCol md="" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  mot de passe
                </label>
                <input
                  onChange={this.handleChangePassword}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  name="password"
                  placeholder=" mot de passe"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </form>
          </div>
          <div className="text-center">
            <MDBBtn
              color="dark"
              className="button-signin"
              onClick={() =>
                this.props.login({
                  email: this.state.email,
                  password: this.state.password,
                })
              }
            >
              Se connecter
            </MDBBtn>
          </div>
        </MDBModalBody>
        <MDBModalFooter className="mx-5 pt-3 mb-1">
          <p className="font-small grey-text d-flex justify-content-end">
            Not a member?
            <a href="#!" className="blue-text ml-1">
              
            </a>
          </p>
        </MDBModalFooter>
        </MDBCol>
        </MDBRow>
        </MDBContainer>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (el) => dispatch(login(el)),
getUser:()=>dispatch(getUser())
});
const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Login from "./login/sigin"
import {getUser, logout } from "../../actions/authentification";
import { connect } from "react-redux";


 






class Navbar extends Component {

componentDidMount(){
  this.props.getUser();
}




state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <>
 
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <img  src ="logotransp.png"  width="70px"
                  />
          {/* <strong className="white-text">Navbar</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">  <i class="fas fa-home"></i>Acceuil</MDBNavLink>
            </MDBNavItem>
            {this.props.profil.role==="Admin"  ?(
            <MDBNavItem>
              <MDBNavLink to="./Pageadmin">Pageadmin</MDBNavLink>
              
            </MDBNavItem>
              ):(
                ""
              )}

{this.props.profil.role==="Admin"  ?(
            <MDBNavItem>
              <MDBNavLink to="./Profil">Profil</MDBNavLink>
              
            </MDBNavItem>
              ):(
                ""
              )}





              {this.props.profil.role==="Admin"? (
            <MDBNavItem>
              <MDBNavLink to="/Addcards">ajouter carte</MDBNavLink>
            </MDBNavItem>
            ):(
            ""
            )}









          
          </MDBNavbarNav>
          <MDBNavbarNav right className="nav-left barnav">
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user">{this.props.user.name}</MDBIcon>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
           
                
                  <MDBDropdownItem href="/sigin">sign</MDBDropdownItem>
                  {this.props.profil.role ? (
                  <MDBDropdownItem>
                      <i
                        style={{ transform: "translatex(-15px" }}
                        onClick={this.props.logout}
                        class="fas fa-sign-out-alt"
                      >
                        deconnexion
                      </i>
                    </MDBDropdownItem>
                  ):(
""
)}










                 




                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   
 
  
</>
    );

  
  }

}

const mapStateToProps = (state) => ({
  user:state.auth,
  profil: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
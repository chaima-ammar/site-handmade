import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBAnimation,
  MDBCardTitle,
} from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import { MDBInput } from "mdbreact";
import { addCard} from "../../actions/adminAction";
import { connect } from "react-redux";
import axios from "axios";
import "../../index.css";
import { getUser } from "../../actions/authentification";
import Navbar from "./../client/navbar"


class AddCards extends Component {
 
  componentDidMount() {
    this.props.getuser();
  }

  state = {
    selectedFile: [],
  };
  fileSelectedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
    console.log("name",e.target.files[0])
  };

  uploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    axios
      .post("http://localhost:8080/public", fd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  

  render() {
   
    return (
      <>
          <Navbar user={this.props.user}/>
        <MDBCardTitle className="titre-addcarte">Ajouter produit</MDBCardTitle>
        <MDBContainer className="">
          <MDBModalBody>
            <MDBInput
              label="Titre"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
      
           <MDBInput
              label="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
      


            <MDBInput
              type="file"
              onChange={(e) => this.fileSelectedHandler(e)}
              outline
            />

            <button
              color="dark"
              onClick={() => this.uploadHandler()}
              className="btn-telecharger"
            >
              telecharger l'image
            </button>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="default"
              tag={Link}
              to="/Pageadmin"
              className="btn-add"
              onClick={() =>
                this.props.addCard({
                  title: this.state.title,
                  description:this.state.description,
                  image: this.state.selectedFile.name,
                })
              }
            >
              ajouter carte
            </MDBBtn>
          </MDBModalFooter>
        </MDBContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});


const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (el) => dispatch(addCard(el)),
    getuser: () => dispatch(getUser()),
  };
};

export default connect( mapStateToProps,mapDispatchToProps)(AddCards);
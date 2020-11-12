import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {editCard}from '../../actions/adminAction';
import { connect } from 'react-redux';
import "../../index.css";

class ModalEDit extends Component {
state = {
 

id:this.props.el._id,
title:this.props.el.title,
image:this.props.el.image,
description:this.props.el.description,


modal: false,
}


handelchangeTitle=(e)=>{ this.setState({title:e.target.value})}
handelchangeImage=(e)=>{this.setState({image:e.target.value})}
handelchangeDescription=(e)=>{this.setState({description:e.target.value})}


toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer> 
      
    <div onClick={this.toggle} className='btn-edite'> <i class="fas fa-edit"></i></div>
     
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} className=''>
        <MDBModalHeader toggle={this.props.editCard(this.props.el.id)}  className='titre-addcarte'>Modifer carte</MDBModalHeader>
        <MDBModalBody>
        <MDBInput label="Title"  valueDefault={this.props.el.title} onChange={(e)=> this.handelchangeTitle(e)}/>
        <MDBInput label="Image" valueDefault={this.props.el.image} onChange={(e)=> this.handelchangeImage(e)}/> 
        <MDBInput label="Description" valueDefault={this.props.el.description} onChange={(e)=> this.handelchangeDescription(e)}/> 
      

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="default" className='btn-telecharger' onClick={this.toggle}  >fermer</MDBBtn>
          <MDBBtn color="default"  className='btn-telecharger'  onClick={() =>

                this.props.editCard(
                this.state
                
                )}> enregistrer</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      
    </MDBContainer>
    );
  }
}

const mapDispatchToProps =(dispatch)=>({

  editCard :(id)=> dispatch(editCard(id))
})

export default connect(null,mapDispatchToProps) (ModalEDit);
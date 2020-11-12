import React, { Component } from "react";
 import "../../index.css";
import { connect } from "react-redux";
import {
  MDBBtn,
  Link,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import AddCard from "./../admin/addCard"
import {deleteCard} from "./../../actions/adminAction"
import {editCard} from "./../../actions/adminAction"
import ModalEDit from "../admin/editcard";
import Axios from "axios";

import Navbar from "./../../component/client/navbar"




class pageAdmin extends Component {
  state = {
    cards: [],
    page: 1,
    pageSize: 2,
  };

  componentDidMount() {
    //  this.props.getProduct()
    Axios.get("http://localhost:8080/handmade/admin").then((res) => {
      console.log(res);
      this.setState({ cards: res.data });
     
    });
  }







  render() {
  
    return (
      <div className=''>


  <Navbar/>


            <div className="cards  container-fluid">
              {this.state.cards.map((el) => (
                   
                   <MDBCol>
                     <MDBCard style={{ width: "18rem", margin:'20px' }}>
                       <MDBCardImage className="img-fluid image"  src={"http://localhost:8080/" + el.image} waves />
                       <MDBCardBody>
                         <MDBCardTitle>{el.title}</MDBCardTitle>
                         <MDBCardText>
                       {el.description}
                         </MDBCardText>
                        <div className='row buttons'>
                         <div className="col-md-12 mb-4">



                         <button type="button" class="btn btn-default px-4"   onClick={() => this.props.deleteCard(el._id)} >   <i class="far fa-trash-alt"></i></button>
                       <button type="button" class="btn btn-default px-2"  ><ModalEDit el={el} /></button>

                       

                      <button type="button" class="btn btn-default px-2"  style={{width:"59px", height:"47px"}}>
                   
                        <Link
                       
                          to={"/Detaille" + el._id}
                          className=" link-details"
                        >
                          <i class="fas fa-align-center"></i>
                        </Link>
                     
                        </button>
                      </div>
                     
                      <div class="col-md-12 mb-4">



</div>
           </div>            

                       </MDBCardBody>
                     </MDBCard>
                   </MDBCol>
                  
                     
                  
                ))} 
            </div>
         
        
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    admincardReducer: state.cards
  
});
const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id)),
  editCard: (id) => dispatch(editCard(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(pageAdmin );
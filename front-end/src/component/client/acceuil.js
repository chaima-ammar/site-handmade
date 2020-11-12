import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody,Link ,MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Navbar from "./navbar"
import Header from "./header"
import "../../index.css";
import Footer from "./footer"
import { connect } from "react-redux";
import { getCards } from "../../actions/adminAction"


class Accueil extends Component {



  
  componentDidMount() {
    this.props.getCards();
  }




render(){




  console.log(this.props.image)
  return (
    < div className=''>
 
<Navbar/>

     


<div >
   <Header/>
   </div>

   
     <div className="cards container-fluid  ">
{this.props.admincardReducer.map((el) => (
    
     
    
    <MDBCol>
      <MDBCard style={{ width: "18rem", margin:'20px'}}>
        <MDBCardImage className="img-fluid image" src={"http://localhost:8080/" + el.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{el.title}</MDBCardTitle>
          <MDBCardText>
          {el.description}
          </MDBCardText>
      
          <div className="button">
                          <Link
                            to={"/Detaille" + el._id}
                            className="waves-effect  item active link-detail"
                            
                          >
                            Details
                          </Link>
                        </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
 
 
))}</div>





<div><Footer/></div>

 </div>

   
  )}
  
}

const mapStateToProps = (state) => ({
  admincardReducer: state.cards
 
});
const mapDispatchToProps = (dispatch) => ({
  getCards: (e) => dispatch(getCards(e)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
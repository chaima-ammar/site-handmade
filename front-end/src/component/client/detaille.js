 
import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

import { connect } from "react-redux";
import "../../index.css";
import Navbar from "./navbar"
import { getUser } from "../../actions/authentification";
class Details extends Component {


  componentDidMount() {
     
    this.props.getUser();
  }



  
  render() {
  
  



    
    return (
      <>
        <div className="">
        <Navbar user={this.props.user}/>

          <div class="container my-5 py-5 z-depth-1">
            <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
              <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                  <h3 class="font-weight-bold">{this.props.el.title}</h3>

  

                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        
                        Boutique:
                        <span className="styel-texts">
                          {this.props.el.nomboutique}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                 
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                       
                        Materiaux:
                        <span className="styel-texts">
                          {this.props.el.materiaux}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        Dimensions:
                        <span className="styel-texts">
                          {this.props.el.dimensions}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    {/* <p className='fonts'> Contacter par :</p> */}
                    <MDBCardText className="style">
                      <label className="font">
                     
                        telephone:
                        <span className="styel-texts">
                          {this.props.el.telephone}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                      
                        Email:
                        <span className="styel-texts">
                          {this.props.el.email}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                  <p class="text-muted"> {this.props.el.description}</p>

                  {/* <a class="btn btn-purple btn-md ml-0" href="#" role="button">Start now<i class="fa fa-gem ml-2"></i></a> */}
                 
                </div>

                <div class="col-md-6 mb-4 mb-md-0">
                  <div class="view overlay z-depth-1-half">
                    <img
                      src={"http://localhost:8080/" + this.props.el.image}
                      class="img-fluid images-detaille"
                      alt=""
                    />
                    <a href="#">
                      <div class="mask rgba-white-light"></div>
                    </a>
                  </div>
                </div>
              </div>
           
            </section>
          </div>
        </div>
        <div>
          
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    admincardReducer: state.cards


});
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
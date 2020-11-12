import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Navbar from "./component/client/navbar"
import Header from "./component/client/header"
import Acceuil from "./component/client/acceuil"
import AddCard from "./component/admin/addCard"
import PageAdmin from "./component/admin/pageAdmin"
import Detaille from "./component/client/detaille"
import Login from "./component/client/login/sigin"

import { connect } from "react-redux";
import { getUser } from "./actions/authentification";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {getCards} from "./actions/adminAction"
import Profil from "./component/admin/editProfil/profil"


class App extends Component {


  componentDidMount() {
    
    
  }





  render() {
    return (
   <div>

<Router>
          

          <Switch>
          
            <Route exact path="/" component={Acceuil} />
            <Route exact path="/Addcards" component={AddCard} />
            <Route exact path="/Pageadmin" component={PageAdmin} />
            <Route exact path="/sigin" component={Login} />
           
            <Route exact path="/Profil" component={Profil} />

            {this.props.admincardReducer.map((el) => (
              <Route exact path={"/Detaille" + el._id}>
                <Detaille el={el} />

         
              </Route>
            ))}




              </Switch>


</Router>


   </div>
    );
  }
}


const mapStateToProps = (state) => ({
  admincardReducer: state.cards,
  
});
const mapDispatchToProps = (dispatch) => ({
 
  getCards: (e) => dispatch(getCards(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

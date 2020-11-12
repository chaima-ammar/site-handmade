import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";  
import "../../index.css";

function Footer(){
    return(

<div>

      <footer className="page-footer font-small footer ">
      
        <div className="footer" >
          <div className="container footer">
      
         
            <div className="row py-4 d-flex align-items-center ">
      
          
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
               <img   src="logotransp.png" width="100px" className="mb-0"/> 
              </div>
           
              <div className="col-md-6 col-lg-7 text-center text-md-right">
      
              
                <a  href ="https://www.facebook.com/cheimaa2020" className="fb-ic">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
               
               
               
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
            
                
              
                <a href="https://www.instagram.com/" className="ins-ic">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
      
              </div>
              
      
            </div>
          
      
          </div>
        </div>
      
        <div className="container text-center text-md-left mt-5">
      
          <div className="row mt-3">
      
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
              <h6 className="text-uppercase font-weight-bold copy">handmade</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker.</p>
      
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
           
              <h6 className="text-uppercase font-weight-bold copy">MDB</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>
                <a href="/#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
      
            </div>
         
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
              <h6 className="text-uppercase font-weight-bold copy">Handmade</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>
                <a href="/">Acceuil</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
      
            </div>
         
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          
              <h6 className="text-uppercase font-weight-bold copy">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> Tunis, Mourouj3, </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> contact@handmade.com</p>
              <p>
                <i className="fas fa-phone mr-3"></i> +25 58 55 57 </p>
            
                
      
            </div>
           
      
          </div>
         
      
        </div>
     
        <div className="footer-copyright text-center py-3 copy" >© 2020 Copyright:
          <a href="" className="copy"> Chaima Ammar</a>
        </div>


        <div className="">

 
<section className=" text-center white-text elegant-color  ">

   <h6 className="miniFooter">Made with <i class="fas fa-heart red-text mx-1"></i> by Handmade</h6>

 </section>



 </div>
     
      </footer>
     
      </div>












    )
}

export default Footer;


















































































































// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "../../index.css"
// const FooterPage = () => {
//   return (
//     <MDBFooter color="default-color" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
      
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> chaima ammar </a>
//         </MDBContainer>

  
//       </div>
//       <div className="">

 
// <section className=" text-center white-text elegant-color  ">

//   <h6 className="miniFooter">Made with <i class="fas fa-heart red-text mx-1"></i> by Handmade</h6>

// </section>



// </div>
//     </MDBFooter>
//   );
// }

// export default FooterPage;
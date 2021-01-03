import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
import HomeNavbar from '../../Navbar/HomeNavbar'


export default function About(){
    return (
        
        <React.Fragment>
             {/* navbar code */}
            <div>
                <HomeNavbar/>
            </div>

       
        {/* body-part */}
        <div className="App" style={{ 
            // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Reading_Room%2C_Langdell_Hall%2C_Harvard_University%2C_Cambridge_MA.jpg/1200px-Reading_Room%2C_Langdell_Hall%2C_Harvard_University%2C_Cambridge_MA.jpg")`
            //  backgroundImage: `url("https://static.thousandwonders.net/New.York.Public.Library.original.8263.jpg")`,
              backgroundColor: 'lightgrey'
              
          }}>
        
             <h1 class="cont" style={{color:"black", textAlign:"center", margin_top:"20px"}}>About Us</h1>
             <br></br>
           
             <p id="apara">Learning Management System (LMS) is a software application for the administration, documentation, tracking and e-learning.</p>
                <p>                    Welcome to a New Learning Experience</p>
            
                <span>
                    New Users<br></br>
                    Please register by clicking the “Register Now” button and completing the registration information.
                </span>
                <br></br>
                <br></br>

                <p>
                    ExistingUsers<br></br>
                    Please login using your WorkSafe username and the new password provided to you by email. If you did not receive an email with your password, please contact our support team.
                </p>
                <br></br>
                <br></br>
                
                <p>
                    Faq:<br></br>
                    Please review our Frequently Asked Questions and contact our support team at Contactus@mylibrary.com.
                </p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

                 {/* <img src="https://static.thousandwonders.net/New.York.Public.Library.original.8263.jpg" width="500px" class="card-img-top" alt="..."/>  */}
                
        </div>
        </React.Fragment>
    )
}

//  function AboutUs() {
//     return (
//         <div>
    
//                     <h1 class="cont" style={{color:"blue", textAlign:"center"}}>About Us</h1>
//                     <p>A Library management system is a software that uses to maintain the record of the library. It contains work like the number of available books in the library, the number of books are issued or returning or renewing a book or late fine charge record, etc. Library Management Systems is software that helps to maintain a database that is useful to enter new books and record books borrowed by the members, with the respective submission dates. Moreover, it also reduces the manual record burden of the librarian.</p>
                    
//           <img src="https://jgu.edu.in/wp-content/uploads/2019/03/global-library-main_0_0-1.jpg" class="card-img-top" alt="..."/>
         
//         </div>
//     )
// }

// export default AboutUs;
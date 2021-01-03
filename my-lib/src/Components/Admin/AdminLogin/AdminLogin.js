import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import HomeNavbar from '../../../Navbar/HomeNavbar';
import { FormErrors } from '../../Welcome/FormErrors';
import axiosInstance from '../../../Inter/Interceptor';
import jwtDecode from "jwt-decode";
 

const form = {
  border:"darkseagreen solid 2px",
  padding: "40px",
  marginTop: "30px",
  marginLeft: "380px",
  marginRight: "485px",
  color: "firebrick",
  fontWeight: "600"
}

const btn ={
  marginTop: "10px",
  marginLeft: "5px" ,
  paddingLeft: "40px",
  paddingRight: "100px",
  marginBottom: "5px",
  fontSize: "23px",
 
}

const welcome ={
  
  marginLeft: "1px",
  marginBottom: "10px",
  color: "black",
  textShadow:" 2px 2px red",
  fontSize: "40px"
}


export default class AdminLogin extends Component{

constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }
}
login() {
  //console.log("ok");
  axiosInstance().post('/users/login',{
    email: this.state.email,
    password:this.state.password
  })
      .then(res => {
        //console.log("success");
          if(res.data.token){
            localStorage.setItem("token",res.data.token);
           // window.location.href='http://localhost:3000/BookBorrow';
           //--- Admin Check
            var decoded = jwtDecode(res.data.token);
            console.log(decoded);
            //alert(decoded);
            
            if(decoded.role!='Admin'){
             // alert("ADMIN");
            this.props.history.push('/UserLogin');
             }
             else{
             this.props.history.push('/AddBooks');
             }
          // Admin Check end
           //this.props.history.push('/AddBooks');
          }
          else{
            alert("Unable to Login, Please try again.");
          }
      })
      .catch(function (error) {
        //console.log("failed");
        alert(" Failed ,Invalid Login, Please try again.");
        
          console.log(error);
      })
}
handleSubmit = e => {
  e.preventDefault();
  this.login()
};

handleUserInput = (e) => {
  e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      //emailValid = value.match(/^[A-Z]{2,10}$/i);
      fieldValidationErrors.email = emailValid ? '' : '(demoAt[domain].com) ';
      break;
    case 'password':
      passwordValid = value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
      fieldValidationErrors.password = passwordValid ? '': 'is not secure';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

 render() {
  return (
    <div>
        <HomeNavbar />
        <form style={form} id="lform" name="validform" className="loginForm" onSubmit={this.handleSubmit} noValidate >
            <h2 style={welcome}> Admin Login </h2>
            <hr style={{borderTop: "2px solid lightgrey" , width:"100%" }} />

        <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
        {/* <Link to="/AddBooks"></Link> */}
          <button style={btn} type="submit" className="btn btn-info login" disabled={!this.state.formValid} >Login</button>
      </form> 


    </div>
)
}
}



//import jwt_decode from "jwt-decode";
 


// var decoded = jwt_decode(token);
 
// console.log(decoded);
// if(decoded.role!='Admin'){
// this.history.push('/AdminLogin');
// }
// else{
// this.history.push('/AddBooks');
// }
// }
 
/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */
 
// decode header by passing in options (useful for when you need `kid` to verify a JWT):
// var decodedHeader = jwt_decode(token, { header: true });
// console.log(decodedHeader);














// import React from 'react';
// import './UserLogin.css';
// import {Link} from 'react-router-dom';
// import HomeNavbar from '../../../Navbar/HomeNavbar';



// class UserLogin extends React.Component {
  
//     constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }

//       this.handleChange = this.handleChange.bind(this);
//       this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

//     };

//     handleChange(e) {
//       let fields = this.state.fields;
//       fields[e.target.name] = e.target.value;
//       this.setState({
//         fields
//       });

//     }

//     submituserRegistrationForm(e) {
//       e.preventDefault();
//       if (this.validateForm()) {
//           let fields = {};
//           fields["username"] = "";
//           fields["emailid"] = "";
//           fields["mobileno"] = "";
//           fields["password"] = "";
//           this.setState({fields:fields});
//           alert("Form submitted");
//       }

//     }

//     validateForm() {

//       let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;

//       if (!fields["username"]) {
//         formIsValid = false;
//         errors["username"] = "*Please enter your username.";
//       }

//       if (typeof fields["username"] !== "undefined") {
//         if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
//           formIsValid = false;
//           errors["username"] = "*Please enter alphabet characters only.";
//         }
//       }

//       if (!fields["emailid"]) {
//         formIsValid = false;
//         errors["emailid"] = "*Please enter your email-ID.";
//       }

//       if (typeof fields["emailid"] !== "undefined") {
//         //regular expression for email validation
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(fields["emailid"])) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter valid email-ID.";
//         }
//       }

//       if (!fields["mobileno"]) {
//         formIsValid = false;
//         errors["mobileno"] = "*Please enter your mobile no.";
//       }

//       if (typeof fields["mobileno"] !== "undefined") {
//         if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
//           formIsValid = false;
//           errors["mobileno"] = "*Please enter valid mobile no.";
//         }
//       }

//       if (!fields["password"]) {
//         formIsValid = false;
//         errors["password"] = "*Please enter your password.";
//       }

//       if (typeof fields["password"] !== "undefined") {
//         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["password"] = "*Please enter secure and strong password.";
//         }
//       }
//       this.setState({
//         errors: errors
//       });
//       return formIsValid;
//     }



//   render() {
//     return (
//       <React.Fragment>

//       <div>
//      <HomeNavbar/>
//       </div>
      
//     <div id="main-registration-container">
//      <div id="register" class="font">
//         <h3>User Login</h3>
//         <form method="post" id="user" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
//         {/* <label>Name</label>
//         <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.username}</div> */}
//          <label>Email ID:</label>
//         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
//         <div className="errorMsg">{this.state.errors.emailid}</div> 
//         {/* <label>Mobile No:</label>
//         <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
//         <div className="errorMsg">{this.state.errors.mobileno}</div> */}
//         <label>Password</label>
//         <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.password}</div>
//         <Link to="/BookBorrow" condition={!this.validateForm}>
//         <input type="submit" className="button"  value="Login"/>
//         </Link>
//         </form>
//     </div>
// </div>
// </React.Fragment>
//       );
//   }


// }
//  export default UserLogin;


// import React, { useState, useEffect } from "react";
// import './UserLogin.css';
// import {Link} from 'react-router-dom'

// import HomeNavbar from "../../../Navbar/HomeNavbar";



// const nameRE = /^[A-Z]{2,10}$/i;
// const passRE = /^[A-Za-z0-9_\.\-\@\#\!\%\^\$]{4}$/;

// function UserLogin() {
//   const [user, setUser] = useState({
//     name: "",
//     nameErr: "",
//     password: "",
//     passwordErr: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setUser((prevData) => {
//         return {
//           ...prevData,
//           nameErr: "",
//           passwordErr: ""
//         };
//       });
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [user.nameErr,user.passwordErr]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevData) => {
//       return { ...prevData, [name]: value };
//     });
//   };

//   const userValidation = (re, checkUser, err) => {
//     if (!re.test(checkUser)) {
//       setUser((prevData) => {
//         return { ...prevData, [err]: `Input is not valid` };
//       });
//       return false;
//     } else {
//       setUser((prevData) => {
//         return {
//           ...prevData,
//           [err]: "",
//         };
//       });
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       userValidation(nameRE, user.name, "nameErr") && userValidation(passRE, user.password, "passwordErr") 
//     )
//     { 
//       //alert("form submitted"); 
//     }
//   };
//   return (
//     <React.Fragment>
//       {/* navbar code */}
//           <div>
//           <HomeNavbar/>
//           </div>
    

//     {/* body-part */}
//                 <div>
//                   <h1 className="userlogin">UserLogin</h1>
//                   <form onSubmit={handleSubmit}>
//                     {user.nameErr && <h5>{user.nameErr}</h5>}

//                     <input type="text"
//                       value={user.name}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Username"
//                       name="name"
//                       className={user.nameErr ? "err" : null}
//                     />
//                     {user.passwordErr && <h5>{user.passwordErr}</h5>}

//                     <input type="password"
//                       value={user.password}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Password"
//                       name="password"
//                       className={user.passwordErr ? "err" : null}
//                     />
//                     {user.emailErr && <h5>{user.emailErr}</h5>}


//                     <Link to="/BookBorrow">
//                     <button type="submit" class="btn btn-dark" >Login</button> </Link>
//                   </form>
//                 </div>
//                 </React.Fragment>
//   );
// }

// export default UserLogin;

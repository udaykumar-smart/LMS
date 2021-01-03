
// import React, { Component } from 'react'
 
// import {Link} from 'react-router-dom';
// import { FormErrors } from '../../Welcome/FormErrors';
 import axiosInstance  from '../../../Inter/Interceptor';
// import jwtDecode from "jwt-decode";

import React, { Component } from 'react'
import AdminNavbar from '../../../Navbar/AdminNavbar';
import {Link} from 'react-router-dom';
//import { FormErrors } from '../Welcome/FormErrors';
import jwtDecode from "jwt-decode";
//import Axios from 'axios'


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
  marginTop: "15px",
  // marginLeft: "5px" ,
  paddingLeft: "40px",
  paddingRight: "110px",
  marginBottom: "5px",
  fontSize: "23px",
   //marginRight:"5px"
 
}

const welcome ={
  
  marginLeft: "1px",
  marginBottom: "10px",
  color: "black",
  textShadow:" 2px 2px red",
  fontSize: "40px"
}

const greet ={
  marginTop:"1px",
  marginBottom:"1px",

}

// const glad={
//   paddingTop:"5px",
//   paddingBottom:"5px"
// }


export default class AddUser extends Component{
  
  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      password:'',
      
    }
}

onChangeName(e) {
  this.setState({ name: e.target.value })
}

onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onChangePassword(e) {
  this.setState({ password: e.target.value})
}


onSubmit(e) {
  e.preventDefault()

  const userObject = {
    name: this.state.name,
    email: this.state.email,
    password:this.state.password
  };
  // console.log(userObject);
  axiosInstance().post('users/addUser', userObject)
  .then((res) => {
      console.log(res.data)
      // alert(res.data.message);
      alert('Register Successfully');
  }).catch((error) => {
      console.log(error)
  });

this.setState({ name: '',email: '',password:''})
}
render() {
  return (
    <>
    <div>
      <AdminNavbar/>
    </div>
   
      <div>
          <div className="row p-2">
             
                  <div className="col-10">
                      <div className="row">
                          <div className="col-2"></div>
                          <div className="col-8">

                          <div className="jumbotron mt-5">
    <div>
      <h3>Register</h3>

      

      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="col">
            <label htmlFor="name">Name<span className="required text-danger">*</span></label>
            <input type="text" required name="name" id="name" value={this.state.name} onChange={this.onChangeName}   className="form-control" />
          </div>

          <div className="col">
            <label htmlFor="email">Email <span className="required text-danger">*</span></label>
            <input type="text" name="email" id="email" 
            value={this.state.email} onChange={this.onChangeEmail} 
            maxLength="30"   className="form-control" placeholder="ex: abc@gmail.com" />
          </div>
      
          <div className="col">
            <label htmlFor="password">Password <span className="required text-danger ">*</span></label>
            <input type="password" className="form-control" name="password"
            value={this.state.password} onChange={this.onChangePassword}   placeholder="Password"
              id="password" />
          </div>
          {/* <div className="col">
            <label htmlFor="password"> <span className="required text-danger ">*</span></label>
            <input type="text" className="form-control" name="password"
            value={this.state.password} onChange={this.onChangePassword}   placeholder="Password"
              id="password" />
          </div> */}
        
           </div>
           <div className=" text-left ">
                          <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                          {/* <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button> */}
                     </div>
     </form>
    </div>
   </div>
                          </div>
                          <div className="col-2"></div>
                      </div>
                  </div>
          </div>        
      </div>
      </>
  )
}
}


// const form = {
//   border:"darkseagreen solid 2px",
//   padding: "40px",
//   marginTop: "30px",
//   marginLeft: "380px",
//   marginRight: "485px",
//   color: "firebrick",
//   fontWeight: "600"
// }

// const btn ={
//   marginTop: "15px",
//   // marginLeft: "5px" ,
//   paddingLeft: "40px",
//   paddingRight: "110px",
//   marginBottom: "5px",
//   fontSize: "23px",
//    //marginRight:"5px"
 
// }

// const welcome ={
  
//   marginLeft: "1px",
//   marginBottom: "10px",
//   color: "black",
//   textShadow:" 2px 2px red",
//   fontSize: "40px"
// }

// const greet ={
//   marginTop:"1px",
//   marginBottom:"1px",

// }

// // const glad={
// //   paddingTop:"5px",
// //   paddingBottom:"5px"
// // }


// export default class AddUser extends Component{

// constructor (props) {
//   super(props);
//   this.state = {
//     Name:'',
//    // Last_Name:'',
//     email: '',
//     mobile:'',
//     password: '',
//     role:'User',
//     formErrors: {Name:'',email: '', password: '',role:''},
//     //formErrors: {First_Name:'',email: '', password: ''},
//     nameValid:false,
//     //lnameValid:false,
//     emailValid: false,
//     //mobileValid:false,
//     passwordValid: false,
//     roleValid:false,
//     formValid: false
//   }
// }

// login() {
//   //console.log("ok");
//   //router.post('/Register',userController.addUser);


// //router.post('/registerAdmin',auth.checkAdmin,userController.addAdmin);
//   axiosInstance().post('/users/registerAdmin',{
//     email: this.state.email,
//     password:this.state.password,
//     Name:this.state.name,
//     role:'User'
//   })
//       // .then(res => {
//       //   //console.log("success");
//       //     if(res.data.token){
//       //       localStorage.setItem("token",res.data.token);
//       //      // window.location.href='http://localhost:3000/BookBorrow';
//       //       //--- Admin Check
//       //       var decoded = jwtDecode(res.data.token);
//       //       console.log(decoded);
//       //       //alert(decoded);
            
//       //       if(decoded.role!='User'){
//       //        // alert("ADMIN");
//       //       this.props.history.push('/AdminLogin');
//       //        }
//       //        else{
//       //        this.props.history.push('/BookBorrow');
//       //        }


//       //      //this.props.history.push('/BookBorrow');
//       //     }
//       //     else{
//       //       alert("Unable to Login, Please try again.");
//       //     }
//       // })
//       .catch(function (error) {
//         //console.log("failed");
//         alert(" Failed ,Invalid Login, Please try again.");
//           console.log(error);
//       })
// }

// handleSubmit = e => {
//   e.preventDefault();
// };

// handleUserInput = (e) => {
//   e.preventDefault();
//   const name = e.target.name;
//   const value = e.target.value;
//   this.setState({[name]: value},
//                 () => { this.validateField(name, value) });
// }

// validateField(fieldName, value) {
//   let fieldValidationErrors = this.state.formErrors;
//   let nameValid = this.state.nameValid;
//   //let lnameValid = this.state.lnameValid;
//   let emailValid = this.state.emailValid;
//  // let mobileValid = this.state.mobileValid;
//   let passwordValid = this.state.passwordValid;
//   let roleValid = 'User';

//   switch(fieldName) {
//     case 'email':
//       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//      // emailValid = value.match(/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/);
//       fieldValidationErrors.email = emailValid ? '' : ' is invalid , (hint : xyz@gmail.com)';
//       break;
//     case 'password':
//       passwordValid = value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
//       fieldValidationErrors.password = passwordValid ? '': '  is not strong , it contain atleast one special charcter , one uppercase';
//       break;
//     case 'Name':
//       nameValid = value.match(/^([a-zA-Z ]){2,30}$/);
//       fieldValidationErrors.Name = nameValid ? '': '  is invalid , Name must be in alphabets only ';
//       break;
//     // case 'Last_Name':
//     //   lnameValid = value.match(/^([a-zA-Z ]){2,30}$/);
//     //   fieldValidationErrors.Last_Name = lnameValid ? '': '  is invalid , Name must be in alphabets only ';
//     //   break;
//     case 'role':
//       roleValid = value.match("User");
//       fieldValidationErrors.role = roleValid ? '': ' Enter ';
//       break;
//     default:
//       break;
//   }
//   this.setState({formErrors: fieldValidationErrors,
//                   nameValid: nameValid,
//                   //lnameValid: lnameValid,
//                   emailValid: emailValid,
//                  // mobileValid: mobileValid,
//                   passwordValid: passwordValid,
//                   roleValid: roleValid
//                 }, this.validateForm);
// }

// validateForm() {
//   this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid });
// }

// errorClass(error) {
//   return(error.length === 0 ? '' : 'has-error');
// }
//  render() {
//   return (
//     <div >
//         <HomeNavbar />
//         <form style={form} id="lform" className="loginForm" name="validform" onSubmit={this.handleSubmit} noValidate >
//             <h2 style={welcome}> Add User</h2>
//             <hr style={{borderTop: "2px solid lightgrey" , width:"100%" }} />

//         <div className="panel panel-default">
//             <FormErrors formErrors={this.state.formErrors} />
//           </div>

         
// <div  class="form-row">
// <div class="col">
// <div className={`form-group ${this.errorClass(this.state.formErrors.Name)}`}>
//             <input type="text" required className="form-control" name="Name"
//               placeholder="enter first name"
//               value={this.state.Name}
//               onChange={this.handleUserInput}  />
//           </div>
// </div>
// </div>
// {/* <div class="form-row">
// <div class="col">
// <div className={`form-group ${this.errorClass(this.state.formErrors.Last_Name)}`} style={greet}>
//             <input type="text" required className="form-control" name="Last_Name"
//               placeholder="enter last name"
//               value={this.state.Last_Name}
//               onChange={this.handleUserInput}  />
//           </div>
// </div>

// </div> */}

//           <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`} style={greet}>
//             <input type="email" required className="form-control" name="email"
//               placeholder="enter email address"
//               value={this.state.email}
//               onChange={this.handleUserInput}  />
//           </div>

//           {/* <div className={`form-group ${this.errorClass(this.state.formErrors.mobile)}`} style={greet}>
//             <input type="text" required className="form-control" maxLength="10" name="mobile"
//               placeholder="enter mobile number"
//               value={this.state.mobile}
//               onChange={this.handleUserInput}  />
//           </div> */}

//           <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`} style={greet}>
//             <input type="password" className="form-control" name="password"
//               placeholder="enter password"
//               value={this.state.password}
//               onChange={this.handleUserInput}  />
//           </div>
//           {/* <div className={`form-group ${this.errorClass(this.state.formErrors.role)}`} style={greet}>
//             <input type="text" className="form-control" name="role"
//               placeholder="enter password"
//               value={this.state.role} disabled
//               onChange={this.handleUserInput}  />
//           </div> */}

//         <Link to="/UserLogin"><button style={btn} type="submit" className="btn btn-info login" disabled={!this.state.formValid} >Register</button></Link>
//       </form> 
//     </div>
// )
// }
// }


// class Register extends React.Component {
  
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

//     register(){
//       //axios post call;
//     }


//   render() {
//     return (
//       <React.Fragment>

//       <div>
//       <HomeNavbar/>
//       </div>
      
//     <div id="main-registration-container">
//      <div id="register" class="font">
//         <h3>Registration page</h3>
//         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
//         <label>Name</label>
//         <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.username}</div>
//         <label>Email ID:</label>
//         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
//         <div className="errorMsg">{this.state.errors.emailid}</div>
//         <label>Mobile No:</label>
//         <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
//         <div className="errorMsg">{this.state.errors.mobileno}</div>
//         <label>Password</label>
//         <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.password}</div>
//         <Link to="/UserLogin">
//         <input type="submit" className="button"  value="Register" />
//         </Link>
//         </form>
//     </div>
// </div>
// </React.Fragment>
//       );
//   }


// }


// export default Register;
// import React, { useState, useEffect } from "react";
// import './Register.css';
// import {Link} from 'react-router-dom';
// import HomeNavbar from "../../Navbar/HomeNavbar";


// const nameRE = /^[A-Za-z]{2,10}$/i;
// const passRE = /^[A-Za-z0-9_\.\-\@\#\!\%\^\$]{4}$/;
// const emailRE = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
// const mobileRE = /^[0-9]{10}$/;

// function Register() {
//   const [user, setUser] = useState({
//     name: "",
//     nameErr: "",
//     password: "",
//     passwordErr: "",
//     email: "",
//     emailErr: "",
//     mobile: "",
//     mobileErr: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setUser((prevData) => {
//         return {
//           ...prevData,
//           nameErr: "",
//           emailErr: "",
//           passwordErr: "",
//           mobileErr: "",
//         };
//       });
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [user.nameErr, user.emailErr, user.mobileErr, user.passwordErr]);

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
//       userValidation(nameRE, user.name, "nameErr") &&
//       userValidation(passRE, user.password, "passwordErr") &&
//       userValidation(emailRE, user.email, "emailErr") &&
//       userValidation(mobileRE, user.mobile, "mobileErr")
//     ) {
//       alert("form submitted");
//     }
//   };
//   return (

//     <React.Fragment>
//              {/* navbar code */}
//               <div>
//                 <HomeNavbar/>
//               </div>
                      
//       {/* body-part */}
//           <div>
//             <h1 className="register" >Register</h1>
//             <form onSubmit={handleSubmit}>
//               {user.nameErr && <h5>{user.nameErr}</h5>}

//               <input
//                 type="text"
//                 value={user.name}
//                 onChange={(e) => handleChange(e)}
//                 placeholder="Name"
//                 name="name"
//                 className={user.nameErr ? "err" : null}
//               />
//               {user.passwordErr && <h5>{user.passwordErr}</h5>}

//               <input
//                 type="password"
//                 value={user.password}
//                 onChange={(e) => handleChange(e)}
//                 placeholder="Password"
//                 name="password"
//                 className={user.passwordErr ? "err" : null}
//               />
//               {user.emailErr && <h5>{user.emailErr}</h5>}

//               <input
//                 type="text"
//                 value={user.email}
//                 onChange={(e) => handleChange(e)}
//                 placeholder="Email"
//                 name="email"
//                 className={user.emailErr ? "err" : null}
//               />
//               {user.mobileErr && <h5>{user.mobileErr}</h5>}

//               <input
//                 type="text"
//                 value={user.mobile}
//                 onChange={(e) => handleChange(e)}
//                 placeholder="Mobile"
//                 name="mobile"
//                 className={user.mobileErr ? "err" : null}
//                 required
//               />
              
//               <Link to="/UserLogin">
//                 <button type="submit" className="btn" required>
//                   Submit
//                 </button>
//               </Link>  

//             </form>
//           </div>
//     </React.Fragment>  
//   );
// }

// export default Register;

import './App.css';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Register from './Components/Register/Register';

import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'; 
//import AccountCreation from './Components/Admin/AccountCreation/AccountCreation';
import AddBooks from './Components/Admin/AddBooks/AddBooks';
import AddUser from './Components/Admin/AddUser/AddUser';
import ShowBooks from './Components/Admin/ShowBooks/ShowBooks';
import EditBooks from './Components/Admin/EditBook/EditBooks';
import History from './Components/Admin/History/History';


import UserLogin from './Components/User/UserLogin/UserLogin';
import BookBorrow from './Components/User/BookBorrow/BookBorrow';
//import BookBorrowUser from './Components/BookBorrowUser/BookBorrowUser';
import BookSearch from './Components/User/BookSearch/BookSearch';
import BookShow from './Components/User/BookShow/BookShow';


function App() {
  return (
        
          <div className="App" style={{ 
            // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Reading_Room%2C_Langdell_Hall%2C_Harvard_University%2C_Cambridge_MA.jpg/1200px-Reading_Room%2C_Langdell_Hall%2C_Harvard_University%2C_Cambridge_MA.jpg")`
              //backgroundColor: 'lightgrey'
          }}>
           <div >

            </div>
            <Router>        
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/About" component={About}/> 
                  <Route path="/Register" component={Register}/> 

                  <Route path="/AdminLogin" component={AdminLogin}/>
                  {/* <Route path="/AccountCreation" component={AccountCreation}/> */}
                  <Route path="/AddUser" component={AddUser}/> 
                  <Route path="/AddBooks" component={AddBooks}/> 
                  <Route path="/ShowBooks" component={ShowBooks}/> 
                  <Route path="/EditBooks" component={EditBooks}/> 
                  <Route path="/History" component={History}/> 


                  <Route path="/UserLogin" component={UserLogin}/>
                  <Route path="/BookBorrow" component={BookBorrow}/> 
                  <Route path="/BookSearch" component={BookSearch}/> 
                  <Route path="/BookShow" component={BookShow}/> 
                  {/* <Route path="/BookBorrow" component={BookBorrow}/> 
                  <Route path="/BookBorrow" component={BookBorrow}/>  */}
                </Switch> 
          </Router> 
         </div>
 
  );
}
export default App;

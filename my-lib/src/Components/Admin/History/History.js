//import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminNavbar from '../../../Navbar/AdminNavbar';
import axiosInstance from '../../../Inter/Interceptor';

export default class ShowBooks extends Component {

    constructor(props) {
        super(props);
        this.state = { booksCollection: [] } 
       // this.deleteBook = this.deleteBook.bind(this);
    }
   
    componentDidMount() {
        console.log("Component Mounted");
        axiosInstance().get('/history/historyBooks')
            .then(res => {
                console.log("res",res.data);
                this.setState({ booksCollection: res.data.book_info });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
    return (
        <>
         <div ><AdminNavbar/></div>
        
        <div>
             <div className="row p-2">
                    {/* <div ><AdminNavbar/></div> */}
                    <div className="col-10">
                        <div className="row ">
                             <div className="col-2"></div> 
                            <div className="col-8">
                            <h2 className="text-center ">Deleted Books In Library</h2>
                            
                            <table class="table table-hover table-bordered table-info table-condensed mt-3">
                                    <thead class="thead-info table-hover">
                                    <tr>
                                        <th scope="col">BOOK ID</th>
                                        <th scope="col">BOOK TITLE</th>
                                        <th scope="col">CATEGORY</th>
                                        <th scope="col">AUTHOR</th>
                                        <th scope="col">COPIES</th>
                                        <th scope="col">BOOK PUB</th>
                                        <th scope="col">PUBLISHER NAME</th>
                                        <th scope="col">ISBN</th>
                                        <th scope="col">COPYRIGHT YEAR</th>
                                        <th scope="col">DATE ADDED</th>
                                        {/* <th scope="col">Date Receive</th> */}
                                        <th scope="col">STATUS</th>
                                        {/* <th scope="col">ACTION</th> */}
						            </tr>
                                    </thead>
                                    <tbody>
                                   
                                        {this.state.booksCollection.map(book => (
                                            <tr>
                                                <td>
                                                    {book.book_id}  
                                                </td>
                                                 <td>
                                                    {book.book_title}
                                                </td> 
                                                <td>
                                                    {book.category_id}
                                                </td>
                                                <td>
                                                    {book.author}
                                                </td>
                                                <td>
                                                    {book.book_copies}
                                                </td>
                                                <td>
                                                    {book.book_pub}
                                                </td>
                                                <td>
                                                    {book.publisher_name}
                                                </td>
                                                <td>
                                                    {book.isbn}
                                                </td>
                                                <td>
                                                    {book.copyright_year}
                                                </td>
                                                <td>
                                                    {book.date_added}
                                                </td>
                                                {/* <td>
                                                    {book.date_receive}
                                                </td> */}
                                                 <td>
                                                    {book.status}
                                                </td> 
                                                {/* <td >
                                                <Link to={{pathname:"/EditBooks",query:book.book_id}} state={book.book_id}><button size="sm" style={{ cursor:"pointer", width:"100px", margin:"5px 0"}} className="btn text-danger fa fa-pencil"></button></Link>
                                                <button size="sm" onClick={() => this.deleteBook(book.book_id)} style={{ cursor:"pointer", width:"100px"}}className="btn text-danger fa fa-trash"></button>
                                                </td> */}
                                            </tr>
                                        ))}

                                    </tbody>
                            </table>

                            </div>
                            {/* <div className="col-2"></div> */}
                        </div>
                    </div>
              </div>          
        </div>
        </>
    )
}
}




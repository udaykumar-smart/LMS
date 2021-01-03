// import React from 'react';
// import ShowBooks from '../../Admin/ShowBooks/ShowBooks';


// function BookShow(){
//     return(
//         <ShowBooks/>
//     )
// }

// export default BookShow;
//import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from '../../../Navbar/UserNavbar';
import axiosInstance from '../../../Inter/Interceptor';

export default class BookAccept extends Component {

    constructor(props) {
        super(props);
        this.state = { booksCollection: [] } 
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook = (book_id) => {
        if (window.confirm('Are you sure to delete this record?')) {
            axiosInstance().delete('/book/'+ book_id)
        .then((res) => {
            console.log('Book successfully deleted!')
            alert('Deleted succesfully')
            this.setState({
                booksCollection: this.state.booksCollection.filter( remove => remove.book_id !== book_id)
            })
        }).catch((error) => {
            console.log(error)
        })
    }}
    componentDidMount() {
        //console.log("Component Mounted");
        axiosInstance().get('/book/allBooks')
            .then(res => {
               // console.log("res",res.data);
                this.setState({ booksCollection: res.data.book_info });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render() {
    return (
        <>
        <div ><UserNavbar/></div>
        <div>
             <div className="row p-2">
                    
                    <div className="col-10">
                        <div className="row">
                             <div className="col-2"></div> 
                            <div className="col-10">
                            <h2 className="text-center text-dark">List of Books</h2>
                            
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




// import Axios from 'axios';
// import React, { Component } from 'react';
// import AdminNavbar from '../../../Navbar/AdminNavbar';

// export default class ShowBooks extends Component {

//     constructor(props) {
//       super(props)
//       this.onChangeBookId = this.onChangeBookId.bind(this);
//       this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
//       this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
//       this.onChangeAuthor = this.onChangeAuthor.bind(this);
//       this.onChangeBookCopies = this.onChangeBookCopies.bind(this);
//       this.onChangeBookPub = this.onChangeBookPub.bind(this);
//       this.onChangePublisherName = this.onChangePublisherName.bind(this);
//       this.onChangeIsbn = this.onChangeIsbn.bind(this);
//       this.onChangeCopyrightYear = this.onChangeCopyrightYear.bind(this);
//       //this.onChangeDateReceive = this.onChangeDateReceive.bind(this);
//       this.onChangeDateAdded = this.onChangeDateAdded.bind(this);
//       this.onChangeStatus = this.onChangeStatus.bind(this);

//       this.onSubmit = this.onSubmit.bind(this);
//       //State
//       this.state = {
//         book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'', date_added:'', status:''
//       } //date_receive:'',
//   }

//   componentDidMount() {
//    // console.log(this.props.match.params.email);
//     //console.log(this.props.match.body.book_id);

//       Axios.get('http://localhost:4040/book/allBooks' + this.props.match.params.book_id)
      
//         .then(res => {
//           console.log(res.data);
//           this.setState({
//             book_id: res.data.book[0].book_id ,
//             book_title: res.data.book[0].book_title,
//             category_id: res.data.book[0].category_id,
//             author: res.data.book[0].author, 
//             book_copies: res.data.book[0].book_copies,
//             book_pub: res.data.book[0].book_pub, 
//             publisher_name: res.data.book[0].publisher_name,
//             isbn: res.data.book[0].isbn, 
//             copyright_year: res.data.book[0].copyright_year,
//             date_added: res.data.book[0].date_added,  
//             //date_receive: res.data.allBooks[0].date_receive, 
//             status: res.data.book[0].status
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//     }

// onChangeBookId(e) {
//     this.setState({ book_id: e.target.value })
// }
// onChangeBookTitle(e) {
//     this.setState({ book_title: e.target.value })
// }
// onChangeCategoryId(e) {
//     this.setState({ category_id: e.target.value })
// }
// onChangeAuthor(e) {
//     this.setState({ author: e.target.value })
// }

// onChangeBookCopies(e) {
//     this.setState({ book_copies: e.target.value})
// } 
// onChangeBookPub(e) {
//     this.setState({ book_pub: e.target.value})
// } 
// onChangePublisherName(e) {
//     this.setState({ publisher_name: e.target.value})
// } 
// onChangeIsbn(e){
//     this.setState({ isbn: e.target.value})
// }
// onChangeCopyrightYear(e) {
//     this.setState({ copyright_year: e.target.value})
// } 
// // onChangeDateReceive(e) {
// //     this.setState({ date_receive: e.target.value})
// // } 
// onChangeDateAdded(e) {
//     this.setState({ date_added: e.target.value})
// } 
// onChangeStatus(e) {
//     this.setState({ status: e.target.value})
// } 


// onSubmit(e) {
//     e.preventDefault()

//     const userObject = {
//       book_id: this.state.book_id ,
//       book_title: this.state.book_title,
//       category_id: this.state.category_id,
//       author: this.state.author, 
//       book_copies: this.state.book_copies,
//       book_pub: this.state.book_pub, 
//       publisher_name: this.state.publisher_name,
//       isbn: this.state.isbn, 
//       copyright_year: this.state.copyright_year, 
//       //date_receive: this.state.date_receive, 
//       date_added: this.state.date_added, 
//       status: this.state.status
//     };
//     //   role:"user"
// // console.log(userObject);

//     Axios.put('http://localhost:4040/book/:' + this.props.match.params.book_id, userObject)
//         .then((res) => {
//             console.log(res.data.Beneficiaries)
//             alert('Books successfully updated')
//             console.log('Books successfully updated')
//           }).catch((error) => {
//             console.log(error)
//           })

//           /////////////////////////////////
//         this.props.history.push('/my_ShowBooks')
//         // componentDidMount() {
//           Axios.get('http://localhost:4040/book/allBooks')
//               .then(res => {
//                   // console.log(res.data);
//                   this.setState({ userObject: res.data.allBooks });
//               })
//               .catch(function (error) {
//                   console.log(error);
//               })

//     //this.setState({ book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'', date_added:'', status:''})
// } //date_receive:''


// render()
// {
//     return (
//         <div>
//             <div className="row p-2">
//                     <div className="col-2"><AdminNavbar/></div>
//                     <div className="col-10">
//                         <div className="row">
//                             <div className="col-2"></div>
//                             <div className="col-8">
//                                 <div className="jumbotron mt-5">
//       <div>
//         <h3>Edit/Update Books</h3>
//                             <form onSubmit={this.onSubmit}>
//                                 <div className="form-row">
//                                         <div className="col">
//                                         <label htmlFor="bookId">Book Id<span className="required text-danger">*</span></label>
//                                         <input type="number" required name="book_id" id="bookId" value={this.state.book_id} onChange={this.onChangeBookId}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="categoryId">Category Id<span className="required text-danger">*</span></label>
//                                         <input type="number" required name="category_id" id="categoryId"  value={this.state.category_id} onChange={this.onChangeCategoryId} className="form-control" />
//                                         </div>
//                                         <br></br>
//                                         <div className="col">
//                                         <label htmlFor="bookTitle">Book Title<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="book_title" id="bookTitle" value={this.state.book_title} onChange={this.onChangeBookTitle}   className="form-control" />
//                                         </div>
                                       

//                                         <div className="col">
//                                         <label htmlFor="author">Author<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="author" id="author" value={this.state.author} onChange={this.onChangeAuthor}   className="form-control" />
//                                         </div>
//                                     </div>
                                    
//                                     <div className="form-row">
//                                         <div className="col">
//                                         <label htmlFor="bookCopies">Book Copies<span className="required text-danger">*</span></label>
//                                         <input type="number" required name="book_copies" id="bookCopies" value={this.state.book_copies} onChange={this.onChangeBookCopies}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="bookPub">Book Pub<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="book_pub" id="bookPub" value={this.state.book_pub} onChange={this.onChangeBookPub}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="publisherName">Publisher Name<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="publisher_name" id="publisherName" value={this.state.publisher_name} onChange={this.onChangePublisherName}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="isbn">Isbn<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="isbn" id="isbn" value={this.state.isbn} onChange={this.onChangeIsbn}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="copyrightYear">Copyright Year<span className="required text-danger">*</span></label>
//                                         <input type="number" required name="copyright_year" id="copyrightYear" value={this.state.copyright_year} onChange={this.onChangeCopyrightYear}   className="form-control" />
//                                         </div>

//                                         {/* <div className="col">
//                                         <label htmlFor="dateReceive">Date Receive<span className="required text-danger">*</span></label>
//                                         <input type="date" required name="date_receive" id="dateReceive" value={this.state.date_receive} onChange={this.onChangeDateReceive}   className="form-control" />
//                                         </div> */}

//                                         <div className="col">
//                                         <label htmlFor="dateAdded">Date Added<span className="required text-danger">*</span></label>
//                                         <input type="date" required name="date_added" id="dateAdded" value={this.state.date_added} onChange={this.onChangeDateAdded}   className="form-control" />
//                                         </div>

//                                         <div className="col">
//                                         <label htmlFor="status">Status<span className="required text-danger">*</span></label>
//                                         <input type="text" required name="status" id="status" value={this.state.status} onChange={this.onChangeStatus}   className="form-control" />
//                                         </div>
                                
//                                     </div>
//                                         <div className=" text-left ">
//                                             <button type="submit" className="btn btn-outline-success m-2 p-2"> Update Books</button>
//                                                     {/* <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button> */}
//                                         </div>
//                             </form>
//       </div>
//                                 </div>
//                             </div>
//                             <div className="col-2"></div>
//                         </div>
//                     </div>
//             </div>        
//         </div>
//     )
// }

// }


// export default class AddBooks extends Component {
// 	constructor(props) {
// 		super(props)
// 	this.onChangeFirstName = this.onChangeFirstName.bind(this);
//     this.onChangeLastName = this.onChangeLastName.bind(this);
//     this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
//     this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//     this.onChangePhoneNo = this.onChangePhoneNo.bind(this);

// 	this.onSubmit = this.onSubmit.bind(this);
// 	this.state = {
//       posts: [],
//       errorMsg: ''
// 		}
// 	}


// 	componentDidMount() {
// 		axios.get('http://localhost:4040/book/allBooks')
// 			.then(response => {
// 				console.log(response)
// 				this.setState({ posts: response.data })
// 			})
// 			.catch(error => {
//         console.log(error)
//         this.setState({errorMsg: 'Error retrieving data'})
// 			})
// 	}

// 	render() {
// 		const { posts, errorMsg } = this.state
// 		return (
// 			<div>
// 				List of posts
// 				{posts.length
// 					? posts.map(post => <div key={post.id}>{post.title}</div>)
//           : null}
//         {errorMsg ? <div>{errorMsg}</div> : null}
// 			</div>
// 		)
// 	}
// }




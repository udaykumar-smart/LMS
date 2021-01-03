import React, { Component } from 'react';
import Axios from 'axios';
import AdminNavbar from '../../../Navbar/AdminNavbar';
//import { Link } from 'react-router-dom'
import axiosInstance from '../../../Inter/Interceptor';

export default class AddBooks extends Component {

  
    constructor(props) {
      super(props)
  
      this.onChangeBookId = this.onChangeBookId.bind(this);
      this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
      this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
      this.onChangeAuthor = this.onChangeAuthor.bind(this);
      this.onChangeBookCopies = this.onChangeBookCopies.bind(this);
      this.onChangeBookPub = this.onChangeBookPub.bind(this);
      this.onChangePublisherName = this.onChangePublisherName.bind(this);
      this.onChangeIsbn = this.onChangeIsbn.bind(this);
      this.onChangeCopyrightYear = this.onChangeCopyrightYear.bind(this);
      this.onChangeDateAdded = this.onChangeDateAdded.bind(this);
     // this.onChangeDateReceive = this.onChangeDateReceive.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);
  
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'', date_added:'', status:''
      }     //date_receive:'',
  }


onChangeBookId(e) {
    this.setState({ book_id: e.target.value })
}
onChangeBookTitle(e) {
    this.setState({ book_title: e.target.value })
}
onChangeCategoryId(e) {
    this.setState({ category_id: e.target.value })
}
onChangeAuthor(e) {
    this.setState({ author: e.target.value })
}

onChangeBookCopies(e) {
    this.setState({ book_copies: e.target.value})
} 
onChangeBookPub(e) {
    this.setState({ book_pub: e.target.value})
} 
onChangePublisherName(e) {
    this.setState({ publisher_name: e.target.value})
} 
onChangeIsbn(e){
    this.setState({ isbn: e.target.value})
}
onChangeCopyrightYear(e) {
    this.setState({ copyright_year: e.target.value})
} 

onChangeDateAdded(e) {
    this.setState({ date_added: e.target.value})
} 

// onChangeDateReceive(e) {
//     this.setState({ date_receive: e.target.value})
// } 
onChangeStatus(e) {
    this.setState({ status: e.target.value})
} 

onSubmit(e) {
    e.preventDefault()

    const userObject = {
      book_id: this.state.book_id ,
      book_title: this.state.book_title,
      category_id: this.state.category_id,
      author: this.state.author, 
      book_copies: this.state.book_copies,
      book_pub: this.state.book_pub, 
      publisher_name: this.state.publisher_name,
      isbn: this.state.isbn, 
      copyright_year: this.state.copyright_year,
      date_added: this.state.date_added,  
      //date_receive: this.state.date_receive, 
      status: this.state.status
    };
    //   role:"user"
// console.log(userObject);
    //Axios.post('http://localhost:4040/book/addBooks', userObject)
        axiosInstance().post('book/addBooks', userObject)
        .then((res) => {
           // console.log(res.data)
            
            // alert(res.data.message);
            alert('Book details added Successfully');
        }).catch((error) => {
            console.log(error)
        });
        this.props.history.push('/ShowBooks')
    this.setState({ book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'',date_added:'',  status:''})
}   //date_receive:'',


render()
{
    return (
		<React.Fragment>

				<div><AdminNavbar/></div>
        <div>
            <div className="row p-2">
                    
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-10">
                                <div className="jumbotron bg-info mt-5">
      <div>
        <h3>Add Books</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                        <div className="col">
                                        <label htmlFor="bookId">Book Id<span className="required text-danger">*</span></label>
                                        <input type="number" required name="book_id" id="bookId" value={this.state.book_id} onChange={this.onChangeBookId}   className="form-control" />
                                        </div>

                                        <div className="col">
                                        <label htmlFor="categoryId">Category Id<span className="required text-danger">*</span></label>
                                        <input type="number" required name="category_id" id="categoryId"  value={this.state.category_id} onChange={this.onChangeCategoryId} className="form-control" />
                                        </div>
                                        <br></br>
                                        <div className="col">
                                        <label htmlFor="bookTitle">Book Title<span className="required text-danger">*</span></label>
                                        <input type="text" required name="book_title" id="bookTitle" value={this.state.book_title} onChange={this.onChangeBookTitle}   className="form-control" />
                                        </div>
                                        {/* <div className="col">
                                        <label htmlFor="categoryId">Category Id<span className="required text-danger">*</span></label>
                                        <input type="number" required name="category_id" id="categoryId"  value={this.state.category_id} onChange={this.onChangeCategoryId} className="form-control" />
                                        </div> */}

                                        <div className="col">
                                        <label htmlFor="author">Author<span className="required text-danger">*</span></label>
                                        <input type="text" required name="author" id="author" value={this.state.author} onChange={this.onChangeAuthor}   className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="col">
                                        <label htmlFor="bookCopies">Book Copies<span className="required text-danger">*</span></label>
                                        <input type="number" required name="book_copies" id="bookCopies" value={this.state.book_copies} onChange={this.onChangeBookCopies}   className="form-control" />
                                        </div>

                                        <div className="col">
                                        <label htmlFor="bookPub">Book Pub<span className="required text-danger">*</span></label>
                                        <input type="text" required name="book_pub" id="bookPub" value={this.state.book_pub} onChange={this.onChangeBookPub}   className="form-control" />
                                        </div>

                                        <div className="col">
                                        <label htmlFor="publisherName">Publisher Name<span className="required text-danger">*</span></label>
                                        <input type="text" required name="publisher_name" id="publisherName" value={this.state.publisher_name} onChange={this.onChangePublisherName}   className="form-control" />
                                        </div>

                                        <div className="col">
                                        <label htmlFor="isbn">Isbn<span className="required text-danger">*</span></label>
                                        <input type="text" required name="isbn" id="isbn" value={this.state.isbn} onChange={this.onChangeIsbn}   className="form-control" />
                                        </div>
									</div>
									<div className="form-row">
                                        <div className="col">
                                        <label htmlFor="copyrightYear">Copyright Year<span className="required text-danger">*</span></label>
                                        <input type="number" required name="copyright_year" id="copyrightYear" value={this.state.copyright_year} onChange={this.onChangeCopyrightYear}   className="form-control" />
                                        </div>

                                         <div className="col">
                                        <label htmlFor="dateAdded">Date Added<span className="required text-danger">*</span></label>
                                        <input type="date" required name="date_added" id="dateAdded" value={this.state.date_added} onChange={this.onChangeDateAdded}   className="form-control" />
                                        </div> 

                                        {/* <div className="col">
                                        <label htmlFor="dateReceive">Date Receive<span className="required text-danger">*</span></label>
                                        <input type="date"  name="date_receive" id="dateReceive" value={this.state.date_receive} onChange={this.onChangeDateReceive}   className="form-control" />
                                        </div> */}

                                        <div className="col">
                                        <label htmlFor="status">Status<span className="required text-danger">*</span></label>
                                        <input type="text" required name="status" id="status" value={this.state.status} onChange={this.onChangeStatus}   className="form-control" />
                                        </div>
                                        
                                    </div>
                                        <div className=" text-left ">
                                            
                                            <button type="submit" className="btn btn-danger m-5 "> Submit</button>
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
		</React.Fragment>
    )
}

}

// import React from 'react';
// import './AddBooks.css'


// import{Link} from 'react-router-dom';
// import AdminNavbar from '../../../Navbar/AdminNavbar';

// export default function AdddBooks() {
//     return (
//         <React.Fragment>

// 			<div>
// 				<AdminNavbar/>
// 			</div>
//             <div>
// 				<table class="table table-hover">
// 					<thead class="table table-hover">
// 						<tr>
// 							<th scope="col">ACC NO.</th>
// 							<th scope="col">BOOK TITLE</th>
// 							<th scope="col">CATEGORY</th>
// 							<th scope="col">AUTHOR</th>
// 							<th scope="col">COPIES</th>
// 							<th scope="col">BOOK PUB</th>
// 							<th scope="col">PUBLISHER NAME</th>
// 							<th scope="col">ISBN</th>
// 							<th scope="col">COPYRIGHT YEAR</th>
// 							<th scope="col">DATE ADDED</th>
// 							<th scope="col">STATUS</th>
// 							<th scope="col">ACTION</th>
// 						</tr>
// 					</thead>
// 					<tbody>  
// 						<tr>
// 							<th scope="row">15</th>
// 							<td>Natural Resources</td>
// 							<td>Microbiology</td>
// 							<td>Robin Kerrod</td>
// 							<td>15</td>
// 							<td>Marshall Cavendish Corporation</td>
// 							<td>Marshall</td>
// 							<td>1-85435-628-3</td>
// 							<td>1997</td>
// 							<td>2013-12-11 06:34:27</td>
// 							<td>New</td>
// 							<td></td>
// 						</tr>
// 						<tr>
// 							<th scope="row">16</th>
// 							<td>Encyclopedia Americana</td>
// 							<td></td>
// 							<td>Grolier</td>
// 							<td>20</td>
// 							<td>Connecticut</td>
// 							<td>Grolier Incorporation</td>
// 							<td>0-7172-0119-8</td>
// 							<td>1988</td>
// 							<td>2013-12-11 06:36:23</td>
// 							<td>Archive</td>
// 							<td></td>
// 						</tr>
// 						<tr>
// 							<th scope="row">17</th>
// 							<td>Algebra 1</td>
// 							<td></td>
// 							<td>Carolyn Bradshaw</td>
// 							<td>35</td>
// 							<td>Prentice Hall</td>
// 							<td>Pearson Education Inc</td>
// 							<td>0-13-125087-6</td>
// 							<td>2004</td>
// 							<td>2013-12-11 06:39:17</td>
// 							<td>Damage</td>
// 							<td></td>
// 						</tr>
// 						<tr>
// 							<th scope="row">18</th>
// 							<td>Beloved a Novel</td>
// 							<td></td>
// 							<td>Toni Morrison</td>
// 							<td>13</td>
// 							<td>Alfred.A</td>
// 							<td>Knoff Inc</td>
// 							<td>0-394-53597-9</td>
// 							<td>1987</td>
// 							<td>2013-12-11 07:07:02</td>
// 							<td>Old</td>
// 							<td></td>
// 						</tr>
						
// 					</tbody>
// 				</table>
     
//             </div>
//         </React.Fragment>
//     )
// }



// return (
// 	<React.Fragment>

// 		<div>

// 		</div>
// 		<div>
// 	<table class="table table-hover">
// 	<thead class="table table-hover"> 
// 	<tr>
// 		<th scope="col">ACC NO.</th>
// 		<th scope="col">BOOK TITLE</th>
// 		<th scope="col">CATEGORY</th>
// 		<th scope="col">AUTHOR</th>
// 		<th scope="col">PUBLISHER NAME</th>
// 		<th scope="col">STATUS</th>
// 		<th scope="col">ADD</th>
// 	</tr>

// 	</thead>
// <tbody>  
// 	<tr>
// 		<th scope="row">15</th>
// 		<td>Natural Resources</td>
// 		<td>Microbiology</td>
// 		<td>Robin Kerrod</td>
// 		<td>Marshall</td>
// 		<td>New</td>
// 		<td>
// 		<input type="checkbox" id="add" name="add" value="add"/>
// 		</td>
// 	</tr>
// 	<tr>
// 		<th scope="row">16</th>
// 		<td>Encyclopedia Americana</td>
// 		<td>Encyclopedia</td>
// 		<td>Grolier</td>
// 		<td>Grolier Incorporation</td>
// 		<td>Archive</td>
// 		<td>
// 		<input type="checkbox" id="add" name="add" value="add"/>
// 		</td>
// 	</tr>
// 	<tr>
// 		<th scope="row">17</th>
// 		<td>Algebra 1</td>
// 		<td>Mathematics</td>
// 		<td>Carolyn Bradshaw</td>
// 		<td>Pearson Education Inc</td>
// 		<td>Damage</td>
// 		<td>
// 		<input type="checkbox" id="add" name="add" value="add"/>
// 		</td>
// 	</tr>
// 	<tr>
// 		<th scope="row">18</th>
// 		<td>Beloved a Novel</td>
// 		<td></td>
// 		<td>Toni Morrison</td>
// 		<td>Knoff Inc</td>
// 		<td>Old</td>
// 		<td>
// 		<input type="checkbox" id="add" name="add" value="add"/>
// 		</td>
// 	</tr>
	
// </tbody>
// </table>
 
// 		</div>
// 	</React.Fragment>
	
// )
// }


//Axios part
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
// 		axios.get('http://localhost:4040/book/')
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

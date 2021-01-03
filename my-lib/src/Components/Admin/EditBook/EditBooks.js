import Axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from '../../../Navbar/AdminNavbar';
import axiosInstance from '../../../Inter/Interceptor';

export default class EditBooks extends Component {

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
      //this.onChangeDateReceive = this.onChangeDateReceive.bind(this);
      this.onChangeDateAdded = this.onChangeDateAdded.bind(this);
      this.onChangeStatus = this.onChangeStatus.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
      //State
      this.state = {
        book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'', date_added:'', status:''
      } //date_receive:'',
  }

  componentDidMount() {
   // console.log(this.props.match.params.book_id);
    console.log(this.props.location.query);
    
    axiosInstance().get('/book/oneBook/'+ this.props.location.query)
     //axiosInstance.get('/book/allBooks' + this.props.match.params.book_id)
        .then(res => {
          console.log("",res.data);
          this.setState({
            book_id: res.data.book[0].book_id ,
            book_title: res.data.book[0].book_title,
            category_id: res.data.book[0].category_id,
            author: res.data.book[0].author, 
            book_copies: res.data.book[0].book_copies,
            book_pub: res.data.book[0].book_pub, 
            publisher_name: res.data.book[0].publisher_name,
            isbn: res.data.book[0].isbn, 
            copyright_year: res.data.book[0].copyright_year,
            date_added: this.dateFormat(res.data.book[0].date_added),  
            //date_receive: res.data.allBooks[0].date_receive, 
            status: res.data.book[0].status
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
dateFormat(val){
    let dt= new Date(val);
    let yr=dt.getFullYear();
    let mm=dt.getMonth();
    let dd=dt.getDate();
    return yr+'-'+mm+'-'+dd;
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
// onChangeDateReceive(e) {
//     this.setState({ date_receive: e.target.value})
// } 
onChangeDateAdded(e) {
    this.setState({ date_added: e.target.value})
} 
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
      //date_receive: this.state.date_receive, 
      date_added: this.state.date_added, 
      status: this.state.status
    };
    //   role:"user"
// console.log(userObject);

axiosInstance().put('/book/updateBook/' + this.props.location.query, userObject)
        .then((res) => {
           
            alert('Books successfully updated')
           // console.log('Books successfully updated')
          }).catch((error) => {
            console.log(error)
          })

          /////////////////////////////////
        this.props.history.push('/ShowBooks')
        // componentDidMount() {
            // axiosInstance().get('/book/oneBook/'+ this.props.match.params.book_id, userObject)
            //   .then(res => {
            //       // console.log(res.data);
            //       this.setState({ userObject: res.data.allBooks });
            //   })
            //   .catch(function (error) {
            //       console.log(error);
            //   })

    //this.setState({ book_id: '',book_title:'',category_id:'',author: '', book_copies:'',book_pub:'', publisher_name:'', isbn:'', copyright_year:'', date_added:'', status:''})
} //date_receive:''


render()
{
    return (
        <>
        <div><AdminNavbar/></div>
      
        <div>
            <div className="row p-2">
                    {/* <div><AdminNavbar/></div> */}
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-10">
                                <div className="jumbotron bg-info mt-5">
      <div>
        <h3>Edit/Update Books</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                        <div className="col">
                                        <label htmlFor="bookId">Book Id<span className="required text-danger">*</span></label>
                                        <input type="number" required name="book_id" id="bookId" disabled value={this.state.book_id} onChange={this.onChangeBookId}   className="form-control" />
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

                                        {/* <div className="col">
                                        <label htmlFor="dateReceive">Date Receive<span className="required text-danger">*</span></label>
                                        <input type="date" required name="date_receive" id="dateReceive" value={this.state.date_receive} onChange={this.onChangeDateReceive}   className="form-control" />
                                        </div> */}

                                        <div className="col">
                                        <label htmlFor="dateAdded">Date Added<span className="required text-danger">*</span></label>
                                        <input type="date"  name="date_added" id="dateAdded" value={this.state.date_added} onChange={this.onChangeDateAdded}   className="form-control" />
                                        </div>

                                        <div className="col">
                                        <label htmlFor="status">Status<span className="required text-danger">*</span></label>
                                        <input type="text" required name="status" id="status" value={this.state.status} onChange={this.onChangeStatus}   className="form-control" />
                                        </div>
                                
                                    </div>
                                        <div className=" text-left ">
                                            <button type="submit" className="btn btn-danger m-5"> Update Books</button>
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



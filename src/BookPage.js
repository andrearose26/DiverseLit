import React, { Component } from 'react';
import axios from "axios";
import Nav from './Nav'

class BookPage extends Component {

    constructor(){
        super();
        this.state = {
          isbn: "",
          jsonAPI: "https://biblioshare.ca/bncservices/JSON.ashx?",
          title: '',
          contributor: '',
          publisher: '',
          authorBio: '',
          description: '',
          productForm: '',
        };
    }

    getBookDetailsAPI = (isbn) => {
        return axios({
            method: "GET",
            url: this.state.jsonAPI,
            responseType: "json",
            params: {
                Get: "Onix",
                Token: "jg9ngajqfe6vfu3d",
                EAN: isbn,
            }
        }).then((bookInfo) =>{
            let bookData = bookInfo.request.response.Product;
            console.log(bookData);
            let currentTitle = bookData.Title.TitleText;
            let currentContributor = bookData.Contributor.PersonName;
            let currentPublisher = bookData.Publisher.PublisherName;
            // let authorBio = 
            // let description = 
            let currentProductForm = bookData.ProductForm;

            this.setState({
                title: currentTitle,
                contributor: currentContributor,
                publisher: currentPublisher,
                productForm: currentProductForm
            })
        })
    }


    
    componentDidMount(){
        
        let currentIsbn = '';

        currentIsbn = this.props.data.match.params.isbn;

        this.setState({
            isbn: currentIsbn
        }, () => this.getBookDetailsAPI(this.state.isbn))
        
    }
    
    render(){

        return (
          <div className="bookPage">

            <header>
              <Nav />
            </header>
            <div className="wrapper bookSection">
                <div className="productInfo">
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.contributor}</h2>
                    <p>{this.state.publisher}</p>
                    <p>{this.state.productForm}</p>
                </div>
            </div>

          </div>
        );
    }
}

export default BookPage;
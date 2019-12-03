import React, { Component } from 'react';
import axios from "axios";
import Nav from './Nav'
import Footer from './Footer'

class BookPage extends Component {

    constructor(){
        super();
        this.state = {
          isbn: "",
          jsonAPI: "https://biblioshare.ca/bncservices/JSON.ashx?",
          title: '',
          contributor: '',
          publisher: '',
          cover: '',
          authorBio: '',
          description: '',
          price: '',
          pages:'',
        };
    }

    unescapeHTML = (escapedHTML) => {
        return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
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
            let currentContributor =
                bookData.Contributor.PersonName;
            let currentPublisher =
                bookData.Publisher.PublisherName;
            let currentCover = bookData.MediaFile.MediaFileLink;
            let currentPrice = bookData.SupplyDetail.Price.PriceAmount;
            let currentDescription = bookData.OtherText[0].Text;
            let currentPages = bookData.NumberOfPages
            

            let cleanDescription = currentDescription.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

            let cleanPublisher = currentPublisher.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            
            let parser = new DOMParser();
            let parseDescription = parser.parseFromString(cleanDescription, "text/html");
            let newDescription = parseDescription.documentElement.innerHTML;
            
            let parsePublisher = parser.parseFromString(cleanPublisher,"text/html");
            console.log(parsePublisher);
            let newPublisher = parsePublisher.documentElement.innerText;
            

            this.setState({
                title: currentTitle,
                contributor: currentContributor,
                publisher: newPublisher,
                cover: currentCover,
                description: newDescription,
                price: currentPrice,
                pages: currentPages,
            });
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
                        <div className="text">
                            <h1>{this.state.title}</h1>
                            <h2>{this.state.contributor}</h2>
                            <p>{this.state.publisher}</p>
                            <p>${this.state.price}</p>
                            <p>{this.state.pages} pages</p>
                            <p>{this.state.isbn}</p>
                        </div>
                        <div className="image">
                            <img src={this.state.cover} alt="" />
                        </div>
                    </div>
                    <div className="productExtraInfo">
                        <h3>Description</h3>
                        <p
                        className="description"
                        dangerouslySetInnerHTML={{ __html: this.state.description }}
                        >
                        </p>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default BookPage;
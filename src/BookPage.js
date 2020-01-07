import React, { Component } from 'react';
import axios from "axios";
import Nav from './Nav';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

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
          showBookLoadingScreen: false,
          showBookInfo: false,
        };
    }

    getBookDetailsAPI = (isbn) => {
        this.setState({
          showBookLoadingScreen: true,
        });
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

            //Grabbing all needed data and storing in variables
            let currentTitle = bookData.Title.TitleText;
            let currentContributor =
                bookData.Contributor.PersonName;
            let currentPublisher =
                bookData.Publisher.PublisherName;
            let currentCover = bookData.MediaFile.MediaFileLink;
            let currentDescription = bookData.OtherText[0].Text;
            let currentPages = bookData.NumberOfPages
            
            //Replacing escaped HTML to unescaped using REGEX
            let cleanTitle = currentTitle.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            let cleanDescription = 
            currentDescription.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            let cleanPublisher = currentPublisher.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            
            //Parsing the cleaned HTML so that it is not a string
            let parser = new DOMParser();
            let parseDescription = parser.parseFromString(cleanDescription, "text/html");
            let parsePublisher = parser.parseFromString(cleanPublisher,"text/html");
            let parseTitle = parser.parseFromString(cleanTitle,"text/html");

            //Updating new information to a new variable
            let newDescription = parseDescription.documentElement.innerHTML;
            let newPublisher = parsePublisher.documentElement.innerText;
            let newTitle = parseTitle.documentElement.innerText;
            
            //Setting state to clean data from API
            this.setState({
                title: newTitle,
                contributor: currentContributor,
                publisher: newPublisher,
                cover: currentCover,
                description: newDescription,
                pages: currentPages,
                showBookLoadingScreen: false,
                showBookInfo: true,
            });
        })
    }


    
    componentDidMount(){

        //Grabbing the current ISBN through a props passed through the App.js file
        let currentIsbn = '';

        currentIsbn = this.props.data.match.params.isbn;

        //Once ISBN is grabbed, call the Biblioshare JSON API with ISBN as a key
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

              {this.state.showBookLoadingScreen ? <LoadingScreen /> : null}

              {this.state.showBookInfo ? (

                <React.Fragment>

                  <div className="productInfo">
                    <div className="text">
                      <h1>{this.state.title}</h1>
                      <h2>{this.state.contributor}</h2>
                      <p>{this.state.publisher}</p>
                      <p>{this.state.pages} pages</p>
                      <p>{this.state.isbn}</p>
                    </div>
                    <div className="image">
                      <img src={this.state.cover} alt={this.state.title + " by " + this.state.author} />
                    </div>
                  </div>

                  <div className="productExtraInfo">
                    <h3>Description</h3>

                    {/* This is because the text from the API included it's own HTML */}
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: this.state.description }}
                      ></p>
                  </div>
                  
                </React.Fragment>


              ) : null}


            </div>

            <Footer />
          </div>
        );
    }
}

export default BookPage;
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
          imageAPI:
            "https://www.biblioshare.org/BNCServices/BNCServices.asmx/Images?",
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

    getBookCoverAPI = (isbn) => {
      return axios({
        method: "GET",
        url: this.state.imageAPI,
        responseType: "json",
        params: {
          Token: "jg9ngajqfe6vfu3d",
          EAN: isbn,
          SAN: "",
          thumbnail: false
        }
      }).then((coverInfo) => {

          this.setState({
            cover: coverInfo.request.responseURL
          })
      })
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

            let currentTitle, currentContributor, currentPublisher, currentCover, currentDescription, currentPages;

            let bookData = bookInfo.request.response.Product;

            //Grabbing all needed data and storing in variables

            if (bookData.Title.TitleText === undefined) {
              currentTitle = bookData.Title[0].TitleText;
            } else {
              currentTitle = bookData.Title.TitleText;
            }
          
            currentContributor = bookData.Contributor.PersonName;
            currentPublisher = bookData.Publisher.PublisherName;

            //if link for cover is not in book metadata, then use the Biblioshare Image API to get an image
            if (bookData.MediaFile === undefined) {
              this.getBookCoverAPI(isbn)
            } else {
              currentCover = bookData.MediaFile.MediaFileLink;
            }
            
            currentDescription = bookData.OtherText[0].Text;
            currentPages = bookData.NumberOfPages
            
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

        setTimeout(() => {
          this.getBookCoverAPI(this.state.isbn)
        }, 200)
    }
    
    render(){
        
        return (
          <div className="bookPage">
            <header>
              <Nav />
            </header>

            <div className="bookSection">

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
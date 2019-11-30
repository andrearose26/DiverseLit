import React, { Component } from 'react';
import axios from 'axios';

import bookInfo from './bookInfo';
import Header from './Header';
import Hero from './Hero';
import AllBooks from './AllBooks';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allBooks: bookInfo,
      isbn: '',
      allIsbns: [],
      allTitles: [],
      allAuthors: [],
      imageURLs: [],
      imageAPI:
        "https://www.biblioshare.org/BNCServices/BNCServices.asmx/Images?",
    };
  }

  getBookAPI = (isbn) => { //pass through each ISBN as a parameter
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
    })
  }

  getAllBooks = () => {

    //I am grabbing all of the ISBNs from the bookInfo object through a for loop for all the categories, then the options within. Ex - loop through each race, then each isbn is pushed through an array in this.state.

    let isbn, title, author;
    let newISBNs = [];
    let newTitles = [];
    let newAuthors = [];

    const raceCategories = Object.keys(bookInfo.race); //creates an array of each of the categories in race

    //looping through each race option
    for (let i = 0; i < raceCategories.length; i++) {
      const info = bookInfo.race[raceCategories[i]];//grabs all of the book info

      //looping through each book in each race option 
      for (let i = 0; i < info.length; i++) {

        //grabs all of the needed info from each category and option
        isbn = info[i].isbn;
        title = info[i].title;
        author = info[i].author;

        //pushes each attribute to its relevant array
        newISBNs.push(isbn);
        newTitles.push(title);
        newAuthors.push(author);

        //ASK ABOUT THIS. Set state occurs after it already renders and doesn't re-render after state is altered
        this.state.allIsbns.push(isbn);
        this.state.allTitles.push(title);
        this.state.allAuthors.push(author);
      }
    }

    console.log(newISBNs);

    //sets state with updated all book info
    this.setState({
      allIsbns: newISBNs,
      allTitles: newTitles,
      allAuthors: newAuthors,
    }, () =>{
      console.log(this.state.allIsbns);
    })

    //ISSUE - State is updated in component, but will not update in code. When console.log this.state.allIsbns, I get an empty array. 
  }

  componentDidMount() {

    this.getAllBooks();

    //I'm grabbing all of the isbns and putting them into an axios call to grab the images. This will return a promise for each axios call. To ensure that they all appear at the same time, I am using the .all function. I isolate the image URLs and push it to a new array, then change the imageURLs state. 

    //make api call to Biblioshare Image API
    
    let apiPromises = [];
    let newImageURLs = [];

    this.state.allIsbns.map((isbn)=>{
      return apiPromises.push(this.getBookAPI(isbn));
    })

    axios.all(apiPromises)
    .then((...apiCovers)=> {

      //grab each object out of the API promises
      let returnedCovers = apiCovers.map((apiObject) => {
        return apiCovers[0]
      })

      //loop over each object to grab the image URL
      for(let i = 0; i < returnedCovers[0].length; i++){
        //pushes each urls to an array
        newImageURLs.push(returnedCovers[0][i].request.responseURL);
        //changes state to the updated image urls
        this.setState({
          imageURLs: newImageURLs,
        })
      }
    });
  }

  render() {

    //Pass as props to the AllBooks component
    return (
      <div>

        <div className='wrapper'>

          <Header />

        </div>

        <main className='books'>

          <Hero />

          <div className="wrapper">

            <AllBooks
              bookImg={this.state.imageURLs}
              bookTitles = {this.state.allTitles}
              bookAuthors = {this.state.allAuthors}
            />

          </div>

        </main>

      </div>
    );
  }
}

export default App;
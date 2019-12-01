import React, { Component } from 'react';
import axios from 'axios';

import categories from './categories';
import bookInfo from './bookInfo';
import Header from './Header';
import AllBooks from './AllBooks';
import Footer from './Footer';

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

  //This function makes a call to the API for each ISBN that is passed through it

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

  //This function gathers all of the isbns, titles, and author names and updates state

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
      }
    }

    //sets state with updated all book info
    this.setState((prevState)=> {
      return {
        allIsbns: newISBNs,
        allTitles: newTitles,
        allAuthors: newAuthors,
      }
    }, () =>{
      console.log(this.state.allIsbns);
    })

    //ISSUE - State is updated in component, but will not update in code. When console.log this.state.allIsbns, I get an empty array. In the meantime, I've used setTimeout
  }

  //This function replaces all of the books with the user selection and updates state. 

  getFilteredBooks = (e, categoryChoice) => {

    //The user input is taken from an event listener on the filter component, passed through the function parameter. The value of the user select is equal to the key name in the bookInfo object, so a for loop will grab the ISBNs, titles, and authors with that key name and push to a new array. That array will equal the new state. 

    let selectedISBNs = [];
    let newPromises = [];
    let selectedImageURLs = [];
    let selectedTitles = [];
    let selectedAuthors = [];

    for(let i = 0; i < bookInfo.race[categoryChoice].length; i++){
      selectedISBNs.push(bookInfo.race[categoryChoice][i].isbn);
      selectedTitles.push(bookInfo.race[categoryChoice][i].title);
      selectedAuthors.push(bookInfo.race[categoryChoice][i].author);
    }

    this.setState((prevState)=>{
      return {
        allIsbns: selectedISBNs,
        allTitles: selectedTitles,
        allAuthors: selectedAuthors,
      }
    })

    setTimeout (() =>{      
      this.state.allIsbns.map((isbn) => {
        return newPromises.push(this.getBookAPI(isbn));
      })

      axios.all(newPromises)
        .then((...sortedCovers) => {
          let returnedCovers = sortedCovers.map((apiObject) =>{
            return sortedCovers[0];
          })
          for(let i = 0; i < sortedCovers[0].length; i++){
            selectedImageURLs.push(sortedCovers[0][i].request.responseURL); 
          }
           //changes state to the updated image urls
          this.setState({
            imageURLs: selectedImageURLs,
          })
        })
    },100)
  }

  //THIS IS NOT WORKING
  mobileResponsive = (x) => {
    if(x.matches){
      console.log('less than 405px');
      let select = document.getElementsByClassName("noSelect");
      select.innerText = "Ethnicity"

    }
  }

  componentDidMount() {

    this.getAllBooks();

    //I'm grabbing all of the isbns and putting them into an axios call to grab the images. This will return a promise for each axios call. To ensure that they all appear at the same time, I am using the .all function. I isolate the image URLs and push it to a new array, then change the imageURLs state. 

    //make api call to Biblioshare Image API
    setTimeout(() => {

      let apiPromises = [];
      let newImageURLs = [];
  
      // this.state.allIsbns.map((isbn)=>{
      //   return apiPromises.push(this.getBookAPI(isbn));
      // })

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
    }, 250)
    

  }

  render() {

    let x = window.matchMedia("(max-width: 405px)");
    this.mobileResponsive(x); // Call listener function at run time
    x.addListener(this.mobileResponsive);

    return (
      <div className="app">

          <Header 
            getFilteredBooksProps = {this.getFilteredBooks}
          />

        <main className='books' id ='books'>

          <div className="wrapper">

            <AllBooks
              bookImg={this.state.imageURLs}
              bookTitles = {this.state.allTitles}
              bookAuthors = {this.state.allAuthors}
            />

          </div>

          <Footer />

        </main>

      </div>
    );
  }
}

export default App;
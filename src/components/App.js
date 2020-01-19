import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import bookInfo from '../bookInfo';
import MainPage from './MainPage';
import About from './About';
import Blog from './Blog';
import BookPage from './BookPage';
import NotFound from './NotFound';

import '../styles/App.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowUp);

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
      showLoadingScreen: false,
    };
  }

  //This function makes a call to the API for each ISBN that is passed through it

  getBookAPI = (isbn) => { //pass through each ISBN as a parameter

    this.setState({
      showLoadingScreen: true,
    });

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

    console.log('get all books function has run');
    //I am grabbing all of the ISBNs from the bookInfo object through a for loop for all the categories, then the options within. Ex - loop through each race, then each isbn is pushed through an array in this.state.

    let isbn, title, author;
    let newISBNs = [];
    let newTitles = [];
    let newAuthors = [];

    const raceCategories = Object.keys(bookInfo.race); //creates an array of each of the categories in race
    const genderCategories = Object.keys(bookInfo.gender); //creates an array of each of the categories in race

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

    //looping through each race option
    for (let i = 0; i < genderCategories.length; i++) {
      const info = bookInfo.gender[genderCategories[i]];//grabs all of the book info

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
    this.setState(()=> {
      return {
        allIsbns: newISBNs,
        allTitles: newTitles,
        allAuthors: newAuthors,
      }
    })
  }

  showAllBooks = () => {
    //This will make api call to Biblioshare Image API and update all info in state
    setTimeout(() => {

      let apiPromises = [];
      let newImageURLs = [];

      this.state.allIsbns.map((isbn) => {
        return apiPromises.push(this.getBookAPI(isbn));
      })

      axios.all(apiPromises)
        .then((...apiCovers) => {

          //grab each object out of the API promises
          let returnedCovers = apiCovers.map((apiObject) => {
            return apiCovers[0]
          })

          //loop over each object to grab the image URL
          for (let i = 0; i < returnedCovers[0].length; i++) {
            //pushes each urls to an array
            newImageURLs.push(returnedCovers[0][i].request.responseURL);
            //changes state to the updated image urls
            this.setState({
              imageURLs: newImageURLs,
              showLoadingScreen: false,
            })
          }
        });
    }, 250)
  }
  //This function replaces all of the books with the user selection and updates state. 

  getFilteredBooks = (e, categoryChoice1, categoryChoice2, selectChoice1, selectChoice2) => {

    //The user input is taken from an event listener on the filter component, passed through the function parameter. The value of the user select is equal to the key name in the bookInfo object, so a for loop will grab the ISBNs, titles, and authors with that key name and push to a new array. That array will equal the new state. 

    let selectedISBNs = [];
    let newPromises = [];
    let selectedImageURLs = [];
    let selectedTitles = [];
    let selectedAuthors = [];

    if ((categoryChoice1 === "noSelect" || categoryChoice1 === "") && (categoryChoice2 === "noSelect" || categoryChoice2 === "")) {
      //if they select the default, get all of the book ISBNs, titles, authors and set to state
      this.getAllBooks();
      this.showAllBooks();

    } else if ((categoryChoice1 === "noSelect" || categoryChoice1 === "") && categoryChoice2 !== 'noSelect'){

      //Grabs ISBNs for gender category and pushes it into an array
      for (let i = 0; i < bookInfo[selectChoice2][categoryChoice2].length; i++) {
        selectedISBNs.push(bookInfo[selectChoice2][categoryChoice2][i].isbn);
        selectedTitles.push(bookInfo[selectChoice2][categoryChoice2][i].title);
        selectedAuthors.push(bookInfo[selectChoice2][categoryChoice2][i].author);
      }

      //Sets state to the updated group of ISBNs
      this.setState(() => {
        return {
          allIsbns: selectedISBNs,
          allTitles: selectedTitles,
          allAuthors: selectedAuthors,
        }
      })

      //Once all the info for each isbn comes back from the API, update state with all ISBNS so they can be put on the page
      setTimeout(() => {
        this.state.allIsbns.map((isbn) => {
          return newPromises.push(this.getBookAPI(isbn));
        })

        axios.all(newPromises)
          .then((...sortedCovers) => {
            sortedCovers.map((apiObject) => {
              return sortedCovers[0];
            })
            for (let i = 0; i < sortedCovers[0].length; i++) {
              selectedImageURLs.push(sortedCovers[0][i].request.responseURL);
            }
            //changes state to the updated image urls
            this.setState({
              imageURLs: selectedImageURLs,
              showLoadingScreen: false,
            })
          })
      }, 100)

    } else if (categoryChoice1 !== "noSelect" && (categoryChoice2 === "noSelect" || categoryChoice2 === "")){
      console.log('both have something selected');
      //Grabs ISBNs for race category and pushes it into an array
      for (let i = 0; i < bookInfo[selectChoice1][categoryChoice1].length; i++) {
        selectedISBNs.push(bookInfo[selectChoice1][categoryChoice1][i].isbn);
        selectedTitles.push(bookInfo[selectChoice1][categoryChoice1][i].title);
        selectedAuthors.push(bookInfo[selectChoice1][categoryChoice1][i].author);
      }

      //Sets state to the updated group of ISBNs
      this.setState(() => {
        return {
          allIsbns: selectedISBNs,
          allTitles: selectedTitles,
          allAuthors: selectedAuthors,
        }
      })

      //Once all the info for each isbn comes back from the API, update state with all ISBNS so they can be put on the page
      setTimeout(() => {
        this.state.allIsbns.map((isbn) => {
          return newPromises.push(this.getBookAPI(isbn));
        })

        axios.all(newPromises)
          .then((...sortedCovers) => {
            sortedCovers.map((apiObject) => {
              return sortedCovers[0];
            })
            for (let i = 0; i < sortedCovers[0].length; i++) {
              selectedImageURLs.push(sortedCovers[0][i].request.responseURL);
            }
            //changes state to the updated image urls
            this.setState({
              imageURLs: selectedImageURLs,
              showLoadingScreen: false,
            })
          })
      }, 100)

    } else if ((categoryChoice1 !== "noSelect" || categoryChoice1 !== "") && (categoryChoice2 !== "noSelect" || categoryChoice2 !== "")) {

      //if both are selected
      //Grabs ISBNs for race category and pushes it into an array
      for (let i = 0; i < bookInfo[selectChoice1][categoryChoice1].length; i++) {
        selectedISBNs.push(bookInfo[selectChoice1][categoryChoice1][i].isbn);
        selectedTitles.push(bookInfo[selectChoice1][categoryChoice1][i].title);
        selectedAuthors.push(bookInfo[selectChoice1][categoryChoice1][i].author);
      }
      //Grabs ISBNs for gender category and pushes it into an array
      for (let i = 0; i < bookInfo[selectChoice2][categoryChoice2].length; i++) {
        selectedISBNs.push(bookInfo[selectChoice2][categoryChoice2][i].isbn);
        selectedTitles.push(bookInfo[selectChoice2][categoryChoice2][i].title);
        selectedAuthors.push(bookInfo[selectChoice2][categoryChoice2][i].author);
      }

      //Sets state to the updated group of ISBNs
      this.setState(() => {
        return {
          allIsbns: selectedISBNs,
          allTitles: selectedTitles,
          allAuthors: selectedAuthors,
        }
      })

      //Once all the info for each isbn comes back from the API, update state with all ISBNS so they can be put on the page
      setTimeout(() => {
        this.state.allIsbns.map((isbn) => {
          return newPromises.push(this.getBookAPI(isbn));
        })

        axios.all(newPromises)
          .then((...sortedCovers) => {
            sortedCovers.map((apiObject) => {
              return sortedCovers[0];
            })
            for (let i = 0; i < sortedCovers[0].length; i++) {
              selectedImageURLs.push(sortedCovers[0][i].request.responseURL);
            }
            //changes state to the updated image urls
            this.setState({
              imageURLs: selectedImageURLs,
              showLoadingScreen: false,
            })
          })
      }, 100)
    }
  }

  componentDidMount() {

    //I'm grabbing all of the isbns and putting them into an axios call to grab the images. This will return a promise for each axios call. To ensure that they all appear at the same time, I am using the .all function. I isolate the image URLs and push it to a new array, then change the imageURLs state. 
    this.getAllBooks();

    //make api call to Biblioshare Image API and update all info in state
    this.showAllBooks();
  }

  render() {

    return (
      <Router basename="/DiverseLit">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <MainPage
                  bookISBNs={this.state.allIsbns}
                  bookImg={this.state.imageURLs}
                  bookTitles={this.state.allTitles}
                  bookAuthors={this.state.allAuthors}
                  showLoadingScreenProps={this.state.showLoadingScreen}
                  getFilteredBooksProps={this.getFilteredBooks}
                />
              );
            }}
          />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route
            path="/book/:isbn"
            render={data => {
              return <BookPage 
                        data={data}
                        getAllBooks={this.getAllBooks}
                        showAllBooksProps={this.showAllBooks}
                      />;
            }}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
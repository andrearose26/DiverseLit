import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import bookInfo from './bookInfo';
import Filter from './Filter'
import AllBooks from './AllBooks'

class App extends Component {

  constructor(){
    super();
    this.state = {
      category1: "", //no category filter applied initially
      allBooks: bookInfo,
      isbn: '',
      allIsbns: [],
      imageURLs: [],
      imageAPI:
        "https://www.biblioshare.org/BNCServices/BNCServices.asmx/Images?",
    };
  }

  componentDidMount() {

    let isbn;
    
    const raceCategories = Object.keys(bookInfo.race); //creates an array of each of the categories in race
    
    //looping through each race option
    for (let i = 0; i < raceCategories.length; i++){
      const info = bookInfo.race[raceCategories[i]];//grabs all of the book info

      //looping through each book in each race option 
      for (let i = 0; i < info.length; i++){

        //grabs all of the isbns from each category and option
        isbn = info[i].isbn;
        //pushs each ISBN to the allIsbns array
        this.state.allIsbns.push(isbn);
      }
    }

    
    //make api call to Biblioshare Image API
    //Need to incorporate $when function
    this.state.allIsbns.map((isbn) =>{
      axios({
        method: "GET",
        url: this.state.imageAPI,
        responseType: "json",
        params: {
          Token: "jg9ngajqfe6vfu3d",
          EAN: isbn,
          SAN: "",
          thumbnail: false
        }
      }).then((data) => {
        //update imageURLs array with images from Biblioshare API
        
        this.setState({ //it is changing the state on each API call
          imageURLs: this.state.imageURLs.concat(data.request.responseURL),
        });
      });
    })

  } 
  
  render(){
  
    
    //Loop through all the ISBNs from the object
    return (
      <div className = 'wrapper'>
        <header>
          <h1 className="title">DiverseLit</h1>
          <Filter />
        </header>

        <main className='books'>

          <AllBooks 
            bookImg = {this.state.imageURLs}
          />
 
        </main>
        
      </div>
    );
  }
}

export default App;

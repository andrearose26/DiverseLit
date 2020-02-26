import React, { Component } from 'react';
import Header from "./Header";
import AllBooks from "./AllBooks";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import NoBook from "./NoBook";

class MainPage extends Component {
    render(){

        return (
          <div className ="mainPage">
            <Header 
              getFilteredBooksProps={this.props.getFilteredBooksProps} 
            />

            <main className="books" id="books">
              <div className="wrapper">

                {this.props.showLoadingScreenProps ? <LoadingScreen/> : null}
                {this.props.showNoBookScreenProps ? <NoBook/> : null}

                <AllBooks
                    bookISBNs={this.props.bookISBNs}
                    bookImg={this.props.bookImg}
                    bookTitles={this.props.bookTitles}
                    bookAuthors={this.props.bookAuthors}
                />
              </div>

              <Footer />
            </main>
          </div>
        );
    }
}

export default MainPage;
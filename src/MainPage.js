import React, { Component } from 'react';
import Header from "./Header";
import AllBooks from "./AllBooks";
import Footer from "./Footer";

class MainPage extends Component {
    render(){

        return (
          <div id= "app">
            <Header getFilteredBooksProps={this.props.getFilteredBooksProps} />

            <main className="books" id="books">
              <div className="wrapper">

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
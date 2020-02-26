import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const AllBooks =  props  => (
    <div className='books'>
        <ul>
            {props.bookImg.map((image, i) => {
                const title = props.bookTitles[i];
                const author = props.bookAuthors[i]
                const isbn = props.bookISBNs[i]
                return (
                  <LazyLoad key={i}>
                    <li id={isbn} key={i}>
                      <Link
                        to={{
                          pathname: `book/${isbn}`,
                          state: {
                            bookISBN: isbn,
                            bookAuthor: author,
                            bookTitle: title
                          }
                        }}
                      >
                        <div className="hover-button">
                          <img
                            src={image}
                            alt={title + " by " + author}
                            className="bookCover"
                          />
                          <div className="hoverInfo">
                            <p className="moreDetails">Book Details →</p>
                          </div>
                        </div>
                        <div className="bookText">
                          <p className="title">{title}</p>
                          <p className="author">{author}</p>
                        </div>
                      </Link>
                    </li>
                  </LazyLoad>
                );
            })}
        </ul>
    </div>
);

export default AllBooks;
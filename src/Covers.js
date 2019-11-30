import React, { Component } from 'react'

class Covers extends Component {
    render(){

        return(
            <div>
                {this.props.bookImg.map = (cover) => {
                    return(
                        <li>
                            <img src={cover} alt="bookCover" className='bookCover' />
                        </li>
                    )
                }}
            </div>
            // {props.bookImg.map((image, i) =>{
            //     return(
            //         <li key={i}>
            //             <img src={image} alt="" className='bookCover' />
            //         </li>
            //     )
            // })}
        )
            // {this.props.bookImg.map((image, i) => {
            //         return (
            //             <li key={i}>
            //                 <img src={image} alt="" className='bookCover' />

            //                 {this.props.bookTitles.map((title) => {
            //                     return (
            //                         <h2>{title}</h2>
            //                     )
            //                 })}
            //             </li>
            //         )
            //     })
            // }
    }
}

export default Covers;
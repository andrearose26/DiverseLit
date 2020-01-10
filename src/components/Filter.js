import React,  { Component } from 'react';
import categories from '../categories';

class Filter extends Component {

    constructor(){
        super();
        this.state = {
            category1: "", 
        }
    }

    //This function grabs the user's input when they select a option before submit. 
    HandleFilterSelection = (e) =>{

        this.setState({
            category1: e.target.value
        })


    }

    render(){
        
        return(
            <div className="filter">
                
                <select onChange = {this.HandleFilterSelection}  name="raceCategories">
                
                    {categories.race.map((raceOfAuthor, i) => {
                        return(
                                <option className = {raceOfAuthor.value} key = {i} value={raceOfAuthor.value}>{raceOfAuthor.optionName}</option>
                            )
                        })}

                </select>

                <button onClick={(e) =>
                    this.props.getFilteredBooksProps(e, this.state.category1)
                }type ="submit">Filter</button>

            </div>
        )
    }

}

export default Filter;
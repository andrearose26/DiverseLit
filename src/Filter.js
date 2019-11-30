import React,  { Component } from 'react';
import categories from './categories'

class Filter extends Component {

    constructor(){
        super();
        this.state = {
            category1: "", 
        }
    }

    HandleFilterSelection = (e) =>{
        console.log(e.target.value);
        this.setState({
            category1: e.target.value
        })

    }

    render(){
        return(
            <div className="filter">
                <select onChange={this.HandleFilterSelection}  name="raceCategories">
                    {categories.race.map((raceOfAuthor, i) => {
                        return(
                            <option key = {i} value={raceOfAuthor.value}>{raceOfAuthor.optionName}</option>
                            )
                        })}
                </select>
                <button type ="submit">Filter</button>
            </div>
        )
    }

}

export default Filter;
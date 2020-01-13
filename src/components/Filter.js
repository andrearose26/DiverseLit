import React,  { Component } from 'react';
import categories from '../categories';

class Filter extends Component {

    constructor(){
        super();
        this.state = {
            select: "",
            category1: "", 
            category2: "",
        }
    }

    HandleFilterSelection = (e) => {
        this.setState({
            select: e.target.name,
            category1: e.target.value,
        })
    }

    // //This function grabs the user's input when they select a option before submit. 
    // HandleFilterSelectionRace = (e) =>{

    //     this.setState({
    //         select: e.target.name,
    //         category1: e.target.value,
    //     })

    // }

    // //This function grabs the user's input when they select a option before submit. 
    // HandleFilterSelectionGender = (e) =>{

    //     this.setState({
    //         select: e.target.name,
    //         category2: e.target.value,
    //     })

    // }

    filterReset = () => {
        console.log('filter reset function has run');
        //This selects each select for each category, where the options are nested in an array
        const raceValues = document.getElementById("race").options;
        const genderValues = document.getElementById("gender").options;

        //This sets the select to the first option in the select
        raceValues.selectedIndex = 0;
        genderValues.selectedIndex = 0;

    }

    render(){
        
        return(
            <div className="filter">
                
                <select onChange = {this.HandleFilterSelection} name="race" id="race">
                
                    {categories.race.map((raceOfAuthor, i) => {
                        return(
                                <option className = {raceOfAuthor.value} key = {i} value={raceOfAuthor.value}>{raceOfAuthor.optionName}</option>
                            )
                        })}

                </select>


                <select onChange = {this.HandleFilterSelection}  name="gender" id="gender">
                
                    {categories.gender.map((genderOfAuthor, i) => {
                        
                        return(
                            <option className = {genderOfAuthor.value} key = {i} value={genderOfAuthor.value}>{genderOfAuthor.optionName}</option>
                            )
                        })}

                </select>

                <button onClick={(e) => {
                    this.props.getFilteredBooksProps(e, this.state.category1, this.state.select);
                    this.filterReset();
                }
                }type ="submit">Filter</button>

            </div>
        )
    }

}

export default Filter;
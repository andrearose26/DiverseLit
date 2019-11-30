import React from 'react';
import categories from './categories'

function Filter() {

        return(
            <select name="raceCategories">
                {categories.race.map((raceOfAuthor, i) => {
                    return(
                        <option key = {i} value={raceOfAuthor.value}>{raceOfAuthor.optionName}</option>
                    )
                })}
            </select>
        )

}

export default Filter;
import React from 'react'
import FilterBox from './filter-box';

class Filter extends React.Component {
    render(){

       return(
            <div className="filter-container">
                <h4>Filters</h4>  
                <FilterBox filterName="Spices"/>
                <FilterBox filterName="Gender"/>
                <FilterBox filterName="Origin"/>
             </div>   
        )
    }
}

export default Filter;
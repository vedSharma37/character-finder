import React from 'react'
import FilterBox from './filter-box';

class Filter extends React.Component {
    render(){
        let FilterBoxes = [];
        for (let key in this.props.filters) {
            let options = this.props.filters[key];
            FilterBoxes.push(<FilterBox key={key} filterName={key} options = {options} onchange={this.props.onChangeHandler}></FilterBox>)
        }
        console.log(FilterBoxes);
       return(
            <div className="filter-container">
                <h2>Filters</h2>  
                {FilterBoxes}
             </div>   
        )
    }
}

export default Filter;

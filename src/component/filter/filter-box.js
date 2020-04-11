import React from 'react';

const FilterBox = props => {

    return(

    <div className="card bg-light mb-3">
        <div className="card-header">{props.filterName}</div>
        <div className="card-body">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label">test</label>
        </div>
        </div>
    </div>
    )
}



export default FilterBox;
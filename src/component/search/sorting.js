import React from 'react';

const Sorting = props => {

    return(
        <div className="sorting-box">
            <div className="form-group">
                <label>Sorting By Id</label>
                <select className="form-control" id="sel1">
                    <option>Assending</option>
                    <option>Decending</option>
                </select>
            </div>
         </div>   
    )
}

export default Sorting;
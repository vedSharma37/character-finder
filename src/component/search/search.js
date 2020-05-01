import React from 'react'
import Sorting from './sorting';

class Search extends React.Component {


    render(){

        return(

            <div className="search-container">
                <div className="row">
                    <div className="col-md-8">
                        <form className="searchBar-box">
                            <div className="from-group">
                            <label htmlFor="search-input">Search By Name</label>
                                <input id="search-input" type="text" onChange={this.props.onChangeHandler} className="form-control" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <Sorting />
                    </div>    
                </div>    
             </div>   
        )
    }
}

export default Search;
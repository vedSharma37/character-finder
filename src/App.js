import React from 'react';
import Filter from './component/filter/filter';
import Search from './component/search/search';
import CharachterList from './component/search-result/character-list';
import Header from './component/header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {

  constructor(){
    super();
    this.state = { 
        intialResult : [],
        filterResult : []
      }
  }


  componentDidMount() {
      fetch('http://rickandmortyapi.com/api/character/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          this.setState({
              intialResult: data.results,
              filterResult: data.results
            });
      });

  }

  updateBySearchHandler = (event) => {
    if(event.target.value.length){
      let searchData =  this.state.intialResult.filter(character => {
        if(character.name.toLowerCase().includes(event.target.value.toLowerCase()))
            return character;
       });
       this.setState({
        filterResult : searchData
      })
    }
  }


  extractFilter(label, name){
    let filterdata = this.state.filterResult.filter(filter => {
      return filter.species === "Human" || filter.gender === 'Female'

    })
    console.log(filterdata)
  }

  
  render(){
    this.extractFilter();
    console.log(this.state.filterResult)
    
    
      return (
      <div className="App-container container-fluid">

          <Header name="Character Finder"/>

          <div className="row">
            <div className="col-md-4">
                <Filter heading="example" />
            </div>
            <div className="col-md-8">
                <Search onChangeHandler={this.updateBySearchHandler} />
                <CharachterList result={this.state.filterResult} />
            </div>

          </div>
        </div>
      );
  }
}

export default App;



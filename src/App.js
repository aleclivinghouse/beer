import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './beers.js';
import LineChart from './LineChart';
class App extends Component {
  state = {
    data: [{name: "Budweiser",  abv: 4.5, ibu: 7.5, category: "North American Lager"},
          {name: "Coors",  abv: 5, ibu: 7, category: "North American Lager"},
          {name: "Miller",  abv: 4, ibu: 7.5, category: "North American Lager"},
          {name: "Anchor",  abv: 8, ibu: 9, category: "North American Origin Ales"},
           {name: "Laguanitas",  abv: 9, ibu: 10, category: 'North American Origin Ales'},
         ],
    realData: []
  }


  componentWillMount(){
    console.log(Beers);
    let createData = (data) => {
      let theArray = [];
      for(let dataItem of data){
        let map = {};
        map.name = dataItem.name;
        if(dataItem.style.hasOwnProperty("ibuMax")){
        map.ibu = parseInt(dataItem.style.ibuMax);
      } else {
        map.ibu = 0;
      }
         if(dataItem.style.hasOwnProperty("abvMax")){
        map.abv = parseInt(dataItem.style.abvMax);
      } else {
        map.abv = 0;
      }
        map.category = dataItem.style.category.name;
        theArray.push(map);
      }
      return theArray;
    }
    this.setState({
      realData: createData(Beers.data)
    });
    console.log(this.state.realData);
    }

  render() {
    console.log(this.state.realData);
    return (
      <div className="App">
        <div className="App">
         <LineChart data={this.state.realData}/>
       </div>
      </div>
    );
  }
}

export default App;

//http://api.brewerydb.com/v2/brewery/BznahA/beers/?key=71baeb668b3c829308c4eed1fc7b2fdb
//http://api.brewerydb.com/v2/breweries/?key=71baeb668b3c829308c4eed1fc7b2fdb
//http://api.brewerydb.com/v2/beers/?key=71baeb668b3c829308c4eed1fc7b2fdb
// lagunitas id nLsoQ9
// sierra nevada nHLlnK
// samuel adams rd8LRZ
// guiness HaPdSL
// miller hGFVYy

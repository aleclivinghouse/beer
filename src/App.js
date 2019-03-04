import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './beers.js';
import LineChart from './LineChart';
import {createData} from './helpers';
class App extends Component {
  state = {
    data: [{name: "Budweiser",  abv: 4.5, ibu: 7.5, category: "North American Lager"},
          {name: "Coors",  abv: 5, ibu: 7, category: "North American Lager"},
          {name: "Miller",  abv: 4, ibu: 7.5, category: "North American Lager"},
          {name: "Anchor",  abv: 8, ibu: 9, category: "North American Origin Ales"},
           {name: "Laguanitas",  abv: 9, ibu: 10, category: 'North American Origin Ales'},
         ],
    realData: createData(Beers.data)
  }


  componentWillMount(){
    // console.log(Beers);
    // this.setState({
    //   realData: createData(Beers.data)
    // });
    // console.log(this.state.realData);
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

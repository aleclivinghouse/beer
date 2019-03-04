import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';
class App extends Component {
  state = {
    data: [{name: "Budweiser",  abv: 4.5, ibu: 7.5, category: "Pilsner"},
          {name: "Coors",  abv: 5, ibu: 7, category: 'Pilsner'},
          {name: "Miller",  abv: 4, ibu: 7.5, category: 'Pilsner'},
          {name: "Anchor",  abv: 8, ibu: 9, category: 'Ale'},
           {name: "Laguanitas",  abv: 9, ibu: 10, category: 'IPA'},
          ]
        }
  render() {
    return (
      <div className="App">
        <div className="App">
         <LineChart data={this.state.data}/>
       </div>
      </div>
    );
  }
}

export default App;

//http://api.brewerydb.com/v2/brewery/BznahA/beers/?key=71baeb668b3c829308c4eed1fc7b2fdb
//http://api.brewerydb.com/v2/breweries/?key=71baeb668b3c829308c4eed1fc7b2fdb
// lagunitas id nLsoQ9
// sierra nevada nHLlnK
// samuel adams rd8LRZ
// guiness HaPdSL
// miller hGFVYy

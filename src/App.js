import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './beers.js';
import LineChart from './LineChart';
import {createData} from './helpers';
class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    data: [{name: "Budweiser",  abv: 4.5, ibu: 7.5, category: "North American Lager"},
          {name: "Coors",  abv: 5, ibu: 7, category: "North American Lager"},
          {name: "Miller",  abv: 4, ibu: 7.5, category: "North American Lager"},
          {name: "Anchor",  abv: 8, ibu: 9, category: "North American Origin Ales"},
           {name: "Laguanitas",  abv: 9, ibu: 10, category: 'North American Origin Ales'},
         ],
    categories: ['North American Lager', "Malternative Beverages", "North American Ales",  "North American Origin Ales", "Hybrid/mixed Beer", "Belgian And French Origin Ales", "Malternative Beverages"],
    realData: []
  }
}
  componentWillMount(){
    console.log(Beers);
    this.setState({
      realData: createData(Beers.data, this.state.categories)
    });
    console.log(this.state.realData);
    }

    handleCheck(arg){
      if(this.state.categories.indexOf(arg) > -1){
            this.setState({categories: this.state.categories.filter(item => item !== arg)});
            console.log('categories before', this.state.categories);
        } else {
          this.setState({categories: [...this.state.categories, arg]});
            console.log('categories after', this.state.categories);
          this.setState({realData: createData(Beers.data, this.state.categories)  });
        }
    }


  render() {
    return (
      <div className="App">
        <div className="App">
         <LineChart data={this.state.realData}/>
       </div>
       <span className="check-label">North American Lager</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, 'North American Lager')} defaultChecked="checked"/>
        <span className="check-label">North American Ales</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, 'North American Ales')} defaultChecked="checked"/>
         <span className="check-label">North American Origin Ales</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, 'North American Origin Ales')} defaultChecked="checked"/>
        <span className="check-label">Hybrid/mixed Beer</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, "Hybrid/mixed Beer")} defaultChecked="checked"/>
          <span className="check-label">Belgian And French Origin Ales</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, "Belgian And French Origin Ales")} defaultChecked="checked"/>
        <span className="check-label">Malternative Beverages</span>
       <input type="checkbox" onChange={this.handleCheck.bind(this, "Malternative Beverages")} defaultChecked="checked"/>
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

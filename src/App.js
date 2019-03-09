import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './beers.js';
import LineChart from './LineChart';
import createData from './helpers';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
const styles = theme => ({
  'colorSwitchBase': {
    color: purple[300],
    '&$colorChecked': {
      color: purple[300],
      '& + $colorBar': {
        backgroundColor: purple[300],
      },
    },
  },
  'colorSwitchBase1': {
    color: orange[300],
    '&$colorChecked1': {
      color: orange[300],
      '& + $colorBar1': {
        backgroundColor: orange[300],
      },
    },
  },
  'colorSwitchBase2': {
    color: blue[300],
    '&$colorChecked2': {
      color: blue[300],
      '& + $colorBar2': {
        backgroundColor: blue[300],
      },
    },
  },
  'colorSwitchBase3': {
    color: green[300],
    '&$colorChecked3': {
      color: green[300],
      '& + $colorBar3': {
        backgroundColor: green[300],
      },
    },
  },
  'colorSwitchBase4': {
    color: yellow[300],
    '&$colorChecked4': {
      color: yellow[300],
      '& + $colorBar4': {
        backgroundColor: yellow[300],
      },
    },
  },
});


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
    this.setState({
      realData: createData(Beers.data, this.state.categories)
    });
    console.log(this.state.realData);
    }

    handleCheck(arg){
      let flag = false;
      for(let category of this.state.categories){
        if(category === arg){
          flag = true;
        }
      }
      if(flag === true){
            console.log('categories before filter', this.state.categories);
            this.setState({categories: this.state.categories.filter(item => item !== arg)},
            () => {
              this.setState({realData: createData(Beers.data, this.state.categories)})
          });
            console.log('categories after filter', this.state.categories);
        } else {
          console.log('categories before add', this.state.categories);
          this.setState({categories: [...this.state.categories, arg]},
            () => {
            this.setState({realData: createData(Beers.data, this.state.categories)})
          });
          console.log('categories after add', this.state.categories);
        }
    }




  render() {
    return (
      <div className="App">
         <h3 className="header">IBU vs. ABV of Various Beers</h3>
        <div className="line-chart-wrapper">
         <LineChart data={this.state.realData}/>
       </div>
       <div className="switch-wrapper">
       <FormGroup row>
          <FormControlLabel
            control={
              <Switch onClick={this.handleCheck.bind(this, 'North American Lager')} classes={{
                switchBase: this.props.classes.colorSwitchBase,
                checked: this.props.classes.colorChecked,
                bar: this.props.classes.colorBar,
              }}/>
            }
            label="American Lager"
            color="primary"
          />
          <FormControlLabel
            control={
              <Switch onClick={this.handleCheck.bind(this, 'North American Origin Ales')}  classes={{
                switchBase: this.props.classes.colorSwitchBase1,
                checked: this.props.classes.colorChecked1,
                bar: this.props.classes.colorBar1,
              }} />
            }
            label="American Ales"
          />
          <FormControlLabel
            control={
              <Switch onClick={this.handleCheck.bind(this, 'Hybrid/mixed Beer')}  classes={{
                switchBase: this.props.classes.colorSwitchBase2,
                checked: this.props.classes.colorChecked2,
                bar: this.props.classes.colorBar2,
              }}/>
            }
            label="Hybrid/mixed Beer"
          />
          <FormControlLabel
           control={<Switch onClick={this.handleCheck.bind(this, 'Belgian And French Origin Ales')} classes={{
             switchBase: this.props.classes.colorSwitchBase3,
             checked: this.props.classes.colorChecked3,
             bar: this.props.classes.colorBar3,
             }}/>
            }
            label="European Ales"
          />
          <FormControlLabel
           control={<Switch onClick={this.handleCheck.bind(this, 'Malternative Beverages')} classes={{
             switchBase: this.props.classes.colorSwitchBase4,
             checked: this.props.classes.colorChecked4,
             bar: this.props.classes.colorBar4,
             }} />
            }
            label="Malternative Beverages"
          />
      </FormGroup>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(App);

//http://api.brewerydb.com/v2/brewery/BznahA/beers/?key=71baeb668b3c829308c4eed1fc7b2fdb
//http://api.brewerydb.com/v2/breweries/?key=71baeb668b3c829308c4eed1fc7b2fdb
//http://api.brewerydb.com/v2/beers/?key=71baeb668b3c829308c4eed1fc7b2fdb
// lagunitas id nLsoQ9
// sierra nevada nHLlnK
// samuel adams rd8LRZ
// guiness HaPdSL
// miller hGFVYy

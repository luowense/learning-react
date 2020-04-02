import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';


//Premiere partie concernant les props 

// class App extends Component {
//   render () {
//     const {titre} = this.props;
//     return (
//     <Fragment>
//       <div className="App">
//         <h1>{titre}</h1>
//         <Membre name='Laurent'/>
//         <Membre name='Ines'/>
//         <p>Je suis un chien</p>
//       </div>
//     </Fragment> 
//     )
//   }
// }

const famille = {
  membre1: {
    name: 'Titi',
    age: 38
  },
  membre2: {
    name: 'Laurent', 
    age: 31
  },
  membre3: {
    name: 'Ines', 
    age: 8
  }
}


//A propos du State 
class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille}
    famille.membre2.age = famille.membre2.age + num 
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille[id].name = name
    famille[id].age = age
    this.setState({famille})
  }

  hideName = (id) => {
    const famille = { ...this.state.famille }
    famille[id].name = 'X'
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {
    const {titre} = this.props;
    const { famille, isShow } = this.state;

    let description = null;
    let buttonContent = 'Cacher';

    if (isShow) {
      description = <p>Je suis un chien</p>
    } else {
      buttonContent = 'Montrer';
    }

    const list = Object.keys(famille)
      .map(membre => (
        <Membre 
          key={membre}
          handleNameChange = { event => this.handleChange(event, membre) }
          handleAgeChange = { event => this.handleChange(event, membre) }
          hideName={() => this.hideName(membre)}
          age={ famille[membre].age }
          name={ famille[membre].name }
        />
      ))
    

    return (
    <Fragment>
      <div className="App">
        <h1>{titre}</h1>
          { list }
          { description }
          <button onClick={this.handleShowDescription}>
            { buttonContent }
          </button>
          <Button vieillir={() => this.handleClick(8)}/>
      </div>
    </Fragment> 
    )
  }
}

export default App;
          
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

  handleNameChange = (event) => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    console.log(name)
    famille.membre1.name = name
    this.setState({famille})
  }

  handleAgeChange = (e) => {
    const famille = {...this.state.famille}
    const age = e.target.value
    famille.membre1.age = age
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {
    const {titre} = this.props;
    const { famille, isShow } = this.state;

    return (
    <Fragment>
      <div className="App">
        <h1>{titre}</h1>
        <input value={ famille.membre1.name } onChange={ this.handleNameChange } type='text'/>
        <input value={ famille.membre1.age } onChange={this.handleAgeChange} type='text'/>
        <Membre 
          name={famille.membre1.name}
          age={famille.membre1.age}
          />
        <Membre 
          name={famille.membre2.name}
          age={famille.membre2.age}
          />
        <Membre 
          name={famille.membre3.name}
          age={famille.membre3.age}
          />
          {
            this.state.isShow ? 
            <p>Je suis un chien</p>
            :
            null
          }
          <button onClick={this.handleShowDescription}>
            { isShow ? 'Cacher' : 'Montrer'}
          </button>
          <Button vieillir={() => this.handleClick(8)}/>
      </div>
    </Fragment> 
    )
  }
}

export default App;
          
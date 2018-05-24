import React, { Component } from 'react';
import './App.css';

class ItemList extends Component{
  render() {
    const entris = this.props.entris
    const mapFn = (item) => {
      return (<li key={item.key}>{item.text}</li>)
    }
    const result = entris.map(mapFn)
    return (
      <ul>
        {result}
      </ul>
    )
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }


  handle (e) {
    const itemsAarry = this.state.items
    
    itemsAarry.push({
      text: this._input.value,
      key: Date.now()
    })

    this.setState({
      items: itemsAarry,
    })
    
    this._input.value = ''
    this._input.focus()

    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <form action="" onSubmit={this.handle.bind(this)}>
            <input 
              type="text"
              ref={(input) => {this._input = input}}
              placeholder="请输入任务"/>
            <button>添加</button>
          </form>
        </div>
        <ItemList entris={this.state.items}/>
      </div>
    );
  }
}

export default App;

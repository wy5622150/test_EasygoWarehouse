import React, { Component } from 'react'
import './App.css';
import { List, TextareaItem, Button } from 'antd-mobile'
import Output1 from './outputs/output1'
import Output2 from './outputs/output2'
import Output3 from './outputs/output3'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comma: '',
      space: '',
      pipe: '',
      formatObj: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  DataTrans(commaRaw, pipeRaw, spaceRaw) {
    for (var i = 0; i < commaRaw.length; i++) {
      commaRaw[i] = commaRaw[i].split(', ')
      var temp = commaRaw[i][3]
      commaRaw[i][3] = commaRaw[i][4]
      commaRaw[i][4] = temp
    }
    for (var i = 0; i < pipeRaw.length; i++) {
      pipeRaw[i] = pipeRaw[i].split(' | ')
      pipeRaw[i].splice(2, 1)
      pipeRaw[i][2] = (pipeRaw[i][2] == 'M') ? 'Male' : 'Female'
      pipeRaw[i][4] = pipeRaw[i][4]?pipeRaw[i][4].split('-').join('/'):null
      var temp = pipeRaw[i][3]
      pipeRaw[i][3] = pipeRaw[i][4]
      pipeRaw[i][4] = temp
    }
    for (var i = 0; i < spaceRaw.length; i++) {
      spaceRaw[i] = spaceRaw[i].split(' ')
      spaceRaw[i].splice(2, 1)
      spaceRaw[i][2] = (spaceRaw[i][2] == 'M') ? 'Male' : 'Female'
      spaceRaw[i][3] = spaceRaw[i][3]?spaceRaw[i][3].split('-').join('/'):null
    }
    return [...commaRaw, ...pipeRaw, ...spaceRaw]
  }
  onSubmit() {
    var commaRaw = this.state.comma.split('\n'),
      pipeRaw = this.state.pipe.split('\n'),
      spaceRaw = this.state.space.split('\n'),
      data = this.DataTrans(commaRaw, pipeRaw, spaceRaw)
    this.handleChange('formatObj', data)
  }
  render() {
    return (
      <div className="App">
        <h1>Input Sample</h1>
        <div>Abercrombie, Neil, Male, Tan, 2/13/1943</div>
        <div>Bishop, Timothy, Male, Yellow, 4/23/1967</div>
        <div>Kelly, Sue, Female, Pink, 7/12/1959</div>
        <div>Smith | Steve | D | M | Red | 3-3-1985</div>
        <div>Bonk | Radek | S | M | Green | 6-3-1975</div>
        <div>Bouillon | Francis | G | M | Blue | 6-3-1975</div>
        <div>Kournikova Anna F F 6-3-1975 Red</div>
        <div>Hingis Martina M F 4-2-1979 Green</div>
        <div>Seles Monica H F 12-2-1973 Black</div>
        <h1>Application Area</h1>
        <List>
          <TextareaItem
            title='comma'
            onChange={v => { this.handleChange('comma', v) }}
            autoHeight
          ></TextareaItem>
          <TextareaItem
            title='pipe'
            onChange={v => { this.handleChange('pipe', v) }}
            autoHeight
          ></TextareaItem>
          <TextareaItem
            title='space'
            onChange={v => { this.handleChange('space', v) }}
            autoHeight
          ></TextareaItem>
          <button onClick={this.onSubmit}>Submit</button>
        </List>
        <Output1 content={this.state.formatObj} />
        <Output2 content={this.state.formatObj} />
        <Output3 content={this.state.formatObj} />
      </div>
    );
  }
}

export default App;

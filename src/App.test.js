import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Output1 from './outputs/output1'
import Output2 from './outputs/output2'
import Output3 from './outputs/output3'
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'
Enzyme.configure({ adapter: new Adapter() });

describe('组件正确渲染', function () {
  it('App正确渲染', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('output1模块正确渲染', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Output1 content={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('output2模块正确渲染', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Output2 content={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('output3模块正确渲染', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Output3 content={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
describe('函数运行正常(每个函数9个测试点)', function () {
  var target = []
  it('DataTrans()转化功能正常', function () {
    var commaRaw = 'Abercrombie, Neil, Male, Tan, 2/13/1943\nBishop, Timothy, Male, Yellow, 4/23/1967\nKelly, Sue, Female, Pink, 7/12/1959'.split('\n'),
      pipeRaw = 'Smith | Steve | D | M | Red | 3-3-1985\nBonk | Radek | S | M | Green | 6-3-1975\nBouillon | Francis | G | M | Blue | 6-3-1975'.split('\n'),
      spaceRaw = 'Kournikova Anna F F 6-3-1975 Red\nHingis Martina M F 4-2-1979 Green\nSeles Monica H F 12-2-1973 Black'.split('\n')
    target = App.prototype.DataTrans(commaRaw, pipeRaw, spaceRaw)
    expect(target[0][0]).to.equal('Abercrombie')
    expect(target[1][0]).to.equal('Bishop')
    expect(target[2][0]).to.equal('Kelly')
    expect(target[3][0]).to.equal('Smith')
    expect(target[4][0]).to.equal('Bonk')
    expect(target[5][0]).to.equal('Bouillon')
    expect(target[6][0]).to.equal('Kournikova')
    expect(target[7][0]).to.equal('Hingis')
    expect(target[8][0]).to.equal('Seles')
  })
  it('Output1组件itemSortJoin()功能正常', function () {
    expect(Output1.prototype.itemSortJoin(target)[0]).to.equal('Hingis Martina Female 4/2/1979 Green')
    expect(Output1.prototype.itemSortJoin(target)[1]).to.equal('Kelly Sue Female 7/12/1959 Pink')
    expect(Output1.prototype.itemSortJoin(target)[2]).to.equal('Kournikova Anna Female 6/3/1975 Red')
    expect(Output1.prototype.itemSortJoin(target)[3]).to.equal('Seles Monica Female 12/2/1973 Black')
    expect(Output1.prototype.itemSortJoin(target)[4]).to.equal('Abercrombie Neil Male 2/13/1943 Tan')
    expect(Output1.prototype.itemSortJoin(target)[5]).to.equal('Bishop Timothy Male 4/23/1967 Yellow')
    expect(Output1.prototype.itemSortJoin(target)[6]).to.equal('Bonk Radek Male 6/3/1975 Green')
    expect(Output1.prototype.itemSortJoin(target)[7]).to.equal('Bouillon Francis Male 6/3/1975 Blue')
    expect(Output1.prototype.itemSortJoin(target)[8]).to.equal('Smith Steve Male 3/3/1985 Red')
  })
  it('Output2组件itemSortJoin()功能正常', function () {
    expect(Output2.prototype.itemSortJoin(target)[0]).to.equal('Abercrombie Neil Male 2/13/1943 Tan')
    expect(Output2.prototype.itemSortJoin(target)[1]).to.equal('Kelly Sue Female 7/12/1959 Pink')
    expect(Output2.prototype.itemSortJoin(target)[2]).to.equal('Bishop Timothy Male 4/23/1967 Yellow')
    expect(Output2.prototype.itemSortJoin(target)[3]).to.equal('Seles Monica Female 12/2/1973 Black')
    expect(Output2.prototype.itemSortJoin(target)[4]).to.equal('Bonk Radek Male 6/3/1975 Green')
    expect(Output2.prototype.itemSortJoin(target)[5]).to.equal('Bouillon Francis Male 6/3/1975 Blue')
    expect(Output2.prototype.itemSortJoin(target)[6]).to.equal('Kournikova Anna Female 6/3/1975 Red')
    expect(Output2.prototype.itemSortJoin(target)[7]).to.equal('Hingis Martina Female 4/2/1979 Green')
    expect(Output2.prototype.itemSortJoin(target)[8]).to.equal('Smith Steve Male 3/3/1985 Red')
  })
  it('Output3组件itemSortJoin()功能正常', function () {
    expect(Output3.prototype.itemSortJoin(target)[0]).to.equal('Smith Steve Male 3/3/1985 Red')
    expect(Output3.prototype.itemSortJoin(target)[1]).to.equal('Seles Monica Female 12/2/1973 Black')
    expect(Output3.prototype.itemSortJoin(target)[2]).to.equal('Kournikova Anna Female 6/3/1975 Red')
    expect(Output3.prototype.itemSortJoin(target)[3]).to.equal('Kelly Sue Female 7/12/1959 Pink')
    expect(Output3.prototype.itemSortJoin(target)[4]).to.equal('Hingis Martina Female 4/2/1979 Green')
    expect(Output3.prototype.itemSortJoin(target)[5]).to.equal('Bouillon Francis Male 6/3/1975 Blue')
    expect(Output3.prototype.itemSortJoin(target)[6]).to.equal('Bonk Radek Male 6/3/1975 Green')
    expect(Output3.prototype.itemSortJoin(target)[7]).to.equal('Bishop Timothy Male 4/23/1967 Yellow')
    expect(Output3.prototype.itemSortJoin(target)[8]).to.equal('Abercrombie Neil Male 2/13/1943 Tan')
  })
})
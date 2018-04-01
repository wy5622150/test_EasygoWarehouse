import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, NavBar, Icon } from 'antd-mobile'
class Output1 extends Component {
    itemSortJoin(content) {
        if (content.length<9){
            return ['Warning: Check Format Plz']
        }
        content.sort((a, b) => {
            if (a[2] == b[2]) {
                return a[0].localeCompare(b[0])
            }
            else {
                return a[2].localeCompare(b[2])
            }
        })
        var output = []
        for (var i =0;i<content.length;i++){
            output[i] = content[i].join(' ')
        }
        return output
    }
    render() {
        const Item = List.Item
        return (
            <List>
                <NavBar
                    mode="dark"
                >Output1</NavBar>
                {this.itemSortJoin(this.props.content).map(v => {
                    return (<Item key={v}>{v}</Item>)
                })}
            </List>
        );
    }
}
Output1.propTypes = {
    content: PropTypes.array.isRequired
}
export default Output1;
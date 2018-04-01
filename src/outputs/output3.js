import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List,NavBar, Icon } from 'antd-mobile'
class Output3 extends Component {
    itemSortJoin(content) {
        if (content.length<9){
            return ['Warning: Check Format Plz']
        }
        content.sort((a, b) => {
            if (a[0].localeCompare(b[0]) == 0) {
                if (a[3].split('/')[2] == b[3].split('/')[2]) {
                    if (a[3].split('/')[1] == b[3].split('/')[1]) {
                        if (a[3].split('/')[0] == b[3].split('/')[0]) {
                            return a[4].localeCompare(b[4])
                        } else {
                            return a[3].split('/')[0] - b[3].split('/')[0]
                        }
                    } else {
                        return a[3].split('/')[1] - b[3].split('/')[1]
                    }
                }
            }
            else {
                return b[0].localeCompare(a[0])
            }
        }
        )
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
                >Output3</NavBar>
                {this.itemSortJoin(this.props.content).map(v => {
                    return (<Item
                        key={v}>{v}</Item>)
                })}
            </List>
        );
    }
}
Output3.propTypes = {
    content: PropTypes.array.isRequired
}
export default Output3;
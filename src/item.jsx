import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <li>{this.props.item}</li>
            </div>
        );
    }
}

export default Item;
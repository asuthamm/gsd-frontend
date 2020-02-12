import React, { Component } from 'react';


class ItemCard extends Component {
render() {
        let {name, description, completed} = this.props.itemData
        return (
            <div>
                <p>Task: {name}</p>
                <p>Details: {description}</p>
                <p>Completed: {completed ? 'yes' : 'no'}</p>
                <br/>
            </div>
        );
    }
}

export default ItemCard;
import React, { Component } from 'react';
import ItemCard from './ItemCard'

class TodoList extends Component {
render() {
        let {todo_date, items} = this.props.todoData
        return (
            <div>
                <h3>Date: {todo_date}</h3>
                {items.map((item) => <ItemCard key={item.id} itemData={item}/> ) }
            </div>
        );
    }
}

export default TodoList;
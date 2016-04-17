import React from 'react';
import Table from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getTodoItems() {
        if ( !this.props.todoItems || this.props.todoItems.length === 0) {
            return '';
        }
        return this.props.todoItems.map((item, i) => {
            const idx = i + 1;
            let todo = '';
            if (item) {
                todo = <TodoItem key={item + '-' + idx} handleDelete={this.props.handleDelete} item={item} itemIndex={idx}/>;
            }
            return todo;
        });
    }
    
    render() {
        return (<Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Done</th>
                        <th>Todo Description</th>
                        <th>Delete TODO</th>
                      </tr>
                    </thead>
                    <tbody>{this.getTodoItems.bind(this)}</tbody>
               </Table>);
        }
}

DisplayItems.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    todoItems: React.PropTypes.array.isRequired,
};

DisplayItems.defaultProps = {
    handleDelete: (itemToDelete) => {console.log("Should be replaced by a function callback to delete the todo from state list.");},
    todoItems: [],
};
import React from 'react';
import { Table } from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let todoItems = this.props.todoItems;
        let todos = '';
        if (todoItems !== undefined && todoItems !== null && todoItems.length !== 0) {
            todos = [];
            todoItems.map((item, i) => {
                if (item !== null && item !== undefined) {
                    todos.push(<TodoItem key={item + '-' + i} handleDelete={this.props.handleDelete} item={item} itemIndex={i}/>);                    
                }
            });
        }
        return (<Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Done</th>
                        <th>Todo Description</th>
                        <th>Delete TODO</th>
                      </tr>
                    </thead>
                    <tbody>{todos}</tbody>
               </Table>);
        }
}

DisplayItems.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    todoItems: React.PropTypes.array.isRequired,
};

DisplayItems.defaultProps = {};
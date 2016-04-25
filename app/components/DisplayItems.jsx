import React from 'react';
import Table from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getTodoItems() {
        const self = this;
        const todos = this.props.todoItems.length !== 0 ? this.props.todoItems.map((item, i) => {
            return (<TodoItem key={item + '-' + i} handleDelete={self.props.handleDelete} item={item} itemIndex={i}/>);
        }) : [];
        return todos;
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
                    <tbody>{this.getTodoItems()}</tbody>
               </Table>);
        }
}

DisplayItems.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    todoItems: React.PropTypes.array.isRequired,
};

DisplayItems.defaultProps = {};
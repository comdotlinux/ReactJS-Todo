import React from 'react';
import Table from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getTodoItems() {
        
        const todos = this.props.todoItems.map((item, i) => {
            const idx = i + 1;
            let todo = '';
            if (item) {
                todo = <TodoItem key={item + '-' + idx} handleDelete={this.props.handleDelete} item={item} itemIndex={idx}/>;
            }
            return todo;
        });
        console.log(todos);
        return (<tbody>{todos}</tbody>);
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
                    {this.getTodoItems.bind(this)}
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
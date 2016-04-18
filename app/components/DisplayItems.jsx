import React from 'react';
import { Button,Table } from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        let _handleDelete = this.props.handleDelete;
        let _todos = this.props.todoItems;
    return (<Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Done</th>
                    <th>Todo Description</th>
                    <th>Delete TODO</th>
                  </tr>
                </thead>
                <tbody>
                {_todos.map((_item, i) => {
                                    return (<TodoItem 
                                               key={_item + '-' + (i + 1)} 
                                               handleDelete={_handleDelete(_item)} 
                                               item={_item} 
                                               itemIndex={i + 1}/>);})
                }
                </tbody>
           </Table>);
    }
}

DisplayItems.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    todoItems: React.PropTypes.array.isRequired
};

DisplayItems.defaultProps = {
    handleDelete: function(itemToDelete){
        console.log("Should be replaced by a function callback to delete the todo from state list.");
    },
    todoItems: []
};
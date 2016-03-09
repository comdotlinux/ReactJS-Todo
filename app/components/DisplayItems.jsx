import React from 'react';
import { Button,Table } from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    
    render(){
        const _handleDelete = this.props.handleDelete;
        const _todos = this.props.todoItems;
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
                                    console.log("inside DisplayItems todos.map item " + _item + " and index is" +  i);
                                    return <TodoItem 
                                               key={_item + '-' + (i + 1)} 
                                               handleDelete={_handleDelete} 
                                               item={_item} 
                                               itemIndex={i + 1}/>
                                }
                           )
                }
                </tbody>
           </Table>);
    }
}
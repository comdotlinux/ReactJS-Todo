import React from 'react';
import { Button,Table } from 'react-bootstrap';
import TodoItem from './TodoItem';

export default class DisplayItems extends React.Component {
    
    render(){
    return <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Done</th>
                    <th>Todo Description</th>
                    <th>Delete TODO</th>
                  </tr>
                </thead>
                <tbody>
                    {this.props.todoItems.map((_item, i) => {return <TodoItem handleDelete={this.props.handleDelete.bind(null,_item)} item={_item} itemIndex={i + 1}/>;})}
                </tbody>
           </Table>;
    }
}
import React from 'react';
import { Table } from 'react-bootstrap';

export default class DisplayItems extends React.Component {
    
    constructor() {
        super();
    }

    render(){
    return <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Done</th>
                    <th>Todo Description</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                        {this.props.todoItems.map((item, i) => {
                            return <tr key={item + '-' + i}>
                                        <td key={item + '-' + i + 'index'}>{i}</td>
                                        <td key={item + '-' + i + 'done'}>done</td>
                                        <td key={item + '-' + i + 'description'}>{item}</td>
                                        <td key={item + '-' + i + 'delete'}><a href='#' onClick={this.props.handleDelete.bind(null,item)}>[X]</a></td>
                                    </tr>;
                                })
                        }
                </tbody>
           </Table>;
    }
}
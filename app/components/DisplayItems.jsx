import React from 'react';
import { Button,Table } from 'react-bootstrap';

export default class DisplayItems extends React.Component {
    
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
                        {this.props.todoItems.map((_item, i) => {
                                return <tr key={_item + '-' + i}>
                                            <td key={_item + '-' + i + 'index'}>{i}</td>
                                            <td key={_item + '-' + i + 'done'}>done</td>
                                            <td key={_item + '-' + i + 'description'}>{_item}</td>
                                            <td key={_item + '-' + i + 'delete'}>
                                                <Button 
                                                    bsStyle="danger"
                                                    href="#"
                                                    onClick={
                                                        this.props.handleDelete.bind(null,_item)
                                                    }>[X]</Button></td>
                                        </tr>;
                        })}
                </tbody>
           </Table>;
    }
}
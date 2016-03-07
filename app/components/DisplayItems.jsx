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
                    <th>Delete TODO</th>
                  </tr>
                </thead>
                <tbody>
                        {this.props.todoItems.map((_item, i) => {
                                return <tr key={_item + '-' + i}>
                                            <td key={_item + '-' + (i + 1) + 'index'}>{i + 1}</td>
                                            <td key={_item + '-' + (i + 1) + 'done'}>done</td>
                                            <td key={_item + '-' + (i + 1) + 'description'}>{_item}</td>
                                            <td key={_item + '-' + (i + 1) + 'delete'}>
                                                <Button 
                                                    bsStyle="warning"
                                                    href="#"
                                                    onClick={
                                                        this.props.handleDelete.bind(null,_item)
                                                    }>Delete?</Button></td>
                                        </tr>;
                        })}
                </tbody>
           </Table>;
    }
}
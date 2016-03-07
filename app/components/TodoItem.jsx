import React from 'react';
import { Button } from 'react-bootstrap';

export default class TodoItems extends React.Component {
    
    render(){
        return <tr key={this.props.item + '-' + this.props.itemIndex}>
                    <td key={this.props.item + '-' + this.props.itemIndex + 'index'}>{this.props.itemIndex}</td>
                    <td key={this.props.item + '-' + this.props.itemIndex + 'done'}>done</td>
                    <td key={this.props.item + '-' + this.props.itemIndex + 'description'}>{this.props.item}</td>
                    <td key={this.props.item + '-' + this.props.itemIndex + 'delete'}>
                        <Button 
                            bsStyle="warning"
                            href="#"
                            bsSize="xs"
                            onClick={this.props.handleDelete.bind(null,this.props.item)}>Delete?</Button></td>
                </tr>
    }
}
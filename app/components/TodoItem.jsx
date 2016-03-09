import React from 'react';
import { Button } from 'react-bootstrap';

export default class TodoItems extends React.Component {

    
    
    render(){
        let _item = this.props.item;
        let _index = this.props.ItemIndex;
        let _handleDelete = this.props.handleDelete;
        console.log("Rendering Todo Item, " + _item);
        return (<tr>
                    <td key={_item + '-' + _index + 'index'}>{_index}</td>
                    <td key={_item + '-' + _index + 'done'}>done</td>
                    <td key={_item + '-' + _index + 'description'}>{_item}</td>
                    <td key={_item + '-' + _index + 'delete'}>
                        <Button 
                            bsStyle="warning"
                            href="#"
                            bsSize="xs"
                            onClick={_handleDelete(_item)}>Delete?</Button>
                    </td>
                </tr>);
    }
}
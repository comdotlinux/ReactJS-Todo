import React from 'react';
import { Button } from 'react-bootstrap';

export default class TodoItem extends React.Component {
    constructor(props){
        super(props)
    } 
    
    render(){
        let _item = this.props.item;
        let _index = this.props.itemIndex;
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
                            onClick={_handleDelete.bind(null,_item)}>Delete?</Button>
                    </td>
                </tr>);
    }
}


TodoItem.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    item: React.PropTypes.string.isRequired,
    itemIndex: React.PropTypes.number.isRequired
};

TodoItem.defaultProps = {
    handleDelete: function(itemToDelete){
        console.log("Should be replaced by a function callback to delete the todo from state list.");
    },
    item: '',
    itemIndex: 0
};
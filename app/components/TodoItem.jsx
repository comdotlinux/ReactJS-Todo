import React from 'react';
import { Input, Button } from 'react-bootstrap';
import * as log from 'loglevel';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        log.setLevel('debug');        
        this.state = {
            taskDone: false
        }
        log.info(log);
        
    } 
    
    handleOnClick() {
        let _taskDone = !this.state.taskDone;
        log.info("setting task status to done? ", _taskDone);
        this.setState({
            taskDone: _taskDone
        });
    }
    
    render() {
        let _item = this.props.item;
        let _index = this.props.itemIndex;
        let _handleDelete = this.props.handleDelete;
        //console.log("Rendering Todo Item, " + _item);
        return (<tr key={_item + '-' + _index + 'index'} className={this.state.taskDone ? 'task-done' : ''}>
                    <td>{_index}</td>
                    <td>
                        <Input type="checkbox" label="Mark as Done" bsStyle="success" value={this.state.taskDone} onClick={this.handleOnClick.bind(this)}></Input>
                    </td>
                    <td>{_item}</td>
                    <td>
                        <Button 
                            bsStyle="warning"
                            href="#"
                            bsSize="xs"
                            onClick={_handleDelete(_item)}>Delete?</Button>
                    </td>
                </tr>);
    }
}


TodoItem.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    item: React.PropTypes.string.isRequired,
    itemIndex: React.PropTypes.number.isRequired,
};

TodoItem.defaultProps = {
    handleDelete: (itemToDelete) => {log.info("Should be replaced by a function callback to delete the todo from state list.");},
    item: '',
    itemIndex: 0
};
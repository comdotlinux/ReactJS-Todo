import React from 'react';
import { Input, Button } from 'react-bootstrap';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDone: false,
        };
    }
    
    handleOnClick() {
        this.setState({
            taskDone: !this.state.taskDone,
        });
    }
    
    handleItemDelete(item) {
        if(item) {
            this.props.handleDelete(item);            
        } else {
            console.log('TodoItem :: Did not call handle Delete, item was :: ', item);
        }
        
    }
    
    render() {
        let _item = this.props.item;
        let _index = this.props.itemIndex;
        return (<tr key={_item + '-' + _index} className={this.state.taskDone ? 'task-done' : ''}>
                    <td>{_index}</td>
                    <td>
                        <Input type="checkbox" label="Mark as Done" bsStyle="success" value={this.state.taskDone} onClick={this.handleOnClick.bind(this)}/>
                    </td>
                    <td>{_item}</td>
                    <td>
                        <Button 
                            bsStyle="warning"
                            bsSize="xs"
                            disabled={!this.state.taskDone}
                            onClick={this.handleItemDelete.bind(this, _item)}>Delete?</Button>
                    </td>
                </tr>);
    }
}


TodoItem.propTypes = {
    handleDelete: React.PropTypes.func.isRequired,
    item: React.PropTypes.string.isRequired,
    itemIndex: React.PropTypes.number.isRequired,
};

TodoItem.defaultProps = {};
import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

export default class App extends React.Component {
    
    constructor() {
        super();

        this.state = {
          todoItem: '',
          todoItems: [],
          textInputClass: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let updatedTodoItems = this.state.todoItems.concat(this.state.todoItem);
        this.setState({
            todoItem: '',
            todoItems: updatedTodoItems
        });
    }
    
    validationState() {
        
        
        let length = this.state.todoItem.length;
        console.log("input length " + length);
        if (length > 20) return 'success';
        else if (length > 10) return 'warning';
        else if (length > 0) return 'error';
        
        
    }
    
    handleChange() {
    let todoItemValue = this.refs.input.getValue();
    let todoItemValueLower = todoItemValue.toLowerCase();
    let cssClassToSet = '';
        
        if(todoItemValueLower === 'red'){
            cssClassToSet = 'inputred';
        } else if(todoItemValueLower === 'green'){
            cssClassToSet = 'inputgreen';
        } else if(todoItemValueLower === 'yellow'){
            cssClassToSet = 'inputyellow';
        }
        
        console.log("css class set ", cssClassToSet);
    
        this.setState({
          todoItem: todoItemValue,
          textInputClass: cssClassToSet
        });
    }
    
  render () {
    return (
                <div>
                    <p>TODO APPLICATION</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Input type="text"
                                id="todoInput"
                                value={this.state.todoItem}
                                className={this.state.textInputClass}
                                placeholder="Please enter a good descriptive todo...."
                                bsStyle={this.validationState()}
                                hasFeedback
                                ref="input"
                                onChange={this.handleChange.bind(this)}></Input>
                                <ButtonInput type="submit" bsStyle="primary">Add TODO</ButtonInput>
                        </form>
                        <div className="alert,alertInfo" role="alert">{this.state.todoItems.toString()}</div>
                </div>
            );
  }
}

import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

export default class App extends React.Component {
    
    constructor() {
        super();

        this.state = {
          todoItem: '',
          todoItems: []
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
        let todoItemValue = this.state.todoItem.toLowerCase();
        let cssClassToSet = null;
        
        if(todoItemValue === 'red'){
            cssClassToSet = 'inputred';
        } else if(todoItemValue === 'green'){
            cssClassToSet = 'inputgreen';
        } else if(todoItemValue === 'yellow'){
            cssClassToSet = 'inputyellow';
        } else {
            cssClassToSet = '';
        }
        
        console.log("css class set", cssClassToSet);
        
       /* let length = todoItemValue.length;
        console.log("input length " + length);
        if (length > 20) cssClassToSet += ' success';
        else if (length > 10) cssClassToSet += ' warning';
        else if (length > 0) cssClassToSet += ' error';*/
        
        
    }
    
    handleChange() {
        this.setState({
          todoItem: this.refs.input.getValue()
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
                                placeholder="Please enter a good descriptive todo...."
                                bsStyle={this.validationState()}
                                hasFeedback
                                ref="input"
                                onChange={this.handleChange.bind(this)}></Input>
                                <ButtonInput type="submit" bsStyle="primary">Add TODO</ButtonInput>
                        </form>
                    <div class="alert alert-info" role="alert">{this.state.todoItems.toString()}</div>
                </div>
            );
  }
}

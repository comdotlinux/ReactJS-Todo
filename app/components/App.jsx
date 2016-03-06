import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import DisplayItems from './DisplayItems'

export default class App extends React.Component {
    
    constructor() {
        super();

        this.state = {
          todoItem: '',
          todoItems: [],
          textInputClass: ''
        }
    }


    handleDelete(todoItemToRemove){
        console.log(todoItemToRemove);
    }

    handleSubmit(event) {
        event.preventDefault();
        let updatedTodoItems = null;
        if(this.state.todoItems.find(function(item){
            item === this.state.todoItem;
        })){
            updatedTodoItems = this.state.todoItems.concat(this.state.todoItem);
        }
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
    let cssClassToSet = '';
    if(todoItemValue !== null){
        let todoItemValueLower = todoItemValue.toLowerCase();
        
        if(todoItemValueLower.contains('red')){
            cssClassToSet = 'inputred';
        } else if(todoItemValueLower.contains('green')){
            cssClassToSet = 'inputgreen';
        } else if(todoItemValueLower.contains('yellow')){
            cssClassToSet = 'inputyellow';
        }
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
                        <DisplayItems handleDelete={this.handleDelete} todoItems={this.state.todoItems}/>
                </div>
            );
  }
}

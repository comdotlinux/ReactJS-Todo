import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import DisplayItems from './DisplayItems';
import _ from 'underscore';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          todoItem: '',
          todoItems: [],
          textInputClass: ''
        };
    }


    handleDelete(todoItemToRemove){
        //console.log("Item to remove : ", todoItemToRemove);
        
        let _newTodos = this.state.todoItems.filter((_item) => {
            console.log("item to compare : ",_item);
            return todoItemToRemove !== _item;
        });
        
        //console.log("current todo list ", this.state.todoItems.toString());
        //console.log("new todo list ", _newTodos.toString());
        
        this.setState({
           todoItems: _newTodos 
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let _todoItem = this.state.todoItem;
        if(_todoItem !== null && _todoItem !== '' && !_.contains(this.state.todoItems,_todoItem)){
            let updatedTodoItems = this.state.todoItems.concat(_todoItem);
            this.setState({
                todoItems: updatedTodoItems
            });
        } else {
            console.log("Skipping adding a empty todo...");
        }
        
        this.setState({
                todoItem: ''
            });
    }
    
    validationState() {
        
        let length = this.state.todoItem.length;
        //console.log("input length for textfield validation is : ", length);
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
        //console.log("css class set as ", cssClassToSet);
    
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
                        <DisplayItems handleDelete={this.handleDelete.bind(this)} todoItems={this.state.todoItems}/>
                </div>
            );
  }
}

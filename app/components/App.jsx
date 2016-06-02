import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import DisplayItems from './DisplayItems';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          todoItem: '',
          todoItems: ['eggs', 'bread', 'banana', 'ice', 'Beer', 'Rum', 'Vodka'],
          textInputClass: ''
        };
    }


    handleDelete(todoItemToRemove){
        let _newTodos = this.state.todoItems.filter((_item) => {
            // console.log("item to compare : ",_item);
            return todoItemToRemove !== _item;
        });

        this.setState({
           todoItems: _newTodos
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let _todoItem = this.state.todoItem;
        if(_todoItem !== null && _todoItem !== '' && this.state.todoItems.indexOf(_todoItem) === -1) {
            let _todoItems = this.state.todoItems;
            _todoItems.push(_todoItem);
            this.setState({
                todoItems: _todoItems,
            });
        } else {
            console.log("Skipping adding a empty todo...");
        }
        this.setState({ todoItem: ''});
    }

    handleChange() {
        let todoItemValue = this.refs.input.getValue();
        let cssClassToSet = '';
        if (todoItemValue !== null && todoItemValue.length > 0) {
            // console.log('todoItemValue : ' + todoItemValue);
            const todoItemValueLower = todoItemValue.toLowerCase();

            if (todoItemValueLower.indexOf('red') > -1) {
                cssClassToSet = 'inputred';
            } else if (todoItemValueLower.indexOf('green') > -1) {
                cssClassToSet = 'inputgreen';
            } else if (todoItemValueLower.indexOf('yellow') > -1) {
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
                                bsStyle={this.state.todoItem.length > 10 ? 'success' : this.state.todoItem.length > 5 ? 'warning' : 'error'}
                                hasFeedback={this.state.todoItem.length > 0}
                                ref="input"
                                onChange={this.handleChange.bind(this)}></Input>
                                <ButtonInput type="submit" bsStyle="primary">Add TODO</ButtonInput>
                        </form>
                        <DisplayItems handleDelete={this.handleDelete.bind(this)} todoItems={this.state.todoItems}/>
                </div>
            );
  }
}

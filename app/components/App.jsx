import React from 'react';
import { Input, Button } from 'react-bootstrap';

export default class App extends React.Component {
    
    constructor() {
    super();

    this.state = {
      value: ''
    }
  }

    handleSubmit(event) {
        event.preventDefault();
        console.log("prevented default submit.")
    }
    
    validationState() {
        let length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }
    
    handleChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
          value: this.refs.input.getValue()
        });
    }
    
  render () {
    return (<div>
                <p>TODO APPLICATION</p>
                        <div>
                           <Input type="text"  
                                    value={this.state.value} 
                                    placeholder="todo goes here"
                                    label="Enter A TODO"
                                    help="Please enter a good descriptive todo."
                                    bsStyle={this.validationState()}
                                    hasFeedback
                                    ref="input"
                                    groupClassName="group-class"
                                    labelClassName="label-class"
                                    onChange={this.handleChange} />
                            <Button bsStyle="primary">Add TODO</Button>
                        </div>
            </div>);
  }
}

import React from 'react';

export default class App extends React.Component {
    
    constructor(){
        super();
        {value: ''};
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
        this.setState({
          value: this.refs.input.getValue()
        });
    }
    
  render () {
    return (<div>
                <p>TODO APPLICATION</p>
                <div>
                    <form onSubmit="{this.handleSubmit}">
                        <div>
                           <Input type="text"  
                                    value={this.state.value} 
                                    placeholder="Enter text"
                                    label="Working example with validation"
                                    help="Validation is based on string length."
                                    bsStyle={this.validationState()}
                                    hasFeedback
                                    ref="input"
                                    groupClassName="group-class"
                                    labelClassName="label-class"
                                    onChange={this.handleChange} />
                            <button>Add TODO</button>
                        </div>
                    </form>    
                </div>
            </div>);
  }
}

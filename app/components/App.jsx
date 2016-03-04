import React from 'react';

export default class App extends React.Component {
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("prevented default submit.")
    }
    
  render () {
    return (<div>
                <p>TODO APPLICATION</p>
                <div>
                    <form onSubmit="{this.handleSubmit}">
                        <div>
                            <span>Add TODO : </span>
                            <input type="text" placeholder="Enter a TODO"></input>
                            <button>Add TODO</button>
                        </div>
                    </form>    
                </div>
            </div>);
  }
}

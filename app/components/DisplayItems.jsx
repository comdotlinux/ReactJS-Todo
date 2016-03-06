import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

export default class DisplayItems extends React.Component {
    
    constructor() {
        super();
    }

    render(){
    return <div>
        <ul>
        {this.props.todoItems.map((item, i) => {
        return <li key={item}>{item} <a href='#' onClick={this.handleDelete}>[X]</a></li>;
            })
        }
        </ul>
    </div>;
    
    }
}
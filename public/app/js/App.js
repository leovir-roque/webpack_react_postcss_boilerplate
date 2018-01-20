import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Acts from './components/Acts.js';

class App extends Component{
    render() {
        return (
            <Acts />
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));

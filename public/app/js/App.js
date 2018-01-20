import React from 'react';
import ReactDom from 'react-dom';
import SamplePage from './containers/SamplePage.js';

class App extends React.Component {
    render() {
        return (
            <SamplePage />
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));

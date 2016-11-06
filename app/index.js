import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from './containers/Layout';

class App extends Component {
    render() {
        return (
            <div>
                <Layout />
            </div>
        );
    }
}

require('./containers/index.scss');

ReactDOM.render(<App />, document.getElementById('root'));
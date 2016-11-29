import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '~/reducers';

import { CodeEditor } from '../../components';

const store = createStore(reducers);

export default class AppContainer extends Component {

  render() {

    return (
      <Provider store={store}>
        <CodeEditor />
      </Provider>
    );
  }
}

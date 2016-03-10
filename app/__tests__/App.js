jest.unmock('../components/App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import App from '../components/App';

describe('App With Input', () => {
    it(' as as as as', () => {
    // Render a checkbox with label in the document
    const APPLICATION = TestUtils.renderIntoDocument(<App/>);
    const appNode = ReactDOM.findDOMNode(APPLICATION);

    console.log(appNode);
    // Verify that it's Off by default
    expect(appNode.Element).toEqual('Off');

    // ...
  });
});
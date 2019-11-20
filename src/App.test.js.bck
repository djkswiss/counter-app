import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';
import { exportAllDeclaration } from '@babel/types';

let container = null;
beforeEach(() => {
  //setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container)
});

afterEach(() => {
  //cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  ReactTestUtils.act(() => {
    ReactDOM.render(<App />, container);
  });
  expect(container.querySelector("span").textContent).toBe("0");
});

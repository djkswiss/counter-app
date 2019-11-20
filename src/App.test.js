import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import { exportAllDeclaration, tsExternalModuleReference } from '@babel/types';

test('loads and increments row counter', async () => {
  
  const {getByTestId } = render(<App />)

  fireEvent.click(getByTestId('incrementButton1'))

  const counterRow = await waitForElement(() => getByTestId('counterRow1'))  
  expect(getByTestId('spanRow1')).toHaveTextContent('1')
});

test('loads and increments navbar counter', async () => {
  
  const {getByTestId, getByText } = render(<App />)

  fireEvent.click(getByTestId('incrementButton1'))
  fireEvent.click(getByTestId('incrementButton2'))

  const counterRow = await waitForElement(() => getByTestId('counterRow1'))  
  expect(getByText('Navbar')).toHaveTextContent('2')
});

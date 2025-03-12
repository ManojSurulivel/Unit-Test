// AsyncComponent.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AsyncComponent from './AsyncComponent';

test('AsyncComponent fetches and displays data', async () => {
  // Mock the fetch API
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello, World!' }),
    })
  );

  const { getByText } = render(<AsyncComponent />);

  // Check if loading is displayed
  expect(getByText(/loading/i)).toBeInTheDocument();

  // Wait for the data to be fetched and displayed
  await waitFor(() => expect(getByText('Hello, World!')).toBeInTheDocument());
});
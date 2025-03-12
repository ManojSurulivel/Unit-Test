// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders correctly and responds to click event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);

  // Check if the button is rendered with the correct text
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(buttonElement);

  // Check if the onClick handler was called
  expect(handleClick).toHaveBeenCalledTimes(1);
});
// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('Button renders correctly and has the expected properties', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick} className="primary" disabled>
      Click Me
    </Button>
  );

  const buttonElement = getByText(/click me/i);

  // Check if the button is in the document
  expect(buttonElement).toBeInTheDocument();

  // Check if the button has the correct text content
  expect(buttonElement).toHaveTextContent('Click Me');

  // Check if the button has the correct class
  expect(buttonElement).toHaveClass('primary');

  // Check if the button is disabled
  expect(buttonElement).toBeDisabled();

  // Simulate a click event (should not trigger because the button is disabled)
  fireEvent.click(buttonElement);
  expect(handleClick).not.toHaveBeenCalled();
});
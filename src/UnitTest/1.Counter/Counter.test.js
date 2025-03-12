import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders Counter component", () => {
  render(<Counter />);
  expect(screen.getByText(/Counter App/i)).toBeInTheDocument();
});

test("increments count when Increment button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  const incrementButton = screen.getByTestId("increment-btn");

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("Count: 1");
});

test("decrements count when Decrement button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  const decrementButton = screen.getByTestId("decrement-btn");

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("Count: -1");
});

test("resets count when Reset button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  const incrementButton = screen.getByTestId("increment-btn");
  const resetButton = screen.getByTestId("reset-btn");

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(countElement).toHaveTextContent("Count: 0");
});

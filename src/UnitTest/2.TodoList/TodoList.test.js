import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

//AddTodo
test('allows users to add a new todo', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodo addTodo={addTodo} />);

  // Simulate user typing in the input
  const input = getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'Buy milk' } });

  // Simulate form submission
  fireEvent.submit(getByText('Add'));

  // Check if the addTodo function was called with the correct value
  expect(addTodo).toHaveBeenCalledWith('Buy milk');
});


//TodoItem
test('toggles and deletes a todo', () => {
    const todo = { id: 1, text: 'Buy milk', completed: false };
    const toggleTodo = jest.fn();
    const deleteTodo = jest.fn();
  
    const { getByText } = render(
      <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    );
  
    // Simulate clicking the todo text to toggle completion
    fireEvent.click(getByText('Buy milk'));
    expect(toggleTodo).toHaveBeenCalledWith(1);
  
    // Simulate clicking the delete button
    fireEvent.click(getByText('Delete'));
    expect(deleteTodo).toHaveBeenCalledWith(1);
  });

  //TodoList
  test('adds, toggles, and deletes todos', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);
  
    // Add a new todo
    const input = getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.submit(getByText('Add'));
  
    // Check if the todo is added
    expect(getByText('Buy milk')).toBeInTheDocument();
  
    // Toggle the todo
    fireEvent.click(getByText('Buy milk'));
    expect(getByText('Buy milk')).toHaveStyle('text-decoration: line-through');
  
    // Delete the todo
    fireEvent.click(getByText('Delete'));
    expect(queryByText('Buy milk')).not.toBeInTheDocument();
  });
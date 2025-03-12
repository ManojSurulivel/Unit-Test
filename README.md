In unit testing, **matchers** are used to assert whether a value meets certain conditions. Jest, the popular testing framework for JavaScript, provides a wide range of built-in matchers. Additionally, `@testing-library/jest-dom` extends Jest with custom matchers specifically for DOM testing.

Below is a comprehensive list of **matchers** with explanations and examples:

---

### **1. Jest Matchers (General Purpose)**

#### **Equality Matchers**
- **`.toBe()`**: Checks strict equality (using `===`).
  ```js
  expect(2 + 2).toBe(4);
  ```

- **`.toEqual()`**: Checks deep equality (for objects and arrays).
  ```js
  expect({ a: 1 }).toEqual({ a: 1 });
  ```

- **`.not.toBe()`**: Negates the matcher.
  ```js
  expect(2 + 2).not.toBe(5);
  ```

#### **Truthiness Matchers**
- **`.toBeTruthy()`**: Checks if a value is truthy.
  ```js
  expect(true).toBeTruthy();
  ```

- **`.toBeFalsy()`**: Checks if a value is falsy.
  ```js
  expect(null).toBeFalsy();
  ```

- **`.toBeNull()`**: Checks if a value is `null`.
  ```js
  expect(null).toBeNull();
  ```

- **`.toBeUndefined()`**: Checks if a value is `undefined`.
  ```js
  expect(undefined).toBeUndefined();
  ```

- **`.toBeDefined()`**: Checks if a value is defined (not `undefined`).
  ```js
  expect(42).toBeDefined();
  ```

#### **Numeric Matchers**
- **`.toBeGreaterThan()`**: Checks if a value is greater than another.
  ```js
  expect(10).toBeGreaterThan(5);
  ```

- **`.toBeGreaterThanOrEqual()`**: Checks if a value is greater than or equal to another.
  ```js
  expect(10).toBeGreaterThanOrEqual(10);
  ```

- **`.toBeLessThan()`**: Checks if a value is less than another.
  ```js
  expect(5).toBeLessThan(10);
  ```

- **`.toBeLessThanOrEqual()`**: Checks if a value is less than or equal to another.
  ```js
  expect(5).toBeLessThanOrEqual(5);
  ```

- **`.toBeCloseTo()`**: Checks if a floating-point number is close to another (to avoid precision issues).
  ```js
  expect(0.1 + 0.2).toBeCloseTo(0.3);
  ```

#### **String Matchers**
- **`.toMatch()`**: Checks if a string matches a regular expression or substring.
  ```js
  expect('Hello World').toMatch(/Hello/);
  ```

- **`.toContain()`**: Checks if an array or string contains a specific value.
  ```js
  expect('Hello World').toContain('World');
  ```

#### **Array Matchers**
- **`.toContain()`**: Checks if an array contains a specific value.
  ```js
  expect([1, 2, 3]).toContain(2);
  ```

- **`.toHaveLength()`**: Checks if an array or string has a specific length.
  ```js
  expect([1, 2, 3]).toHaveLength(3);
  ```

#### **Object Matchers**
- **`.toHaveProperty()`**: Checks if an object has a specific property (optionally with a value).
  ```js
  expect({ a: 1 }).toHaveProperty('a');
  expect({ a: 1 }).toHaveProperty('a', 1);
  ```

- **`.toBeInstanceOf()`**: Checks if an object is an instance of a class.
  ```js
  expect(new Error()).toBeInstanceOf(Error);
  ```

#### **Function Matchers**
- **`.toHaveBeenCalled()`**: Checks if a mock function was called.
  ```js
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
  ```

- **`.toHaveBeenCalledTimes()`**: Checks how many times a mock function was called.
  ```js
  const mockFn = jest.fn();
  mockFn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
  ```

- **`.toHaveBeenCalledWith()`**: Checks if a mock function was called with specific arguments.
  ```js
  const mockFn = jest.fn();
  mockFn(1, 2);
  expect(mockFn).toHaveBeenCalledWith(1, 2);
  ```

- **`.toHaveReturnedWith()`**: Checks if a mock function returned a specific value.
  ```js
  const mockFn = jest.fn(() => 42);
  mockFn();
  expect(mockFn).toHaveReturnedWith(42);
  ```

---

### **2. `@testing-library/jest-dom` Matchers (DOM Testing)**

These matchers are specifically for testing DOM elements.

#### **Presence Matchers**
- **`.toBeInTheDocument()`**: Checks if an element is in the DOM.
  ```js
  const { getByText } = render(<div>Hello</div>);
  expect(getByText('Hello')).toBeInTheDocument();
  ```

- **`.toBeVisible()`**: Checks if an element is visible (not hidden by CSS).
  ```js
  const { getByText } = render(<div style={{ display: 'block' }}>Hello</div>);
  expect(getByText('Hello')).toBeVisible();
  ```

#### **Attribute Matchers**
- **`.toHaveAttribute()`**: Checks if an element has a specific attribute (optionally with a value).
  ```js
  const { getByRole } = render(<button disabled>Click Me</button>);
  expect(getByRole('button')).toHaveAttribute('disabled');
  ```

- **`.toHaveClass()`**: Checks if an element has a specific class.
  ```js
  const { getByText } = render(<div className="primary">Hello</div>);
  expect(getByText('Hello')).toHaveClass('primary');
  ```

- **`.toHaveValue()`**: Checks if an input, textarea, or select element has a specific value.
  ```js
  const { getByRole } = render(<input value="Hello" />);
  expect(getByRole('textbox')).toHaveValue('Hello');
  ```

#### **State Matchers**
- **`.toBeChecked()`**: Checks if a checkbox or radio button is checked.
  ```js
  const { getByRole } = render(<input type="checkbox" checked />);
  expect(getByRole('checkbox')).toBeChecked();
  ```

- **`.toBeDisabled()`**: Checks if an element is disabled.
  ```js
  const { getByRole } = render(<button disabled>Click Me</button>);
  expect(getByRole('button')).toBeDisabled();
  ```

- **`.toBeEnabled()`**: Checks if an element is enabled.
  ```js
  const { getByRole } = render(<button>Click Me</button>);
  expect(getByRole('button')).toBeEnabled();
  ```

#### **Text Matchers**
- **`.toHaveTextContent()`**: Checks if an element has specific text content.
  ```js
  const { getByText } = render(<div>Hello World</div>);
  expect(getByText('Hello World')).toHaveTextContent('Hello World');
  ```

- **`.toContainElement()`**: Checks if an element contains another element.
  ```js
  const { getByText } = render(<div><span>Hello</span></div>);
  expect(getByText('Hello')).toContainElement(getByText('Hello'));
  ```

#### **Form Matchers**
- **`.toBeRequired()`**: Checks if a form element is required.
  ```js
  const { getByRole } = render(<input required />);
  expect(getByRole('textbox')).toBeRequired();
  ```

- **`.toBeValid()`**: Checks if a form element is valid.
  ```js
  const { getByRole } = render(<input value="valid" />);
  expect(getByRole('textbox')).toBeValid();
  ```

- **`.toBeInvalid()`**: Checks if a form element is invalid.
  ```js
  const { getByRole } = render(<input value="" required />);
  expect(getByRole('textbox')).toBeInvalid();
  ```

---

### **3. Custom Matchers**

You can also create custom matchers using `expect.extend()`.

Example:
```js
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    return {
      message: () => `expected ${received} to be within range ${floor}-${ceiling}`,
      pass,
    };
  },
});

test('number is within range', () => {
  expect(10).toBeWithinRange(5, 15);
});
```

---

### **Conclusion**

These matchers provide a powerful way to write expressive and reliable unit tests in JavaScript and React. By combining Jest's built-in matchers with `@testing-library/jest-dom`'s DOM-specific matchers, you can thoroughly test both logic and UI components.



### Key Takeaways

* Test Behavior, Not Implementation:

* Focus on what the component does, not how it does it.

For example, test if a todo is added, not how the state is updated.

* Use fireEvent for User Interactions:

Simulate user actions like typing, clicking, and submitting forms.

## Mock Functions:

Use jest.fn() to mock functions passed as props (e.g., addTodo, toggleTodo).

* Test Edge Cases:

Test empty input, toggling completed todos, and deleting todos.

* Use Descriptive Test Names:

Clearly describe what the test is checking (e.g., "allows users to add a new todo").


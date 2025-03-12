//here all Lessons ⬇️
//unit test cases ⬇️


//basic unit test for a React component

test('renders a button', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  //snapshot test
  test('matches snapshot', () => {
    const { asFragment } = render(<Button>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  //test component props
  test('renders with correct props', () => {
    const { getByText } = render(<Button disabled>Submit</Button>);
    expect(getByText('Submit')).toBeDisabled();
  });


  //How do you test user interactions (e.g., button clicks)?
  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  //How do you test components that use React hooks (e.g., useState, useEffect)?
  test('updates state on button click', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText('Increment'));
    expect(getByText('1')).toBeInTheDocument();
  });

  //How do you test asynchronous code (e.g., data fetching)?

  test('displays data after fetching', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ data: 'Hello' }) })
    );
    const { findByText } = render(<AsyncComponent />);
    expect(await findByText('Hello')).toBeInTheDocument();
  });

  //How do you mock a function in Jest?

  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();

  //How do you mock an API call in Jest?
  global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ data: 'Mocked Data' }) })
);

//How do you test React Router components?
test('renders homepage at /', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(getByText('Homepage')).toBeInTheDocument();
  });

  //How do you test Redux-connected components?
  const renderWithRedux = (component, { store = createStore(rootReducer) } = {}) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    };
  };
  
  test('renders with Redux', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Redux Data')).toBeInTheDocument();
  });

  //How do you test context providers and consumers?
  test('renders with context', () => {
    const { getByText } = render(
      <MyContext.Provider value={{ value: 'Hello' }}>
        <MyComponent />
      </MyContext.Provider>
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });

  //How do you test error boundaries in React?
  test('catches errors with error boundary', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
    expect(getByText('Something went wrong.')).toBeInTheDocument();
  });

  //How do you test components that use third-party libraries (e.g., react-modal)?
  jest.mock('react-modal', () => ({
    setAppElement: jest.fn(),
  }));

  //How do you test components that use useRef?
  test('focuses input on button click', () => {
    const { getByText, getByRole } = render(<FocusInput />);
    fireEvent.click(getByText('Focus Input'));
    expect(getByRole('textbox')).toHaveFocus();
  });

  //How do you test components that use portals?
  test('renders portal content', () => {
    const { getByText } = render(<PortalComponent />);
    expect(getByText('Portal Content')).toBeInTheDocument();
  });

  //How do you test accessibility (a11y) in React components?
  import { axe } from 'jest-axe';

  test('is accessible', async () => {
    const { container } = render(<MyComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });






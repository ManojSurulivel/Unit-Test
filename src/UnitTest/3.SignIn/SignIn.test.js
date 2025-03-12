
import {render,screen}  from '@testing-library/react';
import SignIn from './SignIn';

test('checking component loaded',() =>{
    // steps for testing heading element loaded
    render(<SignIn/>);
    expect(screen.queryByText(/SignIn Form/)).toBeInTheDocument();
})

 test('checking email & password inputs are empty', () => {
    render(<SignIn/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
});

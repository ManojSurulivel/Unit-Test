import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setError, setFormValid } from '../redux/formSlice';
import FormInput from './FormInput';

function Register() {
  const dispatch = useDispatch();
  const { firstName, lastName, email, password, confirmPassword, dob, errors, formValid } = useSelector((state) => state);
  
  // Validation function
  const validate = () => {
    let valid = true;
    
    if (!firstName) {
      dispatch(setError({ field: 'firstName', error: 'First Name is required' }));
      valid = false;
    }
    if (!lastName) {
      dispatch(setError({ field: 'lastName', error: 'Last Name is required' }));
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      dispatch(setError({ field: 'email', error: 'Invalid email format' }));
      valid = false;
    }
    if (password.length < 8) {
      dispatch(setError({ field: 'password', error: 'Password must be at least 8 characters' }));
      valid = false;
    }
    if (password !== confirmPassword) {
      dispatch(setError({ field: 'confirmPassword', error: 'Passwords must match' }));
      valid = false;
    }
    if (!dob || new Date(dob) > new Date()) {
      dispatch(setError({ field: 'dob', error: 'Invalid Date of Birth' }));
      valid = false;
    } else {
      const age = new Date().getFullYear() - new Date(dob).getFullYear();
      if (age < 18) {
        dispatch(setError({ field: 'dob', error: 'Must be 18 years or older' }));
        valid = false;
      }
    }

    dispatch(setFormValid(valid));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (formValid) {
      // Submit data to backend or store it
      console.log('Form submitted:', { firstName, lastName, email, password, dob });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput label="First Name" name="firstName" value={firstName} error={errors.firstName} />
        <FormInput label="Last Name" name="lastName" value={lastName} error={errors.lastName} />
        <FormInput label="Email" name="email" value={email} error={errors.email} />
        <FormInput label="Password" name="password" type="password" value={password} error={errors.password} />
        <FormInput label="Confirm Password" name="confirmPassword" type="password" value={confirmPassword} error={errors.confirmPassword} />
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={dob} onChange={(e) => dispatch(setField({ field: 'dob', value: e.target.value }))} className="form-control" />
          {errors.dob && <small className="text-danger">{errors.dob}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;

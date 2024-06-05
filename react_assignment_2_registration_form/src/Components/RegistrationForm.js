import React, { useState } from 'react';


const RegistrationForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.username) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>Welcome {values.firstName} {values.lastName}</h3>
            <div>Your registration was successful!</div>
          </div>
        )}

        {!valid && (
          <>
            <div className='input-group'>
              <label>First Name</label>
              <input
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
              />
              {submitted && !values.firstName && (
                <span className="error-space" id="first-name-error">Please enter a first name</span>
              )}
            </div>

            <div className='input-group'>
              <label>Last Name</label>
              <input
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
              />
              {submitted && !values.lastName && (
                <span className="error-space" id="last-name-error">Please enter a last name</span>
              )}
            </div>

            <div className='input-group'>
              <label>Username</label>
              <input
                className="form-field"
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleInputChange}
              />
              {submitted && !values.username && (
                <span className="error-space" id="username-error">Please enter a username</span>
              )}
            </div>

            <div className='input-group'>
              <label>Email</label>
              <input
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {submitted && !values.email && (
                <span className="error-space" id="email-error">Please enter an email address</span>
              )}
            </div>

            <button className="form-field submit-button" type="submit">
              Register
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;

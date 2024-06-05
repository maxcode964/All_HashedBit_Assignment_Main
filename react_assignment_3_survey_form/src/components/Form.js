import React, { useState } from 'react';

function SurveyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [improvement, setImprovement] = useState('');
  const [favoriteFeature, setFavoriteFeature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other actions
    console.log({ firstName, lastName, age, country, postalCode, improvement, favoriteFeature });
    // Resetting the form after submission
    resetForm();
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setCountry('');
    setPostalCode('');
    setImprovement('');
    setFavoriteFeature('');
  };

  return (
    <div>
      <h2>Survey Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="improvement">What would you like to see improved?</label>
          <textarea
            id="improvement"
            value={improvement}
            onChange={(e) => setImprovement(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="favoriteFeature">What is your favorite feature of our company?</label>
          <textarea
            id="favoriteFeature"
            value={favoriteFeature}
            onChange={(e) => setFavoriteFeature(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Restart</button>
      </form>
    </div>
  );
}

export default SurveyForm;

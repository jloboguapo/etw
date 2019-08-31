import React, { useState } from 'react';
import ButtonUp from './Button';

const Subscribe = props => {
  const [value, setValue] = useState('');
  const { button, placeholderText, privacyLink } = props;

  const handleSubmit = async e => {
    if (e) {
      e.preventDefault();

      const postSubmission = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/3379879/4abd9ecd-a9b3-468f-8ab6-6fa9bb85d9d7',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fields: [{ name: 'email', value: value }] })
        }
      )
        .then(response => response.json())
        .then(response => {
          if (response.errors && response.errors[0].message.includes('email')) {
            return alert('Please enter a valid email address');
          }
          return alert('Thank you for your submission!');
        });
    }
  };

  return (
    <form
      className="subscribe-container form-inline justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        className="subscribe-input form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholderText}
      />
      <ButtonUp
        type="submit"
        variant="primary"
        className="ml-0 ml-lg-3"
        content={button}
      />
      <p className="small">
        By subscribing, you agree to our{' '}
        <a href={privacyLink}>privacy policy</a>.
      </p>
    </form>
  );
};

export default Subscribe;

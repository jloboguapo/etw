import React, { useEffect, useState } from 'react';
import ButtonUp from './Button';

const ReadyWinForm = props => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async e => {
    if (e) {
      e.preventDefault();

      const postSubmission = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/3379879/b0d8b9d2-bb28-44a5-9a25-f3262fa1fba4',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },

          context: {
            hutk: self.__hsUserToken
          },
          body: JSON.stringify({
            fields: [
              { name: 'name', value: inputs.name },
              { name: 'organization', value: inputs.organization },
              { name: 'email', value: inputs.email }
            ]
          })
        }
      )
        .then(response => response.json())
        .then(response => {
          if (response.errors && response.errors[0].message.includes('email')) {
            // document.getElementById('form-multiple-fields').reset();
            return alert('Please enter a valid email address');
          } else if (response.status === 'error') {
            document.getElementById('form-multiple-fields').reset();
            return alert(
              'Something went wrong with your submission - please try again later'
            );
          }
          document.getElementById('form-multiple-fields').reset();
          return alert('Thank you for your submission!');
        });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    e.persist();
    setInputs(Object.assign(inputs, { [name]: value }));
  };

  const handleReset = () => {
    setInputs({});
  };

  useEffect(() => {
    handleReset();
  }, []);

  return (
    <form
      id="form-multiple-fields"
      className="etw-subscribe-container mx-lg-10"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="form-group">
        <input
          className="form-control form-control-lg"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-control form-control-lg"
          name="organization"
          value={inputs.organization}
          onChange={handleInputChange}
          placeholder="Organization name"
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-control form-control-lg"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
      </div>

      {/*<div className="form-group" defaultValue={'default'}>*/}
      {/*  <select className="custom-select custom-select-lg">*/}
      {/*    <option value="default" disabled value="">*/}
      {/*      Role or title*/}
      {/*    </option>*/}
      {/*    <option value="1">One</option>*/}
      {/*    <option value="2">Two</option>*/}
      {/*    <option value="3">Three</option>*/}
      {/*  </select>*/}
      {/*</div>*/}

      <ButtonUp type="submit" variant="success" content="Request information" />
    </form>
  );
};

export default ReadyWinForm;

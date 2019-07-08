import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReadyWinForm = props => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('this is where it will make the api call', value);
  };

  return (
    <form className="etw-subscribe-container mx-lg-10" onSubmit={handleSubmit}>
        <div className="form-group">
            <input
              className="form-control form-control-lg"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Name"
            />
        </div>

        <div className="form-group">
            <input
              className="form-control form-control-lg"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Organization name"
            />
        </div>

        <div className="form-group">
            <input
              className="form-control form-control-lg"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Email"
            />
        </div>

        <div className="form-group">
            <select class="custom-select custom-select-lg">
                <option selected disabled value="">Role or title</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>

        <Button variant="success">Request information</Button>
    </form>
  );
};

export default ReadyWinForm;

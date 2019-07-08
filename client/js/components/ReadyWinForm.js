import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import useFormHandler from './FormHandler';

const ReadyWinForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useFormHandler();

  return (
    <form className="etw-subscribe-container mx-lg-10" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control  form-control-lg"
          name="Name"
          value={inputs.Name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-control form-control-lg"
          name="OrganizationName"
          value={inputs.OrganizationName}
          onChange={handleInputChange}
          placeholder="Organization name"
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-control form-control-lg"
          name="Email"
          value={inputs.Email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="form-group" defaultValue={'default'}>
        <select className="custom-select custom-select-lg">
          <option value="default" disabled value="">
            Role or title
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <Button type="submit" variant="success">
        Request information
      </Button>
    </form>
  );
};

export default ReadyWinForm;

import React from 'react';

export default ({ input, label, className, type, meta: { touched, error } }) => (
  <React.Fragment>
    <label htmlFor={input.name}>{label}</label>
    {/* input type="file" doesn’t support setting the value property from JS
        for security reason. To avoid this error value to be set as null.
    */}
    <input {...input} className={className} type={type} accept='.jpg, .png, .jpeg' value={undefined} />
      {touched && error && <span className="text-danger">{error}</span>}
  </React.Fragment>
);

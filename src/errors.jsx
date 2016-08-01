import React from 'react';

const Errors = ((errors) =>(
  <label className="errors_label">
    <ul>
      {
        errors.map((error) => (
          <li key={error}>{error}</li>
        ))
      }
    </ul>
  </label>
));

export const errorsAnimation = () => {
  $('.errors_label').fadeIn();
  setTimeout(() => {
    $('.errors_label').fadeOut('1000');
  }, 2000);
}

export default Errors;

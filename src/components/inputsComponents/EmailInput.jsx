import FieldInput from './FieldInput';
import InputCard from '../InputCard';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function EmailInput({ onSubmit, labelText }) {
  const [errorMessage, setErrorMessage] = useState('Please enter your input');
  const [value, setValue] = useState(null);

  function onChange(e) {
    const data = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(data)) {
      setErrorMessage('does not match the email schema');
      return;
    }

    setValue(data);
    setErrorMessage('');
  }

  function submit() {
    if (errorMessage) {
      return;
    }

    onSubmit({ [labelText]: value });
  }

  return (
    <InputCard>
      <FieldInput
        optional={false}
        labelText={labelText}
        errorMessage={errorMessage}
        submit={submit}
      >
        <input
          type="email"
          placeholder="user@domain.com"
          id="input"
          className={`border-2 h-10 bg-transparent p-1 focus:outline-none ${
            errorMessage ? 'border-b-red-500' : 'border-b-green-400'
          }`}
          onChange={onChange}
        ></input>
      </FieldInput>
    </InputCard>
  );
}

export default EmailInput;

import FieldInput from './FieldInput';
import InputCard from '../InputCard';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function PhoneInput({ onSubmit, labelText }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState(null);

  function onChange(e) {
    const data = e.target.value;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;

    //Because its optional we can ignore if data is empty
    if (!phonePattern.test(data) && data !== '') {
      setErrorMessage('Not a valid phone number');
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
        labelText={labelText}
        errorMessage={errorMessage}
        submit={submit}
      >
        <input
          type="tel"
          placeholder="+1234567890"
          id="input"
          onChange={onChange}
        ></input>
      </FieldInput>
    </InputCard>
  );
}

export default PhoneInput;

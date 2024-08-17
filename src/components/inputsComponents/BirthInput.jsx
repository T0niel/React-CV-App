import FieldInput from './FieldInput';
import InputCard from '../InputCard';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function BirthInput({ onSubmit, labelText }) {
  const [errorMessage, setErrorMessage] = useState('Please enter your input');
  const [value, setValue] = useState(null);

  function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
  }

  function onChange(e) {
    const data = new Date(e.target.value);

    if (!isValidDate(data)) {
      setErrorMessage('Please enter your input');
      return;
    }

    const date = new Date();
    if (date.getFullYear() - data.getFullYear() < 13) {
      setErrorMessage('Must be at least 13');
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
        <input type="date" id="input" onChange={onChange}></input>
      </FieldInput>
    </InputCard>
  );
}

export default BirthInput;

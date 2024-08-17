import FieldInput from './FieldInput';
import InputCard from './InputCard';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function NameInput({ onSubmit, labelText }) {
  const [errorMessage, setErrorMessage] = useState('Please enter your input');
  const [value, setValue] = useState(null);

  function onChange(e) {
    const data = e.target.value;

    //No letters
    if (/[^a-zA-Z]/.test(data)) {
      setErrorMessage('The name should only contain letters and no spaces');
      return;
    }

    if(data.length === 0){
        setErrorMessage('Please enter your input');
    }

    if(data.length <= 3){
        setErrorMessage('The name should have more than 3 characters')
        return;
    }

    //First letter not capitalized
    if (data.at(0) !== data.at(0).toUpperCase()) {
      setErrorMessage('The first letter is not capitalized');
      return;
    }
    
    setValue(data);
    setErrorMessage('');
  }

  function submit(){
    if(errorMessage){
        return;
    }

    onSubmit({[labelText]: value});
  }

  return (
    <InputCard>
      <FieldInput labelText={labelText} errorMessage={errorMessage} submit={submit}>
        <input
          type="text"
          placeholder={labelText}
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

export default NameInput;

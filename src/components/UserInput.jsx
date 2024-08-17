import { useState } from 'react';
import NameInput from './NameInput';

// eslint-disable-next-line react/prop-types
function UserInput({ onSubmit }) {
  const [currentInput, setCurrentInput] = useState(0);
  const [inputData, setInputData] = useState({});
  const inputs = [
    <NameInput
      labelText="First name"
      key="firstNameInput"
      onSubmit={onInputSubmit}
    />,
    <NameInput
      labelText="Last name"
      key="LastNameInput"
      onSubmit={onInputSubmit}
    />,
  ];

  if (currentInput >= inputs.length) {
    setTimeout(() => {
      onSubmit(inputData);
    }, 0)
    return null;
  }

  function onInputSubmit(data) {
    setCurrentInput(currentInput + 1);
    setInputData({ ...inputData, ...data });
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      {inputs[currentInput]}
    </div>
  );
}

export default UserInput;

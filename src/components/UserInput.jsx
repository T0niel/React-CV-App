import { useState } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import BirthInput from './BirthInput';
import PhoneInput from './PhoneInput';
// eslint-disable-next-line react/prop-types
function UserInput({ onSubmit }) {
  const [currentInput, setCurrentInput] = useState(0);
  const [inputData, setInputData] = useState({});
  const inputs = [
    <NameInput
      labelText="First Name*"
      key="firstNameInput"
      onSubmit={onInputSubmit}
    />,
    <NameInput
      labelText="Last Name*"
      key="LastNameInput"
      onSubmit={onInputSubmit}
    />,
    <EmailInput labelText="Email*" key="Email" onSubmit={onInputSubmit} />,
    <BirthInput labelText="Birth*" key="Birth" onSubmit={onInputSubmit} />,
    <PhoneInput labelText="Phone" key="Phone" onSubmit={onInputSubmit} />
  ];

  if (currentInput >= inputs.length) {
    setTimeout(() => {
      onSubmit(inputData);
    }, 0);
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

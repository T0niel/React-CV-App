import ListInput from './ListInput';
// eslint-disable-next-line react/prop-types
function HobbiesInput({ onSubmit }) {
  return (
    <ListInput
      onSubmit={onSubmit}
      labelName="Hobbies"
      exampleUseCase="Drawing, Stargazing..."
      dataName="hobbies"
    />
  );
}

export default HobbiesInput;

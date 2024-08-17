import ListInput from './ListInput';
// eslint-disable-next-line react/prop-types
function HobbiesInput({ onSubmit }) {
  return (
    <ListInput
      onSubmit={onSubmit}
      labelName="hobbies"
      exampleUseCase="Drawing, Stargazing..."
    />
  );
}

export default HobbiesInput;

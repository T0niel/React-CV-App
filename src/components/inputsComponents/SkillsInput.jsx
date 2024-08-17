import ListInput from './ListInput';
// eslint-disable-next-line react/prop-types
function SkillsInput({ onSubmit }) {
  return (
    <ListInput
      onSubmit={onSubmit}
      labelName="Skills"
      exampleUseCase="Communication, Teamwork..."
    />
  );
}

export default SkillsInput;

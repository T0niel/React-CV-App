import { useState } from 'react';
import InputCard from '../InputCard';

let first = true;
// eslint-disable-next-line react/prop-types
function ListInput({ onSubmit, labelName, exampleUseCase, optional = true }) {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  let error = '';

  if (list.includes(value)) {
    error = 'Already added that';
  }

  if (!first && value === '') {
    error = 'Please enter your input';
  }

  function addInput(input) {
    setList([...list, input]);
  }

  first = false;
  return (
    <InputCard>
      <div className="p-2 min-h-[100vh] tablet:min-h-0 flex flex-col justify-center">
        <h1 className="text-2xl text-center p-3">
          {labelName}{' '}
          <span className="text-gray-500">{optional ? '(optional)' : '*'}</span>
        </h1>
        <div className="mb-2">
          <h1 className={list.length && 'border-b-2 pt-2'}>
            {list.length ? labelName : ''}{' '}
          </h1>
          <ul>
            {list.map((item) => (
              <li
                key={item}
                className="flex items-center p-2 bg-gray-100 border-b-2 border-white"
              >
                <p>{item}</p>
                <button
                  aria-label="Remove"
                  className="opacity-90 hover:opacity-100  bg-red-500 rounded  text-white w-10 h-9 ml-auto"
                  onClick={() => {
                    setList([...list].filter((element) => element !== item));
                  }}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            value={value}
            onChange={(e) => {
              error = '';
              setValue(e.target.value);
            }}
            type="text"
            id="input"
            placeholder={exampleUseCase}
            className="border-2 h-10 bg-transparent p-1 focus:outline-none flex-grow"
          ></input>
          <button
            aria-label={`Add ${labelName}`}
            className="bg-blue-500 p-2 text-white rounded opacity-85 hover:opacity-100 transition-opacity w-[100%] mobile:w-[8%]"
            onClick={() => {
              if (error === '') {
                addInput(value);
                setValue('');
              }
            }}
          >
            +
          </button>
        </div>
        <p className="text-red-500 mt-4">{error}</p>
        <button
          className="bg-green-500 p-2 text-white rounded opacity-85 hover:opacity-100 transition-opacity mt-3 ml-auto block"
          onClick={() => {
            if (list.length !== 0 || optional) {
              onSubmit({ [labelName]: list });
            }
          }}
        >
          Submit
        </button>
      </div>
    </InputCard>
  );
}

export default ListInput;

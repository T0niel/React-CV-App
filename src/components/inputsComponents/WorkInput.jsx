import { useState } from 'react';
import InputCard from '../InputCard';

// eslint-disable-next-line react/prop-types
function WorkInput({ onSubmit }) {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function validate() {
    if (title.length < 5 && title !== '') {
      return {
        pass: false,
        description: 'Title should have more than 5 characters',
      };
    }

    if (description.length < 30 && title !== '') {
      return {
        pass: false,
        description: 'Description should have more than 30 characters',
      };
    }

    if (
      list.some((obj) => obj.title === title && obj.description === description)
    ) {
      return {
        pass: false,
        description: 'Already added that work',
      };
    }

    return { pass: true };
  }

  function submit(){
    onSubmit({'work': list});
  }

  function addWork(title, description) {
    setList([...list, { title, description }]);
  }

  return (
    <InputCard>
      <div className="p-2">
        <h1 className="text-2xl text-center p-2">Work experience <span className='text-gray-500'>(optional)</span></h1>
        <ul className="mb-2 flex flex-col gap-1 rounded-sm">
          {list.map((item) => (
            <li
              key={item}
              className="flex flex-col p-2 bg-gray-100 border-white"
            >
              <h1 className="text-center text-xl p-2">Title {item.title}</h1>
              <p className="text-slate-500">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <div className="flex border-b-2 border-gray pb-2">
            <label htmlFor="title" className="w-24">
              Title:{' '}
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Work position/title"
              className="flex-1 p-2 border-2 bg-transparent focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="flex pb-2">
            <label htmlFor="description" className="w-24">
              Description:{' '}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Work description"
              className="flex-1 h-40 p-2 resize-none border-2 bg-transparent focus:outline-none focus:border-gray-300"
            />
          </div>
          <p className="text-red-500 text-center">{validate().description}</p>
          <button
            aria-label="add work"
            className="ml-auto block bg-blue-500 opacity-90 text-white w-10 h-10 rounded hover:opacity-100 transition-opacity"
            onClick={() => {
              if (validate().pass && title !== '' && description !== '') {
                addWork(title, description);
                setTitle('');
                setDescription('');
              }
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={submit}
          className="bg-green-500 p-2 text-white rounded opacity-85 hover:opacity-100 transition-opacity "
        >
          Submit
        </button>
      </div>
    </InputCard>
  );
}

export default WorkInput;

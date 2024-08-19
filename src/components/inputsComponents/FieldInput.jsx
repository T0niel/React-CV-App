// eslint-disable-next-line react/prop-types
function FieldInput({labelText, children, errorMessage, submit, optional}){
  return (
    <div className="flex flex-col justify-center min-h-[100vh] tablet:min-h-0 p-4 gap-2 text-center h-ful">
      <label htmlFor="input" className="text-2xl rounded">
        {labelText} <span className='text-gray-500'>{optional ? '(optional)' : '*'}</span> 
      </label>
      {children}
      <p className="text-red-600">{errorMessage}</p>
      <button
        onClick={submit}
        className="bg-green-500 p-2 text-white rounded opacity-85 hover:opacity-100 transition-opacity "
      >
        Submit
      </button>
    </div>
  ); 
}

export default FieldInput;
// eslint-disable-next-line react/prop-types
function InputCard({ children }) {
  return (
    <div className="w-[100%] tablet:w-[80%] tablet:max-w-[600px] bg-gray-50 border-slate-300 border tablet:animate-pop animate-none rounded">
      {children}
    </div>
  );
}

export default InputCard;

// eslint-disable-next-line react/prop-types
function InputCard({ children }) {
  return (
    <div className="w-[100%] tablet:w-[80%] tablet:max-w-[500px] bg-gray-50 border-slate-300 border tablet:animate-slideDown animate-none rounded">
      {children}
    </div>
  );
}

export default InputCard;

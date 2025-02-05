const Input = (props) => {
  const { type, name, id } = props;
  return (
    <>
      <input
        className="w-full max-w-lg mx-auto block p-3 rounded-xl bg-gray-900 text-white border border-gray-700 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none 
        placeholder-gray-400 transition-all duration-200 ease-in-out"
        type={type}
        name={name}
        id={id}
      />
    </>
  );
};

export default Input;

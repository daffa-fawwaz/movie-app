const Button = (props) => {
  const { type, name, children } = props;

  return (
    <button
      type={type}
      name={name}
      className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;

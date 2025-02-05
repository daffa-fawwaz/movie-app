const Search = (props) => {
  const { onChange } = props;
  return (
    <input
      className="w-full max-w-lg mx-auto block p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="Search for movies..."
      onChange={onChange}
    />
  );
};

export default Search;

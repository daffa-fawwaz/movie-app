import Search from "../Elements/Input/Search";

const Navbar = (props) => {
  const { onChange } = props;
  const username = localStorage.getItem("login");

  return (
    <>
      <nav className="w-full bg-gray-800 fixed z-50">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold">Daffa's Movies</h1>
          </div>
          <div className="w-96">
            <Search onChange={onChange}></Search>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <div className="text-white">{username}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

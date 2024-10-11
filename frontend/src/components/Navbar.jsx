import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-400 h-14 w-full px-3">
      <div className="bg-red-400">LOGO</div>
      {/* Navbar buttons */}
      <div className="flex gap-6">
        <button className="text-white hover:text-gray-300">Home</button>
        <button className="text-white hover:text-gray-300">Dashboard</button>
        <button className="text-white hover:text-gray-300">Mentor</button>
        {/* Search bar */}
        <div className="w-1/2">
          <form className="relative">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
              <button
                type="submit"
                className="text-white w-1/3 h-3/4 absolute right-2 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="text-blue-600 p-2 border border-white rounded-lg bg-white hover:text-gray-300">
          Login
        </button>
        <button className="text-white p-2 border border-blue-600 rounded-lg bg-blue-600 hover:text-gray-300">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Navbar;

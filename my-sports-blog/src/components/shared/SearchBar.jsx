// src/components/shared/SearchBar.jsx
function SearchBar() {
    return (
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    );
  }

  export default SearchBar;
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-linear-to-r from-gray-50 to-blue-100">
      <Navbar />
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default App;
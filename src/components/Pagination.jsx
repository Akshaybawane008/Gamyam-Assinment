import React from "react";
import { ProductData } from "../data/ProductData.js";

const Pagination = ({ currentPage, setCurrentPage, searchQuery }) => {
 
  const filteredProducts = ProductData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productsPerPage = 8;
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center pb-6 sm:pb-10 px-4">
    
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
        
  
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            flex items-center justify-center 
            px-4 sm:px-6 py-2 sm:py-3 
            text-xs sm:text-sm font-medium 
            rounded-lg sm:rounded-xl 
            transition-all duration-200 
            border-2 w-full sm:w-auto
            order-1 sm:order-3
            ${currentPage === totalPages 
              ? 'border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100' 
              : 'border-green-500 text-green-600 bg-white hover:bg-green-50 hover:shadow-md active:scale-95'
            }
          `}
        >
          <span className="sm:inline">Next</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto justify-center order-2">
          <span className="text-xs sm:text-sm font-medium text-gray-600">Page</span>
          <span className="text-base sm:text-lg font-bold text-blue-600 min-w-4 sm:min-w-5 text-center">{currentPage}</span>
          <span className="text-xs sm:text-sm font-medium text-gray-600">of</span>
          <span className="text-base sm:text-lg font-bold text-gray-700 min-w-4 sm:min-w-5 text-center">{totalPages}</span>
        </div>

     
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            flex items-center justify-center 
            px-4 sm:px-6 py-2 sm:py-3 
            text-xs sm:text-sm font-medium 
            rounded-lg sm:rounded-xl 
            transition-all duration-200 
            border-2 w-full sm:w-auto
            order-3 sm:order-1
            ${currentPage === 1 
              ? 'border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100' 
              : 'border-blue-500 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-md active:scale-95'
            }
          `}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="sm:inline">Previous</span>
        </button>

      </div>
    </div>
  );
};

export default Pagination;
import React, { useState, useCallback } from 'react';
import { AiOutlineTable, AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard"; 
import ProductEdit from "./ProductEdit";

// Memoize the components to prevent unnecessary re-renders
const MemoizedProductList = React.memo(ProductList);
const MemoizedProductCard = React.memo(ProductCard);

const SearchBar = ({ searchQuery, setSearchQuery, currentPage, setCurrentPage }) => {
  const [activeView, setActiveView] = useState('table'); 
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleTableView = useCallback(() => {
    setActiveView('table');
  }, []);

  const handleCardView = useCallback(() => {
    setActiveView('card');
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  }, [setSearchQuery, setCurrentPage]);

  const handleAddProduct = useCallback(() => {
    setShowAddProduct(true);
  }, []);

  const handleCloseAddProduct = useCallback(() => {
    setShowAddProduct(false);
  }, []);

  return (
    <div>
      {/* Main Navigation Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-6">
      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Products Management
            </h2>
          </div>

          <button 
            onClick={handleAddProduct}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
          >
            <AiOutlinePlus size={18} className="sm:size-5" />
            <span className="font-medium text-sm sm:text-base">Add Product</span>
          </button>
        </div>

    
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          {/* Search Input */}
          <div className="flex-1 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-2 sm:py-3 pl-10 sm:pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 text-sm sm:text-base"
              />
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

        
          <div className="flex items-center justify-center gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200 w-full sm:w-auto">
            {/* Table View Button */}
            <button 
              onClick={handleTableView}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                activeView === 'table' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'
              }`}
            >
              <AiOutlineTable size={16} className="sm:size-4" />
              <span className="font-medium">Table</span>
            </button>

            {/* Divider */}
            <div className="h-4 sm:h-6 w-px bg-gray-300"></div>

            {/* Card View Button */}
            <button 
              onClick={handleCardView}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                activeView === 'card' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'
              }`}
            >
              <BsGrid3X3Gap size={14} className="sm:size-4" />
              <span className="font-medium">Card</span>
            </button>
          </div>
        </div>
      </div>

      {/* Render the appropriate component based on active view */}
      {activeView === 'table' ? 
        <MemoizedProductList 
          searchQuery={searchQuery}
          currentPage={currentPage}
        /> : 
        <MemoizedProductCard 
          searchQuery={searchQuery}
          currentPage={currentPage}
        />
      }

      {/* Add Product Popup */}
      {showAddProduct && (
        <ProductEdit 
          product={null} 
          onClose={handleCloseAddProduct}
          isAddMode={true}
        />
      )}
    </div>
  );
};

export default SearchBar;
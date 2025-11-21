import { ProductData } from "../data/ProductData.js";
import { useState, memo } from 'react';
import ProductEdit from "./ProductEdit";

const ProductCard = memo(({ searchQuery, currentPage }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  // Filter products based on search query
  const filteredProducts = ProductData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic 
  const productsPerPage = 8; 
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleCloseEdit = () => {
    setEditingProduct(null);
  };

  return (
    <>
      <div className=" p-4 bg-linear-to-r from-gray-50 to-blue-100">
        <div className="flex flex-wrap gap-4 justify-center">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="
                border 
                rounded-xl 
                p-4 
                bg-white
                w-full          
                xs:w-[48%]        
                sm:w-[48%]        
                md:w-[31%]        
                lg:w-[23%]        
                min-h-[260px]     
                relative
              "
            >
             
              <button 
                onClick={() => handleEditClick(product)}
                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>

         
              <h3 className="font-semibold text-lg sm:text-xl mb-1">
                {product.name}
              </h3>

           
              <p className="text-gray-700 text-sm sm:text-base mb-1">
                ₹{product.price}
              </p>

              <p className="text-gray-600 text-sm mb-2">
                Category:{" "}
                <span className="font-medium">{product.category}</span>
              </p>

             
              {product.description && (
                <p className="text-gray-500 text-xs sm:text-sm mb-2">
                  {product.description}
                </p>
              )}

              <p className="text-gray-700 text-sm mb-1">
                Stock: <span className="font-medium">{product.stock}</span>
              </p>

         
              {product.brand && (
                <p className="text-gray-700 text-sm mb-1">
                  Brand:{" "}
                  <span className="font-medium">{product.brand}</span>
                </p>
              )}

   
              {product.sizes?.length > 0 && (
                <p className="text-gray-700 text-sm mb-1">
                  Sizes:{" "}
                  <span className="font-medium">
                    {product.sizes.join(", ")}
                  </span>
                </p>
              )}

            
              {product.colors?.length > 0 && (
                <p className="text-gray-700 text-sm mb-1">
                  Colors:{" "}
                  <span className="font-medium">
                    {product.colors.join(", ")}
                  </span>
                </p>
              )}

          
              {product.collections && (
                <p className="text-gray-700 text-sm mb-1">
                  Collection:{" "}
                  <span className="font-medium">{product.collections}</span>
                </p>
              )}

            
              {product.material && (
                <p className="text-gray-700 text-sm mb-1">
                  Material:{" "}
                  <span className="font-medium">{product.material}</span>
                </p>
              )}

      
              <p
                className={`mt-3 font-semibold ${
                  product.isActive ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.isActive ? "Available" : "Not Available"}
              </p>
            </div>
          ))}

        </div>
      </div>


      {editingProduct && (
        <ProductEdit 
          product={editingProduct} 
          onClose={handleCloseEdit} 
        />
      )}
    </>
  );
});

export default ProductCard;
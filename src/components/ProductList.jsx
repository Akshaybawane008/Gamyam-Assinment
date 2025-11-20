import { ProductData } from "../data/ProductData.js";
import { useState, memo } from 'react';
import ProductEdit from "./ProductEdit";

const ProductList = memo(({ searchQuery, currentPage }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  // Filter products based on search query
  const filteredProducts = ProductData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic - show 8 products per page
  const productsPerPage = 8; // CHANGED FROM 10 TO 8
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
      <div className="px-12 py-4 bg-linear-to-r from-gray-50 to-blue-100">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 text-center">ID</th>
              <th className="border p-2 text-center">Name</th>
              <th className="border p-2 text-center">Price</th>
              <th className="border p-2 text-center">Category</th>
              <th className="border p-2 text-center">Stock</th>
              <th className="border p-2 text-center">Tags</th>
              <th className="border p-2 text-center">Active</th>
              <th className="border p-2 text-center">Created At</th>
              <th className="border p-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{product.id}</td>
                <td className="border p-2 text-center">{product.name}</td>
                <td className="border p-2 text-center">₹{product.price}</td>
                <td className="border p-2 text-center">{product.category}</td>
                <td className="border p-2 text-center">{product.stock}</td>
                <td className="border p-2 text-center">
                  {product.tags.join(", ")}
                </td>

                <td className="border p-2 text-center">
                  {product.isActive ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Inactive</span>
                  )}
                </td>

                <td className="border p-2 text-center">
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td className="border p-2 text-center">
                  <button 
                    onClick={() => handleEditClick(product)}
                    className="p-1 hover:bg-blue-50 rounded transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mx-auto text-gray-600 hover:text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Popup */}
      {editingProduct && (
        <ProductEdit 
          product={editingProduct} 
          onClose={handleCloseEdit} 
        />
      )}
    </>
  );
});

export default ProductList;
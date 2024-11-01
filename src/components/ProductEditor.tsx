import React, { useState, useEffect } from 'react';

function ProductEditor() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    condition: string;
    category: string;
    images: string[];
  }

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  const handleEdit = (product: Product) => {
    setEditedProduct(product);
  };

  const handleSave = () => {
    const updatedProducts = products.map(product =>
      product.id === (editedProduct as Product).id ? (editedProduct as Product) : product
    );
    setProducts(updatedProducts);
    setEditedProduct(null);
    // Save updatedProducts to products.json
    fetch('/products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProducts),
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Products</h1>
      <ul className="mb-4">
        {products.map(product => (
          <li key={product.id} className="flex justify-between items-center mb-2">
            <span>{product.name} - ${product.price}</span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {editedProduct && (
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Condition</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedProduct.condition}
              onChange={(e) => setEditedProduct({ ...editedProduct, condition: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedProduct.category}
              onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images (comma separated URLs)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedProduct.images.join(', ')}
              onChange={(e) => setEditedProduct({ ...editedProduct, images: e.target.value.split(', ') })}
            />
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductEditor;

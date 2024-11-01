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
    <div>
      <h1>Edit Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
          </li>
        ))}
      </ul>
      {editedProduct && (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default ProductEditor;

import React, { useState } from 'react';
import { products } from '../data/products';
import { Product } from '../types';

export const Backoffice: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleDelete = (id: string, name: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete the item "${name}"?`);
    if (confirmed) {
      setProductList(productList.filter(product => product.id !== id));
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    if (editingProduct && editingProduct.id) {
      setProductList(productList.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    } else {
      setProductList([...productList, { ...updatedProduct, id: (productList.length + 1).toString() }]);
    }
    setEditingProduct(null);
  };

  const handleAdd = () => {
    setEditingProduct({
      id: '',
      name: '',
      price: 0,
      description: '',
      condition: 'like new',
      status: 'available',
      images: []
    });
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4">
      <h2 className="text-2xl mb-4">Product Management</h2>
      {!editingProduct && (
        <button
          onClick={handleAdd}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add New Product
        </button>
      )}
      {editingProduct ? (
        <ProductForm product={editingProduct} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Condition</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(product => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{product.condition}</td>
                <td className="py-2 px-4 border-b">{product.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition-colors mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

interface ProductFormProps {
  product: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Condition</label>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="like new">Like New</option>
          <option value="good">Good</option>
          <option value="regular">Regular</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="available">Available</option>
          <option value="reserved">Reserved</option>
          <option value="sold">Sold</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Images</label>
        <input
          type="text"
          name="images"
          value={formData.images.join(', ')}
          onChange={(e) => setFormData({ ...formData, images: e.target.value.split(', ') })}
          className="border p-2 w-full"
        />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Save
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
};

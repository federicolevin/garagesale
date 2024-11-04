import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Store } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { products } from './data/products';
import { Login } from './components/Login';
import { Backoffice } from './components/Backoffice';
import { ProductStatus } from './types';

const WHATSAPP_NUMBER = '+5491162943172';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [statusFilter, setStatusFilter] = useState<ProductStatus[]>(['available', 'reserved']);

  useEffect(() => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { expiry } = JSON.parse(authData);
      if (new Date().getTime() < expiry) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authData');
      }
    }
  }, []);

  const handleLogin = (password: string) => {
    if (password === 'your_password') {
      const expiry = new Date().getTime() + 60 * 60 * 1000; // 1 hour
      localStorage.setItem('authData', JSON.stringify({ expiry }));
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleStatusFilterChange = (status: ProductStatus) => {
    setStatusFilter((prevFilter) =>
      prevFilter.includes(status)
        ? prevFilter.filter((s) => s !== status)
        : [...prevFilter, status]
    );
  };

  const filteredProducts = statusFilter.length === 0 ? products : products.filter(product => statusFilter.includes(product.status));

  const statusLabels: { [key in ProductStatus]: string } = {
    available: 'Disponible',
    reserved: 'Reservado',
    sold: 'Vendido'
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="flex items-center gap-2">
              <Store className="text-gray-700" size={28} />
              <h1 className="text-2xl font-bold text-gray-900">Fede's Garage Sale</h1>
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex gap-2">
            {(['available', 'reserved', 'sold'] as ProductStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => handleStatusFilterChange(status)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  statusFilter.includes(status) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {statusLabels[status]}
              </button>
            ))}
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      phoneNumber={WHATSAPP_NUMBER}
                    />
                  ))}
                </div>
              }
            />
            <Route
              path="/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductDetail />
                </Suspense>
              }
            />
            <Route
              path="/edit"
              element={
                isAuthenticated ? (
                  <Backoffice />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
          </Routes>
        </main>

        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-gray-600">
              Escribime por cualquier consulta:
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank"> WhatsApp</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
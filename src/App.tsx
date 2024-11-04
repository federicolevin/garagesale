import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Store } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { products } from './data/products';

const WHATSAPP_NUMBER = '+5491162943172';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2">
              <Store className="text-gray-700" size={28} />
              <h1 className="text-2xl font-bold text-gray-900">Fede's Garage Sale</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      phoneNumber={WHATSAPP_NUMBER}
                    />
                  ))}
                </div>
              }
            />
            <Route path="/:id" element={<ProductDetail />} />
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
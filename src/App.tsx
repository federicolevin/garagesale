import React from 'react';
import { Store } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

// Replace with your WhatsApp number (international format without '+')
const WHATSAPP_NUMBER = '1234567890';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Store className="text-gray-700" size={28} />
            <h1 className="text-2xl font-bold text-gray-900">My Used Items Store</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              phoneNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600">
            Contact me directly through WhatsApp for any inquiries
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
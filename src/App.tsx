import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Store } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { products } from './data/products';
import { Login } from './components/Login';
import { Backoffice } from './components/Backoffice';
import { ProductStatus } from './types';

const WHATSAPP_NUMBER = '+5491162943172';

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [statusFilter, setStatusFilter] = useState<ProductStatus[]>(['available', 'reserved']);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('order');

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

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  const filteredProducts = products
    .filter(product => statusFilter.includes(product.status))
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (orderBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (orderBy === 'price') {
      return a.price - b.price;
    } else if (orderBy === 'status') {
      return a.status.localeCompare(b.status);
    } else {
      return a.order - b.order;
    }
  });

  const statusLabels: { [key in ProductStatus]: string } = {
    available: 'Disponible',
    reserved: 'Reservado',
    sold: 'Vendido'
  };

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        statusFilter={statusFilter}
        handleStatusFilterChange={handleStatusFilterChange}
        filteredProducts={filteredProducts}
        statusLabels={statusLabels}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        orderBy={orderBy}
        handleOrderChange={handleOrderChange}
        sortedProducts={sortedProducts}
      />
    </Router>
  );
}

interface AppContentProps {
  isAuthenticated: boolean;
  handleLogin: (password: string) => void;
  statusFilter: ProductStatus[];
  handleStatusFilterChange: (status: ProductStatus) => void;
  filteredProducts: typeof products;
  statusLabels: { [key in ProductStatus]: string };
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  orderBy: string;
  handleOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortedProducts: typeof products;
}

function AppContent({ isAuthenticated, handleLogin, statusFilter, handleStatusFilterChange, sortedProducts, statusLabels, searchTerm, setSearchTerm, orderBy, handleOrderChange }: AppContentProps) {
  const location = useLocation();

  return (
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
        {location.pathname !== '/edit' && !/\/\d+$/.test(location.pathname) && (
          <>
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <input
                type="text"
                placeholder="Buscar por título"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded w-full sm:mb-0 sm:w-auto"
              />
              <select value={orderBy} onChange={handleOrderChange} className="p-2 mb-4 border border-gray-300 rounded w-full sm:mb-0 sm:w-auto">
                <option value="order">Orden por defecto</option>
                <option value="name">Nombre</option>
                <option value="price">Precio</option>
                <option value="status">Estado</option>
              </select>
              <div className="flex gap-2">
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
            </div>
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      phoneNumber={WHATSAPP_NUMBER}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96">
                  <p className="text-gray-600 py-4">No se encontraron productos</p>
                  <img src="/images/empty-state.png" alt="No products found" className="w-64 h-64 mb-4" />
                </div>
              )
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
  );
}

export default App;
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            DesignMarket
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search designs..."
                className="w-[300px] rounded-full border px-4 py-2 pl-10"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>

            <nav className="flex items-center space-x-6">
              <Link to="/categories" className="hover:text-gray-600">
                Categories
              </Link>
              <Link to="/custom-orders" className="hover:text-gray-600">
                Custom Orders
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button variant="primary" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
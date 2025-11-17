import './globals.css';
import { CartProvider } from '@/lib/cartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Little Step - Happy Shopping for Kids',
  description: 'Little Step, Big Happiness',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50">
        <CartProvider>

          {/* Tüm sayfalarda üstte */}
          <Header />

          <main>
            {children}
          </main>

          {/* Tüm sayfalarda altta */}
          <Footer />

        </CartProvider>
      </body>
    </html>
  );
}
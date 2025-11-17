import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                Little Step
              </h3>
              <p className="text-gray-400 text-sm">
                Safe and high‑quality children&#39;s clothing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-pink-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition">Our Stores</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-pink-400 transition">FAQ</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition">Returns & Exchanges</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition">Delivery</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition">Order Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition overflow-hidden">
                  <img src="/img/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/accounts/login/#" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition overflow-hidden">
                  <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://x.com/" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition overflow-hidden">
                  <img src="/img/twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Little Step. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
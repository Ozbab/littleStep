'use client';

import { useState } from 'react';
import { Package, RefreshCw, Clock, CheckCircle, XCircle, TruckIcon, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsExchangePage() {
  const [activeTab, setActiveTab] = useState('policy');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Package size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns & Exchange</h1>
          <p className="text-lg md:text-xl opacity-90">
            We want you to love your purchase! Easy returns within 14 days.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-bold text-lg mb-2">14 Days</h3>
            <p className="text-sm text-gray-600">Return period</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <RefreshCw className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-bold text-lg mb-2">Free Exchange</h3>
            <p className="text-sm text-gray-600">Size & color change</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <TruckIcon className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-bold text-lg mb-2">Free Pickup</h3>
            <p className="text-sm text-gray-600">We&#39;ll collect from you</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <CheckCircle className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-bold text-lg mb-2">Fast Refund</h3>
            <p className="text-sm text-gray-600">5-7 business days</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('policy')}
              className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                activeTab === 'policy'
                  ? 'border-b-4 border-pink-500 text-pink-500'
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Return Policy
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                activeTab === 'process'
                  ? 'border-b-4 border-pink-500 text-pink-500'
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              How to Return
            </button>
            <button
              onClick={() => setActiveTab('exchange')}
              className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                activeTab === 'exchange'
                  ? 'border-b-4 border-pink-500 text-pink-500'
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Exchange Process
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                activeTab === 'faq'
                  ? 'border-b-4 border-pink-500 text-pink-500'
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              FAQ
            </button>
          </div>

          <div className="p-6 md:p-8">
            {/* Return Policy Tab */}
            {activeTab === 'policy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={28} />
                    Return Policy
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    At Little Step, we want you to be completely satisfied with your purchase. 
                    If for any reason you&#39;re not happy with your order, you can return it within 14 days of delivery.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Eligible for Return
                  </h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>✓ Unused items with original tags attached</li>
                    <li>✓ Items in original packaging</li>
                    <li>✓ Defective or damaged products</li>
                    <li>✓ Wrong item received</li>
                    <li>✓ Size or color doesn&#39;t match your order</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle size={20} />
                    Not Eligible for Return
                  </h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>✗ Underwear and intimate apparel (hygiene reasons)</li>
                    <li>✗ Items without tags or in used condition</li>
                    <li>✗ Personalized or customized items</li>
                    <li>✗ Sale items marked as final sale</li>
                    <li>✗ Returns after 14 days from delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Refund Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>Refunds will be processed to your original payment method</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>Processing time: 5-7 business days after we receive your return</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>Shipping fees are non-refundable unless the item is defective</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>You&#39;ll receive an email notification when your refund is processed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* How to Return Tab */}
            {activeTab === 'process' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Package className="text-pink-500" size={28} />
                    How to Return Your Order
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Follow these simple steps to return your items:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Request a Return</h3>
                      <p className="text-gray-700 mb-3">
                        Contact our customer service team via:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <p><strong>Email:</strong> returns@littlestep.com</p>
                        <p><strong>Phone:</strong> +90 (212) 123 45 67</p>
                        <p><strong>Online:</strong> Submit a return request through your account</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Include your order number and reason for return
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Prepare Your Package</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span>Place items in original packaging if possible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span>Ensure all tags are attached</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span>Include the packing slip or order confirmation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span>Seal the package securely</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Ship Your Return</h3>
                      <p className="text-gray-700 mb-3">Choose your return method:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-pink-200 rounded-lg p-4 bg-pink-50">
                          <h4 className="font-bold text-pink-600 mb-2">Free Pickup (Recommended)</h4>
                          <p className="text-sm text-gray-700">
                            We&#39;ll arrange a free pickup from your address. 
                            Available within 24-48 hours in major cities.
                          </p>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold text-gray-700 mb-2">Drop-off at Cargo</h4>
                          <p className="text-sm text-gray-700">
                            Drop your package at any Yurtiçi, Aras, or MNG Cargo branch. 
                            Keep your tracking number.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Track Your Return</h3>
                      <p className="text-gray-700 mb-3">
                        You&#39;ll receive email updates at each stage:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span>Return request received</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span>Package picked up/received at warehouse</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span>Quality check completed</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-bold text-green-700">Refund processed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Exchange Process Tab */}
            {activeTab === 'exchange' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <RefreshCw className="text-pink-500" size={28} />
                    Exchange Process
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Want a different size or color? We offer free exchanges!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                    <AlertCircle size={24} />
                    Exchange Benefits
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">Free shipping both ways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">No restocking fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">Fast processing (3-5 business days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">Same item in different size or color</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">How to Exchange</h3>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Contact Customer Service</h4>
                          <p className="text-sm text-gray-600">
                            Let us know which item you&#39;d like to exchange and what you&#39;d like instead.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Check Availability</h4>
                          <p className="text-sm text-gray-600">
                            We&#39;ll confirm if your desired size/color is in stock and reserve it for you.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Send Original Item</h4>
                          <p className="text-sm text-gray-600">
                            We&#39;ll arrange free pickup or you can drop off at cargo office.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Receive New Item</h4>
                          <p className="text-sm text-gray-600">
                            Once we receive your return, we&#39;ll ship your exchange item immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> If there&#39;s a price difference, you&#39;ll either be charged the difference 
                    or receive a refund for the price adjustment.
                  </p>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    How long does a refund take?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    Refunds are processed within 5-7 business days after we receive and inspect your return. 
                    The amount will be credited to your original payment method. Depending on your bank, 
                    it may take an additional 3-5 business days to appear in your account.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    Can I return sale items?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    Most sale items can be returned within 14 days. However, items marked as &quot;Final Sale&quot; 
                    cannot be returned or exchanged. This information is clearly stated on the product page.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    Who pays for return shipping?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    We offer free return shipping! You can either request a free pickup from your address, 
                    or drop off your package at any partner cargo office. If the return is due to our error 
                    (wrong item, defective product), we cover all costs.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    Can I exchange for a different product?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    Direct exchanges are available for the same item in different size or color only. 
                    If you&#39;d like a completely different product, you&#39;ll need to return the original item 
                    for a refund and place a new order.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    What if my item is defective?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    If you receive a defective or damaged item, please contact us immediately with photos. 
                    We&#39;ll arrange a free pickup and send you a replacement right away, or issue a full refund 
                    including original shipping costs.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    Can I return items purchased with a discount code?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    Yes, items purchased with discount codes can be returned. Your refund will be for the 
                    amount you actually paid (after the discount was applied).
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4 cursor-pointer group">
                  <summary className="font-bold text-lg flex items-center justify-between">
                    What happens if I miss the 14-day return window?
                    <span className="text-pink-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm pl-4">
                    Unfortunately, we cannot accept returns after 14 days from delivery. However, if you 
                    have extenuating circumstances, please contact our customer service team and we&#39;ll do 
                    our best to help.
                  </p>
                </details>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6 opacity-90">Our customer service team is here to help!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105">
                Contact Us
              </button>
            </Link>
            <a href="mailto:returns@littlestep.com">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pink-600 transition">
                Email: returns@littlestep.com
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function OrderSuccess() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Order Completed!</h1>
        <p className="text-gray-700 mb-6">Thank you for choosing Little Step.</p>
  
        <Link href="/" className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90">
          Return Home
        </Link>
      </div>
    );
  }
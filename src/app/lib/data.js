export const categories = [
  { 
    id: 'tshirt', 
    slug: 'tshirt', 
    name: 'T-shirt', 
    image: '/img/tshirt/img-29.jpeg', 
    items: ['Cotton T-shirt (3–12)'], 
    gradient: 'from-orange-200 to-red-200' 
  },
  { 
    id: 'shirts', 
    slug: 'shirts', 
    name: 'Kids Shirt', 
    image: '/img/gomlek/img-13.jpeg', 
    items: ['Kids Shirt (5–12)'], 
    gradient: 'from-blue-200 to-cyan-200' 
  },
  { 
    id: 'pajama', 
    slug: 'pajama', 
    name: 'Pajama Set', 
    image: '/img/pijama/img-25.jpeg', 
    items: ['Pajama Set (4–8)'], 
    gradient: 'from-indigo-200 to-purple-200' 
  },
  { 
    id: 'pants', 
    slug: 'pants', 
    name: 'Kids Pants', 
    image: '/img/pants/img-21.jpeg', 
    items: ['Kids Pants (2–12)'], 
    gradient: 'from-emerald-200 to-teal-200' 
  },
  { 
    id: 'dress', 
    slug: 'dress', 
    name: 'Girls Dress', 
    image: '/img/elbise/img-17.jpeg', 
    items: ['Girls Dress (4–10)'], 
    gradient: 'from-yellow-200 to-orange-300' 
  },
  { 
    id: 'suitsets', 
    slug: 'suitsets', 
    name: 'Girls & Boys Suit Sets', 
    image: '/img/takim/img-4.jpeg', 
    items: ['Suit Sets (5–12)'], 
    gradient: 'from-purple-200 to-pink-200' 
  },
  { 
    id: 'tracksuit', 
    slug: 'tracksuit', 
    name: 'Kids Track Suit', 
    image: '/img/esofman/img-37.jpg', 
    items: ['Tracksuit (6–12)'], 
    gradient: 'from-sky-200 to-blue-300' 
  },
  { 
    id: 'sweather', 
    slug: 'sweather', 
    name: 'Kids Sweater', 
    image: '/img/swithsheart/img-9.jpeg', 
    items: ['Sweater (5–12)'], 
    gradient: 'from-rose-200 to-pink-200' 
  },
  { 
    id: 'baby', 
    slug: 'baby', 
    name: 'Baby Romper', 
    image: '/img/bebis/img-33.jpeg', 
    items: ['Baby Romper (0–2)'], 
    gradient: 'from-indigo-300 to-purple-400' 
  },
  { 
    id: 'disney', 
    slug: 'disney', 
    name: 'Disney Collection', 
    image: '/img/disney/img-1.jpeg', 
    items: ['Licensed kids suit'], 
    gradient: 'from-purple-200 to-pink-200' 
  },
];

// === ÜRÜNLER ===
export const productsData = {
  tshirt: {
    title: "T-shirt Collection",
    description: "Cotton T-shirts (3–12 years)",
    slug: "tshirt",
    products: [
      { 
        id: 5, 
        name: "Cotton T-shirt", 
        description: "Vibrant colors, soft texture, perfect for daily wear", 
        price: "292.80", 
        rating: 41, 
        image: "/img/tshirt/img-29.jpeg",
        sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 6, 
        name: "Cotton T-shirt", 
        description: "Vibrant colors, soft texture, perfect for daily wear", 
        price: "292.80", 
        rating: 41, 
        image: "/img/tshirt/img-30.jpeg",
        sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 7, 
        name: "Cotton T-shirt", 
        description: "Vibrant colors, soft texture, perfect for daily wear", 
        price: "292.80", 
        rating: 41, 
        image: "/img/tshirt/img-31.jpeg",
        sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 8, 
        name: "Cotton T-shirt", 
        description: "Vibrant colors, soft texture, perfect for daily wear", 
        price: "292.80", 
        rating: 41, 
        image: "/img/tshirt/img-32.jpeg",
        sizes: ['3-4 Years', '5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
    ],
  },

  shirts: {
    title: "Kids Shirt Collection",
    description: "Shirts (5–12 years)",
    slug: "shirts",
    products: [
      { 
        id: 1, 
        name: "Kids Shirt", 
        description: "100% cotton, Disney character print", 
        price: "536.80", 
        rating: 28, 
        image: "/img/gomlek/img-13.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 2, 
        name: "Kids Shirt", 
        description: "Elegant and comfortable, ideal for special occasions", 
        price: "536.80", 
        rating: 35, 
        image: "/img/gomlek/img-14.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 3, 
        name: "Kids Shirt", 
        description: "Warm and comfortable fit", 
        price: "536.80", 
        rating: 52, 
        image: "/img/gomlek/img-15.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 4, 
        name: "Kids Shirt", 
        description: "Warm and comfortable fit", 
        price: "536.80", 
        rating: 52, 
        image: "/img/gomlek/img-16.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
    ],
  },

  pajama: {
    title: "Pajama Set Collection",
    description: "Pajama Sets (4–8 years)",
    slug: "pajama",
    products: [
      { 
        id: 21, 
        name: "Pajama Set", 
        description: "Comfortable and sporty", 
        price: "439.20", 
        rating: 92, 
        image: "/img/pijama/img-25.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years']
      },
      { 
        id: 22, 
        name: "Pajama Set", 
        description: "Pink-colored, Barbie themed", 
        price: "439.20", 
        rating: 64, 
        image: "/img/pijama/img-26.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years']
      },
      { 
        id: 23, 
        name: "Pajama Set", 
        description: "Comfortable and sporty", 
        price: "439.20", 
        rating: 92, 
        image: "/img/pijama/img-27.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years']
      },
      { 
        id: 24, 
        name: "Pajama Set", 
        description: "Pink-colored, Barbie themed", 
        price: "439.20", 
        rating: 64, 
        image: "/img/pijama/img-28.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years']
      },
    ],
  },

  pants: {
    title: "Kids Pants Collection",
    description: "Pants (2–12 years)",
    slug: "pants",
    products: [
      { 
        id: 13, 
        name: "Kids Pants", 
        description: "Organic cotton", 
        price: "414.80", 
        rating: 67, 
        image: "/img/pants/img-21.jpeg",
        sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 14, 
        name: "Kids Pants", 
        description: "Durable denim fabric", 
        price: "414.80", 
        rating: 44, 
        image: "/img/pants/img-22.jpeg",
        sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 15, 
        name: "Kids Pants", 
        description: "Practical pocket design", 
        price: "414.80", 
        rating: 38, 
        image: "/img/pants/img-23.jpeg",
        sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 16, 
        name: "Kids Pants", 
        description: "Flexible fabric, comfortable cut", 
        price: "414.80", 
        rating: 55, 
        image: "/img/pants/img-24.jpeg",
        sizes: ['2-3 Years', '4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
    ],
  },

  dress: {
    title: "Girls Dress Collection",
    description: "Dresses (4–10 years)",
    slug: "dress",
    products: [
      { 
        id: 29, 
        name: "Girls Dress", 
        description: "Special Frozen-themed dress", 
        price: "488.00", 
        rating: 45, 
        image: "/img/elbise/img-17.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10 Years']
      },
      { 
        id: 30, 
        name: "Girls Dress", 
        description: "Light and cool fabric", 
        price: "488.00", 
        rating: 58, 
        image: "/img/elbise/img-18.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10 Years']
      },
      { 
        id: 31, 
        name: "Girls Dress", 
        description: "For special occasions", 
        price: "488.00", 
        rating: 37, 
        image: "/img/elbise/img-19.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10 Years']
      },
      { 
        id: 32, 
        name: "Girls Dress", 
        description: "Denim fabric, comfortable cut", 
        price: "488.00", 
        rating: 51, 
        image: "/img/elbise/img-20.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10 Years']
      },
    ],
  },

  suitsets: {
    title: "Girls & Boys Suit Sets",
    description: "Suit Sets (5–12 years)",
    slug: "suitsets",
    products: [
      { 
        id: 17, 
        name: "Suit Set", 
        description: "Princess-themed suit set", 
        price: "658.80", 
        rating: 89, 
        image: "/img/takim/img-4.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 18, 
        name: "Suit Set", 
        description: "Warm and comfortable", 
        price: "658.80", 
        rating: 76, 
        image: "/img/takim/img-5.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 19, 
        name: "Suit Set", 
        description: "Elegant set for special occasions", 
        price: "658.80", 
        rating: 31, 
        image: "/img/takim/img-6.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 20, 
        name: "Suit Set", 
        description: "Elegant girls’ suit set", 
        price: "658.80", 
        rating: 28, 
        image: "/img/takim/img-7.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
    ],
  },

  tracksuit: {
    title: "Kids Track Suit Collection",
    description: "Track Suits (6–12 years)",
    slug: "tracksuit",
    products: [
      { 
        id: 25, 
        name: "Track Suit", 
        description: "Comfortable and sporty", 
        price: "707.60", 
        rating: 92, 
        image: "/img/esofman/img-37.jpg",
        sizes: ['6-7 Years', '8-9 Years', '10-11 Years', '12 Years']
      },
      { 
        id: 26, 
        name: "Track Suit", 
        description: "Barbie themed", 
        price: "707.60", 
        rating: 64, 
        image: "/img/esofman/img-38.jpg",
        sizes: ['6-7 Years', '8-9 Years', '10-11 Years', '12 Years']
      },
      { 
        id: 27, 
        name: "Track Suit", 
        description: "Comfortable and sporty", 
        price: "707.60", 
        rating: 92, 
        image: "/img/esofman/img-39.jpg",
        sizes: ['6-7 Years', '8-9 Years', '10-11 Years', '12 Years']
      },
      { 
        id: 28, 
        name: "Track Suit", 
        description: "Barbie themed", 
        price: "707.60", 
        rating: 64, 
        image: "/img/esofman/img-40.jpg",
        sizes: ['6-7 Years', '8-9 Years', '10-11 Years', '12 Years']
      },
    ],
  },

  sweather: {
    title: "Sweater Collection",
    description: "Sweatshirts (5–12 years)",
    slug: "sweather",
    products: [
      { 
        id: 9, 
        name: "Kids Sweater", 
        description: "Vibrant colors, soft texture", 
        price: "683.20", 
        rating: 41, 
        image: "/img/swithsheart/img-9.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 10, 
        name: "Kids Sweater", 
        description: "Vibrant colors, soft texture", 
        price: "683.20", 
        rating: 41, 
        image: "/img/swithsheart/img-10.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 11, 
        name: "Kids Sweater", 
        description: "Vibrant colors, soft texture", 
        price: "683.20", 
        rating: 41, 
        image: "/img/swithsheart/img-11.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
      { 
        id: 12, 
        name: "Kids Sweater", 
        description: "Vibrant colors, soft texture", 
        price: "683.20", 
        rating: 41, 
        image: "/img/swithsheart/img-12.jpeg",
        sizes: ['5-6 Years', '7-8 Years', '9-10 Years', '11-12 Years']
      },
    ],
  },

  baby: {
    title: "Baby Collection",
    description: "Baby Romper (0–2 years)",
    slug: "baby",
    products: [
      { 
        id: 33, 
        name: "Baby Romper", 
        description: "Organic cotton", 
        price: "366.00", 
        rating: 124, 
        image: "/img/bebis/img-33.jpeg",
        sizes: ['0-3 Months', '3-6 Months', '6-12 Months', '12-18 Months', '18-24 Months']
      },
      { 
        id: 34, 
        name: "Baby Romper", 
        description: "Animal-ear fleece romper", 
        price: "366.00", 
        rating: 87, 
        image: "/img/bebis/img-34.jpeg",
        sizes: ['0-3 Months', '3-6 Months', '6-12 Months', '12-18 Months', '18-24 Months']
      },
      { 
        id: 35, 
        name: "Baby Romper", 
        description: "Comfortable fit, ideal for sleep", 
        price: "366.00", 
        rating: 95, 
        image: "/img/bebis/img-35.jpeg",
        sizes: ['0-3 Months', '3-6 Months', '6-12 Months', '12-18 Months', '18-24 Months']
      },
      { 
        id: 36, 
        name: "Baby Romper", 
        description: "Cotton, white & colorful", 
        price: "366.00", 
        rating: 112, 
        image: "/img/bebis/img-36.jpeg",
        sizes: ['0-3 Months', '3-6 Months', '6-12 Months', '12-18 Months', '18-24 Months']
      },
    ],
  },

  disney: {
    title: "Disney Collection",
    description: "Licensed Kids Suit (Disney / Barbie)",
    slug: "disney",
    products: [
      { 
        id: 37, 
        name: "Disney Licensed Set", 
        description: "Organic cotton", 
        price: "878.40", 
        rating: 124, 
        image: "/img/disney/img-1.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 38, 
        name: "Disney Licensed Set", 
        description: "Fleece fabric", 
        price: "878.40", 
        rating: 87, 
        image: "/img/disney/img-2.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 39, 
        name: "Disney Licensed Set", 
        description: "Soft cotton ideal for sleep", 
        price: "878.40", 
        oldPrice: "1098.00",
        image: "/img/disney/img-3.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
      { 
        id: 40, 
        name: "Disney Licensed Set", 
        description: "Cotton set for newborns", 
        price: "878.40", 
        rating: 112, 
        image: "/img/disney/img.jpeg",
        sizes: ['4-5 Years', '6-7 Years', '8-9 Years', '10-12 Years']
      },
    ],
  },
};

// === KARGO SEÇENEKLERİ ===
export const shippingOptions = [
  { 
    id: 'yurtici', 
    name: 'Yurtiçi Cargo', 
    price: 40, 
    deliveryTime: '2–3 business days',
    description: 'Standard delivery'
  },
  { 
    id: 'aras', 
    name: 'Aras Cargo', 
    price: 40, 
    deliveryTime: '2–4 business days',
    description: 'Reliable delivery'
  },
  { 
    id: 'mng', 
    name: 'MNG Cargo', 
    price: 50, 
    deliveryTime: '1–2 business days',
    description: 'Fast delivery'
  }
];
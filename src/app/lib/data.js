// === KATEGORİLER ===
export const categories = [
  { id: 'tshirt',    slug: 'tshirt',    name: 'T-shirt',                    icon: '👕', items: ['Cotton T-shirt (3–12)'],                       gradient: 'from-orange-200 to-red-200' },
  { id: 'shirts',    slug: 'shirts',    name: 'Kids Shirt',                 icon: '👔', items: ['Kids Shirt (5–12)'],                           gradient: 'from-blue-200 to-cyan-200' },
  { id: 'pajama',    slug: 'pajama',    name: 'Pajama Set',                 icon: '🛌', items: ['Pajama Set (4–8)'],                            gradient: 'from-indigo-200 to-purple-200' },
  { id: 'pants',     slug: 'pants',     name: 'Kids Pants',                 icon: '👖', items: ['Kids Pants (2–12)'],                          gradient: 'from-emerald-200 to-teal-200' },
  { id: 'dress',     slug: 'dress',     name: 'Girls Dress',                icon: '👗', items: ['Girls Dress (4–10)'],                         gradient: 'from-yellow-200 to-orange-300' },
  { id: 'suitsets',  slug: 'suitsets',  name: 'Girls & Boys Suit Sets',     icon: '🎩', items: ['Suit Sets (5–12)'],                           gradient: 'from-purple-200 to-pink-200' },
  { id: 'tracksuit', slug: 'tracksuit', name: 'Kids Track Suit',            icon: '🏃‍♀️', items: ['Tracksuit (6–12)'],                         gradient: 'from-sky-200 to-blue-300' },
  { id: 'sweather',  slug: 'sweather',  name: 'Kids Sweater',               icon: '🧶', items: ['Sweater (5–12)'],                             gradient: 'from-rose-200 to-pink-200' },
  { id: 'baby',      slug: 'baby',      name: 'Baby Romper',                icon: '👶', items: ['Baby Romper (0–2)'],                         gradient: 'from-indigo-300 to-purple-400' },
  { id: 'disney',    slug: 'disney',    name: 'Disney',                     icon: '🏰', items: ['Licensed Kids Suit (Disney / Barbie)'],      gradient: 'from-purple-200 to-pink-200' },
];

// === ÜRÜNLER (img klasörüne göre 10 kategori) ===
export const productsData = {
  // /img/thsirt/...
  tshirt: {
    title: "T-shirt Collection",
    description: "Cotton T-shirts (3–12 years)",
    slug: "tshirt",
    products: [
      { id: 5, name: "Tshirt", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "292.80", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/thsirt/img-29.jpeg" },
      { id: 6, name: "Tshirt", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "292.80", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/thsirt/img-30.jpeg" },
      { id: 7, name: "Tshirt", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "292.80", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/thsirt/img-31.jpeg" },
      { id: 8, name: "Tshirt", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "292.80", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/thsirt/img-32.jpeg" },
    ],
  },

  // /img/gomlek/...
  shirts: {
    title: "Kids Shirt Collection",
    description: "Shirts (5–12 years)",
    slug: "shirts",
    products: [
      { id: 1, name: "Shirt", description: "%100 pamuklu, yumuşak kumaş, çocukların sevdiği Disney karakterli", price: "536.80", oldPrice: "199.99", badge: "YENİ",      rating: 28, image: "/img/gomlek/img-13.jpeg" },
      { id: 2, name: "Shirt", description: "Şık ve rahat, özel günler için ideal, %100 pamuk",                    price: "536.80", oldPrice: "239.99", badge: "%20",       rating: 35, image: "/img/gomlek/img-14.jpeg" },
      { id: 3, name: "Shirt", description: "Sıcak tutan, rahat kesim, sonbahar için mükemmel",                     price: "536.80", oldPrice: "349.99", badge: "ÇOK SATAN", rating: 52, image: "/img/gomlek/img-15.jpeg" },
      { id: 4, name: "Shirt", description: "Sıcak tutan, rahat kesim, sonbahar için mükemmel",                     price: "536.80", oldPrice: "349.99", badge: "ÇOK SATAN", rating: 52, image: "/img/gomlek/img-16.jpeg" },
    ],
  },

  // /img/pijama/...
  pajama: {
    title: "Pajama Set Collection",
    description: "Pajama Sets (4–8 years)",
    slug: "pajama",
    products: [
      { id: 21, name: "Pajama", description: "Rahat ve sportif, günlük kullanım için ideal", price: "439.20", oldPrice: "374.99", badge: "ÇOK SATAN", rating: 92, image: "/img/pijama/img-25.jpeg" },
      { id: 22, name: "Pajama", description: "Pembe renkli şık takım, Barbie temalı",       price: "439.20", oldPrice: "437.99", badge: "DISNEY",    rating: 64, image: "/img/pijama/img-26.jpeg" },
      { id: 23, name: "Pajama", description: "Rahat ve sportif, günlük kullanım için ideal", price: "439.20", oldPrice: "374.99", badge: "ÇOK SATAN", rating: 92, image: "/img/pijama/img-27.jpeg" },
      { id: 24, name: "Pajama", description: "Pembe renkli şık takım, Barbie temalı",       price: "439.20", oldPrice: "437.99", badge: "DISNEY",    rating: 64, image: "/img/pijama/img-28.jpeg" },
    ],
  },

  // /img/pants/...
  pants: {
    title: "Kids Pants Collection",
    description: "Pants (2–12 years)",
    slug: "pants",
    products: [
      { id: 13, name: "Pants", description: "Organik pamuk, hassas ciltler için ideal, rahat kesim", price: "414.80", oldPrice: "224.99", badge: "ÇOK SATAN", rating: 67, image: "/img/pants/img-21.jpeg" },
      { id: 14, name: "Pants", description: "Dayanıklı kot kumaş, esnek yapı, günlük kullanım",      price: "414.80", oldPrice: "274.99", badge: "YENİ",      rating: 44, image: "/img/pants/img-22.jpeg" },
      { id: 15, name: "Pants", description: "Pratik cepli tasarım, rahat ve şık",                    price: "414.80", oldPrice: "249.99", badge: "%20",       rating: 38, image: "/img/pants/img-23.jpeg" },
      { id: 16, name: "Pants", description: "Sporcu çocuklar için, esnek kumaş, rahat kesim",        price: "414.80", oldPrice: "199.99", badge: "ÇOK SATAN", rating: 55, image: "/img/pants/img-24.jpeg" },
    ],
  },

  // /img/elbise/...
  dress: {
    title: "Girls Dress Collection",
    description: "Dresses (4–10 years)",
    slug: "dress",
    products: [
      { id: 29, name: "Dress", description: "Frozen temalı özel elbise, tül detaylı",       price: "488.00", oldPrice: "299.99", badge: "DISNEY",  rating: 45, image: "/img/elbise/img-17.jpeg" },
      { id: 30, name: "Dress", description: "Hafif ve serin kumaş, yaz için ideal",        price: "488.00", oldPrice: "224.99", badge: "%20",     rating: 58, image: "/img/elbise/img-18.jpeg" },
      { id: 31, name: "Dress", description: "Doğum günü ve özel günler için, fiyonklu",     price: "488.00", oldPrice: "399.99", badge: "YENİ",    rating: 37, image: "/img/elbise/img-19.jpeg" },
      { id: 32, name: "Dress", description: "Kot kumaş, rahat kesim, günlük kullanım",      price: "488.00", oldPrice: "249.99", badge: "ÇOK SATAN", rating: 51, image: "/img/elbise/img-20.jpeg" },
    ],
  },

  // /img/takım/...
  suitsets: {
    title: "Girls & Boys Suit Sets",
    description: "Suit Sets (5–12 years)",
    slug: "suitsets",
    products: [
      { id: 17, name: "Sets", description: "Yumuşak pamuklu pijama, sevilen prenses karakterleri", price: "658.80", oldPrice: "249.99", badge: "DISNEY", rating: 89, image: "/img/takım/img-4.jpeg" },
      { id: 18, name: "Sets", description: "Erkek çocuklar için, rahat ve sıcak",                 price: "658.80", oldPrice: "237.99", badge: "DISNEY", rating: 76, image: "/img/takım/img-5.jpeg" },
      { id: 19, name: "Sets", description: "Özel günler için şık takım elbise, kravat dahil",      price: "658.80", oldPrice: "562.99", badge: "YENİ",   rating: 31, image: "/img/takım/img-6.jpeg" },
      { id: 20, name: "Sets", description: "Zarif ve şık kız çocuk takımı, etek ve ceket",         price: "658.80", oldPrice: "537.99", badge: "YENİ",   rating: 28, image: "/img/takım/img-7.jpeg" },
    ],
  },

  // /img/esofman/...
  tracksuit: {
    title: "Kids Track Suit",
    description: "Track Suits (6–12 years)",
    slug: "tracksuit",
    products: [
      { id: 25, name: "Tracksuit", description: "Rahat ve sportif, günlük kullanım için ideal", price: "707.60", oldPrice: "374.99", badge: "ÇOK SATAN", rating: 92, image: "/img/esofman/img-37.jpg" },
      { id: 26, name: "Tracksuit", description: "Pembe renkli şık takım, Barbie temalı",       price: "707.60", oldPrice: "437.99", badge: "DISNEY",    rating: 64, image: "/img/esofman/img-38.jpg" },
      { id: 27, name: "Tracksuit", description: "Rahat ve sportif, günlük kullanım için ideal", price: "707.60", oldPrice: "374.99", badge: "ÇOK SATAN", rating: 92, image: "/img/esofman/img-39.jpg" },
      { id: 28, name: "Tracksuit", description: "Pembe renkli şık takım, Barbie temalı",       price: "707.60", oldPrice: "437.99", badge: "DISNEY",    rating: 64, image: "/img/esofman/img-40.jpg" },
    ],
  },

  // /img/swithsheart/...
  sweather: {
    title: "Sweater Collection",
    description: "Sweatshirts (5–12 years)",
    slug: "sweather",
    products: [
      { id: 9,  name: "Swithsheart", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "683.20", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/swithsheart/img-9.jpeg" },
      { id: 10, name: "Swithsheart", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "683.20", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/swithsheart/img-10.jpeg" },
      { id: 11, name: "Swithsheart", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "683.20", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/swithsheart/img-11.jpeg" },
      { id: 12, name: "Swithsheart", description: "Canlı renkler, yumuşak doku, günlük kullanım için", price: "683.20", oldPrice: "174.99", badge: "%20", rating: 41, image: "/img/swithsheart/img-12.jpeg" },
    ],
  },

  // /img/bebis/...
  baby: {
    title: "Baby Collection",
    description: "Babay Romper (0–2 years)",
    slug: "baby",
    products: [
      { id: 33, name: "Baby", description: "Organik pamuk, hassas ciltler için, çıtçıtlı", price: "366.00", oldPrice: "199.99", badge: "ÇOK SATAN", rating: 124, image: "/img/bebis/img-33.jpeg" },
      { id: 34, name: "Baby", description: "Sevimli hayvan kulaklı, yumuşak polar kumaş",  price: "366.00", oldPrice: "274.99", badge: "YENİ",      rating: 87,  image: "/img/bebis/img-34.jpeg" },
      { id: 35, name: "Baby", description: "Rahat kesim, yumuşak pamuk, uyku için ideal",  price: "366.00", oldPrice: "174.99", badge: "%20",       rating: 95,  image: "/img/bebis/img-35.jpeg" },
      { id: 36, name: "Baby", description: "Pamuklu, yeni doğanlar için, beyaz ve renkli", price: "366.00", oldPrice: "224.99", badge: "ÇOK SATAN", rating: 112, image: "/img/bebis/img-36.jpeg" },
    ],
  },

  // /img/disney/...
  disney: {
    title: "Disney Collection",
    description: "Licensed Kids Suit (Disney / Barbie)",
    slug: "disney",
    products: [
      { id: 37, name: "Disney", description: "Organik pamuk, hassas ciltler için, çıtçıtlı", price: "878.40", oldPrice: "199.99", badge: "ÇOK SATAN", rating: 124, image: "/img/disney/img-1.jpeg" },
      { id: 38, name: "Disney", description: "Sevimli hayvan kulaklı, yumuşak polar kumaş",  price: "878.40", oldPrice: "274.99", badge: "YENİ",      rating: 87,  image: "/img/disney/img-2.jpeg" },
      { id: 39, name: "Disney", description: "Rahat kesim, yumuşak pamuk, uyku için ideal",  price: "878.40", oldPrice: "174.99", badge: "%20",       rating: 95,  image: "/img/disney/img-3.jpeg" },
      { id: 40, name: "Disney", description: "Pamuklu, yeni doğanlar için, beyaz ve renkli", price: "878.40", oldPrice: "224.99", badge: "ÇOK SATAN", rating: 112, image: "/img/disney/img.jpeg" },
    ],
  },
};

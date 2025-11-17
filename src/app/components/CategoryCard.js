import Image from "next/image";

export default function CategoryCard({ category, onClick }) {
  // Görsel yolu normalize ediliyor
  const imageSrc = category.image?.startsWith("/")
    ? category.image
    : `/${category.image}`;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      {/* Görsel alanı */}
      <div className="h-40 md:h-48 relative overflow-hidden">
        {category.image ? (
          <Image
            src={imageSrc}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center text-5xl md:text-6xl h-full bg-gray-100">
            {category.icon}
          </div>
        )}
      </div>

      {/* Metin alanı */}
      <div className="p-4 md:p-5 text-center">
        <h3 className="text-lg md:text-xl font-bold mb-2">{category.name}</h3>

        {category.items?.length > 0 &&
          category.items.map((item, i) => (
            <p key={i} className="text-xs md:text-sm text-gray-600">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}
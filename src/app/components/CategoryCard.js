import { useRouter } from "next/navigation";

export default function CategoryCard({ category }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/category/${category.slug}`)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      <div
        className={`h-40 md:h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center text-5xl md:text-6xl`}
      >
        {category.icon}
      </div>
      <div className="p-4 md:p-5 text-center">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {category.name}
        </h3>
        {category.items.map((item, i) => (
          <p key={i} className="text-xs md:text-sm text-gray-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

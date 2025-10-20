// src/app/category/[slug]/page.js
import { categories, productsData } from "../../lib/data";
import ProductGridClient from "../../components/ProductGridClient";

export default async function CategoryPage({ params }) {
  const { slug } = await params;              // ✅ kritik değişiklik

  const bundle = productsData[slug];
  const category = categories.find((c) => c.slug === slug);

  if (!bundle) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Kategori bulunamadı</h1>
        <p className="opacity-70 mt-2">Aranan slug: {slug}</p>
      </main>
    );
  }

  const title = bundle.title || category?.name || slug;
  const desc = bundle.description || "";

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {desc && <p className="opacity-80 mb-6">{desc}</p>}
      <ProductGridClient products={bundle.products || []} />
    </main>
  );
}

// (Opsiyonel) SEO başlığı/açıklaması
export async function generateMetadata({ params }) {
  const { slug } = await params;              // ✅ yine await
  const category = categories.find((c) => c.slug === slug);
  const bundle = productsData[slug];

  const title = bundle?.title || category?.name || slug;
  const description = bundle?.description || "Little Step ürünleri";

  return { title: `${title} | Little Step`, description };
}

import { MetadataRoute } from "next";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001";
const FRONTEND_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch blogs
  const blogsRes = await fetch(`${BACKEND_URL}/api/blogs?limit=1000`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  const blogsData = await blogsRes.json();

  // Fetch products
  const productsRes = await fetch(
    `${BACKEND_URL}/api/product-section?limit=1000`,
    {
      next: { revalidate: 3600 },
    }
  );
  const productsData = await productsRes.json();

  // Fetch about pages
  const aboutRes = await fetch(`${BACKEND_URL}/api/about?limit=1000`, {
    next: { revalidate: 3600 },
  });
  const aboutData = await aboutRes.json();

  // Static pages
  const staticPages = [
    {
      url: FRONTEND_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${FRONTEND_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${FRONTEND_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${FRONTEND_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Blog pages
  const blogPages = blogsData.docs.map((blog: any) => ({
    url: `${FRONTEND_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Product pages
  const productPages = productsData.docs.map((product: any) => ({
    url: `${FRONTEND_URL}/products/${product.slug}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // About pages
  const aboutPages = aboutData.docs.map((item: any) => ({
    url: `${FRONTEND_URL}/about/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...productPages, ...aboutPages];
}

// "use client";

import React from "react";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/Hero";
import ResourcesSection from "@/components/resources/ResourcesSection";
import ProductHero from "@/components/products/Hero";
import ProductSection from "@/components/products/ProductSection";
import { fetchProductSection, getImageUrl } from "../../lib/product-section";
import { fetchFAQSection } from "@/lib/Faq";

// export default async function Product() {
//   const productSectionData = await fetchProductSection();
//   const faqData = await fetchFAQSection();

//   return (
//     <>
//       <main className="main-wrapper sub-pages">
//         {/* <ProductHero /> */}

//         {/* <ProductSection /> */}
//         {productSectionData && <ProductSection data={productSectionData} />}

//         {/* <TestimonialsSection /> */}
//         <FAQSection data={faqData} />
//       </main>
//       <Footer />
//     </>
//   );
// }


import { Metadata } from "next";
import { notFound } from "next/navigation";

// === DYNAMIC METADATA ===
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchProductSection();
  if (!data) return { title: "Products Not Found" };

  const seo = data.seo || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";
  const canonical = seo.urls?.canonical_url || `${baseUrl}/products`;

  return {
    title: seo.meta_title || data.sectionTitle,
    description:
      seo.meta_description || "Explore advanced GFRP products and solutions",
    robots: {
      index: seo.robots?.index !== "noindex",
      follow: seo.robots?.follow !== "nofollow",
    },
    alternates: { canonical },
    openGraph: {
      title: seo.open_graph?.og_title || seo.meta_title || data.sectionTitle,
      description: seo.open_graph?.og_description || seo.meta_description,
      url: canonical,
      siteName: seo.open_graph?.og_site_name || "GFRP India",
      images: seo.open_graph?.og_image?.url
        ? [
            {
              url: seo.open_graph.og_image.url,
              alt: seo.open_graph.og_image_alt,
            },
          ]
        : data.products?.[0]?.rightContainer?.image?.url
        ? [{ url: data.products[0].rightContainer.image.url }]
        : [],
      locale: seo.open_graph?.og_locale || "en_IN",
      type: "website",
    },
    twitter: {
      card: seo.twitter?.twitter_card_type || "summary_large_image",
      title: seo.twitter?.twitter_title || seo.meta_title || data.sectionTitle,
      description: seo.twitter?.twitter_description || seo.meta_description,
      images: seo.twitter?.twitter_image?.url || seo.open_graph?.og_image?.url,
      site: seo.twitter?.twitter_site,
      creator: seo.twitter?.twitter_creator,
    },
  };
}

// === JSON-LD: Product + FAQ + Breadcrumb ===
function ProductJSONLD({ data }: { data: any }) {
  const seo = data.seo || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";
  const url = `${baseUrl}/products`;

  const products = data.products
    ?.map((p: any) => {
      const prodSeo = p.leftContainer?.productSeo || {};
      const image = p.rightContainer?.image?.url || p.rightContainer?.imageUrl;

      return {
        "@type": "Product",
        name: p.leftContainer?.title,
        image,
        description: p.leftContainer?.description?.root?.children
          ?.map((n: any) => n.children?.[0]?.text || "")
          .join(" ")
          .substring(0, 300),
        sku: prodSeo.sku,
        brand: { "@type": "Brand", name: prodSeo.brand || "GFRP India" },
        offers: prodSeo.price
          ? {
              "@type": "Offer",
              priceCurrency: prodSeo.currency || "INR",
              price: prodSeo.price,
              availability:
                prodSeo.availability || "https://schema.org/InStock",
              url,
            }
          : undefined,
        ...(prodSeo.ratingValue && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: prodSeo.ratingValue,
            reviewCount: prodSeo.reviewCount || 1,
          },
        }),
      };
    })
    .filter(Boolean);

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.sectionTitle,
    description: seo.meta_description,
    url,
    mainEntity: products.length
      ? { "@type": "ItemList", itemListElement: products }
      : undefined,
  };

  // Add FAQ
  if (seo.schema?.faq_schema?.length) {
    jsonLd.hasPart = {
      "@type": "FAQPage",
      mainEntity: seo.schema.faq_schema.map((faq: any) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };
  }

  // Add Breadcrumb
  if (seo.schema?.breadcrumb_schema?.length) {
    jsonLd.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: seo.schema.breadcrumb_schema.map(
        (item: any, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.item,
        })
      ),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// === MAIN PAGE ===
export default async function Product() {
  const productSectionData = await fetchProductSection();
  const faqData = await fetchFAQSection();

  return (
    <>
      <ProductJSONLD data={productSectionData} />
      <main className="main-wrapper sub-pages">
        {/* <ProductHero /> */}

        {/* <ProductSection /> */}
        {productSectionData && <ProductSection data={productSectionData} />}

        {/* <TestimonialsSection /> */}
        <FAQSection data={faqData} />
      </main>
      <Footer />
    </>
  );
}
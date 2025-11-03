// // "use client";

// // import React, { useEffect, useState } from "react";

// // import LogoSection from "@/components/LogoSection";
// // import AboutSection from "@/components/AboutSection";
// // import ProjectsSection from "@/components/ProjectsSection";

// // import TestimonialsSection from "@/components/TestimonialsSection";
// // import FAQSection from "@/components/FAQSection";
// // import Footer from "@/components/Footer";
// // import ResourcesHero from "@/components/resources/Hero";
// // import ResourcesSection from "@/components/resources/ResourcesSection";
// // import ProductHero from "@/components/products/Hero";
// // import ProductSection from "@/components/products/ProductSection";
// // import BlogHero from "@/components/blog/Hero";
// // import BlogSection from "@/components/blog/BlogSection";
// // import Hero from "@/components/singleBlog/Hero";
// // import SingleBlog from "@/components/singleBlog/SingleBlog";
// // import { useParams } from "next/navigation";
// // import axios from "axios";

// // export default function SingleBlogPage() {
// //     const params = useParams()
// //     console.log("params", params.slug);

// //     const [singleblog, setSingleBlog] = useState(null);

// //     useEffect(() => {
// //       axios
// //         .get(`https://gfrp-india.onrender.com/api/blog_detail/${params.slug}/`) // your Django endpoint
// //         .then((response) => {
// //           setSingleBlog(response.data); // it's a single object, not an array
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching hero section:", error);
// //         });
// //     }, [params.slug]);

// //     if (!singleblog) return ;

// //     console.log("singleblog", singleblog);

// //   return (
// //     <>
// //       <main className="main-wrapper sub-pages">
// //         <Hero singleblog={singleblog} />
// //         <SingleBlog singleblog={singleblog} />
// //         {/* <TestimonialsSection /> */}
// //         <FAQSection />
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }



// import { fetchBlogBySlug, getImageUrl, richTextToHtml } from "@/lib/blog"; // Adjust path as needed
// import { notFound } from "next/navigation";
// import Hero from "@/components/singleBlog/Hero";
// import SingleBlog from "@/components/singleBlog/SingleBlog";
// import { fetchFAQSection } from "@/lib/Faq";
// import FAQSection from "@/components/FAQSection";
// import Footer from "@/components/Footer";

// interface BlogPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function BlogPage({ params }: BlogPageProps) {
//   const { slug } = params;

//   // Fetch the blog data from Payload
//   const blogData = await fetchBlogBySlug(slug);

//   const faqData = await fetchFAQSection();

//   // If blog not found, show 404
//   if (!blogData) {
//     notFound();
//   }

//   // Process data server-side for client components
//   const singleblog = {
//     ...blogData,
//     image: getImageUrl(blogData.image),
//     author: {
//       ...blogData.author,
//       profile_picture: getImageUrl(blogData.author.profile_picture),
//     },
//     related_blogs:
//       blogData.related_blogs?.map((blog: any) => ({
//         ...blog,
//         image: getImageUrl(blog.image),
//         author: {
//           ...blog.author,
//           profile_picture: getImageUrl(blog.author.profile_picture),
//         },
//       })) || [],
//   };

//   // Convert rich text to HTML server-side
//   const contentHtml = richTextToHtml(blogData.content);

//   return (
//     <>
//       <Hero singleblog={singleblog} />
//       <SingleBlog singleblog={singleblog} contentHtml={contentHtml} />
//       <FAQSection data={faqData} />
//       <Footer />
//     </>
//   );
// }

// // Generate static params for all blogs (optional, for static generation)
// export async function generateStaticParams() {
//   try {
//     const res = await fetch(
//       `${
//         process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackend.vercel.app/api"
//       }/blogs?limit=1000&where[isActive][equals]=true`
//     );

//     if (!res.ok) return [];

//     const data = await res.json();

//     return data.docs.map((blog: any) => ({
//       slug: blog.slug,
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

// // Generate metadata for SEO (optional)
// export async function generateMetadata({ params }: BlogPageProps) {
//   const { slug } = params;
//   const singleblog = await fetchBlogBySlug(slug);

//   if (!singleblog) {
//     return {
//       title: "Blog Not Found",
//     };
//   }

//   return {
//     title: singleblog.seo?.meta_title || singleblog.title,
//     description: singleblog.seo?.meta_description || singleblog.description,
//     openGraph: {
//       title: singleblog.seo?.meta_title || singleblog.title,
//       description: singleblog.seo?.meta_description || singleblog.description,
//       images: [
//         {
//           url: singleblog.seo?.og_image?.url || singleblog.image?.url || "",
//         },
//       ],
//     },
//   };
// }


import { fetchBlogBySlug, getImageUrl, richTextToHtml } from "@/lib/blog";
import { notFound } from "next/navigation";
import Hero from "@/components/singleBlog/Hero";
import SingleBlog from "@/components/singleBlog/SingleBlog";
import { fetchFAQSection } from "@/lib/Faq";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";

interface BlogPageProps {
  params: { slug: string };
}

// === DYNAMIC METADATA (SEO TAGS) ===
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) return { title: "Not Found" };

  const seo = blog.seo || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";
  const canonical = seo.urls?.canonical_url || `${baseUrl}/blog/${blog.slug}`;

  return {
    title: seo.meta_title || blog.title,
    description: seo.meta_description || blog.description,
    robots: {
      index: seo.robots?.index !== "noindex",
      follow: seo.robots?.follow !== "nofollow",
    },
    alternates: {
      canonical,
      languages:
        seo.urls?.alternate_languages?.reduce((acc: any, alt: any) => {
          acc[alt.language_code] = alt.url;
          return acc;
        }, {}) || {},
    },
    openGraph: {
      title: seo.open_graph?.og_title || seo.meta_title || blog.title,
      description:
        seo.open_graph?.og_description ||
        seo.meta_description ||
        blog.description,
      url: canonical,
      siteName: seo.open_graph?.og_site_name || "GFRP India",
      images: seo.open_graph?.og_image?.url
        ? [
            {
              url: seo.open_graph.og_image.url,
              alt: seo.open_graph.og_image_alt,
            },
          ]
        : blog.image?.url
        ? [{ url: blog.image.url }]
        : [],
      locale: seo.open_graph?.og_locale || "en_IN",
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: seo.schema?.modified_time || blog.created_at,
      section: seo.open_graph?.article_section || blog.tag,
      tags: seo.open_graph?.article_tags?.map((t: any) => t.tag) || [blog.tag],
    },
    twitter: {
      card: seo.twitter?.twitter_card_type || "summary_large_image",
      title: seo.twitter?.twitter_title || seo.meta_title || blog.title,
      description:
        seo.twitter?.twitter_description ||
        seo.meta_description ||
        blog.description,
      images:
        seo.twitter?.twitter_image?.url ||
        seo.open_graph?.og_image?.url ||
        blog.image?.url,
      site: seo.twitter?.twitter_site,
      creator: seo.twitter?.twitter_creator,
    },
    other: {
      // Custom meta tags
      ...seo.custom_tags?.meta_tags?.reduce((acc: any, tag: any) => {
        if (tag.tag_type === "meta_name")
          acc[tag.attribute_name] = tag.attribute_value;
        if (tag.tag_type === "meta_property")
          acc[`property:${tag.attribute_name}`] = tag.attribute_value;
        if (tag.tag_type === "meta_http_equiv")
          acc[`http-equiv:${tag.attribute_name}`] = tag.attribute_value;
        return acc;
      }, {}),
      // Geographic
      ...(seo.geographic?.enable_geo_targeting
        ? {
            "geo.region": seo.geographic.geo_region,
            "geo.placename": seo.geographic.geo_placename,
            "geo.position": seo.geographic.geo_position,
            ICBM: seo.geographic.icbm,
          }
        : {}),
    },
    // Preload critical resources
    ...(seo.performance?.preload_resources?.length
      ? {
          link: seo.performance.preload_resources.map((res: any) => ({
            rel: "preload",
            href: res.href,
            as: res.as,
            type: res.type,
            crossorigin: res.as === "font" ? "anonymous" : undefined,
          })),
        }
      : {}),
    // DNS Prefetch & Preconnect
    ...(seo.performance?.dns_prefetch?.length ||
    seo.performance?.preconnect?.length
      ? {
          link: [
            ...(seo.performance.dns_prefetch?.map((d: any) => ({
              rel: "dns-prefetch",
              href: d.domain,
            })) || []),
            ...(seo.performance.preconnect?.map((p: any) => ({
              rel: "preconnect",
              href: p.domain,
              crossorigin: true,
            })) || []),
          ],
        }
      : {}),
  };
}

// === JSON-LD STRUCTURED DATA (Rich Results) ===
function BlogJSONLD({ blog }: { blog: any }) {
  const seo = blog.seo || {};
  const schema = seo.schema || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";
  const url = `${baseUrl}/blog/${blog.slug}`;

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": schema.article_type || "BlogPosting",
    headline: schema.headline || blog.title,
    description: seo.meta_description || blog.description,
    image: blog.image?.url,
    author: {
      "@type": schema.author_schema?.author_type || "Organization",
      name: blog.author?.name || "GFRP India",
      url: schema.author_schema?.author_url || `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: schema.publisher?.name || "GFRP India",
      logo: {
        "@type": "ImageObject",
        url: schema.publisher?.logo?.url,
        width: schema.publisher?.logo_width,
        height: schema.publisher?.logo_height,
      },
    },
    datePublished: blog.created_at,
    dateModified: schema.modified_time || blog.created_at,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    wordCount: schema.word_count,
    timeRequired: schema.time_required,
    keywords: [
      seo.keyword_optimization?.primary_keyword,
      ...(seo.keyword_optimization?.secondary_keywords?.map(
        (k: any) => k.keyword
      ) || []),
    ].filter(Boolean),
  };

  // Add FAQ if exists
  if (schema.faq_schema?.length) {
    jsonLd.hasPart = {
      "@type": "FAQPage",
      mainEntity: schema.faq_schema.map((faq: any) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };
  }

  // Add Breadcrumb
  if (schema.breadcrumb_schema?.length) {
    jsonLd.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: schema.breadcrumb_schema.map((item: any, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.item,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// === MAIN PAGE COMPONENT ===
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  const blogData = await fetchBlogBySlug(slug);
  const faqData = await fetchFAQSection();

  if (!blogData) notFound();

  const singleblog = {
    ...blogData,
    image: getImageUrl(blogData.image),
    author: {
      ...blogData.author,
      profile_picture: getImageUrl(blogData.author.profile_picture),
    },
    related_blogs:
      blogData.related_blogs?.map((blog: any) => ({
        ...blog,
        image: getImageUrl(blog.image),
        author: {
          ...blog.author,
          profile_picture: getImageUrl(blog.author.profile_picture),
        },
      })) || [],
  };

  const contentHtml = richTextToHtml(blogData.content);

  return (
    <>
      {/* JSON-LD for Rich Results */}
      <BlogJSONLD blog={blogData} />

      {/* Page Content */}
      <Hero singleblog={singleblog} />
      <SingleBlog singleblog={singleblog} contentHtml={contentHtml} />
      <FAQSection data={faqData} />
      <Footer />
    </>
  );
}

// === STATIC PARAMS (Optional) ===
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackend.vercel.app/api"
      }/blogs?limit=1000&where[isActive][equals]=true`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs.map((blog: any) => ({ slug: blog.slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
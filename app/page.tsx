// // "use client";

// // import React from "react";
// // import Navbar from "../components/Navbar";
// // import Hero from "@/components/Hero";
// // import LogoSection from "@/components/LogoSection";
// // import AboutSection from "@/components/AboutSection";
// // import ProjectsSection from "@/components/ProjectsSection";
// // import ResourcesSection from "@/components/ResourcesSection";
// // import BlogSection from "@/components/BlogSection";
// // import TestimonialsSection from "@/components/TestimonialsSection";
// // import FAQSection from "@/components/FAQSection";
// // import Footer from "@/components/Footer";
// // import ProductSection from "@/components/Products";


// // export default function Home() {
// //   return (
// //     <>
// //       <main className="main-wrapper">
// //         <Hero />
// //         <LogoSection />
// //         <AboutSection />
// //         {/* <ProductSection /> */}
// //         <ProjectsSection />
// //         <ResourcesSection />
// //         <BlogSection />
// //         {/* <TestimonialsSection /> */}
// //         <FAQSection />
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }



import { fetchHomePage } from "@/lib/api";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LogoSection from "@/components/LogoSection";
import { fetchProductSection } from "@/lib/product-section";
// import ProductSection from "@/components/products/ProductSection";
import ProjectsSection from "@/components/ProjectsSection";
import { fetchResourcesSection } from "@/lib/resource-section";
import ResourcesSection from "@/components/ResourcesSection";
import BlogSection from "@/components/BlogSection";
import { fetchBlogs, fetchFeaturedBlog } from "@/lib/blog";
import { fetchFAQSection } from "@/lib/Faq";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

// export default async function Home() {
//   const homePageData = await fetchHomePage();

//   const productSectionData = await fetchProductSection();

//   const resourcesData = await fetchResourcesSection();

//   if (!homePageData || !homePageData.sections) {
//     return <div>No content available</div>;
//   }

//   const allBlogs = await fetchBlogs();
//   const featuredBlog = await fetchFeaturedBlog();
  
//   const faqData = await fetchFAQSection();

//   return (
//     <main className="main-wrapper sub-pages">
//       {homePageData.sections.map((section: any, index: number) => {
//         // Skip inactive sections
//         if (!section.isActive) return null;

//         // Render Hero section
//         if (section.sectionType === "hero" && section.hero) {
//           return <Hero key={`hero-${index}`} data={section.hero} />;
//         }

//         <LogoSection />;

//         // Render About section
//         if (section.sectionType === "about" && section.about) {
//           return <AboutSection key={`about-${index}`} data={section.about} />;
//         }

//         return null;
//       })}

//       {productSectionData && <ProjectsSection data={productSectionData} />}

//       <ResourcesSection data={resourcesData} />

//       <BlogSection allBlogs={allBlogs} featuredBlog={featuredBlog} />

//       <FAQSection data={faqData} />

//       <Footer />
//     </main>
//   );
// }


// import { fetchHomePage, getImageUrl } from "@/lib/home";
// import { fetchProductSection } from "@/lib/product";
// import { fetchResourcesSection } from "@/lib/resources";
// import { fetchBlogs, fetchFeaturedBlog } from "@/lib/blog";
// import { fetchFAQSection } from "@/lib/Faq";
// import Hero from "@/components/home/Hero";
// import AboutSection from "@/components/home/AboutSection";
// import ProjectsSection from "@/components/home/ProjectsSection";
// import ResourcesSection from "@/components/home/ResourcesSection";
// import BlogSection from "@/components/home/BlogSection";
// import FAQSection from "@/components/FAQSection";
// import Footer from "@/components/Footer";
// import LogoSection from "@/components/home/LogoSection";
import { Metadata } from "next";

// === DYNAMIC METADATA ===
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomePage();
  const seo = data?.seo?.ultimate || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";

  return {
    title: seo.meta_title || "GFRP India - Advanced Construction Solutions",
    description:
      seo.meta_description || "Leading GFRP rebar manufacturer in India",
    robots: {
      index: seo.robots?.index !== "noindex",
      follow: seo.robots?.follow !== "nofollow",
    },
    alternates: {
      canonical: seo.urls?.canonical_url || baseUrl,
    },
    openGraph: {
      title: seo.open_graph?.og_title || seo.meta_title,
      description: seo.open_graph?.og_description || seo.meta_description,
      url: baseUrl,
      siteName: seo.open_graph?.og_site_name || "GFRP India",
      images: seo.open_graph?.og_image?.url
        ? [
            {
              url: seo.open_graph.og_image.url,
              alt: seo.open_graph.og_image_alt,
            },
          ]
        : [],
      locale: seo.open_graph?.og_locale || "en_IN",
      type: "website",
    },
    twitter: {
      card: seo.twitter?.twitter_card_type || "summary_large_image",
      title: seo.twitter?.twitter_title || seo.meta_title,
      description: seo.twitter?.twitter_description || seo.meta_description,
      images: seo.twitter?.twitter_image?.url || seo.open_graph?.og_image?.url,
      site: seo.twitter?.twitter_site,
      creator: seo.twitter?.twitter_creator,
    },
  };
}

// === JSON-LD: WebPage + Organization + HowTo + FAQ + Navigation ===
function HomeJSONLD({ data }: { data: any }) {
  const seo = data.seo?.ultimate || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gfrpindia.com";

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.meta_title,
    description: seo.meta_description,
    url: baseUrl,
    publisher: {
      "@type": "Organization",
      name: seo.schema?.organization?.name || "GFRP India",
      url: seo.schema?.organization?.url || baseUrl,
      logo: seo.schema?.organization?.logo?.url
        ? { "@type": "ImageObject", url: seo.schema.organization.logo.url }
        : undefined,
    },
  };

  // Site Navigation
  if (seo.schema?.site_navigation?.length) {
    jsonLd.hasPart = {
      "@type": "SiteNavigationElement",
      name: "Main Menu",
      element: seo.schema.site_navigation.map((item: any) => ({
        "@type": "SiteNavigationElement",
        name: item.name,
        url: item.url,
      })),
    };
  }

  // HowTo (from About → How to Start)
  const aboutSection = data.sections?.find(
    (s: any) => s.sectionType === "about"
  );
  if (aboutSection?.about?.howToStart?.steps?.length) {
    const howToSteps = aboutSection.about.howToStart.steps.map((step: any) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description?.root?.children
        ?.map((n: any) => n.children?.[0]?.text || "")
        .join(" "),
      image: step.icon?.url || step.iconUrl,
    }));

    jsonLd.howTo = {
      "@type": "HowTo",
      name:
        aboutSection.about.howToStart.title || "How to Get Started with GFRP",
      totalTime: seo.schema?.howto_schema?.totalTime || "PT15M",
      step: howToSteps,
    };
  }

  // FAQ
  if (seo.schema?.faq_schema?.length) {
    jsonLd.hasPart = jsonLd.hasPart || {};
    jsonLd.hasPart["@type"] = "FAQPage";
    jsonLd.hasPart.mainEntity = seo.schema.faq_schema.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }));
  }

  // Breadcrumb
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
export default async function Home() {
  const homePageData = await fetchHomePage();
  const productSectionData = await fetchProductSection();
  const resourcesData = await fetchResourcesSection();
  const allBlogs = await fetchBlogs();
  const featuredBlog = await fetchFeaturedBlog();
  const faqData = await fetchFAQSection();

  if (!homePageData || !homePageData.sections) {
    return <div>No content available</div>;
  }

  return (
    <>
      {/* JSON-LD for Rich Results */}
      <HomeJSONLD data={homePageData} />

      <main className="main-wrapper sub-pages">
        {homePageData.sections.map((section: any, index: number) => {
          if (!section.isActive) return null;

          if (section.sectionType === "hero" && section.hero) {
            return <Hero key={`hero-${index}`} data={section.hero} />;
          }

          if (section.sectionType === "about" && section.about) {
            return <AboutSection key={`about-${index}`} data={section.about} />;
          }

          return null;
        })}

        <LogoSection />

        {productSectionData && <ProjectsSection data={productSectionData} />}

        <ResourcesSection data={resourcesData} />

        <BlogSection allBlogs={allBlogs} featuredBlog={featuredBlog} />

        <FAQSection data={faqData} />

        <Footer />
      </main>
    </>
  );
}
// "use client";

// import React from "react";

// import LogoSection from "@/components/LogoSection";
// import AboutSection from "@/components/AboutSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import BlogSection from "@/components/BlogSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import FAQSection from "@/components/FAQSection";
// import Footer from "@/components/Footer";
// import ResourcesHero from "@/components/resources/Hero";
// import ResourcesSection from "@/components/resources/ResourcesSection";
// import ProductHero from "@/components/products/Hero";
// import ProductSection from "@/components/products/ProductSection";
// import ContactHero from "@/components/contact/Hero";
// import AboutHero from "@/components/about/Hero";
// import StorySection from "@/components/about/StorySection";
// import ValueFunction from "@/components/about/ValueSection";
// import WhySection from "@/components/about/WhySection";
// import NewFAQSection from "@/components/NewFaqSectio";

// export default function Contact() {
//   return (
//     <>
//       <main className="main-wrapper sub-pages">
//               {/* <AboutHero /> */}
//               {/* <LogoSection /> */}
//               <StorySection />
//               {/* <ValueFunction /> */}
//               {/* <WhySection /> */}
//         {/* <TestimonialsSection /> */}
//         <FAQSection />
//         {/* <NewFAQSection /> */}
//       </main>
//       <Footer />
//     </>
//   );
// }


// app/about/page.tsx

import React from "react";
import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StorySection from "@/components/about/StorySection";
import ValueFunction from "@/components/about/ValueSection";
import WhySection from "@/components/about/WhySection";
import NewFAQSection from "@/components/NewFaqSectio";

// Import the fetch function
import { fetchStorySection } from "@/lib/story";
import { fetchFAQSection } from "@/lib/Faq";

export default async function AboutPage() {
  // Fetch data at page level (server-side)
  const storyData = await fetchStorySection();
  const faqData = await fetchFAQSection();

  return (
    <>
      <main className="main-wrapper sub-pages">
        {/* Pass data as props */}
        <StorySection data={storyData} />
        <FAQSection data={faqData} />
      </main>
      <Footer />
    </>
  );
}
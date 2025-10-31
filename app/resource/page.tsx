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
import ProductSection from "@/components/Products";
import ResourcesHero from "@/components/resources/Hero";
import ResourcesSection from "@/components/resources/ResourcesSection";
import { fetchResourcesSection } from "@/lib/resource-section";
import { fetchFAQSection } from "@/lib/Faq";

export default async function Resources() {
  const resourcesData = await fetchResourcesSection();
  const faqData = await fetchFAQSection();
  return (
    <>
      <main className="main-wrapper sub-pages">
        {/* <ResourcesHero /> */}
        <ResourcesSection data={resourcesData} />
        {/* <TestimonialsSection /> */}
        <FAQSection data={faqData} />
      </main>
      <Footer />
    </>
  );
}

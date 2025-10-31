// "use client";

import React from "react";

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
import ContactHero from "@/components/contact/Hero";
import { fetchContactSection } from "@/lib/contact";
import { fetchFAQSection } from "@/lib/Faq";

export default async function Contact() {
  const contactData = await fetchContactSection();
  const faqData = await fetchFAQSection();
  return (
    <>
      <main className="main-wrapper sub-pages">
        <ContactHero contactData={contactData} />
        {/* <TestimonialsSection /> */}
        <FAQSection data={faqData} />
      </main>
      <Footer />
    </>
  );
}

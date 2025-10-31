// "use client";

import React from "react";

import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/Hero";
import ResourcesSection from "@/components/resources/ResourcesSection";
import ProductHero from "@/components/products/Hero";
import ProductSection from "@/components/products/ProductSection";
import BlogHero from "@/components/blog/Hero";
import BlogSection from "@/components/blog/BlogSection";

import { fetchBlogs, fetchFeaturedBlog, getImageUrl } from "@/lib/blog";
import { fetchFAQSection } from "@/lib/Faq";

export default async function Blog() {
  const allBlogs = await fetchBlogs();
  const featuredBlog = await fetchFeaturedBlog();
  const faqData = await fetchFAQSection();
  return (
    <>
      <main className="main-wrapper sub-pages">
        {/* <BlogHero /> */}
        <BlogSection allBlogs={allBlogs} featuredBlog={featuredBlog} />
        {/* <TestimonialsSection /> */}
        <FAQSection data={faqData} />
      </main>
      <Footer />
    </>
  );
}

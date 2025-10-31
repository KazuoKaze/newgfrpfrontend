// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import axios from "axios";

// // import { motion } from "framer-motion";
// // import FadeInOnScroll from "./animation/FadeInOnScroll";
// // import { useLoader } from "./LoaderContext";

// // const BlogSection = () => {
// //   const blogs = Array(3).fill({
// //     image: "https://composite-tech.com/wp-content/uploads/2024/09/Untitled.jpg",
// //     tag: "News",
// //     readTime: "8 mins read",
// //     title: "Advancing U.S. Infrastructure with GFRP Rebar",
// //     summary:
// //       "Glass Fiber Reinforced Polymer (GFRP) rebar is revolutionizing the U.S. construction industry by offering superior corrosion resistance, lightweight properties, and high tensile strength.",
// //     author: {
// //       name: "Jakob Ekstrom Bothman",
// //       image:
// //         "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp",
// //       date: "March 31, 2025",
// //     },
// //   });

// //   const [blog, setBlog] = useState(null);

// //   const { setHideLoader } = useLoader();
  
// //     function doReverse(e) {
// //       // e.preventDefault();
// //       setHideLoader(false);
  
// //       setTimeout(() => {
// //         setHideLoader(true);
// //       }, 4000);
// //     }

// //   useEffect(() => {
// //     axios
// //       .get("https://gfrp-india.onrender.com/api/blog_home_list/") // your Django endpoint
// //       .then((response) => {
// //         setBlog(response.data); // it's a single object, not an array
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching hero section:", error);
// //       });
// //   }, []);

  

// //   if (!blog) return ;

  

// //   return (
// //     <section className="section_blogs">
// //       <div className="padding-global padding-0">
// //         <div className="container-large">
// //           <div className="blogs_wrapper">
// //             <div className="projects_top-container">
// //               <div className="services_top-container project-section">
// //                 <FadeInOnScroll>
// //                   <div className="about-us_text-dot-wrap">
// //                     <div
// //                       className="about-us_heading-dot"
// //                       style={{ backgroundColor: "#ff6b35" }}
// //                     ></div>
// //                     <div className="about-us_heading">BLOG</div>
// //                   </div>
// //                 </FadeInOnScroll>
// //                 <FadeInOnScroll delay={0.2}>
// //                   <h2 className="services_main-heading cc-heading-h3">
// //                     Insights &amp; updates
// //                   </h2>
// //                 </FadeInOnScroll>
// //               </div>
// //               <FadeInOnScroll delay={0.2}>
// //                 <Link href="#" className="projects_linkblock w-inline-block" onClick={doReverse}>
// //                   <div className="projects_cta-text">View all blogs</div>
// //                   <Image
// //                     src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
// //                     loading="lazy"
// //                     alt=""
// //                     className="projects_cta-arrow"
// //                     width={16}
// //                     height={16}
// //                   />
// //                 </Link>
// //               </FadeInOnScroll>
// //             </div>
// //             <div className="blogs_wrap">
// //               <div className="blogs_collection-list-wrapper w-dyn-list">
// //                 <div role="list" className="blogs_collection-list w-dyn-items">
                  
// //                   {blog.slice(0, 3).map((item, index) => (
// //                     <motion.div
// //                       key={index}
// //                       role="listitem"
// //                       className="blogs_collection-item w-dyn-item"
// //                       initial={{ opacity: 0 }}
// //                       whileInView={{ opacity: 1 }}
// //                       transition={{
// //                         duration: 0.7,
// //                         ease: "easeOut",
// //                         delay: index * 0.2,
// //                       }}
// //                       viewport={{ once: true, amount: 0.2 }}
// //                     >
// //                       <Link
// //                         href={`/blog/${item.slug}`}
// //                         className="blogs_linkblock w-inline-block"
// //                         onClick={doReverse}
// //                       >
// //                         <div className="blogs_image-wrapper">
// //                           <Image
// //                             src={item.image}
// //                             loading="lazy"
// //                             alt=""
// //                             className="blogs_main-image"
// //                             width={400}
// //                             height={250}
// //                           />
// //                         </div>
// //                         <div className="blogs_content-wrap">
// //                           <div className="blogs_middle-container-wrap">
// //                             <div className="blogs_tag">{item.tag}</div>
// //                             <div className="blog_reading-time">
// //                               {item.min_read} min read
// //                             </div>
// //                           </div>
// //                           <h3 className="blog_title">{item.title}</h3>
// //                           <p className="blog_summary">{item.description}</p>
// //                           <div className="blog_author-wrap">
// //                             <div className="blog_author-image-wrap">
// //                               <Image
// //                                 src={item.author.profile_picture}
// //                                 loading="lazy"
// //                                 alt=""
// //                                 className="blog_author-image"
// //                                 width={40}
// //                                 height={40}
// //                               />
// //                             </div>
// //                             <div className="blog_author-detail-wrap">
// //                               <h4 className="blog_author-name">
// //                                 {item.author.name}
// //                               </h4>
// //                               <p className="blog_author-position">
// //                                 {new Date(
// //                                   item.author.created_at
// //                                 ).toLocaleDateString("en-US", {
// //                                   year: "numeric",
// //                                   month: "long",
// //                                   day: "numeric",
// //                                 })}
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </Link>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogSection;



// "use client";

// import React from "react";

// const BlogSection = () => {
//   const blogs = Array(3).fill({
//     image: "https://composite-tech.com/wp-content/uploads/2024/09/Untitled.jpg",
//     tag: "News",
//     readTime: "8 mins read",
//     title: "Advancing U.S. Infrastructure with GFRP Rebar",
//     summary:
//       "Glass Fiber Reinforced Polymer (GFRP) rebar is revolutionizing the U.S. construction industry by offering superior corrosion resistance, lightweight properties, and high tensile strength.",
//     author: {
//       name: "Jakob Ekstrom Bothman",
//       image:
//         "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp",
//       date: "March 31, 2025",
//     },
//   });

//   // Demo data
//   const blog = [
//     {
//       slug: "innovative-solutions-2025",
//       image:
//         "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tag: "Innovation",
//       min_read: "5",
//       title: "Innovative Solutions for Modern Construction",
//       description:
//         "Discover how cutting-edge technology is transforming the construction industry with sustainable and efficient building materials.",
//       author: {
//         name: "Sarah Johnson",
//         profile_picture:
//           "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp",
//         created_at: "2025-03-15",
//       },
//     },
//     {
//       slug: "sustainable-infrastructure",
//       image:
//         "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tag: "Sustainability",
//       min_read: "7",
//       title: "Building Sustainable Infrastructure for Tomorrow",
//       description:
//         "Explore the latest trends in eco-friendly construction practices and materials that are shaping the future of infrastructure development.",
//       author: {
//         name: "Michael Chen",
//         profile_picture:
//           "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp",
//         created_at: "2025-03-20",
//       },
//     },
//     {
//       slug: "advanced-materials-guide",
//       image:
//         "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tag: "Technology",
//       min_read: "6",
//       title: "A Comprehensive Guide to Advanced Building Materials",
//       description:
//         "Learn about the revolutionary materials that are changing the way we approach construction projects, from strength to durability.",
//       author: {
//         name: "Emily Rodriguez",
//         profile_picture:
//           "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp",
//         created_at: "2025-03-25",
//       },
//     },
//   ];

//   return (
//     <section className="section_blogs">
//       <div className="padding-global padding-0">
//         <div className="container-large">
//           <div className="blogs_wrapper">
//             <div className="projects_top-container">
//               <div className="services_top-container project-section">
//                 <div>
//                   <div className="about-us_text-dot-wrap">
//                     <div
//                       className="about-us_heading-dot"
//                       style={{ backgroundColor: "#ff6b35" }}
//                     ></div>
//                     <div className="about-us_heading">BLOG</div>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="services_main-heading cc-heading-h3">
//                     Insights &amp; updates
//                   </h2>
//                 </div>
//               </div>
//               <div>
//                 <a href="#" className="projects_linkblock w-inline-block">
//                   <div className="projects_cta-text">View all blogs</div>
//                   <img
//                     src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
//                     loading="lazy"
//                     alt=""
//                     className="projects_cta-arrow"
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="blogs_wrap">
//               <div className="blogs_collection-list-wrapper w-dyn-list">
//                 <div role="list" className="blogs_collection-list w-dyn-items">
//                   {blog.slice(0, 3).map((item, index) => (
//                     <div
//                       key={index}
//                       role="listitem"
//                       className="blogs_collection-item w-dyn-item"
//                     >
//                       <a
//                         href={`/blog/${item.slug}`}
//                         className="blogs_linkblock w-inline-block"
//                       >
//                         <div className="blogs_image-wrapper">
//                           <img
//                             src={item.image}
//                             loading="lazy"
//                             alt=""
//                             className="blogs_main-image"
//                           />
//                         </div>
//                         <div className="blogs_content-wrap">
//                           <div className="blogs_middle-container-wrap">
//                             <div className="blogs_tag">{item.tag}</div>
//                             <div className="blog_reading-time">
//                               {item.min_read} min read
//                             </div>
//                           </div>
//                           <h3 className="blog_title">{item.title}</h3>
//                           <p className="blog_summary">{item.description}</p>
//                           <div className="blog_author-wrap">
//                             <div className="blog_author-image-wrap">
//                               <img
//                                 src={item.author.profile_picture}
//                                 loading="lazy"
//                                 alt=""
//                                 className="blog_author-image"
//                               />
//                             </div>
//                             <div className="blog_author-detail-wrap">
//                               <h4 className="blog_author-name">
//                                 {item.author.name}
//                               </h4>
//                               <p className="blog_author-position">
//                                 {new Date(
//                                   item.author.created_at
//                                 ).toLocaleDateString("en-US", {
//                                   year: "numeric",
//                                   month: "long",
//                                   day: "numeric",
//                                 })}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;



"use client";

import { getImageUrl } from "@/lib/blog"; // Adjust path as needed

export default function BlogSection({ allBlogs, featuredBlog }) {
  // Filter for featured blogs and take first 3
  const featuredBlogs = allBlogs
    .filter((blog: any) => blog.isFeatured)
    .slice(0, 3);

  return (
    <section className="section_blogs">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="blogs_wrapper">
            <div className="projects_top-container">
              <div className="services_top-container project-section">
                <div>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: "#ff6b35" }}
                    ></div>
                    <div className="about-us_heading">BLOG</div>
                  </div>
                </div>
                <div>
                  <h2 className="services_main-heading cc-heading-h3">
                    Insights &amp; updates
                  </h2>
                </div>
              </div>
              <div>
                <a href="/blog" className="projects_linkblock w-inline-block">
                  <div className="projects_cta-text">View all blogs</div>
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
                    loading="lazy"
                    alt=""
                    className="projects_cta-arrow"
                  />
                </a>
              </div>
            </div>
            <div className="blogs_wrap">
              <div className="blogs_collection-list-wrapper w-dyn-list">
                <div role="list" className="blogs_collection-list w-dyn-items">
                  {featuredBlogs.map((item: any, index: number) => (
                    <div
                      key={item.id || index}
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
                    >
                      <a
                        href={`/blog/${item.slug}`}
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src={getImageUrl(item.image)}
                            loading="lazy"
                            alt={item.title}
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">{item.tag}</div>
                            <div className="blog_reading-time">
                              {item.min_read} min read
                            </div>
                          </div>
                          <h3 className="blog_title">{item.title}</h3>
                          <p className="blog_summary">{item.description}</p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src={getImageUrl(item.author.profile_picture)}
                                loading="lazy"
                                alt={item.author.name}
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">
                                {item.author.name}
                              </h4>
                              <p className="blog_author-position">
                                {new Date(item.created_at).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
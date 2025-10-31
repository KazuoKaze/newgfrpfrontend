// import Link from "next/link";

// import { motion } from "framer-motion";
// import FadeInOnScroll from "../animation/FadeInOnScroll";
// import { useLoader } from "../LoaderContext";


// export default function SingleBlog({ singleblog }) {
//   const { setHideLoader } = useLoader();
    
//       function doReverse(e) {
//         // e.preventDefault();
//         setHideLoader(false);
    
//         setTimeout(() => {
//           setHideLoader(true);
//         }, 4000);
//       }
//   return (
//     <section className="section_blog">
//       <div className="padding-global padding-0">
//         <div className="container-large">
//           <div className="blog_wrapper">
//             <motion.div
//               className="blog-collection_body w-richtext"
//               dangerouslySetInnerHTML={{ __html: singleblog.content }}
              
//             >
              
//             </motion.div>
//             <div className="blog_featured-wrapper recent-blog">
//               <FadeInOnScroll>
//                 <div className="projects_top-container">
//                   <div className="services_top-container project-section">
//                     <h2 className="services_main-heading cc-heading-h3">
//                       More Blogs
//                     </h2>
//                   </div>
//                   <Link
//                     href="/blog"
//                     className="projects_linkblock w-inline-block"
//                     onClick={doReverse}
//                   >
//                     <div className="projects_cta-text">View all blogs</div>
//                     <img
//                       src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
//                       loading="lazy"
//                       alt=""
//                       className="projects_cta-arrow"
//                     />
//                   </Link>
//                 </div>
//               </FadeInOnScroll>
//               <div className="blogs_collection-list-wrapper more-blogs w-dyn-list">
//                 <div role="list" className="blogs_collection-list w-dyn-items">
//                   {singleblog.related_blogs.map((item, index) => (
//                     <motion.div
//                       role="listitem"
//                       className="blogs_collection-item w-dyn-item"
//                       key={index}
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{
//                         duration: 0.7,
//                         ease: "easeOut",
//                         delay: index * 0.2,
//                       }}
//                       viewport={{ once: true, amount: 0.2 }}
//                     >
//                       <Link
//                         href={`/blog/${item.slug}`}
//                         className="blogs_linkblock w-inline-block"
//                         onClick={doReverse}
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
//                               {item.min_read} mins read
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
//                                 {new Date(item.created_at).toLocaleDateString(
//                                   "en-US",
//                                   {
//                                     year: "numeric",
//                                     month: "long",
//                                     day: "numeric",
//                                   }
//                                 )}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import { useLoader } from "../LoaderContext";
import { getImageUrl } from "@/lib/blog";

export default function SingleBlog({ singleblog, contentHtml }) {
  const { setHideLoader } = useLoader();

  function doReverse(e) {
    // e.preventDefault();
    setHideLoader(false);

    setTimeout(() => {
      setHideLoader(true);
    }, 4000);
  }

  return (
    <section className="section_blog">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="blog_wrapper">
            <motion.div
              className="blog-collection_body w-richtext"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            ></motion.div>
            <div className="blog_featured-wrapper recent-blog">
              <FadeInOnScroll>
                <div className="projects_top-container">
                  <div className="services_top-container project-section">
                    <h2 className="services_main-heading cc-heading-h3">
                      More Blogs
                    </h2>
                  </div>
                  <Link
                    href="/blog"
                    className="projects_linkblock w-inline-block"
                    onClick={doReverse}
                  >
                    <div className="projects_cta-text">View all blogs</div>
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
                      loading="lazy"
                      alt=""
                      className="projects_cta-arrow"
                    />
                  </Link>
                </div>
              </FadeInOnScroll>
              <div className="blogs_collection-list-wrapper more-blogs w-dyn-list">
                <div role="list" className="blogs_collection-list w-dyn-items">
                  {singleblog.related_blogs &&
                    singleblog.related_blogs.length > 0 &&
                    singleblog.related_blogs.map((item, index) => (
                      <motion.div
                        role="listitem"
                        className="blogs_collection-item w-dyn-item"
                        key={item.id || index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <Link
                          href={`/blog/${item.slug}`}
                          className="blogs_linkblock w-inline-block"
                          onClick={doReverse}
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
                                {item.min_read} mins read
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
                        </Link>
                      </motion.div>
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
// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import axios from "axios";

// // import { motion } from "framer-motion";
// // import FadeInOnScroll from "../animation/FadeInOnScroll";
// // import { useLoader } from "../LoaderContext";


// // export default function ProductSection() {
// //   const { setHideLoader } = useLoader();
    
// //       function doReverse(e) {
// //         // e.preventDefault();
// //         setHideLoader(false);
    
// //         setTimeout(() => {
// //           setHideLoader(true);
// //         }, 4000);
// //       }
// //   const applications = [
// //     {
// //       title: "Industrial construction",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
// //     },
// //     {
// //       title: "Civil construction",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
// //     },
// //     {
// //       title: "Road construction",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
// //     },
// //     {
// //       title: "Marine and harbor",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/electric-factory-r1c6owc7oqhxevs3jl6ulurdtuqvywejyj7p37ci1k.png",
// //     },
// //     {
// //       title: "Agricultural structures",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/school-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
// //     },
// //     {
// //       title: "Reinforcement",
// //       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/bridge-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
// //     },
// //   ];

// //   const sliderImages = [
// //     "https://i.postimg.cc/DZST0Mrs/8822efb512bc43b32ba7a801e2ccfc83.jpg",
// //     "https://i.postimg.cc/g0wSZF7Y/22-r1c6ovelaknvu32s7gtck3rekd3nuf5eg18o2u977c.jpg",
// //     "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb1b5b7337bfcaa94d911d_services%20(3).webp",
// //   ];



// //   const ProjectBlock = () => (
// //     <div className="project_block">
// //       <div className="projects_left-container">
// //         <h2 className="projects_main-heading cc-heading-h5">
// //           FIBERGLASS REBAR (GFRP)
// //         </h2>
// //         <p className="projects_block-subtext cc-title-small">
// //           GFRP, or Glass Fiber Reinforced Polymer, is a composite material that
// //           has the potential to be transformative in various constructive
// //           industries.
// //         </p>
// //         <div className="projects_tags-wrap">
// //           <div className="projects_tag-icon-text">
// //             <Image
// //               src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
// //               loading="lazy"
// //               alt=""
// //               className="projects_tag-icon"
// //               width={24}
// //               height={24}
// //             />
// //             <div className="projects_tag-text">FIBERGLASS</div>
// //           </div>
// //         </div>
// //         <div className="projects_result-wrap">
// //           <h3 className="project_result-heading cc-caption">Application</h3>
// //           <div className="projects_result-grid">
// //             {applications.map((app, index) => (
// //               <div key={index} className="projects_result-stats-wrap">
// //                 <h4 className="project_result-stat-heading cc-caption">
// //                   {app.title}
// //                 </h4>
// //                 <p className="projects_result-wrap-value cc-subtitle">
// //                   <Image
// //                     height={35}
// //                     width={34}
// //                     className="about_list-icon"
// //                     src={app.icon}
// //                     alt=""
// //                   />
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <Link
// //           data-wf--cta-link--variant="primary"
// //           href=""
// //           className="cta-linkblock cc-is-primary w-inline-block"
// //           onClick={doReverse}
// //         >
// //           <div className="cta-linkblock_text">VIEW product</div>
// //           <div className="cta-icon_wrap">
// //             <div className="cta-btn_icon w-embed">
// //               <Image
// //                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                 alt="Arrow"
// //                 width={16}
// //                 height={16}
// //               />
// //             </div>
// //             <div className="cta-btn_icon is-absolute w-embed">
// //               <Image
// //                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                 alt="Arrow"
// //                 width={16}
// //                 height={16}
// //               />
// //             </div>
// //           </div>
// //         </Link>
// //       </div>
// //       <div className="projects_right-container">
// //         <div
// //           data-delay="4000"
// //           data-animation="slide"
// //           className="project_slider w-slider"
// //           data-autoplay="false"
// //           data-easing="ease"
// //           data-hide-arrows="false"
// //           data-disable-swipe="false"
// //           data-autoplay-limit="0"
// //           data-nav-spacing="3"
// //           data-duration="500"
// //           data-infinite="true"
// //         >
// //           <div className="project_slider-mask w-slider-mask">
// //             {sliderImages.map((img, index) => (
// //               <div key={index} className="project_slider-slide w-slide">
// //                 <div className="project_slider-image-wrapper">
// //                   <Image
// //                     src={img}
// //                     loading="lazy"
// //                     alt=""
// //                     sizes="100vw"
// //                     className="project_slider-image"
// //                     width={560}
// //                     height={400}
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="project_slider-arrow left-arrow w-slider-arrow-left">
// //             <Image
// //               src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
// //               loading="lazy"
// //               alt=""
// //               className="project_slider-arrow-icon left-arrow"
// //               width={16}
// //               height={16}
// //             />
// //           </div>
// //           <div className="project_slider-arrow w-slider-arrow-right">
// //             <Image
// //               src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
// //               loading="lazy"
// //               alt=""
// //               className="project_slider-arrow-icon"
// //               width={16}
// //               height={16}
// //             />
// //           </div>
// //           <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
// //         </div>
// //       </div>
// //     </div>
// //   );


// //   const [productss, setProductss] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get("https://gfrp-india.onrender.com/api/single_product_section/") // your Django endpoint
// //       .then((response) => {
// //         setProductss(response.data); // it's a single object, not an array
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching hero section:", error);
// //       });
// //   }, []);

// //   if (!productss) return ;

// //   return (
    
// //     <section className="section_projects">
// //       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
// //         <div className="container-large">
// //           <div className="projects_wrapper">
// //             <div className="projects_top-container">
// //               <div className="services_top-container project-section">
// //                 <FadeInOnScroll>
// //                   <div className="about-us_text-dot-wrap">
// //                     <div
// //                       className="about-us_heading-dot"
// //                       style={{ backgroundColor: "#ff6b35" }}
// //                     ></div>
// //                     <div className="about-us_heading">Machine</div>
// //                   </div>
// //                 </FadeInOnScroll>
// //                 <FadeInOnScroll delay={0.2}>
// //                   <h2 className="services_main-heading cc-heading-h3">
// //                     {productss.title}
// //                   </h2>
// //                 </FadeInOnScroll>
// //               </div>
              
// //             </div>
// //             <div className="projects-collection-list-wrapper w-dyn-list">
// //               <div role="list" className="projects-collection-list w-dyn-items">
// //                 {productss?.single_products?.map((product, index) => (
// //                   <React.Fragment key={index}>
// //                     <motion.div
// //                       role="listitem"
// //                       className="projects-collection-item w-dyn-item"
// //                       initial={{ opacity: 0 }}
// //                       whileInView={{ opacity: 1 }}
// //                       transition={{
// //                         duration: 0.7,
// //                         ease: "easeOut",
// //                         delay: index * 0.2,
// //                       }}
// //                       viewport={{ once: true, amount: 0.2 }}
// //                     >
// //                       <div className="project_block">
// //                         <div className="projects_left-container">
// //                           <h2 className="projects_main-heading cc-heading-h5">
// //                             {product.title}
// //                           </h2>
// //                           <p
// //                             className="projects_block-subtext cc-title-small"
// //                             dangerouslySetInnerHTML={{
// //                               __html: product.description,
// //                             }}
// //                           >
// //                             {/* GFRP, or Glass Fiber Reinforced Polymer, is a
// //                           composite material that has the potential to be
// //                           transformative in various constructive industries. */}
// //                           </p>
// //                           <div className="projects_tags-wrap">
// //                             <div className="projects_tag-icon-text">
// //                               <Image
// //                                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
// //                                 loading="lazy"
// //                                 alt=""
// //                                 className="projects_tag-icon"
// //                                 width={24}
// //                                 height={24}
// //                               />
// //                               <div className="projects_tag-text">
// //                                 {product.tag}
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="projects_result-wrap">
// //                             <h3 className="project_result-heading cc-caption">
// //                               Application
// //                             </h3>
// //                             <div className="projects_result-grid">
// //                               {product.application?.map((app, indexS) => (
// //                                 <div
// //                                   key={indexS}
// //                                   className="projects_result-stats-wrap"
// //                                 >
// //                                   <h4 className="project_result-stat-heading cc-caption">
// //                                     {app.title}
// //                                   </h4>
// //                                   <p className="projects_result-wrap-value cc-subtitle">
// //                                     <Image
// //                                       height={35}
// //                                       width={34}
// //                                       className="about_list-icon"
// //                                       src={app.image}
// //                                       alt=""
// //                                     />
// //                                   </p>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           </div>
// //                           <Link
// //                             data-wf--cta-link--variant="primary"
// //                             href="/contact"
// //                             className="cta-linkblock cc-is-primary w-inline-block"
// //                             onClick={doReverse}
// //                           >
// //                             <div className="cta-linkblock_text">Contact us</div>
// //                             <div className="cta-icon_wrap">
// //                               <div className="cta-btn_icon w-embed">
// //                                 <Image
// //                                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                                   alt="Arrow"
// //                                   width={16}
// //                                   height={16}
// //                                 />
// //                               </div>
// //                               <div className="cta-btn_icon is-absolute w-embed">
// //                                 <Image
// //                                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                                   alt="Arrow"
// //                                   width={16}
// //                                   height={16}
// //                                 />
// //                               </div>
// //                             </div>
// //                           </Link>
// //                         </div>
// //                         <div className="projects_right-container">
// //                           <div
// //                             data-delay="4000"
// //                             data-animation="slide"
// //                             className="project_slider w-slider"
// //                             data-autoplay="false"
// //                             data-easing="ease"
// //                             data-hide-arrows="false"
// //                             data-disable-swipe="false"
// //                             data-autoplay-limit="0"
// //                             data-nav-spacing="3"
// //                             data-duration="500"
// //                             data-infinite="true"
// //                           >
// //                             <div className="project_slider-mask w-slider-mask">
// //                               {/* {product.image?.map((img, inD) => ( */}
// //                               <div
// //                                 // key={inD}
// //                                 className="project_slider-slide w-slide"
// //                               >
// //                                 <div className="project_slider-image-wrapper">
// //                                   <Image
// //                                     src={product.image}
// //                                     loading="lazy"
// //                                     alt=""
// //                                     sizes="100vw"
// //                                     className="project_slider-image"
// //                                     width={560}
// //                                     height={400}
// //                                   />
// //                                 </div>
// //                               </div>
                              
// //                             </div>
                            
// //                             <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   </React.Fragment>
// //                 ))}
// //                 <div
// //                   role="listitem"
// //                   className="projects-collection-item w-dyn-item"
// //                 >
// //                   {/* <ProjectBlock /> */}
// //                 </div>
// //                 <div
// //                   role="listitem"
// //                   className="projects-collection-item w-dyn-item"
// //                 >
// //                   {/* <ProjectBlock /> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import React from "react";

// export default function ProductSection() {
//   const setHideLoader = () => {}; // Mock function

//   function doReverse(e) {
//     e.preventDefault();
//     setHideLoader(false);

//     setTimeout(() => {
//       setHideLoader(true);
//     }, 4000);
//   }

//   const applications = [
//     {
//       title: "Industrial construction",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//     },
//     {
//       title: "Civil construction",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//     },
//     {
//       title: "Road construction",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//     },
//     {
//       title: "Marine and harbor",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/electric-factory-r1c6owc7oqhxevs3jl6ulurdtuqvywejyj7p37ci1k.png",
//     },
//     {
//       title: "Agricultural structures",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/school-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//     },
//     {
//       title: "Reinforcement",
//       icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/bridge-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//     },
//   ];

//   const sliderImages = [
//     "https://i.postimg.cc/DZST0Mrs/8822efb512bc43b32ba7a801e2ccfc83.jpg",
//     "https://i.postimg.cc/g0wSZF7Y/22-r1c6ovelaknvu32s7gtck3rekd3nuf5eg18o2u977c.jpg",
//     "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb1b5b7337bfcaa94d911d_services%20(3).webp",
//   ];

//   // Demo data replacing the dynamic API data
//   const productss = {
//     title: "Advanced Manufacturing Solutions",
//     single_products: [
//       {
//         title: "FIBERGLASS REBAR (GFRP)",
//         description:
//           "GFRP, or Glass Fiber Reinforced Polymer, is a composite material that has the potential to be transformative in various constructive industries. It offers superior corrosion resistance and strength-to-weight ratio.",
//         tag: "FIBERGLASS",
//         image:
//           "https://i.postimg.cc/DZST0Mrs/8822efb512bc43b32ba7a801e2ccfc83.jpg",
//         application: [
//           {
//             title: "Industrial construction",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Civil construction",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Road construction",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Marine and harbor",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/electric-factory-r1c6owc7oqhxevs3jl6ulurdtuqvywejyj7p37ci1k.png",
//           },
//           {
//             title: "Agricultural structures",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/school-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Reinforcement",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/bridge-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//         ],
//       },
//       {
//         title: "CARBON FIBER COMPOSITES",
//         description:
//           "Carbon Fiber Reinforced Polymer (CFRP) provides exceptional strength and lightweight properties, making it ideal for high-performance structural applications. It delivers superior stiffness and durability.",
//         tag: "CARBON FIBER",
//         image:
//           "https://i.postimg.cc/g0wSZF7Y/22-r1c6ovelaknvu32s7gtck3rekd3nuf5eg18o2u977c.jpg",
//         application: [
//           {
//             title: "Aerospace structures",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Automotive components",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "High-rise buildings",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Bridge reinforcement",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/bridge-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//         ],
//       },
//       {
//         title: "BASALT FIBER SYSTEMS",
//         description:
//           "Basalt Fiber Reinforced Polymer (BFRP) combines the benefits of natural basalt rock with advanced polymer technology. It offers excellent thermal resistance and environmental sustainability.",
//         tag: "BASALT FIBER",
//         image:
//           "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb1b5b7337bfcaa94d911d_services%20(3).webp",
//         application: [
//           {
//             title: "Thermal insulation",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Fire protection",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Seismic retrofit",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//           {
//             title: "Marine structures",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/electric-factory-r1c6owc7oqhxevs3jl6ulurdtuqvywejyj7p37ci1k.png",
//           },
//           {
//             title: "Underground works",
//             image:
//               "https://composite-tech.com/wp-content/uploads/elementor/thumbs/school-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <section className="section_projects">
//       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
//         <div className="container-large">
//           <div className="projects_wrapper">
//             <div className="projects_top-container">
//               <div className="services_top-container project-section">
//                 <div>
//                   <div className="about-us_text-dot-wrap">
//                     <div
//                       className="about-us_heading-dot"
//                       style={{ backgroundColor: "#ff6b35" }}
//                     ></div>
//                     <div className="about-us_heading">Machine</div>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="services_main-heading cc-heading-h3">
//                     {productss.title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="projects-collection-list-wrapper w-dyn-list">
//               <div role="list" className="projects-collection-list w-dyn-items">
//                 {productss?.single_products?.map((product, index) => (
//                   <React.Fragment key={index}>
//                     <div
//                       role="listitem"
//                       className="projects-collection-item w-dyn-item"
//                     >
//                       <div className="project_block">
//                         <div className="projects_left-container">
//                           <h2 className="projects_main-heading cc-heading-h5">
//                             {product.title}
//                           </h2>
//                           <p
//                             className="projects_block-subtext cc-title-small"
//                             dangerouslySetInnerHTML={{
//                               __html: product.description,
//                             }}
//                           ></p>
//                           <div className="projects_tags-wrap">
//                             <div className="projects_tag-icon-text">
//                               <img
//                                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
//                                 loading="lazy"
//                                 alt=""
//                                 className="projects_tag-icon"
//                                 width={24}
//                                 height={24}
//                               />
//                               <div className="projects_tag-text">
//                                 {product.tag}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="projects_result-wrap">
//                             <h3 className="project_result-heading cc-caption">
//                               Application
//                             </h3>
//                             <div className="projects_result-grid">
//                               {product.application?.map((app, indexS) => (
//                                 <div
//                                   key={indexS}
//                                   className="projects_result-stats-wrap"
//                                 >
//                                   <h4 className="project_result-stat-heading cc-caption">
//                                     {app.title}
//                                   </h4>
//                                   <p className="projects_result-wrap-value cc-subtitle">
//                                     <img
//                                       height={35}
//                                       width={34}
//                                       className="about_list-icon"
//                                       src={app.image}
//                                       alt=""
//                                     />
//                                   </p>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                           <a
//                             data-wf--cta-link--variant="primary"
//                             href="/contact"
//                             className="cta-linkblock cc-is-primary w-inline-block"
//                             onClick={doReverse}
//                           >
//                             <div className="cta-linkblock_text">Contact us</div>
//                             <div className="cta-icon_wrap">
//                               <div className="cta-btn_icon w-embed">
//                                 <img
//                                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
//                                   alt="Arrow"
//                                   width={16}
//                                   height={16}
//                                 />
//                               </div>
//                               <div className="cta-btn_icon is-absolute w-embed">
//                                 <img
//                                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
//                                   alt="Arrow"
//                                   width={16}
//                                   height={16}
//                                 />
//                               </div>
//                             </div>
//                           </a>
//                         </div>
//                         <div className="projects_right-container">
//                           <div
//                             data-delay="4000"
//                             data-animation="slide"
//                             className="project_slider w-slider"
//                             data-autoplay="false"
//                             data-easing="ease"
//                             data-hide-arrows="false"
//                             data-disable-swipe="false"
//                             data-autoplay-limit="0"
//                             data-nav-spacing="3"
//                             data-duration="500"
//                             data-infinite="true"
//                           >
//                             <div className="project_slider-mask w-slider-mask">
//                               <div className="project_slider-slide w-slide">
//                                 <div className="project_slider-image-wrapper">
//                                   <img
//                                     src={product.image}
//                                     loading="lazy"
//                                     alt=""
//                                     sizes="100vw"
//                                     className="project_slider-image"
//                                     width={560}
//                                     height={400}
//                                   />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </React.Fragment>
//                 ))}
//                 <div
//                   role="listitem"
//                   className="projects-collection-item w-dyn-item"
//                 ></div>
//                 <div
//                   role="listitem"
//                   className="projects-collection-item w-dyn-item"
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import { getImageUrl, richTextToHtml } from "../../lib/product-section";

interface ProductSectionProps {
  data: any; // Pass the fetched data as prop
}

export default function ProductSection({ data }: ProductSectionProps) {
  const setHideLoader = () => {}; // Mock function

  function doReverse(e: React.MouseEvent) {
    e.preventDefault();
    setHideLoader(false);

    setTimeout(() => {
      setHideLoader(true);
    }, 4000);
  }

  // Fallback if no data
  if (!data) {
    return null;
  }

  // Sort and filter active products
  const activeProducts =
    data.products
      .sort((a: any, b: any) => (a.order || 0) - (b.order || 0)) || [];

  // Get section styles
  const sectionStyles = {
    backgroundColor: data.sectionStyles?.backgroundColor || "#ffffff",
    marginTop: data.sectionStyles?.marginTop || "100px",
    paddingTop: data.sectionStyles?.paddingTop || "0",
    paddingBottom: data.sectionStyles?.paddingBottom || "0",
  };

  return (
    <section
      className="section_projects"
      // style={{ backgroundColor: sectionStyles.backgroundColor }}
    >
      <div
        className="padding-global padding-0"
        style={{
          marginTop: sectionStyles.marginTop,
          paddingTop: sectionStyles.paddingTop,
          paddingBottom: sectionStyles.paddingBottom,
        }}
      >
        <div className="container-large">
          <div className="projects_wrapper">
            {/* Top Container */}
            <div
              className="projects_top-container"
              // style={{
              //   backgroundColor:
              //     data.topContainer?.styles?.backgroundColor || "transparent",
              //   color: data.topContainer?.styles?.textColor || "#000000",
              // }}
            >
              <div className="services_top-container project-section">
                {/* Dot Indicator */}
                {data.topContainer?.dotIndicator?.show && (
                  <div>
                    <div className="about-us_text-dot-wrap">
                      <div
                        className="about-us_heading-dot"
                        // style={{
                        //   backgroundColor:
                        //     data.topContainer?.dotIndicator?.color || "#ff6b35",
                        // }}
                      ></div>
                      <div
                        className="about-us_heading"
                        // style={{
                        //   color:
                        //     data.topContainer?.dotIndicator?.textColor ||
                        //     "#000000",
                        // }}
                      >
                        {data.topContainer?.dotIndicator?.text || "Machine"}
                      </div>
                    </div>
                  </div>
                )}

                {/* Main Heading */}
                <div>
                  <h2
                    className="services_main-heading cc-heading-h3"
                    // style={{
                    //   color: data.topContainer?.mainHeading?.color || "#000000",
                    //   fontSize:
                    //     data.topContainer?.mainHeading?.fontSize || "2.5rem",
                    //   fontWeight:
                    //     data.topContainer?.mainHeading?.fontWeight || "700",
                    // }}
                  >
                    {data.topContainer?.mainHeading?.text ||
                      "Advanced Manufacturing Solutions"}
                  </h2>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className="projects-collection-list-wrapper w-dyn-list">
              <div role="list" className="projects-collection-list w-dyn-items">
                {activeProducts.map((product: any, index: number) => {
                  // Sort and filter active applications
                  const activeApplications =
                    product.applicationsSection?.applications
                      ?.filter((app: any) => app.title)
                      .sort(
                        (a: any, b: any) => (a.order || 0) - (b.order || 0)
                      ) || [];

                  return (
                    <React.Fragment key={product.id || index}>
                      <div
                        role="listitem"
                        className="projects-collection-item w-dyn-item"
                      >
                        <div
                          className="project_block"
                          // style={{
                          //   backgroundColor:
                          //     product.styles?.backgroundColor || "transparent",
                          //   borderColor:
                          //     product.styles?.borderColor || "transparent",
                          //   borderWidth: product.styles?.borderWidth || "0px",
                          //   borderRadius: product.styles?.borderRadius || "0px",
                          //   borderStyle: "solid",
                          //   padding: product.styles?.padding || "20px",
                          //   marginBottom:
                          //     product.styles?.marginBottom || "40px",
                          // }}
                        >
                          {/* Left Container */}
                          <div
                            className="projects_left-container"
                            // style={{
                            //   backgroundColor:
                            //     product.leftContainer?.styles
                            //       ?.backgroundColor || "transparent",
                            //   color:
                            //     product.leftContainer?.styles?.textColor ||
                            //     "#000000",
                            // }}
                          >
                            {/* Title */}
                            <h2
                              className="projects_main-heading cc-heading-h5"
                              // style={{
                              //   color:
                              //     product.leftContainer?.titleStyles?.color ||
                              //     "#000000",
                              //   fontSize:
                              //     product.leftContainer?.titleStyles
                              //       ?.fontSize || "2rem",
                              //   fontWeight:
                              //     product.leftContainer?.titleStyles
                              //       ?.fontWeight || "700",
                              // }}
                            >
                              {product.leftContainer?.title}
                            </h2>

                            {/* Description */}
                            <p
                              className="projects_block-subtext cc-title-small"
                              // style={{
                              //   color:
                              //     product.leftContainer?.descriptionStyles
                              //       ?.color || "#666666",
                              //   fontSize:
                              //     product.leftContainer?.descriptionStyles
                              //       ?.fontSize || "1rem",
                              //   lineHeight:
                              //     product.leftContainer?.descriptionStyles
                              //       ?.lineHeight || "1.6",
                              // }}
                              dangerouslySetInnerHTML={{
                                __html: richTextToHtml(
                                  product.leftContainer?.description
                                ),
                              }}
                            ></p>

                            {/* Tag */}
                            {product.leftContainer?.tag?.show &&
                              product.leftContainer?.tag?.text && (
                                <div className="projects_tags-wrap">
                                  <div
                                    className="projects_tag-icon-text"
                                    // style={{
                                    //   backgroundColor:
                                    //     product.leftContainer?.tag?.styles
                                    //       ?.backgroundColor || "#f5f5f5",
                                    //   borderRadius:
                                    //     product.leftContainer?.tag?.styles
                                    //       ?.borderRadius || "20px",
                                    //   padding: "8px 16px",
                                    //   display: "inline-flex",
                                    //   alignItems: "center",
                                    //   gap: "8px",
                                    // }}
                                  >
                                    <img
                                      src={
                                        getImageUrl(
                                          product.leftContainer?.tag?.icon
                                        ) ||
                                        product.leftContainer?.tag?.iconUrl ||
                                        "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
                                      }
                                      loading="lazy"
                                      alt=""
                                      className="projects_tag-icon"
                                      width={24}
                                      height={24}
                                    />
                                    <div
                                      className="projects_tag-text"
                                      // style={{
                                      //   color:
                                      //     product.leftContainer?.tag?.styles
                                      //       ?.textColor || "#000000",
                                      // }}
                                    >
                                      {product.leftContainer?.tag?.text}
                                    </div>
                                  </div>
                                </div>
                              )}

                            {/* Applications */}
                            {product.applicationsSection?.show &&
                              activeApplications.length > 0 && (
                                <div
                                  className="projects_result-wrap"
                                  // style={{
                                  //   backgroundColor:
                                  //     product.applicationsSection?.styles
                                  //       ?.backgroundColor || "transparent",
                                  //   padding:
                                  //     product.applicationsSection?.styles
                                  //       ?.padding || "20px 0",
                                  // }}
                                >
                                  <h3
                                    className="project_result-heading cc-caption"
                                    // style={{
                                    //   color:
                                    //     product.applicationsSection
                                    //       ?.headingStyles?.color || "#000000",
                                    //   fontSize:
                                    //     product.applicationsSection
                                    //       ?.headingStyles?.fontSize || "1.2rem",
                                    //   fontWeight:
                                    //     product.applicationsSection
                                    //       ?.headingStyles?.fontWeight || "600",
                                    // }}
                                  >
                                    {product.applicationsSection?.heading ||
                                      "Application"}
                                  </h3>
                                  <div className="projects_result-grid">
                                    {activeApplications.map(
                                      (app: any, appIndex: number) => (
                                        <div
                                          key={app.id || appIndex}
                                          className="projects_result-stats-wrap"
                                          // style={{
                                          //   backgroundColor:
                                          //     app.styles?.backgroundColor ||
                                          //     "transparent",
                                          //   borderColor:
                                          //     app.styles?.borderColor ||
                                          //     "#e0e0e0",
                                          //   borderWidth: "1px",
                                          //   borderStyle: "solid",
                                          //   borderRadius:
                                          //     app.styles?.borderRadius || "8px",
                                          //   padding:
                                          //     app.styles?.padding || "15px",
                                          // }}
                                        >
                                          <h4
                                            className="project_result-stat-heading cc-caption"
                                            // style={{
                                            //   color:
                                            //     app.styles?.textColor ||
                                            //     "#000000",
                                            // }}
                                          >
                                            {app.title}
                                          </h4>
                                          <p className="projects_result-wrap-value cc-subtitle">
                                            <img
                                              height={35}
                                              width={34}
                                              className="about_list-icon"
                                              src={
                                                getImageUrl(app.image) ||
                                                app.imageUrl ||
                                                ""
                                              }
                                              alt={app.title}
                                            />
                                          </p>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}

                            {/* CTA Button */}
                            {product.ctaButton?.show && (
                              <a
                                data-wf--cta-link--variant="primary"
                                href={product.ctaButton?.link || "/contact"}
                                className="cta-linkblock cc-is-primary w-inline-block"
                                onClick={doReverse}
                                // style={{
                                //   backgroundColor:
                                //     product.ctaButton?.styles
                                //       ?.backgroundColor || "#ff6b35",
                                //   color:
                                //     product.ctaButton?.styles?.textColor ||
                                //     "#ffffff",
                                //   borderRadius:
                                //     product.ctaButton?.styles?.borderRadius ||
                                //     "25px",
                                //   padding:
                                //     product.ctaButton?.styles?.padding ||
                                //     "12px 30px",
                                //   fontSize:
                                //     product.ctaButton?.styles?.fontSize ||
                                //     "1rem",
                                //   fontWeight:
                                //     product.ctaButton?.styles?.fontWeight ||
                                //     "600",
                                //   display: "inline-flex",
                                //   alignItems: "center",
                                //   gap: "10px",
                                //   textDecoration: "none",
                                //   transition: "all 0.3s ease",
                                // }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    product.ctaButton?.styles
                                      ?.hoverBackgroundColor || "#e55a2b";
                                  e.currentTarget.style.color =
                                    product.ctaButton?.styles?.hoverTextColor ||
                                    "#ffffff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    product.ctaButton?.styles
                                      ?.backgroundColor || "#ff6b35";
                                  e.currentTarget.style.color =
                                    product.ctaButton?.styles?.textColor ||
                                    "#ffffff";
                                }}
                              >
                                <div className="cta-linkblock_text">
                                  {product.ctaButton?.text || "Contact us"}
                                </div>
                                <div className="cta-icon_wrap">
                                  <div className="cta-btn_icon w-embed">
                                    <img
                                      src={
                                        getImageUrl(product.ctaButton?.icon) ||
                                        product.ctaButton?.iconUrl ||
                                        "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
                                      }
                                      alt="Arrow"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                </div>
                              </a>
                            )}
                          </div>

                          {/* Right Container (Image) */}
                          <div
                            className="projects_right-container"
                            // style={{
                            //   backgroundColor:
                            //     product.rightContainer?.styles
                            //       ?.backgroundColor || "transparent",
                            //   borderRadius:
                            //     product.rightContainer?.styles?.borderRadius ||
                            //     "12px",
                            // }}
                          >
                            <div className="project_slider w-slider">
                              <div className="project_slider-mask w-slider-mask">
                                <div className="project_slider-slide w-slide">
                                  <div className="project_slider-image-wrapper">
                                    <img
                                      src={
                                        getImageUrl(
                                          product.rightContainer?.image
                                        ) ||
                                        product.rightContainer?.imageUrl ||
                                        ""
                                      }
                                      loading="lazy"
                                      alt={product.leftContainer?.title || ""}
                                      sizes="100vw"
                                      className="project_slider-image"
                                      // style={{
                                      //   width:
                                      //     product.rightContainer?.imageStyles
                                      //       ?.width || "560px",
                                      //   height:
                                      //     product.rightContainer?.imageStyles
                                      //       ?.height || "400px",
                                      //   objectFit:
                                      //     product.rightContainer?.imageStyles
                                      //       ?.objectFit || "cover",
                                      //   borderRadius:
                                      //     product.rightContainer?.imageStyles
                                      //       ?.borderRadius || "12px",
                                      // }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
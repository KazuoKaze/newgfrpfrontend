// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import FadeInOnScroll from "./animation/FadeInOnScroll";
// // // // import axios from "axios";
// // // // import { useLoader } from "./LoaderContext";


// // // // const Hero = () => {
// // // //   const [hero, setHero] = useState(null);

// // // //   const { setHideLoader } = useLoader();

// // // //   function doReverse(e) {
// // // //     // e.preventDefault();
// // // //     setHideLoader(false);

// // // //     setTimeout(() => {
// // // //       setHideLoader(true);
// // // //     }, 4000);
// // // //   }

// // // //   useEffect(() => {
// // // //     axios
// // // //       .get("https://gfrp-india.onrender.com/api/hero_section/") // your Django endpoint
// // // //       .then((response) => {
// // // //         setHero(response.data); // it's a single object, not an array
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching hero section:", error);
// // // //       });
// // // //   }, []);

// // // //   if (!hero) return ;

// // // //   return (
    

// // // //     <section
// // // //       className="section_hero projects-page"
      
// // // //       style={{
// // // //         backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
// // // //         objectFit: "cover",
// // // //       }}
     
// // // //     >
// // // //       <div className="padding-global padding-0">
// // // //         <div className="container-large lolo">
// // // //           <div className="hero_wrapper projects-page">
// // // //             <div className="hero_left-wrapper">
// // // //               <FadeInOnScroll>
// // // //                 <div className="about-us_text-dot-wrap projects-page">
// // // //                   <div
                 
// // // //                   ></div>
// // // //                   <div className="about-us_heading">{hero.small_title}</div>
// // // //                 </div>
// // // //               </FadeInOnScroll>
// // // //               <FadeInOnScroll delay={0.2}>
// // // //                 <h1
// // // //                   data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
                  
// // // //                   className="hero_heading cc-heading-h1 projects-page"
// // // //                 >
// // // //                   {hero.title}
// // // //                 </h1>
// // // //               </FadeInOnScroll>
// // // //               <FadeInOnScroll delay={0.3}>
// // // //                 <p
// // // //                   data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
                  
// // // //                   className="hero_subtext cc-title-small projects-page"
// // // //                   dangerouslySetInnerHTML={{ __html: hero.description }}
// // // //                 >
                 
// // // //                 </p>
// // // //               </FadeInOnScroll>
// // // //               <FadeInOnScroll delay={0.4}>
// // // //                 <div className="hero_cta-group button-group">
// // // //                   <Link
// // // //                     data-wf--cta-link--variant="primary"
// // // //                     href="/contact"
// // // //                     className="cta-linkblock cc-is-primary w-inline-block"
// // // //                     onClick={doReverse}
// // // //                   >
// // // //                     <div className="cta-linkblock_text">Let's talk</div>
// // // //                     <div className="cta-icon_wrap">
// // // //                       <div className="cta-btn_icon w-embed">
// // // //                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
// // // //                       </div>
// // // //                       <div className="cta-btn_icon is-absolute w-embed">
// // // //                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
// // // //                       </div>
// // // //                     </div>
// // // //                   </Link>
                  
// // // //                 </div>
// // // //               </FadeInOnScroll>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;



// // // "use client";

// // // import React from "react";

// // // const Hero = () => {
// // //   // Demo data
// // //   const hero = {
// // //     image:
// // //       "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
// // //     small_title: "Innovation & Excellence",
// // //     title: "Building Tomorrow's Solutions Today",
// // //     description:
// // //       "We specialize in creating cutting-edge solutions that transform businesses and drive success. Our team of experts is dedicated to delivering exceptional results that exceed expectations.",
// // //   };

// // //   return (
// // //     <section
// // //       className="section_hero projects-page"
// // //       style={{
// // //         backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
// // //         objectFit: "cover",
// // //       }}
// // //     >
// // //       <div className="padding-global padding-0">
// // //         <div className="container-large lolo">
// // //           <div className="hero_wrapper projects-page">
// // //             <div className="hero_left-wrapper">
// // //               <div>
// // //                 <div className="about-us_text-dot-wrap projects-page">
// // //                   <div></div>
// // //                   <div className="about-us_heading">{hero.small_title}</div>
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <h1
// // //                   data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
// // //                   className="hero_heading cc-heading-h1 projects-page"
// // //                 >
// // //                   {hero.title}
// // //                 </h1>
// // //               </div>
// // //               <div>
// // //                 <p
// // //                   data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
// // //                   className="hero_subtext cc-title-small projects-page"
// // //                   dangerouslySetInnerHTML={{ __html: hero.description }}
// // //                 ></p>
// // //               </div>
// // //               <div>
// // //                 <div className="hero_cta-group button-group">
// // //                   <a
// // //                     data-wf--cta-link--variant="primary"
// // //                     href="/contact"
// // //                     className="cta-linkblock cc-is-primary w-inline-block"
// // //                   >
// // //                     <div className="cta-linkblock_text">Let's talk</div>
// // //                     <div className="cta-icon_wrap">
// // //                       <div className="cta-btn_icon w-embed">
// // //                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
// // //                       </div>
// // //                       <div className="cta-btn_icon is-absolute w-embed">
// // //                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
// // //                       </div>
// // //                     </div>
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;



// // "use client";

// // import React from "react";
// // import { getImageUrl, richTextToHtml } from "@/lib/api";

// // interface HeroProps {
// //   data: any;
// // }

// // const Hero: React.FC<HeroProps> = ({ data }) => {

// //   console.log(data, 'this is data')

// //   if (!data) return null;

// //   const backgroundImage =
// //     getImageUrl(data.backgroundImage) || data.backgroundImageUrl || "";

// //   return (
// //     <>
// //       {data.customCSS && (
// //         <style dangerouslySetInnerHTML={{ __html: data.customCSS }} />
// //       )}
// //       <section
// //         className={`section_hero projects-page ${data.customClasses || ""}`}
// //         style={{
// //           backgroundImage: backgroundImage
// //             ? `${
// //                 data.backgroundOverlay || "linear-gradient(#0000, #000)"
// //               }, url(${backgroundImage})`
// //             : "none",
// //           backgroundColor: data.backgroundColor || "#000000",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="padding-global padding-0">
// //           <div className="container-large lolo">
// //             <div className="hero_wrapper projects-page">
// //               <div className="hero_left-wrapper">
// //                 <div>
// //                   <div className="about-us_text-dot-wrap projects-page">
// //                     <div
// //                       style={{ backgroundColor: data.dotColor || "#ff6b35" }}
// //                     ></div>
// //                     <div
// //                       className="about-us_heading"
// //                       style={{ color: data.smallTitleColor || "#ffffff" }}
// //                     >
// //                       {data.smallTitle}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <h1
// //                     className="hero_heading cc-heading-h1 projects-page"
// //                     style={{ color: data.titleColor || "#ffffff" }}
// //                   >
// //                     {data.title}
// //                   </h1>
// //                 </div>
// //                 <div>
// //                   <div
// //                     className="hero_subtext cc-title-small projects-page"
// //                     style={{ color: data.descriptionColor || "#ffffff" }}
// //                     dangerouslySetInnerHTML={{
// //                       __html: richTextToHtml(data.description),
// //                     }}
// //                   ></div>
// //                 </div>
// //                 {data.ctaButtons && data.ctaButtons.length > 0 && (
// //                   <div>
// //                     <div className="hero_cta-group button-group">
// //                       {data.ctaButtons.map((button: any, index: number) => {
// //                         const iconUrl =
// //                           getImageUrl(button.icon) ||
// //                           button.iconUrl ||
// //                           "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg";
// //                         return (
// //                           <a
// //                             key={index}
// //                             data-wf--cta-link--variant={
// //                               button.variant || "primary"
// //                             }
// //                             href={button.link || "#"}
// //                             className="cta-linkblock cc-is-primary w-inline-block"
// //                             style={{
// //                               backgroundColor:
// //                                 button.backgroundColor || "#ff6b35",
// //                               color: button.textColor || "#ffffff",
// //                             }}
// //                           >
// //                             <div className="cta-linkblock_text">
// //                               {button.text}
// //                             </div>
// //                             <div className="cta-icon_wrap">
// //                               <div className="cta-btn_icon w-embed">
// //                                 <img src={iconUrl} alt="" />
// //                               </div>
// //                               <div className="cta-btn_icon is-absolute w-embed">
// //                                 <img src={iconUrl} alt="" />
// //                               </div>
// //                             </div>
// //                           </a>
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Hero;



// "use client";

// import React from "react";
// import { getImageUrl, richTextToHtml } from "@/lib/api";

// interface HeroProps {
//   data: any;
// }

// const Hero: React.FC<HeroProps> = ({ data }) => {
//   console.log(data, 'thi sis data')
//   if (!data) return null;

//   const backgroundImage =
//     getImageUrl(data.backgroundImage) || data.backgroundImageUrl || "";

//   return (
//     <>
//       {data.customCSS && (
//         <style dangerouslySetInnerHTML={{ __html: data.customCSS }} />
//       )}
//       <section
//         className={`section_hero projects-page ${data.customClasses || ""}`}
//         style={{
//           backgroundImage: backgroundImage
//             ? `${
//                 data.backgroundOverlay || "linear-gradient(#0000, #000)"
//               }, url(${backgroundImage})`
//             : "none",
//           backgroundColor: data.backgroundColor || "#000000",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="padding-global padding-0">
//           <div className="container-large lolo">
//             <div className="hero_wrapper projects-page">
//               <div className="hero_left-wrapper">
//                 <div>
//                   <div className="about-us_text-dot-wrap projects-page">
//                     <div
//                       style={{ backgroundColor: data.dotColor || "#ff6b35" }}
//                     ></div>
//                     <div
//                       className="about-us_heading"
//                       style={{ color: data.smallTitleColor || "#ffffff" }}
//                     >
//                       {data.smallTitle}
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h1
//                     className="hero_heading cc-heading-h1 projects-page"
//                     style={{ color: data.titleColor || "#ffffff" }}
//                   >
//                     {data.title}
//                   </h1>
//                 </div>
//                 <div>
//                   <div
//                     className="hero_subtext cc-title-small projects-page"
//                     style={{ color: data.descriptionColor || "#ffffff" }}
//                     dangerouslySetInnerHTML={{
//                       __html: richTextToHtml(data.description),
//                     }}
//                   ></div>
//                 </div>
//                 {data.ctaButtons && data.ctaButtons.length > 0 && (
//                   <div>
//                     <div className="hero_cta-group button-group">
//                       {data.ctaButtons.map((button: any, index: number) => {
//                         const iconUrl =
//                           getImageUrl(button.icon) ||
//                           button.iconUrl ||
//                           "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg";
//                         return (
//                           <a
//                             key={index}
//                             data-wf--cta-link--variant={
//                               button.variant || "primary"
//                             }
//                             href={button.link || "#"}
//                             className="cta-linkblock cc-is-primary w-inline-block"
//                             style={{
//                               backgroundColor:
//                                 button.backgroundColor || "#ff6b35",
//                               color: button.textColor || "#ffffff",
//                             }}
//                           >
//                             <div className="cta-linkblock_text">
//                               {button.text}
//                             </div>
//                             <div className="cta-icon_wrap">
//                               <div className="cta-btn_icon w-embed">
//                                 <img src={iconUrl} alt="" />
//                               </div>
//                               <div className="cta-btn_icon is-absolute w-embed">
//                                 <img src={iconUrl} alt="" />
//                               </div>
//                             </div>
//                           </a>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;



"use client";

import React from "react";
import { getImageUrl, richTextToHtml } from "@/lib/api";

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  console.log(data, 'this is data')
  if (!data) return null;

  const backgroundImage =
    getImageUrl(data.backgroundImage) || data.backgroundImageUrl || "";

  return (
    <>
      {data.customCSS && (
        <style dangerouslySetInnerHTML={{ __html: data.customCSS }} />
      )}
      <section
        className={`section_hero projects-page ${data.customClasses || ""}`}
        style={{
          backgroundImage: backgroundImage
            ? `${
                data.backgroundOverlay || "linear-gradient(#0000, #000)"
              }, url(${backgroundImage})`
            : "none",
          backgroundColor: data.backgroundColor || "#000000",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="padding-global padding-0">
          <div className="container-large lolo">
            <div className="hero_wrapper projects-page">
              <div className="hero_left-wrapper">
                <div>
                  <div className="about-us_text-dot-wrap projects-page">
                    <div
                      style={{ backgroundColor: data.dotColor || "#ff6b35" }}
                    ></div>
                    <div
                      className="about-us_heading"
                      style={{ color: data.smallTitleColor || "#ffffff" }}
                    >
                      {data.smallTitle}
                    </div>
                  </div>
                </div>
                <div>
                  <h1
                    className="hero_heading cc-heading-h1 projects-page"
                    style={{ color: data.titleColor || "#ffffff" }}
                  >
                    {data.title}
                  </h1>
                </div>
                <div>
                  <div
                    className="hero_subtext cc-title-small projects-page"
                    style={{ color: data.descriptionColor || "#ffffff" }}
                    dangerouslySetInnerHTML={{
                      __html: richTextToHtml(data.description),
                    }}
                  ></div>
                </div>
                {data.ctaButtons && data.ctaButtons.length > 0 && (
                  <div>
                    <div className="hero_cta-group button-group">
                      {data.ctaButtons.map((button: any, index: number) => {
                        const iconUrl =
                          getImageUrl(button.icon) ||
                          button.iconUrl ||
                          "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg";
                        return (
                          <a
                            key={index}
                            data-wf--cta-link--variant={
                              button.variant || "primary"
                            }
                            href={button.link || "#"}
                            className="cta-linkblock cc-is-primary w-inline-block"
                            style={{
                              backgroundColor:
                                button.backgroundColor || "#ff6b35",
                              color: button.textColor || "#ffffff",
                            }}
                          >
                            <div className="cta-linkblock_text">
                              {button.text}
                            </div>
                            <div className="cta-icon_wrap">
                              <div className="cta-btn_icon w-embed">
                                <img src={iconUrl} alt="" />
                              </div>
                              <div className="cta-btn_icon is-absolute w-embed">
                                <img src={iconUrl} alt="" />
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
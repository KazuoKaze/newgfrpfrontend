// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { ChevronDown } from "lucide-react";

// // import "./FAQSection.css"

// // import { motion } from "framer-motion";
// // import FadeInOnScroll from "./animation/FadeInOnScroll";
// // import { useLoader } from "./LoaderContext";
// // import axios from "axios";

// // interface FAQItem {
// //   question: string;
// //   answer: string;
// // }




// // const faqs: FAQItem[] = [
// //   {
// //     question: "What types of GFRP machinery do you offer?",
// //     answer:
// //       "We provide production lines for GFRP rebar, fiberglass mesh, bent elements, and fiber cutting systems, with models tailored for different capacities and automation needs.",
// //   },
// //   {
// //     question: "What is the expected ROI for a GFRP production line?",
// //     answer:
// //       "Most clients recover their investment within 3 months, depending on production scale and local market conditions.",
// //   },
// //   {
// //     question: "What raw materials are needed for GFRP production?",
// //     answer:
// //       "You will need fiberglass roving, thermosetting resin (polyester, vinyl ester, or epoxy), catalysts, and optional sand coating for construction applications.",
// //   },
// //   {
// //     question: "Can your machines work with other fibers like basalt or carbon?",
// //     answer:
// //       "Yes, with specific adaptations, our machines can process basalt or carbon fiber for specialized applications.",
// //   },
// //   {
// //     question: "How long does installation and training take?",
// //     answer:
// //       "Standard installation takes 2–3 working days, with operator training usually completed in 1–2 days.",
// //   },
// //   {
// //     question: "Do you provide post-installation technical support?",
// //     answer:
// //       "Yes, we offer lifetime remote support, technical consultations, and spare parts supply globally.",
// //   },
// //   {
// //     question: "What is the production capacity of your machines?",
// //     answer:
// //       "Our high-capacity lines can produce up to 6 GFRP rods simultaneously, yielding over 50,000 meters per day.",
// //   },
// //   {
// //     question: "Are your machines compliant with international standards?",
// //     answer:
// //       "Yes, our equipment is designed to produce GFRP rebar that meets ASTM, ISO, and other international standards.",
// //   },
// //   {
// //     question: "What is the minimum investment required?",
// //     answer:
// //       "A small-scale GFRP rebar production line starts at around $80,000–$95,000, depending on capacity and automation.",
// //   },
// //   {
// //     question:
// //       "Can the machines be customized for different rebar sizes and shapes?",
// //     answer:
// //       "Yes, we offer custom mandrels for various diameters and can design molds for special profiles.",
// //   },
// //   {
// //     question: "Do you help with factory layout and site setup?",
// //     answer:
// //       "We provide detailed layout plans and guidance for optimal equipment placement and workflow after order confirmation.",
// //   },
// // ];

// // const FAQSection = () => {
  


// //   const [faqs, setFaqs] = useState([]); // ✅ state to hold FAQ list
// //   const [openFAQ, setOpenFAQ] = useState<number | null>(null);
// //   const { setHideLoader } = useLoader();

// //   const toggleFAQ = (index: number) => {
// //     setOpenFAQ(openFAQ === index ? null : index);
// //   };

  
// //     function doReverse(e) {
// //       // e.preventDefault();
// //       setHideLoader(false);
  
// //       setTimeout(() => {
// //         setHideLoader(true);
// //       }, 4000);
// //     }
  
  
// //     useEffect(() => {
// //       axios
// //         .get("https://gfrp-india.onrender.com/api/faq_section_list/") // your Django endpoint
// //         .then((response) => {
// //           setFaqs(response.data); // it's a single object, not an array
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching hero section:", error);
// //         });
// //     }, []);

// //   return (
// //     <section data-wf--faqs-section--variant="base" className="section_faqs">
// //       <div className="padding-global padding-0">
// //         <div className="container-large">
// //           <div className="faqs_wrapper">
// //             <div className="faqs_top-container">
// //               <div className="services_top-container project-section faqs-section">
// //                 <FadeInOnScroll>
// //                   <div className="about-us_text-dot-wrap">
// //                     <div
// //                       className="about-us_heading-dot"
// //                       style={{ backgroundColor: "#ff6b35" }}
// //                     ></div>
// //                     <div className="about-us_heading">FAQ</div>
// //                   </div>
// //                 </FadeInOnScroll>
// //                 <FadeInOnScroll delay={0.2}>
// //                   <h2 className="services_main-heading cc-heading-h3">
// //                     Frequently Asked Questions
// //                   </h2>
// //                 </FadeInOnScroll>
// //               </div>
// //             </div>
// //             <div className="faqs_middle-container">
              
// //               <div className="faq-items-container">
// //                 <div className="faq-items-list">
// //                   {faqs.map((faq, index) => (
// //                     <motion.div
// //                       key={index}
// //                       className="faq-item"
// //                       initial={{ opacity: 0 }}
// //                       whileInView={{ opacity: 1 }}
// //                       transition={{
// //                         duration: 0.7,
// //                         ease: "easeOut",
// //                         delay: index * 0.2,
// //                       }}
// //                       viewport={{ once: true, amount: 0.2 }}
// //                     >
// //                       <button
// //                         onClick={() => toggleFAQ(index)}
// //                         className="faq-question-button"
// //                         aria-expanded={openFAQ === index}
// //                       >
// //                         <span className="faq-question-text">
// //                           {faq.question}
// //                         </span>
// //                         <ChevronDown
// //                           className={`faq-chevron ${
// //                             openFAQ === index ? "rotated" : ""
// //                           }`}
// //                         />
// //                       </button>

// //                       <div
// //                         className={`faq-answer-container ${
// //                           openFAQ === index ? "open" : "closed"
// //                         }`}
// //                       >
// //                         <div className="faq-answer-text">{faq.answer}</div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>
// //               <div className="faqs_cta-text-wrap">
// //                 <FadeInOnScroll>
// //                   <div className="faqs_cta-wrap">
// //                     <Link
// //                       data-wf--cta-link--variant="primary"
// //                       href="/contact"
// //                       className="cta-linkblock cc-is-primary w-inline-block"
// //                       onClick={doReverse}
// //                     >
// //                       <div className="cta-linkblock_text">Contact Us</div>
// //                       <div className="cta-icon_wrap">
// //                         <div className="cta-btn_icon w-embed">
// //                           <Image
// //                             src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                             alt="Arrow"
// //                             width={16}
// //                             height={16}
// //                           />
// //                         </div>
// //                         <div className="cta-btn_icon is-absolute w-embed">
// //                           <Image
// //                             src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
// //                             alt="Arrow"
// //                             width={16}
// //                             height={16}
// //                           />
// //                         </div>
// //                       </div>
// //                     </Link>
// //                   </div>
// //                 </FadeInOnScroll>
// //                 <FadeInOnScroll>
// //                   <p className="faqs_contact-text">
// //                     Still have questions? We're here for you! Whether it's about
// //                     performance, pricing, or project suitability — our team is
// //                     ready to assist.
// //                   </p>
// //                 </FadeInOnScroll>
// //               </div>
// //             </div>
            
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQSection;

// "use client";

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// import "./FAQSection.css";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqs: FAQItem[] = [
//   {
//     question: "What types of GFRP machinery do you offer?",
//     answer:
//       "We provide production lines for GFRP rebar, fiberglass mesh, bent elements, and fiber cutting systems, with models tailored for different capacities and automation needs.",
//   },
//   {
//     question: "What is the expected ROI for a GFRP production line?",
//     answer:
//       "Most clients recover their investment within 3 months, depending on production scale and local market conditions.",
//   },
//   {
//     question: "What raw materials are needed for GFRP production?",
//     answer:
//       "You will need fiberglass roving, thermosetting resin (polyester, vinyl ester, or epoxy), catalysts, and optional sand coating for construction applications.",
//   },
//   {
//     question: "Can your machines work with other fibers like basalt or carbon?",
//     answer:
//       "Yes, with specific adaptations, our machines can process basalt or carbon fiber for specialized applications.",
//   },
//   {
//     question: "How long does installation and training take?",
//     answer:
//       "Standard installation takes 2–3 working days, with operator training usually completed in 1–2 days.",
//   },
//   {
//     question: "Do you provide post-installation technical support?",
//     answer:
//       "Yes, we offer lifetime remote support, technical consultations, and spare parts supply globally.",
//   },
//   {
//     question: "What is the production capacity of your machines?",
//     answer:
//       "Our high-capacity lines can produce up to 6 GFRP rods simultaneously, yielding over 50,000 meters per day.",
//   },
//   {
//     question: "Are your machines compliant with international standards?",
//     answer:
//       "Yes, our equipment is designed to produce GFRP rebar that meets ASTM, ISO, and other international standards.",
//   },
//   {
//     question: "What is the minimum investment required?",
//     answer:
//       "A small-scale GFRP rebar production line starts at around $80,000–$95,000, depending on capacity and automation.",
//   },
//   {
//     question:
//       "Can the machines be customized for different rebar sizes and shapes?",
//     answer:
//       "Yes, we offer custom mandrels for various diameters and can design molds for special profiles.",
//   },
//   {
//     question: "Do you help with factory layout and site setup?",
//     answer:
//       "We provide detailed layout plans and guidance for optimal equipment placement and workflow after order confirmation.",
//   },
// ];

// const FAQSection = () => {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <section data-wf--faqs-section--variant="base" className="section_faqs">
//       <div className="padding-global padding-0">
//         <div className="container-large">
//           <div className="faqs_wrapper">
//             <div className="faqs_top-container">
//               <div className="services_top-container project-section faqs-section">
//                 <div>
//                   <div className="about-us_text-dot-wrap">
//                     <div
//                       className="about-us_heading-dot"
//                       style={{ backgroundColor: "#ff6b35" }}
//                     ></div>
//                     <div className="about-us_heading">FAQ</div>
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="services_main-heading cc-heading-h3">
//                     Frequently Asked Questions
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="faqs_middle-container">
//               <div className="faq-items-container">
//                 <div className="faq-items-list">
//                   {faqs.map((faq, index) => (
//                     <div key={index} className="faq-item">
//                       <button
//                         onClick={() => toggleFAQ(index)}
//                         className="faq-question-button"
//                         aria-expanded={openFAQ === index}
//                       >
//                         <span className="faq-question-text">
//                           {faq.question}
//                         </span>
//                         <ChevronDown
//                           className={`faq-chevron ${
//                             openFAQ === index ? "rotated" : ""
//                           }`}
//                         />
//                       </button>

//                       <div
//                         className={`faq-answer-container ${
//                           openFAQ === index ? "open" : "closed"
//                         }`}
//                       >
//                         <div className="faq-answer-text">{faq.answer}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="faqs_cta-text-wrap">
//                 <div>
//                   <div className="faqs_cta-wrap">
//                     <a
//                       data-wf--cta-link--variant="primary"
//                       href="/contact"
//                       className="cta-linkblock cc-is-primary w-inline-block"
//                     >
//                       <div className="cta-linkblock_text">Contact Us</div>
//                       <div className="cta-icon_wrap">
//                         <div className="cta-btn_icon w-embed">
//                           <img
//                             src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
//                             alt="Arrow"
//                             width={16}
//                             height={16}
//                           />
//                         </div>
//                         <div className="cta-btn_icon is-absolute w-embed">
//                           <img
//                             src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
//                             alt="Arrow"
//                             width={16}
//                             height={16}
//                           />
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="faqs_contact-text">
//                     Still have questions? We're here for you! Whether it's about
//                     performance, pricing, or project suitability — our team is
//                     ready to assist.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;



"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQSection.css";

interface FAQItem {
  question: string;
  answer: string;
  id?: string;
}

interface FAQSectionProps {
  data?: any; // Data from Payload CMS
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Extract FAQ data from Payload
  const faqData = data?.faqSection;
  const topSection = faqData?.topSection;
  const ctaSection = faqData?.ctaSection;
  const faqItems: FAQItem[] = faqData?.faqItems || [];

  // Fallback values if no data from Payload
  const dotColor = topSection?.dot?.color || "#ff6b35";
  const showDot = topSection?.dot?.show !== false;
  const smallHeadingText = topSection?.smallHeading?.text || "FAQ";
  const mainHeadingText =
    topSection?.mainHeading?.text || "Frequently Asked Questions";
  const showCTA = ctaSection?.show !== false;
  const ctaButtonText = ctaSection?.ctaButton?.text || "Contact Us";
  const ctaButtonLink = ctaSection?.ctaButton?.link || "/contact";
  const ctaButtonShowIcon = ctaSection?.ctaButton?.showIcon !== false;
  const ctaButtonIconUrl =
    ctaSection?.ctaButton?.iconUrl ||
    "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg";
  const ctaDescriptionText =
    ctaSection?.ctaText?.text ||
    "Still have questions? We're here for you! Whether it's about performance, pricing, or project suitability — our team is ready to assist.";

  return (
    <section data-wf--faqs-section--variant="base" className="section_faqs">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="faqs_wrapper">
            <div className="faqs_top-container">
              <div className="services_top-container project-section faqs-section">
                <div>
                  <div className="about-us_text-dot-wrap">
                    {showDot && (
                      <div
                        className="about-us_heading-dot"
                        style={{ backgroundColor: dotColor }}
                      ></div>
                    )}
                    <div className="about-us_heading">{smallHeadingText}</div>
                  </div>
                </div>
                <div>
                  <h2 className="services_main-heading cc-heading-h3">
                    {mainHeadingText}
                  </h2>
                </div>
              </div>
            </div>
            <div className="faqs_middle-container">
              <div className="faq-items-container">
                <div className="faq-items-list">
                  {faqItems.map((faq, index) => (
                    <div key={faq.id || index} className="faq-item">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="faq-question-button"
                        aria-expanded={openFAQ === index}
                      >
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`faq-chevron ${
                            openFAQ === index ? "rotated" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`faq-answer-container ${
                          openFAQ === index ? "open" : "closed"
                        }`}
                      >
                        <div className="faq-answer-text">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {showCTA && (
                <div className="faqs_cta-text-wrap">
                  <div>
                    <div className="faqs_cta-wrap">
                      <a
                        data-wf--cta-link--variant="primary"
                        href={ctaButtonLink}
                        className="cta-linkblock cc-is-primary w-inline-block"
                      >
                        <div className="cta-linkblock_text">
                          {ctaButtonText}
                        </div>
                        {ctaButtonShowIcon && (
                          <div className="cta-icon_wrap">
                            <div className="cta-btn_icon w-embed">
                              <img
                                src={ctaButtonIconUrl}
                                alt="Arrow"
                                width={16}
                                height={16}
                              />
                            </div>
                            <div className="cta-btn_icon is-absolute w-embed">
                              <img
                                src={ctaButtonIconUrl}
                                alt="Arrow"
                                width={16}
                                height={16}
                              />
                            </div>
                          </div>
                        )}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="faqs_contact-text">{ctaDescriptionText}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
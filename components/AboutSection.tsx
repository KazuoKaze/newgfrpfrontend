// "use client";

// import React from "react";
// import { ArrowRight } from "lucide-react";

// const AboutSection = () => {
//   // Demo data
//   const about = {
//     testimonial_title: "Your Trusted Partner in Innovation",
//     image:
//       "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
//     image2:
//       "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
//     title: "Leading the Way in Advanced Solutions",
//     description:
//       "We are committed to delivering innovative solutions that transform industries. With years of experience and a dedicated team of experts, we provide cutting-edge technology and exceptional service to meet the evolving needs of our clients.",
//   };

//   const how = {
//     title: "Your Journey to Success Starts Here",
//     description:
//       "We've streamlined the process to make it easy for you to get started. Our proven methodology ensures smooth implementation and outstanding results from day one.",
//     image:
//       "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
//     sub_sections: [
//       {
//         title: "Consultation",
//         description:
//           "Schedule a free consultation with our experts to discuss your specific needs and goals. We'll analyze your requirements and provide tailored recommendations.",
//       },
//       {
//         title: "Planning",
//         description:
//           "Our team creates a comprehensive plan customized to your project. We outline timelines, milestones, and deliverables to ensure clarity and alignment.",
//       },
//       {
//         title: "Implementation",
//         description:
//           "We execute the plan with precision and expertise. Our skilled professionals handle every detail to ensure seamless deployment and optimal performance.",
//       },
//       {
//         title: "Support",
//         description:
//           "Receive ongoing support and maintenance to ensure long-term success. We're here to help you adapt and grow as your needs evolve.",
//       },
//     ],
//   };

//   return (
//     <section className="section_about-us">
//       <div className="padding-global padding-0">
//         <div className="container-large">
//           <div className="about-us_wrapper">
//             <div className="about-us_top-container">
//               <div className="about-us_images-grid">
//                 <div
//                   id="w-node-_915a36c4-37fe-00ae-37a7-db87cf94b5f3-18425dd7"
//                   className="about-us_grid-top-wrap"
//                 >
//                   <div
//                     id="w-node-_9c513581-2080-3560-20e3-952e82ee7585-18425dd7"
//                     data-w-id="9c513581-2080-3560-20e3-952e82ee7585"
//                     className="about-us_grid-child"
//                   >
//                     <p className="about-us_grid-child-subtext">
//                       {about.testimonial_title}
//                     </p>
//                     <a href="/contact" className="about-us_grid-child-link">
//                       Contact us
//                     </a>
//                   </div>
//                   <div
//                     data-w-id="1ff4d81f-0706-48c0-e636-48ee6329b544"
//                     className="about-us_image-wrap hide-mobile-portrait"
//                   >
//                     <img
//                       src={about.image}
//                       loading="lazy"
//                       alt="two engineers working on the installation of solar"
//                       className="about-us_image"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   id="w-node-_2901abc5-3e28-7c5f-54ec-8a6273958884-18425dd7"
//                   data-w-id="2901abc5-3e28-7c5f-54ec-8a6273958884"
//                   className="about-us_image-wrap ar-video"
//                 >
//                   <img
//                     src={about.image2}
//                     loading="lazy"
//                     sizes="(max-width: 540px) 100vw, 540px"
//                     alt="view of a house powered by solar"
//                     className="about-us_image"
//                   />
//                 </div>
//               </div>
//               <div className="about-us_heading-subtext-wrap">
//                 <div>
//                   <div className="about-us_text-dot-wrap">
//                     <div
//                       className="about-us_heading-dot"
//                       style={{ backgroundColor: "#ff6b35 !important" }}
//                     ></div>
//                     <div className="about-us_heading">ABOUT US</div>
//                   </div>
//                   <div className="about-us_header-subtext-wrap">
//                     <div>
//                       <h2
//                         data-w-id="b12550fd-ad1f-7bc9-939e-0399354ddc25"
//                         className="about-us_main-heading cc-heading-h4 cc-about-main"
//                       >
//                         {about.title}
//                       </h2>
//                     </div>
//                     <div>
//                       <p
//                         data-w-id="c93eee5d-da80-f602-50df-57f01ac036dc"
//                         className="about-us_subtext cc-title-small"
//                         dangerouslySetInnerHTML={{ __html: about.description }}
//                       ></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   data-w-id="e100a69e-b520-381e-c9c4-8afc7fe2a7bd"
//                   className="about-us_cta-wrapper"
//                 >
//                   <a
//                     data-wf--cta-link--variant="primary"
//                     href="/about"
//                     className="cta-linkblock cc-is-primary w-inline-block"
//                   >
//                     <div className="cta-linkblock_text">About Us</div>
//                     <div className="cta-icon_wrap">
//                       <div className="cta-btn_icon w-embed">
//                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
//                       </div>
//                       <div className="cta-btn_icon is-absolute w-embed">
//                         <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="about-us_bottom-container">
//               <div className="about_bottom-top-container">
//                 <div className="about_top-container">
//                   <div className="about-us_text-dot-wrap">
//                     <div
//                       className="about-us_heading-dot"
//                       style={{ backgroundColor: "#ff6b35 !important" }}
//                     ></div>
//                     <div className="about-us_heading">How to start</div>
//                   </div>
//                   <div>
//                     <h3
//                       data-w-id="b1a5b916-ad4b-ec09-8b9a-178fceef58ae"
//                       className="about-us_subheading cc-heading-h3 cc-about-heading"
//                     >
//                       {how.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <div>
//                   <p
//                     data-w-id="b50b08c2-3d46-f4f6-a545-016aace99180"
//                     className="about_bottom-container-subtext"
//                     dangerouslySetInnerHTML={{ __html: how.description }}
//                   ></p>
//                 </div>
//               </div>
//               <div
//                 data-w-id="6bd5d468-d52c-5635-0162-90086809d6c9"
//                 className="about-us_content-grid"
//               >
//                 <div className="about_content-grid">
//                   {how.sub_sections.map((step, index) => (
//                     <div
//                       data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
//                       key={index}
//                       className="about_block"
//                     >
//                       <img
//                         src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
//                         loading="lazy"
//                         alt=""
//                         className="about_block-icon"
//                       />
//                       <h3 className="about_block-heading">{step.title}</h3>
//                       <p
//                         className="about_block-subtext"
//                         dangerouslySetInnerHTML={{ __html: step.description }}
//                       ></p>
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

// export default AboutSection;

import React from "react";

interface AboutData {
  backgroundColor: string;
  contactLink: {
    text: string;
    url: string;
    textColor: string;
  };
  ctaButton: {
    text: string;
    link: string;
    backgroundColor: string;
    textColor: string;
  };
  description: {
    root: any;
  };
  descriptionColor: string;
  dotColor: string;
  howToStart: {
    backgroundColor: string;
    sectionLabel: string;
    sectionLabelColor: string;
    dotColor: string;
    title: string;
    titleColor: string;
    description: {
      root: any;
    };
    descriptionColor: string;
    steps: Array<{
      title: string;
      titleColor?: string;
      description: {
        root: any;
      };
      descriptionColor?: string;
      backgroundColor?: string;
    }>;
  };
  image1: {
    cloudinary_url: string;
  };
  image2: {
    cloudinary_url: string;
  };
  sectionLabel: string;
  sectionLabelColor: string;
  testimonialTitle: string;
  testimonialTitleColor: string;
  title: string;
  titleColor: string;
}


export function renderRichText(richTextContent: any): string {
  if (!richTextContent) return "";

  // Handle Lexical editor format from Payload CMS
  if (richTextContent.root && richTextContent.root.children) {
    return renderLexicalNodes(richTextContent.root.children);
  }

  // Fallback for string content
  if (typeof richTextContent === "string") {
    return richTextContent;
  }

  return "";
}

function renderLexicalNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return "";

  return nodes
    .map((node: any) => {
      // Handle paragraph nodes
      if (node.type === "paragraph") {
        const alignment = node.format || "start";
        const alignClass =
          alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
        const content = node.children ? renderLexicalNodes(node.children) : "";

        // Don't render empty paragraphs
        if (!content.trim()) {
          return "<br />";
        }

        return `<p${alignClass}>${content}</p>`;
      }

      // Handle text nodes
      if (node.type === "text") {
        let text = node.text || "";

        // Apply formatting
        if (node.format === 1 || node.format === "bold") {
          text = `<strong>${text}</strong>`;
        }
        if (node.format === 2 || node.format === "italic") {
          text = `<em>${text}</em>`;
        }
        if (node.format === 4 || node.format === "underline") {
          text = `<u>${text}</u>`;
        }

        return text;
      }

      // Handle line breaks
      if (node.type === "linebreak") {
        return "<br />";
      }

      // Handle heading nodes
      if (node.type === "heading") {
        const tag = node.tag || "h2";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${tag}>${content}</${tag}>`;
      }

      // Handle list nodes
      if (node.type === "list") {
        const listTag = node.listType === "number" ? "ol" : "ul";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${listTag}>${content}</${listTag}>`;
      }

      // Handle list item nodes
      if (node.type === "listitem") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<li>${content}</li>`;
      }

      // Handle link nodes
      if (node.type === "link") {
        const url = node.url || "#";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<a href="${url}">${content}</a>`;
      }

      return "";
    })
    .join("");
}

const AboutSection = ({ data }: { data: AboutData }) => {
  // const richTextToHtml = (richText: any): string => {
  //   if (!richText || !richText.root || !richText.root.children) {
  //     return "";
  //   }

  //   const processNode = (node: any): string => {
  //     if (node.type === "text") {
  //       return node.text || "";
  //     }

  //     if (node.children) {
  //       return node.children.map(processNode).join("");
  //     }

  //     return "";
  //   };

  //   return richText.root.children.map(processNode).join("");
  // };

  const about = {
    testimonial_title: data.testimonialTitle,
    image: data.image1.cloudinary_url,
    image2: data.image2.cloudinary_url,
    title: data.title,
    description: renderRichText(data.description),
  };

  const how = {
    title: data.howToStart.title,
    description: renderRichText(data.howToStart.description),
    sub_sections: data.howToStart.steps.map((step) => ({
      title: step.title,
      description: renderRichText(step.description),
    })),
  };

  return (
    <section className="section_about-us">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="about-us_wrapper">
            <div className="about-us_top-container">
              <div className="about-us_images-grid">
                <div
                  id="w-node-_915a36c4-37fe-00ae-37a7-db87cf94b5f3-18425dd7"
                  className="about-us_grid-top-wrap"
                >
                  <div
                    id="w-node-_9c513581-2080-3560-20e3-952e82ee7585-18425dd7"
                    data-w-id="9c513581-2080-3560-20e3-952e82ee7585"
                    className="about-us_grid-child"
                  >
                    <p
                      className="about-us_grid-child-subtext"
                      style={{ color: data.testimonialTitleColor }}
                    >
                      {about.testimonial_title}
                    </p>
                    <a
                      href={data.contactLink.url}
                      className="about-us_grid-child-link"
                      style={{ color: data.contactLink.textColor }}
                    >
                      {data.contactLink.text}
                    </a>
                  </div>
                  <div
                    data-w-id="1ff4d81f-0706-48c0-e636-48ee6329b544"
                    className="about-us_image-wrap hide-mobile-portrait"
                  >
                    <img
                      src={about.image}
                      loading="lazy"
                      alt="two engineers working on the installation of solar"
                      className="about-us_image"
                    />
                  </div>
                </div>
                <div
                  id="w-node-_2901abc5-3e28-7c5f-54ec-8a6273958884-18425dd7"
                  data-w-id="2901abc5-3e28-7c5f-54ec-8a6273958884"
                  className="about-us_image-wrap ar-video"
                >
                  <img
                    src={about.image2}
                    loading="lazy"
                    sizes="(max-width: 540px) 100vw, 540px"
                    alt="view of a house powered by solar"
                    className="about-us_image"
                  />
                </div>
              </div>
              <div className="about-us_heading-subtext-wrap">
                <div>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: data.dotColor }}
                    ></div>
                    <div
                      className="about-us_heading"
                      style={{ color: data.sectionLabelColor }}
                    >
                      {data.sectionLabel}
                    </div>
                  </div>
                  <div className="about-us_header-subtext-wrap">
                    <div>
                      <h2
                        data-w-id="b12550fd-ad1f-7bc9-939e-0399354ddc25"
                        className="about-us_main-heading cc-heading-h4 cc-about-main"
                        style={{ color: data.titleColor }}
                      >
                        {about.title}
                      </h2>
                    </div>
                    <div>
                      <p
                        data-w-id="c93eee5d-da80-f602-50df-57f01ac036dc"
                        className="about-us_subtext cc-title-small"
                        style={{ color: data.descriptionColor }}
                        dangerouslySetInnerHTML={{ __html: about.description }}
                      ></p>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="e100a69e-b520-381e-c9c4-8afc7fe2a7bd"
                  className="about-us_cta-wrapper"
                >
                  <a
                    data-wf--cta-link--variant="primary"
                    href={data.ctaButton.link}
                    className="cta-linkblock cc-is-primary w-inline-block"
                    style={{ backgroundColor: data.ctaButton.backgroundColor }}
                  >
                    <div
                      className="cta-linkblock_text"
                      style={{ color: data.ctaButton.textColor }}
                    >
                      {data.ctaButton.text}
                    </div>
                    <div className="cta-icon_wrap">
                      <div className="cta-btn_icon w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                      <div className="cta-btn_icon is-absolute w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="about-us_bottom-container"
              // style={{ backgroundColor: data.howToStart.backgroundColor }}
            >
              <div className="about_bottom-top-container">
                <div className="about_top-container">
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: data.howToStart.dotColor }}
                    ></div>
                    <div
                      className="about-us_heading"
                      style={{ color: data.howToStart.sectionLabelColor }}
                    >
                      {data.howToStart.sectionLabel}
                    </div>
                  </div>
                  <div>
                    <h3
                      data-w-id="b1a5b916-ad4b-ec09-8b9a-178fceef58ae"
                      className="about-us_subheading cc-heading-h3 cc-about-heading"
                      style={{ color: data.howToStart.titleColor }}
                    >
                      {how.title}
                    </h3>
                  </div>
                </div>
                <div>
                  <p
                    data-w-id="b50b08c2-3d46-f4f6-a545-016aace99180"
                    className="about_bottom-container-subtext"
                    style={{ color: data.howToStart.descriptionColor }}
                    // dangerouslySetInnerHTML={{ __html: how.description }}
                    dangerouslySetInnerHTML={{
                      __html: renderRichText(how.description),
                    }}
                  ></p>
                </div>
              </div>
              <div
                data-w-id="6bd5d468-d52c-5635-0162-90086809d6c9"
                className="about-us_content-grid"
              >
                <div className="about_content-grid">
                  {how.sub_sections.map((step, index) => (
                    <div
                      data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                      key={index}
                      className="about_block"
                    >
                      <img
                        src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                        loading="lazy"
                        alt=""
                        className="about_block-icon"
                      />
                      <h3 className="about_block-heading">{step.title}</h3>
                      <p
                        className="about_block-subtext"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      ></p>
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
};

export default AboutSection;

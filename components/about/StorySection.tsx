// // // import axios from "axios";
// // // import { useEffect, useState } from "react";

// // // import { motion } from "framer-motion";
// // // import FadeInOnScroll from "../animation/FadeInOnScroll";
// // // import Link from "next/link";

// // // export default function StorySection() {
// // //   const [aboutStory, setAboutStory] = useState(null);

// // //   useEffect(() => {
// // //     axios
// // //       .get("https://gfrp-india.onrender.com/api/get_about_story/") // your Django endpoint
// // //       .then((response) => {
// // //         setAboutStory(response.data); // it's a single object, not an array
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error fetching hero section:", error);
// // //       });
// // //   }, []);

// // //   if (!aboutStory) return;

// // //     return (
// // //       <section className="section_story">
// // //         <div
// // //           className="padding-global padding-0"
// // //           style={{ marginTop: "100px" }}
// // //         >
// // //           <div className="container-large">
// // //             <div className="story_wrapper">
// // //               <FadeInOnScroll>
// // //                 <div
// // //                   data-w-id="839ab982-bc30-534c-baa7-3f6f503a481d"
// // //                   //   style="opacity:0"
// // //                   className="story_left-wrapper"
// // //                 >
// // //                   <img
// // //                     src={aboutStory.image}
// // //                     loading="lazy"
// // //                     sizes="(max-width: 581px) 100vw, 581px"
                    
// // //                     alt="A group of friends standing and watching the sun set"
// // //                     className="story_left-wrapper-image"
// // //                   />
// // //                 </div>
// // //               </FadeInOnScroll>
// // //               <FadeInOnScroll delay={0.2}>
// // //                 <div className="story_right-wrapper">
// // //                   <h2
// // //                     data-w-id="9c017f97-2372-f945-bf92-2d29b54f6dbe"
// // //                     //   style="opacity:0"
// // //                     className="story_main-heading cc-heading-h3"
// // //                   >
// // //                     {aboutStory.title}
// // //                   </h2>
// // //                   <p
// // //                     data-w-id="16eb3e15-2abd-6d76-86e3-e2922a80a625"
// // //                     //   style="opacity:0"
// // //                     className="story_subtext cc-title-small"
// // //                     dangerouslySetInnerHTML={{ __html: aboutStory.description }}
// // //                   >
                    
// // //                   </p>
                  
// // //                 </div>
// // //               </FadeInOnScroll>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     );
// // // }


// // import { useState } from "react";

// // export default function StorySection() {
// //   const [aboutStory] = useState({
// //     image:
// //       "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     title: "Our Story: Building the Future with GFRP",
// //     description:
// //       "<p>For over two decades, we've been at the forefront of Glass Fiber Reinforced Plastic innovation, transforming how industries approach construction and manufacturing. Our journey began with a simple vision: to create stronger, lighter, and more sustainable materials that would revolutionize traditional building methods.</p><p>Today, we're proud to be recognized as industry leaders, serving clients across multiple sectors with cutting-edge GFRP solutions that combine durability, efficiency, and environmental responsibility.</p>",
// //   });

// //   if (!aboutStory) return;

// //   return (
// //     <section className="section_story">
// //       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
// //         <div className="container-large">
// //           <div className="story_wrapper">
// //             <div>
// //               <div
// //                 data-w-id="839ab982-bc30-534c-baa7-3f6f503a481d"
// //                 className="story_left-wrapper"
// //               >
// //                 <img
// //                   src={aboutStory.image}
// //                   loading="lazy"
// //                   sizes="(max-width: 581px) 100vw, 581px"
// //                   alt="A group of friends standing and watching the sun set"
// //                   className="story_left-wrapper-image"
// //                 />
// //               </div>
// //             </div>
// //             <div>
// //               <div className="story_right-wrapper">
// //                 <h2
// //                   data-w-id="9c017f97-2372-f945-bf92-2d29b54f6dbe"
// //                   className="story_main-heading cc-heading-h3"
// //                 >
// //                   {aboutStory.title}
// //                 </h2>
// //                 <p
// //                   data-w-id="16eb3e15-2abd-6d76-86e3-e2922a80a625"
// //                   className="story_subtext cc-title-small"
// //                   dangerouslySetInnerHTML={{ __html: aboutStory.description }}
// //                 ></p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// // components/StorySection.tsx

// import { useEffect, useState } from "react";
// import { fetchStorySection, getImageUrl, richTextToHtml } from "@/lib/story";

// export default function StorySection() {
//   const [aboutStory, setAboutStory] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadStoryData() {
//       try {
//         const data = await fetchStorySection();
        
//         if (data && data.storyContent) {
//           const storyContent = data.storyContent;
          
//           setAboutStory({
//             image: getImageUrl(storyContent.image?.url),
//             title: storyContent.title?.text || "",
//             description: richTextToHtml(storyContent.description?.content) || "",
//             altText: storyContent.image?.altText || "A group of friends standing and watching the sun set",
//             imageSizes: storyContent.image?.sizes || "(max-width: 581px) 100vw, 581px",
//             imageLoading: storyContent.image?.loading || "lazy",
//           });
//         }
//       } catch (error) {
//         console.error("Error loading story section:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadStoryData();
//   }, []);

//   if (loading) {
//     return (
//       <section className="section_story">
//         <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
//           <div className="container-large">
//             <div className="story_wrapper">
//               <div>Loading...</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!aboutStory) return null;

//   return (
//     <section className="section_story">
//       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
//         <div className="container-large">
//           <div className="story_wrapper">
//             <div>
//               <div
//                 data-w-id="839ab982-bc30-534c-baa7-3f6f503a481d"
//                 className="story_left-wrapper"
//               >
//                 <img
//                   src={aboutStory.image}
//                   loading={aboutStory.imageLoading}
//                   sizes={aboutStory.imageSizes}
//                   alt={aboutStory.altText}
//                   className="story_left-wrapper-image"
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="story_right-wrapper">
//                 <h2
//                   data-w-id="9c017f97-2372-f945-bf92-2d29b54f6dbe"
//                   className="story_main-heading cc-heading-h3"
//                 >
//                   {aboutStory.title}
//                 </h2>
//                 <p
//                   data-w-id="16eb3e15-2abd-6d76-86e3-e2922a80a625"
//                   className="story_subtext cc-title-small"
//                   dangerouslySetInnerHTML={{ __html: aboutStory.description }}
//                 ></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// components/about/StorySection.tsx

import { getImageUrl, richTextToHtml } from "@/lib/story";

interface StoryData {
  storyContent?: {
    image?: {
      url?: any;
      altText?: string;
      sizes?: string;
      loading?: string;
    };
    title?: {
      text?: string;
    };
    description?: {
      content?: any;
    };
  };
}

interface StorySectionProps {
  data: StoryData | null;
}

export default function StorySection({ data }: StorySectionProps) {
  // If no data, return null
  if (!data || !data.storyContent) {
    return null;
  }

  const storyContent = data.storyContent;

  // Extract data with fallbacks
  const imageUrl = getImageUrl(storyContent.image?.url);
  const title = storyContent.title?.text || "";
  const description = richTextToHtml(storyContent.description?.content) || "";
  const altText = storyContent.image?.altText || "A group of friends standing and watching the sun set";
  const imageSizes = storyContent.image?.sizes || "(max-width: 581px) 100vw, 581px";
  const imageLoading = storyContent.image?.loading || "lazy";

  return (
    <section className="section_story">
      <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
        <div className="container-large">
          <div className="story_wrapper">
            <div>
              <div
                data-w-id="839ab982-bc30-534c-baa7-3f6f503a481d"
                className="story_left-wrapper"
              >
                <img
                  src={imageUrl}
                  loading={imageLoading}
                  sizes={imageSizes}
                  alt={altText}
                  className="story_left-wrapper-image"
                />
              </div>
            </div>
            <div>
              <div className="story_right-wrapper">
                <h2
                  data-w-id="9c017f97-2372-f945-bf92-2d29b54f6dbe"
                  className="story_main-heading cc-heading-h3"
                >
                  {title}
                </h2>
                <p
                  data-w-id="16eb3e15-2abd-6d76-86e3-e2922a80a625"
                  className="story_subtext cc-title-small"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
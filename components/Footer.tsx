// // "use client";

// // import React, { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useLoader } from "./LoaderContext";
// // import axios from "axios";

// // const Footer = () => {


// //   const [email, setEmail] = useState("");
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [error, setError] = useState("");

  

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsSubmitted(false);
// //     setError("");

// //     try {
// //       const response = await axios.post(
// //         "https://gfrp-india.onrender.com/api/newsletter_form_view/", // Replace with your actual endpoint
// //         { email }
// //       );
// //       setIsSubmitted(true);
// //       setEmail("");
// //     } catch (err) {
// //       console.error("Error submitting email:", err);
// //       setError("Oops! Something went wrong. Please try again.");
// //     }
// //   };

// //   const { setHideLoader } = useLoader();
  
// //     function doReverse(e) {
// //       // e.preventDefault();
// //       setHideLoader(false);
  
// //       setTimeout(() => {
// //         setHideLoader(true);
// //       }, 4000);
// //     }

// //   return (
// //     <footer className="c-footer">
// //       <div className="footer_wrapper">
// //         <div className="footer_top-wrapper">
// //           <div className="footer_logo-form-wrap">
// //             <Link
// //               href="/"
// //               aria-current="page"
// //               className="footer_linkblock w-inline-block w--current"
// //               onClick={doReverse}
// //             >
// //               <img
// //                 src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
// //                 loading="lazy"
// //                 alt="solvance logo"
// //                 className="footer_logobrand"
// //                 style={{ marginLeft: "-15px" }}
// //                 // width={200}
// //                 // height={60}
// //               />
// //             </Link>
// //             <p className="footer_brand-subtext">
// //               Stay updated with the latest in GFRP innovation—join thousands of
// //               professionals receiving insights on cutting-edge composites,
// //               construction trends, and next-gen material technologies.
// //             </p>
// //             <div className="footer_formblock">
// //               <form
// //                 // id="wf-form-Subscription-Email"
// //                 // name="wf-form-Subscription-Email"
// //                 // data-name="Subscription Email"
// //                 // method="get"
// //                 className="footer_form"
// //                 // data-wf-page-id="67ea6645891c299018425dd7"
// //                 // data-wf-element-id="fd5342b7-b9fb-d0d8-2595-656bdadffa7a"
// //                 onSubmit={handleSubmit}
// //               >
// //                 <label htmlFor="Email-2" className="hide">
// //                   Email
// //                 </label>
// //                 <input
// //                   className="cc-form_field footer-form w-input"
// //                   maxLength={256}
// //                   name="Email-2"
// //                   data-name="Email 2"
// //                   placeholder="Enter your email"
// //                   type="email"
// //                   id="Email-2"
// //                   required
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //                 <input
// //                   type="submit"
// //                   data-wait="Please wait..."
// //                   className="footer_form-submit-btn w-button"
// //                   value="Subscribe"
// //                   // style={{pointerEvents: 'none'}}
// //                   disabled={!email}
// //                   style={{
// //                     pointerEvents: !email ? "none" : "auto",
// //                     opacity: !email ? 0.5 : 1,
// //                   }}
// //                 />
// //               </form>
// //               {isSubmitted && (
// //                 <div className="form_message-success w-form-done">
// //                   <div className="form_success-text">
// //                     Thank you! Your submission has been received!
// //                   </div>
// //                 </div>
// //               )}
// //               <div className="footer_error-message w-form-fail">
// //                 <div className="foote_error-text">
// //                   Oops! Something went wrong while submitting the form.
// //                 </div>
// //               </div>
// //             </div>
// //             <p className="footer_logobrand-subtext">
// //               We care about your data in our privacy policy.
// //             </p>
// //           </div>
// //           <div className="footer_nav-list-wrap">
// //             <div className="footer_nav-col hehe"></div>
            
// //             <div className="footer_nav-col hehe">
// //               {/* <h2 className="footer_nav-heading">Legal</h2> */}
// //             </div>
// //             <div className="footer_nav-col">
// //               <h2 className="footer_nav-heading">Company</h2>
// //               <ul role="list" className="footer_nav-list">
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/"
// //                     aria-current="page"
// //                     className="footer_nav-link w--current"
// //                     onClick={doReverse}
// //                   >
// //                     Home
// //                   </Link>
// //                 </li>
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/about"
// //                     className="footer_nav-link"
// //                     onClick={doReverse}
// //                   >
// //                     About
// //                   </Link>
// //                 </li>
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/services"
// //                     className="footer_nav-link"
// //                     onClick={doReverse}
// //                   >
// //                     Resources
// //                   </Link>
// //                 </li>
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/projects"
// //                     className="footer_nav-link"
// //                     onClick={doReverse}
// //                   >
// //                     Machine
// //                   </Link>
// //                 </li>
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/blog"
// //                     className="footer_nav-link"
// //                     onClick={doReverse}
// //                   >
// //                     Blog
// //                   </Link>
// //                 </li>
// //                 <li className="footer_nav-list-item">
// //                   <Link
// //                     href="/contact"
// //                     className="footer_nav-link"
// //                     onClick={doReverse}
// //                   >
// //                     Contact
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="footer_bottom-wrapper">
// //           <p className="footer_copyright-text">
// //             GFRP INDIA, all rights reserved, 2025
// //           </p>
// //           <div className="footer_social-text-wrap">
// //             <div className="footer_social-heading">Connect with us:</div>
// //             <ul role="list" className="footer_socials-list">
// //               <li className="footer_socials-list-item">
// //                 <Link
// //                   href="https://wa.me/+919530013034"
// //                   aria-current="page"
// //                   className="footer_socials-linkblock w-inline-block w--current"
// //                   // onClick={doReverse}
// //                 >
                  
// //                   <svg
// //                     className="footer_socials-logo"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="32"
// //                     height="31"
// //                     viewBox="0 0 32 31"
// //                     fill="#fff"
// //                   >
// //                     {/* <title>whatsapp</title> */}
// //                     <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
// //                   </svg>
// //                 </Link>
// //               </li>
              
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// "use client";

// import React, { useState } from "react";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitted(false);
//     setError("");

//     try {
//       // Demo: Simulate successful submission
//       setIsSubmitted(true);
//       setEmail("");
//     } catch (err) {
//       console.error("Error submitting email:", err);
//       setError("Oops! Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <footer className="c-footer">
//       <div className="footer_wrapper">
//         <div className="footer_top-wrapper">
//           <div className="footer_logo-form-wrap">
//             <a
//               href="/"
//               aria-current="page"
//               className="footer_linkblock w-inline-block w--current"
//             >
//               <img
//                 src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
//                 loading="lazy"
//                 alt="solvance logo"
//                 className="footer_logobrand"
//                 style={{ marginLeft: "-15px" }}
//               />
//             </a>
//             <p className="footer_brand-subtext">
//               Stay updated with the latest in GFRP innovation—join thousands of
//               professionals receiving insights on cutting-edge composites,
//               construction trends, and next-gen material technologies.
//             </p>
//             <div className="footer_formblock">
//               <form className="footer_form" onSubmit={handleSubmit}>
//                 <label htmlFor="Email-2" className="hide">
//                   Email
//                 </label>
//                 <input
//                   className="cc-form_field footer-form w-input"
//                   maxLength={256}
//                   name="Email-2"
//                   data-name="Email 2"
//                   placeholder="Enter your email"
//                   type="email"
//                   id="Email-2"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="submit"
//                   data-wait="Please wait..."
//                   className="footer_form-submit-btn w-button"
//                   value="Subscribe"
//                   disabled={!email}
//                   style={{
//                     pointerEvents: !email ? "none" : "auto",
//                     opacity: !email ? 0.5 : 1,
//                   }}
//                 />
//               </form>
//               {isSubmitted && (
//                 <div className="form_message-success w-form-done">
//                   <div className="form_success-text">
//                     Thank you! Your submission has been received!
//                   </div>
//                 </div>
//               )}
//               <div className="footer_error-message w-form-fail">
//                 <div className="foote_error-text">
//                   Oops! Something went wrong while submitting the form.
//                 </div>
//               </div>
//             </div>
//             <p className="footer_logobrand-subtext">
//               We care about your data in our privacy policy.
//             </p>
//           </div>
//           <div className="footer_nav-list-wrap">
//             <div className="footer_nav-col hehe"></div>

//             <div className="footer_nav-col hehe">
//               {/* <h2 className="footer_nav-heading">Legal</h2> */}
//             </div>
//             <div className="footer_nav-col">
//               <h2 className="footer_nav-heading">Company</h2>
//               <ul role="list" className="footer_nav-list">
//                 <li className="footer_nav-list-item">
//                   <a
//                     href="/"
//                     aria-current="page"
//                     className="footer_nav-link w--current"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="footer_nav-list-item">
//                   <a href="/about" className="footer_nav-link">
//                     About
//                   </a>
//                 </li>
//                 <li className="footer_nav-list-item">
//                   <a href="/services" className="footer_nav-link">
//                     Resources
//                   </a>
//                 </li>
//                 <li className="footer_nav-list-item">
//                   <a href="/projects" className="footer_nav-link">
//                     Machine
//                   </a>
//                 </li>
//                 <li className="footer_nav-list-item">
//                   <a href="/blog" className="footer_nav-link">
//                     Blog
//                   </a>
//                 </li>
//                 <li className="footer_nav-list-item">
//                   <a href="/contact" className="footer_nav-link">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="footer_bottom-wrapper">
//           <p className="footer_copyright-text">
//             GFRP INDIA, all rights reserved, 2025
//           </p>
//           <div className="footer_social-text-wrap">
//             <div className="footer_social-heading">Connect with us:</div>
//             <ul role="list" className="footer_socials-list">
//               <li className="footer_socials-list-item">
//                 <a
//                   href="https://wa.me/+919530013034"
//                   aria-current="page"
//                   className="footer_socials-linkblock w-inline-block w--current"
//                 >
//                   <svg
//                     className="footer_socials-logo"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="31"
//                     viewBox="0 0 32 31"
//                     fill="#fff"
//                   >
//                     {/* <title>whatsapp</title> */}
//                     <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import React, { useState, useEffect } from "react";
import { fetchFooterComponent, getImageUrl } from "@/lib/Footer";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const loadFooterData = async () => {
      const data = await fetchFooterComponent();
      setFooterData(data);
    };
    loadFooterData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setError("");

    try {
      // Demo: Simulate successful submission
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error submitting email:", err);
      setError(
        footerData?.newsletterForm?.errorMessage ||
          "Oops! Something went wrong. Please try again."
      );
    }
  };

  // Default fallback data
  if (!footerData) {
    return (
      <footer className="c-footer">
        <div className="footer_wrapper">
          <div className="footer_top-wrapper">
            <div className="footer_logo-form-wrap">
              <a
                href="/"
                aria-current="page"
                className="footer_linkblock w-inline-block w--current"
              >
                <img
                  src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
                  loading="lazy"
                  alt="solvance logo"
                  className="footer_logobrand"
                  style={{ marginLeft: "-15px" }}
                />
              </a>
              <p className="footer_brand-subtext">Loading...</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const logoUrl =
    getImageUrl(footerData.logoSection?.logo) ||
    footerData.logoSection?.logoUrl ||
    "https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png";

  const getSocialIcon = (platform: string, customSvg?: string) => {
    if (platform === "custom" && customSvg) {
      return customSvg;
    }

    const icons: any = {
      whatsapp:
        "M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z",
      facebook:
        "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      twitter:
        "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      instagram:
        "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      linkedin:
        "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      youtube:
        "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    };

    return icons[platform] || icons.whatsapp;
  };

  return (
    <footer className="c-footer">
      <div className="footer_wrapper">
        <div className="footer_top-wrapper">
          <div className="footer_logo-form-wrap">
            <a
              href={footerData.logoSection?.logoLink || "/"}
              aria-current="page"
              className="footer_linkblock w-inline-block w--current"
            >
              <img
                src={logoUrl}
                loading="lazy"
                alt={footerData.logoSection?.logoAlt || "logo"}
                className="footer_logobrand"
                style={{
                  marginLeft: footerData.logoSection?.logoMarginLeft || "-15px",
                }}
              />
            </a>
            <p className="footer_brand-subtext">
              {footerData.logoSection?.brandSubtext ||
                "Stay updated with the latest innovations."}
            </p>

            {footerData.newsletterForm?.enabled && (
              <>
                <div className="footer_formblock">
                  <form className="footer_form" onSubmit={handleSubmit}>
                    <label htmlFor="Email-2" className="hide">
                      Email
                    </label>
                    <input
                      className="cc-form_field footer-form w-input"
                      maxLength={256}
                      name="Email-2"
                      data-name="Email 2"
                      placeholder={
                        footerData.newsletterForm?.inputPlaceholder ||
                        "Enter your email"
                      }
                      type="email"
                      id="Email-2"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="footer_form-submit-btn w-button"
                      value={
                        footerData.newsletterForm?.submitButtonText ||
                        "Subscribe"
                      }
                      disabled={!email}
                      style={{
                        pointerEvents: !email ? "none" : "auto",
                        opacity: !email ? 0.5 : 1,
                      }}
                    />
                  </form>
                  {isSubmitted && (
                    <div className="form_message-success w-form-done">
                      <div className="form_success-text">
                        {footerData.newsletterForm?.successMessage ||
                          "Thank you! Your submission has been received!"}
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="footer_error-message w-form-fail">
                      <div className="foote_error-text">{error}</div>
                    </div>
                  )}
                </div>
                <p className="footer_logobrand-subtext">
                  {footerData.newsletterForm?.privacyText ||
                    "We care about your data in our privacy policy."}
                </p>
              </>
            )}
          </div>

          <div className="footer_nav-list-wrap">
            <div className="footer_nav-col hehe"></div>
            <div className="footer_nav-col hehe"></div>

            {footerData.navigationSections?.map(
              (section: any, index: number) => (
                <div key={index} className="footer_nav-col">
                  <h2 className="footer_nav-heading">{section.heading}</h2>
                  <ul role="list" className="footer_nav-list">
                    {section.links?.map((link: any, linkIndex: number) => (
                      <li key={linkIndex} className="footer_nav-list-item">
                        <a
                          href={link.url}
                          className="footer_nav-link"
                          target={link.openInNewTab ? "_blank" : "_self"}
                          rel={
                            link.openInNewTab
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        <div className="footer_bottom-wrapper">
          <p className="footer_copyright-text">
            {footerData.bottomSection?.copyrightText ||
              "All rights reserved, 2025"}
          </p>
          <div className="footer_social-text-wrap">
            <div className="footer_social-heading">
              {footerData.socialSection?.heading || "Connect with us:"}
            </div>
            <ul role="list" className="footer_socials-list">
              {footerData.socialSection?.socialLinks?.map(
                (social: any, index: number) => (
                  <li key={index} className="footer_socials-list-item">
                    <a
                      href={social.url}
                      aria-current="page"
                      className="footer_socials-linkblock w-inline-block w--current"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="footer_socials-logo"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="31"
                        viewBox="0 0 32 31"
                        fill="#fff"
                      >
                        <path
                          d={getSocialIcon(social.platform, social.customSvg)}
                        />
                      </svg>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
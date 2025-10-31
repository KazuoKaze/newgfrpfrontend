// // "use client";

// // import axios from "axios";
// // import { useEffect, useRef, useState } from "react";



// // export default function ContactHero() {
// //   const [contactPage, setContactPage] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [successMsg, setSuccessMsg] = useState("");
// //   const [errorMsg, setErrorMsg] = useState("");

// //   const formRef = useRef<HTMLFormElement>(null);

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setSuccessMsg("");
// //     setErrorMsg("");

// //     const formData = {
// //       first_name: (e.currentTarget["First-name"] as HTMLInputElement).value,
// //       last_name: (e.currentTarget["Last-name"] as HTMLInputElement).value,
// //       email_address: (e.currentTarget["Email"] as HTMLInputElement).value,
// //       phone: (e.currentTarget["Phone"] as HTMLInputElement).value,
// //       city: (e.currentTarget["City"] as HTMLInputElement).value,
// //       message: (e.currentTarget["Message"] as HTMLTextAreaElement).value,
// //     };

// //     try {
// //       const res = await axios.post(
// //         "https://gfrp-india.onrender.com/api/contact_form_view/",
// //         formData
// //       );
// //       setSuccessMsg("Thank you! Your submission has been received!");
// //       // e.currentTarget.reset();
// //       formRef.current?.reset();
// //     } catch (error: any) {
// //       console.error("Error submitting form:", error);
// //       setErrorMsg("Oops! Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //     useEffect(() => {
// //       axios
// //         .get("https://gfrp-india.onrender.com/api/get_contact/") // your Django endpoint
// //         .then((response) => {
// //           setContactPage(response.data); // it's a single object, not an array
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching hero section:", error);
// //         });
// //     }, []);

// //   if (!contactPage) return;


// //     return (
// //       <section
// //         className="section_hero projects-page contact-page"
// //         style={{ backgroundImage: `url(${contactPage.image})` }}
// //       >
// //         <div className="padding-global padding-0">
// //           <div className="container-large">
// //             <div className="hero_wrapper projects-page">
// //               <div className="contact-hero_left-container">
// //                 <div className="contact-hero_top-content-wrap">
// //                   <div className="about-us_text-dot-wrap">
// //                     <div
// //                       className="about-us_heading-dot"
// //                       //   style="background-color: #ff6b35 !important"
// //                       style={{ backgroundColor: "#ff6b35 !important" }}
// //                     ></div>
// //                     <div className="about-us_heading">CONTACT</div>
// //                   </div>
// //                   <h1 className="contact-hero_main-heading cc-heading-h2">
// //                     {contactPage.title}
// //                   </h1>
// //                   <p className="contact-hero_subtext cc-title-small">
// //                     {contactPage.description}
// //                   </p>
// //                 </div>
// //                 <div className="contact-hero_bottom-content-wrap">
// //                   <div className="contact-hero_details-wrap">
// //                     {/* <img
// //                       src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebef29b64affed6df906e9_Vector.svg"
// //                       loading="lazy"
// //                       alt=""
// //                       className="contact-hero_details-icon"
// //                     /> */}
// //                     <div className="contact-hero_details-col">
// //                       <div
// //                         className="contact-hero_details-heading"
// //                         style={{ color: "#ff6b35" }}
// //                       >
// //                         Phone
// //                       </div>
// //                       <a
// //                         href="tel:(252)555-0126"
// //                         className="contact-hero_details-text"
// //                       >
// //                         {contactPage.phone}
// //                       </a>
// //                     </div>
// //                   </div>
// //                   <div className="contact-hero_details-wrap">
// //                     <div className="contact-hero_details-col">
// //                       <div
// //                         className="contact-hero_details-heading"
// //                         style={{ color: "#ff6b35" }}
// //                       >
// //                         Email
// //                       </div>
// //                       <a
// //                         href="mailto:hello@gfrp.com?subject=New%20Project%20Request"
// //                         className="contact-hero_details-text"
// //                       >
// //                         {contactPage.email_address}
// //                       </a>
// //                     </div>
// //                   </div>
// //                   <div className="contact-hero_details-wrap">
// //                     <div className="contact-hero_details-col">
// //                       <div
// //                         className="contact-hero_details-heading"
// //                         style={{ color: "#ff6b35" }}
// //                       >
// //                         Address
// //                       </div>
// //                       <a
// //                         href="https://www.google.com/maps/search/2464+Royal+Ln.+Mesa,+New+Jersey+45463/@36.0229575,-96.2710454,5z/data=!3m1!4b1?entry=ttu&amp;g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
// //                         target="_blank"
// //                         className="contact-hero_details-text"
// //                       >
// //                         {contactPage.address}
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="contact-hero_right-container">
// //                 <div className="contact-formblock">
// //                   <form
// //                     id="email-form"
// //                     name="email-form"
// //                     data-name="Email Form"
// //                     method="get"
// //                     className="contact-form"
// //                     data-wf-page-id="67ebecb112a8e5bd7f4bd393"
// //                     data-wf-element-id="d499c54f-7670-6225-41dc-d874069fdc47"
// //                     onSubmit={handleSubmit}
// //                     ref={formRef}
// //                   >
// //                     <div className="contact-form_row">
// //                       <div className="contact_form_field-wrapper">
// //                         <label htmlFor="First-name" className="cc-form_label">
// //                           First name
// //                         </label>
// //                         <input
// //                           className="cc-form_field w-input"
// //                           name="First-name"
// //                           data-name="First name"
// //                           placeholder="John"
// //                           type="text"
// //                           id="First-name"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="contact_form_field-wrapper">
// //                         <label htmlFor="Last-name" className="cc-form_label">
// //                           Last name
// //                         </label>
// //                         <input
// //                           className="cc-form_field w-input"
// //                           name="Last-name"
// //                           data-name="Last name"
// //                           placeholder="Smith"
// //                           type="text"
// //                           id="Last-name"
// //                           required
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="contact-form_row">
// //                       <div className="contact_form_field-wrapper">
// //                         <label htmlFor="Email-3" className="cc-form_label">
// //                           Email
// //                         </label>
// //                         <input
// //                           className="cc-form_field w-input"
// //                           name="Email"
// //                           data-name="Email"
// //                           placeholder="john@company.com"
// //                           type="email"
// //                           id="Email-3"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="contact_form_field-wrapper">
// //                         <label htmlFor="Phone" className="cc-form_label">
// //                           Phone
// //                         </label>
// //                         <input
// //                           className="cc-form_field w-input"
// //                           name="Phone"
// //                           data-name="Phone"
// //                           placeholder="(000)-000-0000"
// //                           type="tel"
// //                           id="Phone"
// //                           required
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="contact_form_field-wrapper">
// //                       <label htmlFor="Service-2" className="cc-form_label">
// //                         City
// //                       </label>
// //                       <input
// //                         className="cc-form_field w-input"
// //                         name="City"          
// //                         data-name="City"
// //                         placeholder="Mumbai"
// //                         type="text"
// //                         id="City"
// //                         required
// //                       />
// //                       {/* <select
// //                         id="Service-2"
// //                         name="Service"
// //                         data-name="Service"
// //                         required
// //                         className="cc-form_field w-select"
// //                         style={{ borderColor: "#e7e7e7" }}
// //                       >
// //                         <option value="">Select</option>
// //                         <option value="GFRP machine">GFRP machine</option>
// //                         <option value="some other">some other</option>
// //                         <option value="new machine">new machine</option>
// //                       </select> */}
// //                     </div>
// //                     <div className="contact_form_field-wrapper">
// //                       <label htmlFor="Message" className="cc-form_label">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         required
// //                         placeholder="Type here..."
// //                         id="Message"
// //                         name="Message"
// //                         data-name="Message"
// //                         className="cc-form_field text-area w-input"
// //                         style={{ borderColor: "#e7e7e7" }}
// //                       ></textarea>
// //                     </div>
// //                     <input
// //                       type="submit"
// //                       data-wait="Please wait..."
// //                       className="contact-form_submit-btn w-button"
// //                       value={loading ? "Submitting..." : "Submit"}
// //                       disabled={loading}
// //                       // style={{
// //                       //   backgroundColor: "#ff6b35",
// //                       //   pointerEvents: "none",
// //                       //   cursor: "not-allowed",
// //                       // }}
// //                       style={{
// //                         backgroundColor: loading ? "#ccc" : "#ff6b35",
// //                         cursor: loading ? "not-allowed" : "pointer",
// //                       }}
// //                     />
// //                   </form>
                  
// //                   {successMsg && (
// //                     <div className="contact_success-message w-form-done">
// //                       <div className="form_success-text">{successMsg}</div>
// //                     </div>
// //                   )}
// //                   {errorMsg && (
// //                     <div className="contact_error-block-message w-form-fail">
// //                       <div className="footer_error-text">{errorMsg}</div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// // }


// "use client";

// import { useRef, useState } from "react";

// export default function ContactHero() {
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMsg("");
//     setErrorMsg("");

//     const formData = {
//       first_name: (e.currentTarget["First-name"] as HTMLInputElement).value,
//       last_name: (e.currentTarget["Last-name"] as HTMLInputElement).value,
//       email_address: (e.currentTarget["Email"] as HTMLInputElement).value,
//       phone: (e.currentTarget["Phone"] as HTMLInputElement).value,
//       city: (e.currentTarget["City"] as HTMLInputElement).value,
//       message: (e.currentTarget["Message"] as HTMLTextAreaElement).value,
//     };

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       setSuccessMsg("Thank you! Your submission has been received!");
//       formRef.current?.reset();
//     } catch (error: any) {
//       console.error("Error submitting form:", error);
//       setErrorMsg("Oops! Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Demo data replacing the dynamic API data
//   const contactPage = {
//     title: "Get in Touch with Our Team",
//     description:
//       "Have questions about our composite materials or need a custom solution? Our expert team is here to help you find the perfect materials for your project.",
//     phone: "(555) 123-4567",
//     email_address: "info@compositetech.com",
//     address: "2464 Royal Ln. Mesa, New Jersey 45463",
//     image:
//       "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
//   };

//   return (
//     <section
//       className="section_hero projects-page contact-page"
//       style={{ backgroundImage: `url(${contactPage.image})` }}
//     >
//       <div className="padding-global padding-0">
//         <div className="container-large">
//           <div className="hero_wrapper projects-page">
//             <div className="contact-hero_left-container">
//               <div className="contact-hero_top-content-wrap">
//                 <div className="about-us_text-dot-wrap">
//                   <div
//                     className="about-us_heading-dot"
//                     style={{ backgroundColor: "#ff6b35 !important" }}
//                   ></div>
//                   <div className="about-us_heading">CONTACT</div>
//                 </div>
//                 <h1 className="contact-hero_main-heading cc-heading-h2">
//                   {contactPage.title}
//                 </h1>
//                 <p className="contact-hero_subtext cc-title-small">
//                   {contactPage.description}
//                 </p>
//               </div>
//               <div className="contact-hero_bottom-content-wrap">
//                 <div className="contact-hero_details-wrap">
//                   <div className="contact-hero_details-col">
//                     <div
//                       className="contact-hero_details-heading"
//                       style={{ color: "#ff6b35" }}
//                     >
//                       Phone
//                     </div>
//                     <a
//                       href="tel:(252)555-0126"
//                       className="contact-hero_details-text"
//                     >
//                       {contactPage.phone}
//                     </a>
//                   </div>
//                 </div>
//                 <div className="contact-hero_details-wrap">
//                   <div className="contact-hero_details-col">
//                     <div
//                       className="contact-hero_details-heading"
//                       style={{ color: "#ff6b35" }}
//                     >
//                       Email
//                     </div>
//                     <a
//                       href="mailto:hello@gfrp.com?subject=New%20Project%20Request"
//                       className="contact-hero_details-text"
//                     >
//                       {contactPage.email_address}
//                     </a>
//                   </div>
//                 </div>
//                 <div className="contact-hero_details-wrap">
//                   <div className="contact-hero_details-col">
//                     <div
//                       className="contact-hero_details-heading"
//                       style={{ color: "#ff6b35" }}
//                     >
//                       Address
//                     </div>
//                     <a
//                       href="https://www.google.com/maps/search/2464+Royal+Ln.+Mesa,+New+Jersey+45463/@36.0229575,-96.2710454,5z/data=!3m1!4b1?entry=ttu&amp;g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
//                       target="_blank"
//                       className="contact-hero_details-text"
//                     >
//                       {contactPage.address}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="contact-hero_right-container">
//               <div className="contact-formblock">
//                 <form
//                   id="email-form"
//                   name="email-form"
//                   data-name="Email Form"
//                   method="get"
//                   className="contact-form"
//                   data-wf-page-id="67ebecb112a8e5bd7f4bd393"
//                   data-wf-element-id="d499c54f-7670-6225-41dc-d874069fdc47"
//                   onSubmit={handleSubmit}
//                   ref={formRef}
//                 >
//                   <div className="contact-form_row">
//                     <div className="contact_form_field-wrapper">
//                       <label htmlFor="First-name" className="cc-form_label">
//                         First name
//                       </label>
//                       <input
//                         className="cc-form_field w-input"
//                         name="First-name"
//                         data-name="First name"
//                         placeholder="John"
//                         type="text"
//                         id="First-name"
//                         required
//                       />
//                     </div>
//                     <div className="contact_form_field-wrapper">
//                       <label htmlFor="Last-name" className="cc-form_label">
//                         Last name
//                       </label>
//                       <input
//                         className="cc-form_field w-input"
//                         name="Last-name"
//                         data-name="Last name"
//                         placeholder="Smith"
//                         type="text"
//                         id="Last-name"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="contact-form_row">
//                     <div className="contact_form_field-wrapper">
//                       <label htmlFor="Email-3" className="cc-form_label">
//                         Email
//                       </label>
//                       <input
//                         className="cc-form_field w-input"
//                         name="Email"
//                         data-name="Email"
//                         placeholder="john@company.com"
//                         type="email"
//                         id="Email-3"
//                         required
//                       />
//                     </div>
//                     <div className="contact_form_field-wrapper">
//                       <label htmlFor="Phone" className="cc-form_label">
//                         Phone
//                       </label>
//                       <input
//                         className="cc-form_field w-input"
//                         name="Phone"
//                         data-name="Phone"
//                         placeholder="(000)-000-0000"
//                         type="tel"
//                         id="Phone"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="contact_form_field-wrapper">
//                     <label htmlFor="Service-2" className="cc-form_label">
//                       City
//                     </label>
//                     <input
//                       className="cc-form_field w-input"
//                       name="City"
//                       data-name="City"
//                       placeholder="Mumbai"
//                       type="text"
//                       id="City"
//                       required
//                     />
//                   </div>
//                   <div className="contact_form_field-wrapper">
//                     <label htmlFor="Message" className="cc-form_label">
//                       Message
//                     </label>
//                     <textarea
//                       required
//                       placeholder="Type here..."
//                       id="Message"
//                       name="Message"
//                       data-name="Message"
//                       className="cc-form_field text-area w-input"
//                       style={{ borderColor: "#e7e7e7" }}
//                     ></textarea>
//                   </div>
//                   <input
//                     type="submit"
//                     data-wait="Please wait..."
//                     className="contact-form_submit-btn w-button"
//                     value={loading ? "Submitting..." : "Submit"}
//                     disabled={loading}
//                     style={{
//                       backgroundColor: loading ? "#ccc" : "#ff6b35",
//                       cursor: loading ? "not-allowed" : "pointer",
//                     }}
//                   />
//                 </form>

//                 {successMsg && (
//                   <div className="contact_success-message w-form-done">
//                     <div className="form_success-text">{successMsg}</div>
//                   </div>
//                 )}
//                 {errorMsg && (
//                   <div className="contact_error-block-message w-form-fail">
//                     <div className="footer_error-text">{errorMsg}</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";
import { submitContactForm, getImageUrl } from "@/lib/contact";

interface ContactHeroProps {
  contactData: any;
}

export default function ContactHero({ contactData }: ContactHeroProps) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const form = e.currentTarget;

      // Get form values using multiple methods for reliability
      const getInputValue = (names: string[]): string => {
        for (const name of names) {
          const input = form.querySelector(`[name="${name}"]`) as
            | HTMLInputElement
            | HTMLTextAreaElement;
          if (input && input.value) {
            return input.value.trim();
          }
        }
        return "";
      };

      // Build the submission data object - try both CMS field names and fallback names
      const submissionData = {
        first_name: getInputValue(["first_name", "First-name", "firstName"]),
        last_name: getInputValue(["last_name", "Last-name", "lastName"]),
        email_address: getInputValue(["email_address", "Email", "email"]),
        phone: getInputValue(["phone", "Phone"]),
        city: getInputValue(["city", "City"]),
        message: getInputValue(["message", "Message"]),
      };

      console.log("Form submission data:", submissionData); // Debug log

      // Additional debug: log all form fields
      const allInputs = form.querySelectorAll("input, textarea, select");
      console.log(
        "All form fields found:",
        Array.from(allInputs).map((input: any) => ({
          name: input.name,
          value: input.value,
          type: input.type,
        }))
      );

      const result = await submitContactForm(submissionData);

      if (result.success) {
        const successMessage =
          contactData?.sections?.[0]?.formSettings?.successMessage ||
          "Thank you! Your submission has been received!";
        setSuccessMsg(successMessage);
        formRef.current?.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      const errorMessage =
        contactData?.sections?.[0]?.formSettings?.errorMessage ||
        "Oops! Something went wrong. Please try again.";
      setErrorMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Extract data from Payload CMS
  const section = contactData?.sections?.[0];
  const content = section?.content || {};
  const contactDetails = section?.contactDetails?.detailsOrder || [];
  const formSettings = section?.formSettings || {};
  const formFields = formSettings?.formFields || [];

  // Get colors
  const accentColor = section?.accentColor || "#ff6b35";
  const backgroundColor = section?.backgroundColor || "#ffffff";
  const backgroundImage =
    section?.backgroundImageUrl ||
    getImageUrl(section?.backgroundImage) ||
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1";

  // Get contact details (sorted by order)
  const sortedContactDetails = [...contactDetails]
    .filter((detail: any) => detail.isVisible !== false)
    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

  // Get form fields (sorted by order)
  const sortedFormFields = [...formFields]
    .filter((field: any) => field.isVisible !== false)
    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

  // Helper function to get field name mapping
  const getFieldNameMapping = (fieldName: string) => {
    // Map CMS field names to form field names
    const mapping: { [key: string]: string } = {
      first_name: "First-name",
      firstName: "First-name",
      last_name: "Last-name",
      lastName: "Last-name",
      email_address: "Email",
      email: "Email",
      phone: "Phone",
      city: "City",
      message: "Message",
    };
    return mapping[fieldName] || fieldName;
  };

  // Helper function to render form field
  const renderFormField = (field: any) => {
    const isTextarea = field.fieldType === "textarea";
    const isFullWidth = field.fieldWidth === "full";
    const fieldNameForForm = getFieldNameMapping(field.fieldName);

    return (
      <div
        key={field.fieldName}
        className={`contact_form_field-wrapper ${
          !isFullWidth && !isTextarea ? "" : ""
        }`}
      >
        <label htmlFor={fieldNameForForm} className="cc-form_label">
          {field.fieldLabel}
        </label>
        {isTextarea ? (
          <textarea
            required={field.isRequired}
            placeholder={field.placeholder || "Type here..."}
            id={fieldNameForForm}
            name={fieldNameForForm}
            data-name={field.fieldLabel}
            className="cc-form_field text-area w-input"
            style={{ borderColor: formSettings.inputBorderColor || "#e7e7e7" }}
          ></textarea>
        ) : (
          <input
            className="cc-form_field w-input"
            name={fieldNameForForm}
            data-name={field.fieldLabel}
            placeholder={field.placeholder || ""}
            type={field.fieldType || "text"}
            id={fieldNameForForm}
            required={field.isRequired}
          />
        )}
      </div>
    );
  };

  // Group form fields into rows (two half-width fields per row)
  const renderFormFields = () => {
    const elements: JSX.Element[] = [];
    let currentRow: any[] = [];

    sortedFormFields.forEach((field: any, index: number) => {
      const isTextarea = field.fieldType === "textarea";
      const isFullWidth = field.fieldWidth === "full";

      if (isFullWidth || isTextarea) {
        // If there's a pending row, render it first
        if (currentRow.length > 0) {
          elements.push(
            <div key={`row-${index}`} className="contact-form_row">
              {currentRow.map((f) => renderFormField(f))}
            </div>
          );
          currentRow = [];
        }
        // Render full-width field
        elements.push(renderFormField(field));
      } else {
        // Add to current row
        currentRow.push(field);

        // If row is complete (2 fields), render it
        if (currentRow.length === 2) {
          elements.push(
            <div key={`row-${index}`} className="contact-form_row">
              {currentRow.map((f) => renderFormField(f))}
            </div>
          );
          currentRow = [];
        }
      }
    });

    // Render any remaining fields in the last row
    if (currentRow.length > 0) {
      elements.push(
        <div key={`row-last`} className="contact-form_row">
          {currentRow.map((f) => renderFormField(f))}
        </div>
      );
    }

    return elements;
  };

  return (
    <section
      className="section_hero projects-page contact-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="hero_wrapper projects-page">
            <div className="contact-hero_left-container">
              <div className="contact-hero_top-content-wrap">
                <div className="about-us_text-dot-wrap">
                  <div
                    className="about-us_heading-dot"
                    style={{ backgroundColor: `${accentColor} !important` }}
                  ></div>
                  <div className="about-us_heading">
                    {content.badge || "CONTACT"}
                  </div>
                </div>
                <h1 className="contact-hero_main-heading cc-heading-h2">
                  {content.title || "Get in Touch with Our Team"}
                </h1>
                <p className="contact-hero_subtext cc-title-small">
                  {content.description ||
                    "Have questions? Our team is here to help."}
                </p>
              </div>
              <div className="contact-hero_bottom-content-wrap">
                {sortedContactDetails.map((detail: any, index: number) => (
                  <div key={index} className="contact-hero_details-wrap">
                    <div className="contact-hero_details-col">
                      <div
                        className="contact-hero_details-heading"
                        style={{ color: detail.labelColor || accentColor }}
                      >
                        {detail.label}
                      </div>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target={
                            detail.type === "address" ? "_blank" : undefined
                          }
                          className="contact-hero_details-text"
                          style={{ color: detail.valueColor || undefined }}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <div
                          className="contact-hero_details-text"
                          style={{ color: detail.valueColor || undefined }}
                        >
                          {detail.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {formSettings.showForm !== false && (
              <div className="contact-hero_right-container">
                <div
                  className="contact-formblock"
                  style={{
                    backgroundColor:
                      formSettings.formBackgroundColor || "#ffffff",
                    color: formSettings.formTextColor || "#000000",
                  }}
                >
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="contact-form"
                    data-wf-page-id="67ebecb112a8e5bd7f4bd393"
                    data-wf-element-id="d499c54f-7670-6225-41dc-d874069fdc47"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    {sortedFormFields.length > 0 ? (
                      renderFormFields()
                    ) : (
                      // Default fallback fields if no fields configured
                      <>
                        <div className="contact-form_row">
                          <div className="contact_form_field-wrapper">
                            <label
                              htmlFor="first_name"
                              className="cc-form_label"
                            >
                              First name
                            </label>
                            <input
                              className="cc-form_field w-input"
                              name="first_name"
                              data-name="First name"
                              placeholder="John"
                              type="text"
                              id="first_name"
                              required
                            />
                          </div>
                          <div className="contact_form_field-wrapper">
                            <label
                              htmlFor="last_name"
                              className="cc-form_label"
                            >
                              Last name
                            </label>
                            <input
                              className="cc-form_field w-input"
                              name="last_name"
                              data-name="Last name"
                              placeholder="Smith"
                              type="text"
                              id="last_name"
                              required
                            />
                          </div>
                        </div>
                        <div className="contact-form_row">
                          <div className="contact_form_field-wrapper">
                            <label
                              htmlFor="email_address"
                              className="cc-form_label"
                            >
                              Email
                            </label>
                            <input
                              className="cc-form_field w-input"
                              name="email_address"
                              data-name="Email"
                              placeholder="john@company.com"
                              type="email"
                              id="email_address"
                              required
                            />
                          </div>
                          <div className="contact_form_field-wrapper">
                            <label htmlFor="phone" className="cc-form_label">
                              Phone
                            </label>
                            <input
                              className="cc-form_field w-input"
                              name="phone"
                              data-name="Phone"
                              placeholder="(000)-000-0000"
                              type="tel"
                              id="phone"
                              required
                            />
                          </div>
                        </div>
                        <div className="contact_form_field-wrapper">
                          <label htmlFor="city" className="cc-form_label">
                            City
                          </label>
                          <input
                            className="cc-form_field w-input"
                            name="city"
                            data-name="City"
                            placeholder="Mumbai"
                            type="text"
                            id="city"
                            required
                          />
                        </div>
                        <div className="contact_form_field-wrapper">
                          <label htmlFor="message" className="cc-form_label">
                            Message
                          </label>
                          <textarea
                            required
                            placeholder="Type here..."
                            id="message"
                            name="message"
                            data-name="Message"
                            className="cc-form_field text-area w-input"
                            style={{ borderColor: "#e7e7e7" }}
                          ></textarea>
                        </div>
                      </>
                    )}
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="contact-form_submit-btn w-button"
                      value={
                        loading
                          ? "Submitting..."
                          : formSettings.submitButtonText || "Submit"
                      }
                      disabled={loading}
                      style={{
                        backgroundColor: loading
                          ? "#ccc"
                          : formSettings.submitButtonColor || "#ff6b35",
                        color: formSettings.submitButtonTextColor || "#ffffff",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    />
                  </form>

                  {successMsg && (
                    <div className="contact_success-message w-form-done">
                      <div className="form_success-text">{successMsg}</div>
                    </div>
                  )}
                  {errorMsg && (
                    <div className="contact_error-block-message w-form-fail">
                      <div className="footer_error-text">{errorMsg}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
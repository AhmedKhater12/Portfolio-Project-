"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaPinterest } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData.error);
          toast.error("An Error Occurred While Submitting the Form");
        }
      } catch (error) {
        console.error("Network Error:", error);
        toast.error("Failed to Submit the Form");
      }
    }
  };

  return (
    <div
      id="Contact"
      className="flex justify-center items-center text-center min-h-screen bg-gray-50"
    >
      <ToastContainer />
      <div className="container mx-auto text-center px-6 py-12 bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center lg:text-left">
            Send Us Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <small className="text-gray-500 block">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold cursor-grabbing rounded-md hover:bg-blue-600 duration-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-4xl font-bold">
            Get In Touch <span className="border-b-4 border-blue-500"></span>
          </h2>
          <p className="text-gray-700 text-3xl">
            If you need something, you can contact me via phone, email, or any
            social media platform. Follow me if you need to get in touch...
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 font-extrabold">
              📍 Location :{" "} Naguib Mahfouz St, Awlad Saqr City, Sharkia Governorate
            </p>
            <p className="text-gray-700 font-extrabold">📞 Phone :{" "} +201091090760</p>
            <p className="text-gray-700 font-extrabold">
              📧 Email :{" "}
            <a href="mailto:ahmedkhater921@gmail.com" className="text-blue-500">
              ahmedkhater921@gmail.com
            </a>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100064520486149&mibextid=ZbWKwL"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="https://twitter.com/AhmedKhater_2?s=09"
              className="text-black hover:text-black transition"
            >
              <FaSquareXTwitter className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/ahmeed__khateer__/"
              className="text-red-500 hover:text-red-700 transition"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a href="#" className="text-red-700 hover:text-red-900 transition">
              <FaPinterest className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-khater-412471249"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;








// "use client";

// import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter, FaPinterest } from "react-icons/fa6";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     let isValid = true;
//     let newErrors = {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     };
//       if (!formData.name) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }
//     if (!formData.subject) {
//       newErrors.subject = "Subject is required";
//       isValid = false;
//     }
//     if (!formData.message) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }
  
//     setErrors(newErrors);
  
//     if (isValid) {
//       try {
//         const response = await fetch("/api/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
  
//         if (response.ok) {
//           console.log("Form submitted successfully:", formData);
//           // Use your preferred notification method instead of alert
//           alert("Form submitted successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//           });
//         } else {
//           const errorData = await response.json();
//           console.error("Error:", errorData.error);
//           alert("An error occurred while submitting the form");
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//         alert("Failed to submit the form");
//       }
//     }
//   };
  

//   return (
//     <div
//       id="Contact"
//       className="flex justify-center items-center text-center min-h-screen bg-gray-50"
//     >
//       <div className="container mx-auto text-center px-6 py-12 bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-center lg:text-left">
//             Send Us Message
//             {/* <span className="border-b-4 border-blue-500"></span> */}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">{errors.name}</p>
//               )}
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//               <small className="text-gray-500 block">
//                 We'll never share your email with anyone else.
//               </small>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.subject ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.subject && (
//                 <p className="text-red-500 text-sm">{errors.subject}</p>
//               )}
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.message ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`}
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-sm">{errors.message}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full p-3 bg-blue-500 text-white font-semibold cursor-grabbing rounded-md hover:bg-blue-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="space-y-8 text-center lg:text-left">
//           <h2 className="text-4xl font-bold">
//             Get In Touch <span className="border-b-4 border-blue-500"></span>
//           </h2>
//           <p className="text-gray-700 text-3xl">
//             If you need something, you can contact me via phone, email, or any
//             social media platform. Follow me if you need to get in touch...
//           </p>
//           <div className="space-y-4">
//             <p className="text-gray-700 font-extrabold">
//               📍 Naguib Mahfouz St, Awlad Saqr City, Sharkia Governorate
//             </p>
//             <p className="text-gray-700 font-extrabold">📞 +201091090760</p>
//             <p className="text-gray-700 font-extrabold">
//               📧 ahmedkhater921@gmail.com
//             </p>
//           </div>
//           <div className="flex justify-center lg:justify-start space-x-4 mt-4">
//             <a
//               href="https://www.facebook.com/profile.php?id=100064520486149&mibextid=ZbWKwL"
//               className="text-blue-500 hover:text-blue-700 transition"
//             >
//               <FaFacebook className="text-4xl" />
//             </a>
//             <a
//               href="https://twitter.com/AhmedKhater_2?s=09"
//               className="text-black hover:text-black transition"
//             >
//               <FaSquareXTwitter className="text-4xl" />
//             </a>
//             <a
//               href="https://www.instagram.com/ahmeed__khateer__/"
//               className="text-red-500 hover:text-red-700 transition"
//             >
//               <FaInstagram className="text-4xl" />
//             </a>
//             <a href="#" className="text-red-700 hover:text-red-900 transition">
//               <FaPinterest className="text-4xl" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ahmed-khater-412471249"
//               className="text-blue-500 hover:text-blue-700 transition"
//             >
//               <FaLinkedin className="text-4xl" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;





















// "use client";

// import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter, FaPinterest } from "react-icons/fa6";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   function handleSubmit(e: { preventDefault: () => void; }) {
//     e.preventDefault();

//     let isValid = true;
//     let newErrors = {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     };

//     if (!formData.name) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }
//     if (!formData.subject) {
//       newErrors.subject = "Subject is required";
//       isValid = false;
//     }
//     if (!formData.message) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(newErrors);

//     if (isValid) {
//       console.log("Form submitted successfully:", formData);
//       alert("Done ya مديرر");
//     }
//   }

//   return (
//     <div id="Contact" className="flex justify-center items-center text-center min-h-screen bg-gray-50">
//       <div className="container mx-auto text-center px-6 py-12 bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-center lg:text-left">
//             Send Us Message
//             {/* <span className="border-b-4 border-blue-500"></span> */}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">{errors.name}</p>
//               )}
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//               <small className="text-gray-500 block">
//                 We'll never share your email with anyone else.
//               </small>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.subject ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.subject && (
//                 <p className="text-red-500 text-sm">{errors.subject}</p>
//               )}
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.message ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`}
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-sm">{errors.message}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full p-3 bg-blue-500 text-white font-semibold cursor-grabbing rounded-md hover:bg-blue-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="space-y-8 text-center lg:text-left">
//           <h2 className="text-4xl font-bold">
//             Get In Touch <span className="border-b-4 border-blue-500"></span>
//           </h2>
//           <p className="text-gray-700 text-3xl">
//             If you need something, you can contact me via phone, email, or any
//             social media platform. Follow me if you need to get in touch...
//           </p>
//           <div className="space-y-4">
//             <p className="text-gray-700 font-extrabold">
//               📍 Naguib Mahfouz St, Awlad Saqr City, Sharkia Governorate
//             </p>
//             <p className="text-gray-700 font-extrabold">📞 +201091090760</p>
//             <p className="text-gray-700 font-extrabold">
//               📧 ahmedkhater921@gmail.com
//             </p>
//           </div>
//           <div className="flex justify-center lg:justify-start space-x-4 mt-4">
//             <a
//               href="https://www.facebook.com/profile.php?id=100064520486149&mibextid=ZbWKwL"
//               className="text-blue-500 hover:text-blue-700 transition"
//             >
//               <FaFacebook className="text-4xl" />
//             </a>
//             <a
//               href="https://twitter.com/AhmedKhater_2?s=09"
//               className="text-black hover:text-black transition"
//             >
//               <FaSquareXTwitter className="text-4xl" />
//             </a>
//             <a
//               href="https://www.instagram.com/ahmeed__khateer__/"
//               className="text-red-500 hover:text-red-700 transition"
//             >
//               <FaInstagram className="text-4xl" />
//             </a>
//             <a href="#" className="text-red-700 hover:text-red-900 transition">
//               <FaPinterest className="text-4xl" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ahmed-khater-412471249"
//               className="text-blue-500 hover:text-blue-700 transition"
//             >
//               <FaLinkedin className="text-4xl" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;












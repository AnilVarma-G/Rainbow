// 'use client';
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   {
//     title: "Home",
//     path: "#Home",
//   },
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Gallery",
//     path: "#Gallery",
//   },
//   {
//     title: "Facilities",
//     path: "#Facilities",
//   },
//   {
//     title: "Activities",
//     path: "#Activities",
//   },
//   {
//     title: "Contact Us",
//     path: "#Contactus",
//   },
//   {
//     title: "We believe",
//     path: "#Webelieve",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
// //     <nav className="fixed w-full border h-20 border-pink-900 rounded-sm top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
// //       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
// //       {/* <Link href="/" className="flex items-center text-2xl md:text-4xl text-white font-semibold">
// //          <span className="rainbow-text md:-ml-10 -ml-14">Rainbow Concept School</span>
// //          </Link> */}
// //          {/* <Link href="/" className="flex items-center text-2xl md:text-5xl overflow-y-hidden text-white font-semibold overflow-x-auto">
// //   <span style={{ fontFamily: 'Times New Roman', background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
// //     Rainbow
// //   </span>
// //   <span style={{ fontFamily: 'Times New Roman', background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', WebkitBackgroundClip: 'text', color: 'transparent', marginLeft: '10px' }}>
// //     Concept
// //   </span>
// //   <span style={{ fontFamily: 'Times New Roman', background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', WebkitBackgroundClip: 'text', color: 'transparent', marginLeft: '10px' }}>
// //     School
// //   </span>
// // </Link> */}

// // <Link href="/" className="flex items-center text-2xl md:text-5xl overflow-y-hidden text-white font-semibold overflow-x-hidden">
// //   <span style={{
// //     fontFamily: 'Times New Roman',
// //     background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
// //     WebkitBackgroundClip: 'text',
// //     color: 'transparent',
// //     display: 'inline-block',
// //     animation: 'scroll 3s linear infinite'
// //   }}>
// //     RAINBOW
// //   </span>
// //   <span className="text-blue-900 ml-2  text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman',}}>CONCEPT</span>
// //              <span className="text-blue-900 ml-2   text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman',}}>SCHOOL</span>
// // </Link>

// //         <div className="mobile-menu block md:hidden">
// //           {!navbarOpen ? (
// //             <button
// //               onClick={() => setNavbarOpen(true)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
// //             >
// //               <Bars3Icon className="h-5 w-5" />
// //             </button>
// //           ) : (
// //             <button
// //               onClick={() => setNavbarOpen(false)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
// //             >
// //               <XMarkIcon className="h-5 w-5" />
// //             </button>
// //           )}
// //         </div>
// //         <div className="menu hidden md:block md:w-auto" id="navbar">
// //           <ul className="flex p-4  md:p-0 md:flex-row md:space-x-8">
// //             {navLinks.map((link, index) => (
// //               <li key={index}>
// //                 <NavLink href={link.path} title={link.title} />
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
// //     </nav>

// <nav className="fixed w-full border h-20 border-pink-900 rounded-sm top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
//   <div className="container flex flex-wrap items-center md:flex md:flex-row justify-between mx-auto px-4 py-2 lg:py-4">
//     <Link href="/" className="flex items-center text-2xl md:text-4xl lg:text-5xl font-semibold overflow-hidden">
//       <span
//         className="rainbow-text"
//         style={{
//           fontFamily: 'Times New Roman',
//           background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
//           WebkitBackgroundClip: 'text',
//           color: 'transparent',
//           display: 'inline-block',
//           whiteSpace: 'nowrap',
//           animation: 'scroll 3s linear infinite'
//         }}
//       >
//         RAINBOW
//       </span>
//       <span className="text-blue-900 ml-2 text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman' }}>
//         CONCEPT
//       </span>
//       <span className="text-blue-900 ml-2 text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman' }}>
//         SCHOOL
//       </span>
//     </Link>

//     <div className="mobile-menu block md:hidden">
//       {!navbarOpen ? (
//         <button
//           onClick={() => setNavbarOpen(true)}
//           className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
//         >
//           <Bars3Icon className="h-5 w-5" />
//         </button>
//       ) : (
//         <button
//           onClick={() => setNavbarOpen(false)}
//           className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
//         >
//           <XMarkIcon className="h-5 w-5" />
//         </button>
//       )}
//     </div>

//     <div className="hidden md:block md:w-auto" id="navbar">
//       <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
//         {navLinks.map((link, index) => (
//           <li key={index}>
//             <NavLink href={link.path} title={link.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
//   {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
// </nav>
//   );
// };

// export default Navbar;











'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Gallery",
    path: "#Gallery",
  },
  {
    title: "Facilities",
    path: "#Facilities",
  },
  {
    title: "Activities",
    path: "#Activities",
  },
  {
    title: "Contact Us",
    path: "#Contactus",
  },
  {
    title: "We believe",
    path: "#Webelieve",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full border lg:h-24  h-20 rounded-sm top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center text-2xl md:text-4xl lg:text-5xl font-semibold overflow-hidden">
            <span
              className="rainbow-text"
              style={{
                fontFamily: 'Times New Roman',
                background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                animation: 'scroll 3s linear infinite'
              }}
            >
              RAINBOW
            </span>
            <span className="text-blue-900 ml-2 text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman' }}>
              CONCEPT
            </span>
            <span className="text-blue-900 ml-2 text-xl lg:text-4xl" style={{ fontFamily: 'Times New Roman' }}>
              SCHOOL
            </span>
          </Link>

          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 -mr-10 md:flex-row md:space-x-8 font-bold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;







// 'use client'
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import Link from "next/link"; // Import Next.js Link component

// const navLinks = [
//   {
//     title: "Home",
//     path: "#Home",
//   },
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Gallery",
//     path: "#Gallery",
//   },
//   {
//     title: "Facilities",
//     path: "#Facilities",
//   },
//   {
//     title: "Activities",
//     path: "#Activities",
//   },
//   {
//     title: "Contact Us",
//     path: "#Contactus",
//   },
//   {
//     title: "We believe",
//     path: "#Webelieve",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setNavbarOpen(!navbarOpen);
//   };

//   return (
//     <nav className="fixed w-full border h-20 border-[grey] rounded-sm top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-full">
//           <Link href="/" passHref> {/* Use Next.js Link for client-side navigation */}
//             <a className="flex items-center text-2xl md:text-5xl text-white font-semibold">
//               <span style={{ 
//                 fontFamily: 'Times New Roman', 
//                 background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', 
//                 WebkitBackgroundClip: 'text', 
//                 color: 'transparent' 
//               }}>Rainbow</span>
//               <span className="text-blue-500 ml-2 lg:-mb-2 text-2xl lg:text-3xl">Concept</span>
//               <span className="text-green-500 ml-2  lg:-mb-2 text-2xl lg:text-3xl">School</span>
//             </a>
//           </Link>

//           <div className="mobile-menu block md:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-white hover:border-white"
//             >
//               {navbarOpen ? (
//                 <XMarkIcon className="h-5 w-5" />
//               ) : (
//                 <Bars3Icon className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//           <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
//             <ul className="flex md:p-0 md:flex-row md:space-x-8 font-bold">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink href={link.path} title={link.title} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

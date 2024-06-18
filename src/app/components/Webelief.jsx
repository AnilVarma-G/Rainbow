
// 'use client'
// import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

// const images = [
//   '/scroll1.jpg',
//   '/scroll2.jpg',
//   '/scroll3.jpg',
//   '/scroll4.jpg',
//   '/scroll5.jpg',
// ];

// const texts = [
//   "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
//   "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
//   "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
//   "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
// ];

// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) =>
//         prevImage === images.length - 1 ? 0 : prevImage + 1
//       );
//     }, 5000); // Change slide every 5 seconds (5000 ms)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id='Webelieve'>We Believe</h1>
//     <div className="relative w-full">
//       {isMobile ? (
//         <div className="relative w-full h-[300px] overflow-hidden">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-500 ${
//                 index === currentImage ? 'opacity-100' : 'opacity-0'
//               }`}
//               style={{
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-xl p-5  h-[300px] overflow-y-hidden text-center">
//           <h1 className="mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-transparent bg-clip-text">{texts[currentImage]}</h1>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default ImageSlider;


// // import { useState, useEffect } from 'react';
// // import { useMediaQuery } from 'react-responsive';

// // const images = [
// //   '/scroll1.jpg',
// //   '/scroll2.jpg',
// //   '/scroll3.jpg',
// //   '/scroll4.jpg',
// //   '/scroll5.jpg',
// // ];

// // const texts = [
// //   "Text for image 1",
// //   "Text for image 2",
// //   "Text for image 3",
// //   "Text for image 4",
// //   "Text for image 5",
// // ];

// // const ImageSlider = () => {
// //   const [currentImage, setCurrentImage] = useState(0);
// //   const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImage((prevImage) =>
// //         prevImage === images.length - 1 ? 0 : prevImage + 1
// //       );
// //     }, 5000); // Change slide every 5 seconds (5000 ms)

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="relative w-full">
// //       {isMobile ? (
// //         <div className="relative w-full h-[300px] overflow-hidden">
// //           {images.map((image, index) => (
// //             <div
// //               key={index}
// //               className={`absolute inset-0 transition-opacity duration-500 ${
// //                 index === currentImage ? 'opacity-100' : 'opacity-0'
// //               }`}
// //               style={{
// //                 backgroundImage: `url(${image})`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center',
// //               }}
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="text-black text-xl p-5 text-justify h-[300px] overflow-y-scroll">
// //           <p>{texts[currentImage]}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ImageSlider;




// 'use client'
// import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

// const images = [
//   '/scroll1.jpg',
//   '/scroll2.jpg',
//   '/scroll3.jpg',
//   '/scroll4.jpg',
//   '/scroll5.jpg',
// ];

// const texts = [
//   "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
//   "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
//   "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
//   "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
// ];

// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) =>
//         prevImage === images.length - 1 ? 0 : prevImage + 1
//       );
//     }, 5000); // Change slide every 5 seconds (5000 ms)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id='Webelieve'>We Believe</h1>
//       <div className="relative w-full">
//         {isMobile ? (
//           <div className="relative w-full h-[300px] overflow-hidden">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   index === currentImage ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                   backgroundImage: `url(${image})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                 }}
//               />
//             ))}
//           </div>
//         ) : (
//           <div
//             className="relative w-full h-[500px] flex items-center justify-center bg-black"
//             style={{
//               backgroundImage: `url(${images[currentImage]})`,
//               backgroundSize: 'contain',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//           >
//             <h1 className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl text-center p-4">
//               {texts[currentImage]}
//             </h1>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ImageSlider;




// 'use client'
// import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

// const images = [
//   '/scroll1.jpg',
//   '/scroll2.jpg',
//   '/scroll3.jpg',
//   '/scroll4.jpg',
//   '/scroll5.jpg',
// ];

// const texts = [
//   "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
//   "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
//   "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
//   "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
// ];

// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) =>
//         prevImage === images.length - 1 ? 0 : prevImage + 1
//       );
//     }, 5000); // Change slide every 5 seconds (5000 ms)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         @keyframes slideIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .word {
//           display: inline-block;
//           margin-right: 10px; /* Adjust spacing between words */
//           white-space: nowrap; /* Prevent words from wrapping */
//           opacity: 0;
//           animation: slideIn 0.5s forwards;
//         }
//         .rainbow-text {
//           background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
//           -webkit-background-clip: text;
//           color: transparent;
//           display: inline-block;
//         }
//         .image-container {
//           width: 100%;
//           height: 300px; /* Adjust height as needed */
//           background-size: contain;
//           background-position: center;
//           background-repeat: no-repeat;
//         }
//       `}</style>
//       <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id='Webelieve'>We Believe</h1>
//       <div className="relative w-full">
//         {!isMobile && (
//           <div className="flex items-center justify-between">
//             <div className="text-left p-5 text-2xl md:text-3xl lg:text-4xl">
//               {texts[currentImage].split(' ').map((word, index) => (
//                 <span key={index} className="word rainbow-text" style={{ animationDelay: `${index * 0.1}s` }}>
//                   {word}
//                 </span>
//               ))}
//             </div>
//             <div
//               className="image-container w-1/2"
//               style={{ backgroundImage: `url(${images[currentImage]})` }}
//             />
//           </div>
//         )}
//         {isMobile && (
//           <div className="text-left p-5">
//             {texts[currentImage].split(' ').map((word, index) => (
//               <span key={index} className="word rainbow-text" style={{ animationDelay: `${index * 0.1}s` }}>
//                 {word}
//               </span>
//             ))}
//             <div
//               className="image-container mt-5"
//               style={{ backgroundImage: `url(${images[currentImage]})` }}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ImageSlider;





'use client'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const images = [
  '/scroll1.jpg',
  '/scroll2.jpg',
  '/scroll3.jpg',
  '/scroll4.jpg',
  '/scroll5.jpg',
];

const texts = [
  "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
  "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
  "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
  "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Example threshold for mobile view

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000); // Change slide every 5 seconds (5000 ms)

    return () => clearInterval(interval);
  }, []);

  // Check if texts and currentImage are defined properly
  if (!texts || !Array.isArray(texts) || texts.length === 0 || currentImage < 0 || currentImage >= texts.length) {
    console.error('Invalid texts array or currentImage index');
    return null; // or handle error gracefully
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .word {
          display: inline-block;
          margin-right: 10px; /* Adjust spacing between words */
          white-space: nowrap; /* Prevent words from wrapping */
          opacity: 0;
          animation: slideIn 0.5s forwards;
        }
        .rainbow-text {
          background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .image-container {
          width: 100%;
          height: 300px; /* Adjust height as needed */
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
      <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id='Webelieve'>We Believe</h1>
      <div className="relative w-full">
        {isMobile ? (
          <div className="text-left p-5">
            {texts[currentImage].split(' ').map((word, index) => (
              <span key={index} className="word rainbow-text" style={{ animationDelay: `${index * 0.1}s` }}>
                {word}
              </span>
            ))}
            <div
              className="image-container mt-5"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="text-left p-5 text-2xl md:text-3xl lg:text-4xl">
              {texts[currentImage].split(' ').map((word, index) => (
                <span key={index} className="word rainbow-text" style={{ animationDelay: `${index * 0.1}s` }}>
                  {word}
                </span>
              ))}
            </div>
            <div
              className="image-container w-1/2"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageSlider;

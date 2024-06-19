



// components/FeedbackList.js
'use client'
import React, { useEffect, useRef } from 'react';

const FeedbackList = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const feedbacks = [
    {
      text: "Good school for kids as the activity based learning helps the students to understand in a better way through the conceptual things. We are very impressive by the work of Teachers by explaining the concepts in different ways.",
      imageUrl: "/image13.jpg",
      name: "Rajulapati Manusha",
    },
    {
      text: "Rainbow concept & play school is one of the best school.and study,cultur activies,any programe's conducting very well and my childrens are issue the study ing very good & childrens to teachers very caring any things very naice and thankyou for all stop members . This is my opinion",
      imageUrl: "/image9.jpg",
      name: "Mangali Sravani",
    },
    {
      text: "I love this school!  My daughter has improved a lot with their practical approach. Thanks a lot to Rainbow Concept School for encouraging our kids to think creatively and helping them succeed in society ❤️",
      imageUrl: "/image12.jpg",
      name: "Mana Little World",
    },
    {
      text: "Im working in this place as Mother teacher for pre primary.This place is best for pre primary sections. Good syllabus pattern, excellent teaching staff. They really take care of every child.",
      imageUrl: "/image6.jpg",
      name: "Syeda Shazia",
    },
    {
      text: "I'm really pleased with this school. The way they teach spoken English and encourage creative thinking is excellent. The management is great, and the faculty is top-notch. My kids are doing really well, and it makes me happy to see their performance.",
      imageUrl: "/image7.jpg",
      name: "Anand P",
    },
    {
      text: "The management here is excellent, and the faculty is highly qualified. Their focus on spoken English is fantastic. I'm thrilled to see how much my child has improved under their guidance. It makes me really happy.",
      imageUrl: "/image2.jpg",
      name: "Sravani T",
    },

    {
      text: "I am very happy regarding my kids why because they are good in spoken english and very creative ideas.",
      imageUrl: "/image2.jpg",
      name: "Samreen Samreen",
    },
    {
      text: "I'm delighted with my kids' progress because they're excelling in spoken English and coming up with wonderfully creative ideas. It's truly fulfilling to see their growth and development.",
      imageUrl: "/image2.jpg",
      name: "Janga Reddy",
    },
    {
      text: "Best school and Excell management.I have 15 years experience in other schools as incharge , I joined this school 1 year back as coordinator. I can proudly say that this school management is Best 👌.. very supportive environment. Works on quality rather than quantity.",
      imageUrl: "/image2.jpg",
      name: "MC. SARITHA",
    },

  ];

  return (
    <>
    <h2 className="text-4xl font-bold text-blue-900  mt-14 blink"> Our School Feed Back</h2>
    <div className="feedback-list-wrapper mt-14">
      <div className="long-image">
        <img
          className="w-full h-[300px] md:h-[440px] object-cover"
          src="/image6.jpg"
          alt="Long Image"
        />
      </div>
      <div className="feedback-list-container mt-4">
        <div ref={scrollRef} className="feedback-list flex items-center overflow-x-auto">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item bg-white p-4 rounded-lg shadow-md mx-2 max-w-xs flex flex-col items-center">
              <div className="profile-picture w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full mb-2 md:mb-4">
                <img src={feedback.imageUrl} alt="Profile" className="rounded-full w-full h-full object-cover" />
              </div> 
              <p className="feedback-name text-center text-xs font-extrabold  md:text-sm mt-2">{feedback.name}</p>
              <p className="feedback-text text-center text-sm md:text-base">{feedback.text}</p>
          
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FeedbackList;

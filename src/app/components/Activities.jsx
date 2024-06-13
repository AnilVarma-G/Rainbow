// components/ActivitiesComponent.js

import React from 'react';

const ActivitiesComponent = () => {
    const activities = [
        {
            header: "Computer Coding",
            imageSrc: "/computercoding.jpg", // Replace with actual image path
            content: "Our computer coding program introduces students to the fundamentals of programming. From basic algorithms to advanced problem-solving, students learn skills essential for the digital age."
        },
        {
            header: "AB, AAC, VS (Mathematics)",
            imageSrc: "/image12.jpg", // Replace with actual image path
            content: "Our mathematics program focuses on building a strong foundation in arithmetic, algebra, and visual spatial skills (VS). Through interactive lessons and practical applications, students develop a deep understanding of mathematical concepts."
        },
        {
            header: "Art and Drawing",
            imageSrc: "/art.jpg", // Replace with actual image path
            content: "Art and drawing classes at our school encourage creativity and self-expression. Students explore various mediums and techniques, fostering artistic skills and imagination."
        },
        {
            header: "Sports and Physical Health",
            imageSrc: "/games1.jpg", // Replace with actual image path
            content: "Physical activity is essential for overall well-being. Our sports program promotes fitness, teamwork, and sportsmanship through a variety of activities and games."
        },
        {
            header: "Career Counseling",
            imageSrc: "/image1.jpg", // Replace with actual image path
            content: "Career counseling sessions help students explore career options, set goals, and make informed decisions about their future. We provide guidance and resources to support their career aspirations."
        },
        {
            header: "Meditation and Mental Health",
            imageSrc: "/image14.jpg", // Replace with actual image path
            content: "Mindfulness practices and meditation sessions promote mental well-being among students. These sessions teach relaxation techniques and stress management strategies."
        },
        {
            header: "Western Dancing and Classical Dancing",
            imageSrc: "/image13.jpg", // Replace with actual image path
            content: "Our dance programs offer training in both Western and Classical dance forms. Students learn coordination, rhythm, and expression, enhancing their cultural appreciation and performance skills."
        },
        {
            header: "Cultural Activities",
            imageSrc: "/image10.jpg", // Replace with actual image path
            content: "Cultural activities celebrate diversity and heritage. Through festivals, traditions, and arts, students learn about different cultures, fostering mutual respect and understanding."
        },
        {
            header: "Slow Learners Activities",
            imageSrc: "/image11.jpg", // Replace with actual image path
            content: "Tailored activities cater to the learning needs of every student. We provide individualized support and resources to help slow learners succeed academically and socially."
        },
        {
            header: "Festival-wise Activities",
            imageSrc: "/games.jpg", // Replace with actual image path
            content: "Festival-wise activities enrich cultural learning and celebrate festive occasions. Students participate in rituals, crafts, and performances, promoting cultural awareness and unity."
        }
    ];

    return (
        <div className="p-4 mt-14" id='Activities'>
            <h1 className="text-3xl font-bold mb-4 text-yellow-300"> Our Activities </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activities.map((activity, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={activity.imageSrc}
                            alt={activity.header}
                            className="mx-auto mb-4 object-cover h-48 md:h-64 lg:h-72 w-full"
                            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{activity.header}</h2>
                            <p className="text-sm">{activity.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivitiesComponent;
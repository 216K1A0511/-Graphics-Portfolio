import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const personalDetails = {
  name: "BOLLINKALA DURGAPRASAD",
  email: "durgaprasad2018@gmail.com",
  phone: "+91 8688998779",
  location: "Kakinada 533001",
  websites: [
    "https://heylink.me/durgaprasad201803",
    "https://www.linkedin.com/in/lvypsd186",
  ],
};

const summary = `Driven by a passion for technology and a strong alignment with industry advancements, a proactive Computer Science graduate with experience in data management and machine learning. Demonstrated ability to enhance processes and drive accuracy, paired with a commitment to leveraging technical solutions for impactful outcomes. Eager to support dynamic projects and foster innovation.`;

const skills = [
  "C Language",
  "Node.js",
  "Bootstrap",
  "Photoshop",
  "Power BI",
  "Photography",
  "Management",
];

const experience = [
  {
    role: "Data Entry Intern",
    organization: "NAAC A++ Accreditation, Kakinada",
    duration: "12/2021 - 12/2025",
    achievements: [
      "Streamlined data entry processes for NAAC certification tasks, maintaining 100% accuracy across over 1,000 records.",
      "Reduced reporting time by 20% using Microsoft Word and Excel."
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Ideal Institute of Technology",
    graduationDate: "12/2025",
    GPA: "6.72",
  },
  {
    degree: "Intermediate Education",
    institution: "COP",
    graduationDate: "03/2021",
  },
  {
    degree: "SSC",
    institution: "MGM Corporate High School",
    graduationDate: "04/2019",
    GPA: "9.2",
  },
];

const projects = [
  {
    title: "Document Manager Platform",
    description: "Developed a comprehensive platform to streamline document handling using advanced web development techniques and Harvard University's CS50x resources.",
  },
  {
    title: "Real-Time Stock Price Prediction System",
    description: "Increased forecasting accuracy of stock predictions by 20%, enabling informed trading decisions.",
  },
  {
    title: "Find the My Bus",
    description: "Developed an integrated platform leveraging GPS, RFID, QR codes, and biometric systems to automate student information management and streamline logistics.",
  },
];

const training = [
  "Hackerrank Certifications (06/2021 - 07/2023)",
  "Salesforce Administrator (06/2003 - 09/2004)",
  "Salesforce Developer (06/2004 - 11/2004)",
  "Introduction to Prompt Engineering (08/2024 - 05/2024)",
  "Critical Thinking & Problem Solving (07/2024 - 12/2024)",
];

const passions = ["Public Speaking", "Event Organization", "Continuous Learning"];

export default function ThemedPortfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  const sections = [
    { title: "Summary", content: summary },
    { title: "Skills", content: skills.join(", ") },
    { title: "Experience", content: experience.map(e => `${e.role} at ${e.organization} (${e.duration}): ${e.achievements.join("; ")}`).join("\n") },
    { title: "Education", content: education.map(e => `${e.degree} from ${e.institution} (${e.graduationDate}): GPA ${e.GPA || 'N/A'}`).join("\n") },
    { title: "Projects", content: projects.map(p => `${p.title}: ${p.description}`).join("\n") },
    { title: "Training", content: training.join("\n") },
    { title: "Passions", content: passions.join(", ") },
  ];

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % sections.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <Card className="max-w-md w-full p-4 shadow-2xl bg-white rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            {sections[currentPage].title}
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">
            {sections[currentPage].content}
          </p>
        </CardContent>
      </Card>
      <div className="flex mt-4 space-x-4">
        <Button onClick={handlePrevious} className="bg-white text-gray-800 shadow-lg hover:bg-gray-200">
          Previous
        </Button>
        <Button onClick={handleNext} className="bg-white text-gray-800 shadow-lg hover:bg-gray-200">
          Next
        </Button>
      </div>
    </div>
  );
}

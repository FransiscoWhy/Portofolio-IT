// E:\Portofolio\my-portfolio\src\data\projects.js
import sentimentImg from "../assets/projects/sentiment.png";
import journalkuImg from "../assets/projects/journalku.png";

export const projects = [
  {
    title: "AI-Powered Sentiment Analyzer",
    desc: "Web app (React + Flask) untuk klasifikasi sentimen real-time.",
    longDesc:
      "End-to-end application: text preprocessing, LSTM/Word2Vec model, Flask REST API, and React UI for real-time prediction.",
    image: sentimentImg,
    stack: ["React", "Flask", "Deep Learning",  "LSTM"],
    role: "Full-stack Developer",
    period: "2025",
    demo: "www.linkedin.com/in/fransisco-wahyu",          // opsional
    code: "https://github.com/FransiscoWhy/AI-Powered-Sentiment-Analyzer", // wajib untuk View Code
  },
  {
    title: "JournalKu (Attendance System)",
    desc: "Check-in kamera, People CRUD, & WhatsApp integration.",
    longDesc:
      "Attendance system with photo verification, time tracking, and WhatsApp integration for instant notifications.",
    image: journalkuImg,
    stack: ["Laravel", "MySQL", "Bootstrap"],
    role: "Backend & System Design",
    period: "2024",
    demo: "www.linkedin.com/in/fransisco-wahyu",                // opsional
    code: "https://github.com/FransiscoWhy/Smart-Attendance-Employee-Management-System",
  },
];

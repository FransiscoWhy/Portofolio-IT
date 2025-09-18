// src/components/ResumeButton.jsx
import cvUrl from "../assets/Fransisco_Wahyu_resume.pdf";

export default function ResumeButton({ className = "" }) {
  return (
    <a href={cvUrl} download="Fransisco_Wahyu_CV.pdf"
       className={`px-4 py-2 rounded-[var(--radius-xl)] bg-brand-500 hover:bg-brand-700 text-white text-sm ${className}`}>
      Download CV
    </a>
  );
}


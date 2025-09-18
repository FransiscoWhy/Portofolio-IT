export default function ResumeButton({ className = "", children = "Download CV" }) {
  const cvUrl = "../assets/Fransisco_Wahyu_resume.pdf"; // file di folder public
  return (
    <a
      href={cvUrl}
      download="Fransisco Wahyu Syahbani-CV.pdf"
      className={`inline-flex items-center px-4 py-2 rounded-[var(--radius-xl)] bg-brand-500 hover:bg-brand-700 text-white text-sm ${className}`}
      title="Download my CV (PDF)"
    >
      {children}
    </a>
  );
}

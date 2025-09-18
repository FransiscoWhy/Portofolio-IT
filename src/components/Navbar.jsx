import { useEffect, useState } from "react";
import ResumeButton from "../components/ResumeButton.jsx"; // ← tambah ini

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const link = "px-3 py-2 rounded hover:bg-brand-50 dark:hover:bg-zinc-800";
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-zinc-900/70 backdrop-blur border-b dark:border-zinc-800 z-10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-brand-700 dark:text-brand-400">
          Fransisco • Portfolio
        </a>
        <div className="flex items-center gap-2 text-sm">
          <a className={link} href="#about">About</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#skills">Technical Skills</a>
          <a className={link} href="#contact">Contact</a>

          {/* Resume button */}
          <ResumeButton className="ml-2 hidden sm:inline-flex" />

          {/* Dark toggle */}
          {/* <button
            onClick={() => setDark(v => !v)}
            className="ml-2 px-3 py-2 rounded bg-brand-500 hover:bg-brand-700 text-white"
            title="Toggle dark mode"
          >
            {dark ? "Light" : "Dark"}
          </button> */}
        </div>
      </nav>
    </header>
  );
}

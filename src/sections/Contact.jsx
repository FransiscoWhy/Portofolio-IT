// E:\Portofolio\my-portfolio\src\sections\Contact.jsx
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const email = "fransiscowahyu2002@gmail.com";
  const subject = encodeURIComponent("Hi Fransisco — Let's work together");
  const body = encodeURIComponent("Hi Fransisco,\n\nSaya tertarik berdiskusi tentang proyek ...");
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      window.getSelection()?.selectAllChildren(e.currentTarget);
    }
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <section className="max-w-5xl mx-auto px-4 space-y-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Contact Me</h2>
        <p className="mt-2 text-zinc-600">
          Let’s collaborate! I’m ready to help bring your digital ideas to life
        </p>
        {/* CHANGED: to-brand-700 */}
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-black-to-r from-brand-500 to-brand-700" />
      </div>

      {/* Card */}
      <div className="mx-auto max-w-xl">
        <div className="rounded-[2rem] border bg-white dark:bg-zinc-900 dark:border-zinc-800 p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] text-center">
          {/* Icon (BW) */}
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full
                          bg-black text-white dark:bg-white dark:text-black
                          shadow-[0_10px_30px_rgba(0,0,0,.15)]">
            <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.4l10 6 10-6V6a2 2 0 0 0-2-2Zm0 4.25-8.77 5.26a1.5 1.5 0 0 1-1.46 0L1.99 8.25V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.25Z"/>
            </svg>
          </div>



          <h3 className="text-xl md:text-2xl font-bold">Ready to Work Together?</h3>
          <p className="mt-1 text-sm text-zinc-500">Drop me a line at</p>

          {/* Klik email = copy */}
          {/* CHANGED: text-brand-600 hover:text-brand-700 */}
          <a
            href="#"
            onClick={handleCopyEmail}
            title="Click to copy email"
            role="button"
            className="mt-2 block font-medium text-lg text-blue-600 hover:text-brand-700 underline underline-offset-4 break-all"
          >
            {email}
          </a>

          {/* CTA */}
          {/* CHANGED: to-brand-700 */}
          <a
            href={mailto}
            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[1.5rem]
                       bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md hover:shadow-lg
                       transition-shadow"
            title="Open your mail client"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2 4h20v2l-10 6L2 6V4Zm0 4.75 8.77 5.25c.45.27 1.01.27 1.46 0L21.5 8.75V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.75Z"/>
            </svg>
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>

      {/* Follow Me */}
      <div className="text-center">
        <h4 className="font-semibold mb-4">Follow Me</h4>
        <div className="flex items-center justify-center gap-4">
          {/* LinkedIn (biarkan biru brand LinkedIn) */}
          <a
            href="https://www.linkedin.com/in/fransisco-wahyu"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"
            className="w-12 h-12 rounded-2xl bg-[#0a66c2] text-white grid place-items-center
                       shadow-[0_10px_30px_rgba(10,102,194,.35)] hover:translate-y-[-1px] transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/FransiscoWhy"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"
            className="w-12 h-12 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-black grid place-items-center
                       shadow-[0_10px_30px_rgba(0,0,0,.35)] dark:shadow-[0_10px_30px_rgba(255,255,255,.25)]
                       hover:translate-y-[-1px] transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.2.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-[var(--radius-xl)]
                    bg-black text-white text-sm shadow-[var(--shadow-card)] transition-all duration-200
                    ${copied ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`}
      >
        Email copied ✓
      </div>
    </section>
  );
}
